import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nav = () => {
  return (
    
    <>
        <nav>
        <div className="w-full mx-auto bg-white border-b 2xl:max-w-7xl">
    <div x-data="{ open: false }" className="relative flex flex-col w-full p-5 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
      <div className="flex flex-row items-center justify-between lg:justify-start">
        <Link className="text-lg tracking-tight text-black uppercase focus:outline-none focus:ring lg:text-2xl" to="#">
          <span className="lg:text-lg uppecase focus:ring-0">
           Loading Docker System
          </span>
        </Link>
        <button  className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden">
          <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path  className="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path className="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <nav className="flex-col items-center flex-grow hidden md:pb-0 md:flex md:justify-end md:flex-row">
        <Link className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600 lg:ml-auto" to="#">
          About
        </Link>
        <Link className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600" to="#">
          Contact
        </Link>
        <Link className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600" to="#">
          Documentation
        </Link>
  
        <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
         
          <Link to="login"  className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-black rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800 active:text-white focus-visible:outline-black">
            Sign in
          </Link>
        </div>
      </nav>
    </div>
  </div>  
    </nav>   
    <Outlet/>
    </>       
  )
}

export default Nav