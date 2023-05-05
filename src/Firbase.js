// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB3hviZU_TC_sWcshgoQjbZXxSiUOMtyZg",
  authDomain: "todoapp-f5b7f.firebaseapp.com",
  databaseURL: "https://todoapp-f5b7f-default-rtdb.firebaseio.com",
  projectId: "todoapp-f5b7f",
  storageBucket: "todoapp-f5b7f.appspot.com",
  messagingSenderId: "17140882845",
  appId: "1:17140882845:web:eefb36d2c4679fe322e374",
  measurementId: "G-KFZVFVZH4F"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
