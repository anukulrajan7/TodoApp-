import React from "react";
import { Link } from "react-router-dom";
import {BiLogOut} from 'react-icons/bi'
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function Header() {
  const {handleSignOut} = useContext(TodoContext);
  return (
    <>
      <header className=" items-center  md:flex w-[90%] md:justify-center md:gap-4  md:w-[50%] py-2 md:py-3 mx-auto justify-between  bg-gradient-to-r from-purple-500 to-pink-500 p-4 md:p-8 rounded-md shadow-xl backdrop-filter backdrop-blur-lg backdrop-saturate-150 flex place-content-center font-serif ">
        <h1 className="bg-gradient-to-r from-purple-500 to-pink-500 py-4 px-10 rounded-md shadow-xl backdrop-filter backdrop-blur-lg backdrop-saturate-150 text-white text-xl md:text-2xl capitalize font-extrabold ">
          Remainder
        </h1>
         <Link
           onClick={handleSignOut}
         to={"/"}
                 className='bg-gradient-to-r relative  md:left-auto via-purple-400 to-purple-400 rounded-lg shadow-lg px-4 py-2 text-[20px] text-white h-fit  md:self-auto '

         ><BiLogOut/></Link>
      </header>
    </>
  );
}
