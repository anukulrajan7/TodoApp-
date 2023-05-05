import React from 'react'
import {MdDelete} from 'react-icons/md'
import {FiSquare,FiCheckSquare} from 'react-icons/fi'



export default function Todo({data,deleteHandler,completeHandler }) {
  let day = new Date(data.day);
  console.log(data)

  return (
    <>
  
    
    <div  className="bg-gradient-to-r md:w-[70%] w-[80%] lg:w-[50%] mx-auto  from-purple-500 via-red-500 to-yellow-500 rounded-lg shadow-lg px-4 py-3 mb-4 ">
  <div className="flex justify-between font-mono text-2xl capitalize w-full h-full">
    <div className="flex space-x-2 md:flex-row gap-2 flex-col justify-between w-[80%]">
    <h2 className="text-lg font-semibold text-white">{data.value}</h2>
    <h2 className="text-lg font-semibold text-white">
   { !day?"not found":`${day.getDay()}-${day.getMonth()}-${day.getFullYear()} :  ${day.toLocaleTimeString()}`}
   
   
      
    </h2>
      </div>
    <div className="flex space-x-2 md:flex-row gap-2 flex-col">
      <button
      onClick={()=>{completeHandler(data.id,data)} }
      className="bg-white text-purple-500 font-semibold py-1 px-2 rounded-lg hover:bg-purple-500 hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
       {data.completed?<FiCheckSquare/>:<FiSquare/>}
      </button>
      <button  className="bg-white text-red-500 font-semibold py-1 px-2 rounded-lg hover:bg-red-500 hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
      onClick={(e)=>{
         deleteHandler(data.id)
      }}>
        <MdDelete/>
      </button>
    </div>
  </div>
</div>

    </>
  )
}
