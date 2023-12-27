import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
   
    <section>
    <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
      <div class="w-full max-w-xl p-8 mx-auto text-center">
        <div>
          <h2 class="text-4xl tracking-tighter text-black">
            Forgot your password?
          </h2>
        </div>
        <div class="mt-8">
          <div class="mt-6">
            <form action="#" method="POST" class="space-y-2">
              <div class="col-span-full">
                <label class="block mb-3 text-sm font-medium text-gray-600" name="email">
                  How shall we contact you?
                </label>
                <input class="block w-full px-6 py-3 text-center text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="email@example.com" autocomplete="off" type="email"/>
              </div>
              <p className='float-right py-2 pr-4'><Link to="/login">Back to Login</Link></p>
              <div>
                <button type="" class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black">
                  <span> Submit </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default ForgotPassword