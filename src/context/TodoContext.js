import { createContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";     
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signOut,
} from "firebase/auth";
import { getFirestore, where,query,getDocs ,collection,deleteDoc,updateDoc} from "firebase/firestore";

import { addDoc,doc,onSnapshot } from "firebase/firestore"; 
import { getDatabase, set, ref, get, child, update } from "firebase/database";
import app, { auth } from "../Firbase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Creating the context object
export const TodoContext = createContext();

export default function TodoContextProvider({ children }) {
  const db = getDatabase(app);
  const dbRef = ref(getDatabase(app));
  const dataBase = getFirestore(app);
  const navigate = useNavigate();
  const auth = getAuth(app);
  // Here we are creating our state
  const [todoData, setTodoData] = useState([]);
  const [loading ,setLoading ] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [todoDay, setTodoDay] = useState("");
  const [todo, setTodo] = useState({
    value: "",
    id: "",
    completed: false,
    day: "",
  });
  let [trues, setTrue] = useState(false);
 const [user,setUser] = useState(false)

  const date = new Date();

  // Here we are Creating a function to add remainder
//  changeHandler for the add the remainder input
   const changeHandler = (e) => {
  e.preventDefault();
  let id = `${date.getHours()}${date.getMinutes() + 1}${date.getSeconds()}`;
  id = Number.parseInt(id);
  let value = e.target.value;

  setTodo({value: value, id: id, completed: false });
};
  // clickHandler for the add the remainder  button
  const clickHandler = (e) => {
    e.preventDefault();

    if (!todo.value.trim()) {
      toast.error("Please enter a Todo");
    } else if (todoDay=== "") {
      toast.error("Please select a date");
    } else {
       updateData(todo,todoDay);
       setTodo({ value: "", id: "", day: null, completed: false });
       setTodoDay("");
      toast.success("Todo added");
    }
  };
  const handleDateChange = (date) => {
    console.log(date)
    setTodoDay(date);
  };
 async  function deleteHandler(id) {

    try{
        await deleteDoc(doc(dataBase,'users',id))
        toast.success("Todo deleted");
        fetchData();

    }catch(err){
      console.log(err);
    }
//;
  }
  async function completeHandler(id,todo) {
     todo.completed = !todo.completed;
    const docs = doc(dataBase, "users", id);
    try{
       await updateDoc(docs,todo)
      toast.success("todo added to completed")
      fetchData()
    }
      catch{ toast.error(" todo removed from added " + id);}
  }
const fetchData = async ()=>{
  setLoading(true)
   const user = auth.currentUser;
   if(user){
    const userId = user.uid;
    const q = query(collection(dataBase, "users"),where("userId","==",userId));
  const querySnapshot = await getDocs(q);
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  setTodoData(data);
  }
  setLoading(false)
}
 async function updateData(todo,todoDay){
  const selectedDateTime = new Date(
    todoDay.getFullYear(),
    todoDay.getMonth(),
    todoDay.getDate(),
    todoDay.getHours(),
    todoDay.getMinutes(),
  
  );
    const user =  auth.currentUser;
    const userId = user.uid;
    const data= {
        todoid:todo.id,
        day:`${selectedDateTime}`,
        value:todo.value,
        completed:todo.completed,
        userId:userId,
    }
    console.log(data);
  try{
    const docRef =  await addDoc(collection(dataBase, "users"), data);
    console.log("Document written with ID: ", docRef.id);
    fetchData()
  }catch(error)
{
  console.log(error)
} 
   
  
 }
 
  
// function for the signup and signin with email and password

  const onSubmit = async (e) => {
    e.preventDefault();
// checking the user confirm passowrd and password same or not  
    if (confirm === password) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const uid = user.uid;
         
          writeUserData(user.uid, email, name);
        
          toast.success("successfully user added");
          navigate("/");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
         });
    } else {
      toast.error("Password does not match");
    }
  };

  async function handleSignin(e) {
    e.preventDefault();
   
    if (email === "" && password === "") {
      toast.error("Please enter email and password");
    } else {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const uid = user.uid;
          setUser(true);
          getUserdata(uid);
          navigate("/");
          fetchData();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            toast.error("Wrong password");
          } else {
            toast.error(errorMessage);
          }
        });
    }
  }
  function handleSignOut(){
    const auth = getAuth(app);
    signOut(auth).then(() => {
      // Sign-out successful.
      toast.warn("Sign-out successful");
      setUser(false)
    }).catch((error) => {
      // An error happened.
    });
  }

   const writeUserData = async  (uid, email, name)=> {
    await set(ref(db, `users/${uid}`), {
      email: email,
      name: name,
      uid:uid
    });
  }
  const getUserdata = async (userId) => {
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
      if (snapshot.exists()) {
        let data = snapshot.val();
        toast.success(`${data.name} logged in successfully`);
      } else {
        toast.error('No data available');
      }
    }).catch((error) => {
      console.error(error);
    });
   
  }
  let value = {
    todo,
    loading,
    setTodo,
    setTodoDay,
    clickHandler,
    changeHandler,
    todoData,
    setTodoData,
    todoDay,
    handleDateChange,
    deleteHandler,
    completeHandler,
    onSubmit,
    setEmail,
    setName,
    setPassword,
    setConfirm,
    user,
    handleSignOut,
    handleSignin,
 fetchData
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
