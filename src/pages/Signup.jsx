import React,{useContext, useState} from 'react'
import {TodoContext} from '../context/TodoContext'




function Signup() {
const { setName,setEmail,setPassword,setConfirm,onSubmit} = useContext(TodoContext)
  

  return (

<div className ="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div className ="relative py-3 sm:max-w-xl sm:mx-auto w-[70%] mx-auto md:w-fit">
    <div
      className ="absolute inset-0 bg-gradient-to-r hidden md:block from-teal-500 to-cyan-600 shadow-lg transform skew-y-0 rotate-6 sm:skew-y-0 sm:-rotate-2 sm:rounded-3xl"
    ></div>
    <div className ="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div className ="max-w-md mx-auto">
        <div>
          <h1 className ="text-2xl font-semibold">Create an account</h1>
        </div>
        <form className ="mt-6" action="#" onSubmit={e=>e.preventDefault()}>




        <div className ="mt-4">
            <label className ="block font-medium text-sm text-gray-700">Name</label>
            <input
              className ="form-input rounded-md shadow-sm mt-1 block w-full outline-none border-b-2 border-purple-300"
              type="email"
              name="email"
              placeholder='Example'
              onChange={(e)=>{setName(e.target.value)}}
              required
            />
          </div>
          <div className ="mt-4">
            <label className ="block font-medium text-sm text-gray-700">Email</label>
            <input
              className ="form-input rounded-md shadow-sm mt-1 block w-full outline-none border-b-2 border-purple-300"
              type="email"
              name="email"
              placeholder='Example@gmail.com'
              onChange={(e)=>{setEmail(e.target.value)}}
              required
            />
          </div>
          <div className ="mt-4">
        

            <label className ="block font-medium text-sm text-gray-700">Password</label>
            <input
              className ="form-input rounded-md shadow-sm mt-1 block w-full outline-none border-b-2 border-purple-300 placeholder-purple-300"
              type="password"
              name="password"
              placeholder='Enter your password'
              onChange={(e)=>{setPassword(e.target.value)}}
              required
            />
          </div>

          <div className ="mt-4">
            <label className ="block font-medium text-sm text-gray-700"
              >Confirm Password</label
            >
            <input
              className ="form-input rounded-md shadow-sm mt-1 block w-full outline-none border-b-2 border-purple-300"
              type="password"
              name="password_confirmation"
              placeholder="********"
              onChange={(e)=>{setConfirm(e.target.value)}}
              required
            />
          </div>

          <div className ="mt-6">
            <button
            onClick={onSubmit}
              className ="bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold py-2 px-4 rounded-md"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

  )
}

export default Signup