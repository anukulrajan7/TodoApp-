import React, { useEffect, useContext } from "react";
import Header from "../components/Header";
import Todolist from "../components/Todolist";
import TodoForm from "../components/TodoForm";
import { TodoContext } from "../context/TodoContext";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Spinner from "../components/Spinner";

function TodoPage() {
 const {user,fetchData,todo,loading } = useContext(TodoContext);
 useEffect(()=>{
   fetchData();
 },[]);

  return (
 <>
    {!user?<Login/>:
    <div className="   bg-gradient-to-r from-purple-500 to-pink-500 p-4 md:p-8 rounded-md shadow-xl backdrop-filter backdrop-blur-lg backdrop-saturate-150  w-[100vw] h-[100%] ">
    <Header></Header>
    <TodoForm />
    {loading? <div className="w-[100vw] flex justify-center  ">
      <Spinner/>
    </div>:
    
    <Todolist />}
     </div> 
}
 
 </>
  );
}

export default TodoPage;
