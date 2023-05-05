import React, { useEffect, useState } from 'react'
import Todo from './Todo'
import {TodoContext} from '../context/TodoContext'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useContext } from 'react';

export default function Todolist() {
   const  {  todoData,deleteHandler,completeHandler} = useContext(TodoContext);
  return (
   <>
      
       
       { todoData.map((todo)=>{
           return  <ul> <Todo data={todo} key={todo.todoid} deleteHandler={deleteHandler} completeHandler={completeHandler}></Todo></ul>
})
       }
   </>
  )
}
