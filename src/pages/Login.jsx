import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { TodoContext } from '../context/TodoContext';
function Login() {
   
  const {handleSignin,setEmail, setPassword,email,password} = useContext(TodoContext);
   
  return (
    <div className="min-h-screen  bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="relative sm:max-w-sm sm:mx-auto w-[70%] mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r hidden md:block from-purple-400 via-pink-500 to-red-500 shadow-lg transform skew-x-12 sm:skew-x-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sign In</h1>
          <form onSubmit={e=>e.preventDefault()}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border rounded-md py-2 px-3 w-full"
                placeholder="you@example.com"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border rounded-md py-2 px-3 w-full"
                placeholder="********"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                required
              />
            </div>
         
            <div>
              <button
                type="submit"
                onClick={handleSignin}
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-gradient-to-l hover:from-red-500 hover:via-pink-500 hover:to-purple-400 text-white font-bold py-2 px-4 rounded-md w-full"
              >
                Sign In
              </button>
            </div>
          </form>
          <hr className="my-8" />
          <p className="text-center text-gray-700">
            Don't have an account yet?{" "}
        <Link to={"/signup"}>
        <button 
            className="text-purple-400 font-bold hover:underline"
           >
             sign up
            </button>
            
        </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login