import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section>
    <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
      <div class="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
        <div class="flex flex-col">
          <div>
            <h2 class="text-4xl text-black">Login Here</h2>
          </div>
        </div>
        <form>
          
          <div class="mt-4 space-y-6">
            <div class="col-span-full">
              <label class="block mb-3 text-sm font-medium text-gray-600" name="password">
                Username
              </label>
              <input class="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="Ken" autocomplete="off" type="text"/>
            </div>
            <div class="col-span-full">
              <label class="block mb-3 text-sm font-medium text-gray-600" name="password">
                 Password
              </label>
              <input class="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="******" autocomplete="off" type="password"/>
            </div>
            <p className='float-right py-4'><Link to="/forgot">Forgot Password?</Link></p>
            <div class="col-span-full">
              <button class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black" type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    
  </section>
  )
}

export default Login