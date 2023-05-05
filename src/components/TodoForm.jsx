import React, { useContext } from 'react'
import {TodoContext} from '../context/TodoContext';
import {SiAddthis} from 'react-icons/si'

import DateTimePicker from './DateTime';

export default function TodoForm() {
const {todo,setTodoDay,clickHandler,todoDay,changeHandler} = useContext(TodoContext);

  return (
     <form action="" onSubmit={e=>{e.preventDefault()} }
     className='bg-gradient-to-r via-purple-400  to-purple-400 rounded-lg shadow-lg px-4 py-3 border-b-3 my-6 md:w-[70%] w-[80%] lg:w-[50%] mx-auto border-purple-300 text-white  flex justify-between'>
       <div className='flex flex-col gap-5 mx-auto md:mx-0 justify-between items-center md:flex-row w-[100%] gap'>
       <input type="text"  
        className='bg-transparent 
        placeholder:text-white
        focus:outline-none   w-full text-lg text- font-semibold'
        placeholder='Enter your remainder' onChange={changeHandler}
        value={todo.value}/>
        <DateTimePicker setTodoDay={setTodoDay} todoDay={todoDay}  className ="w-full "/>
        <button onClick={clickHandler} 
        className='bg-gradient-to-r via-purple-400 to-purple-400 rounded-lg shadow-lg px-4 py-2 text-[20px] text-white h-fit self-center md:self-auto '>
            <SiAddthis/>
        </button>
       </div>
     </form>
  )
}
