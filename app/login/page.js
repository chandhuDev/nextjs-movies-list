"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import supabase from '@/constants'

const page =  () => {
  const [userData,setUserData] = useState({
    email: '',
    password: ''
  })

  
  const signInHandler = async () => {
    console.log("handler us cliecked")
    let { data, error } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password
    })
    console.log(data)
    console.log(error)
}



  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow">
        <h2 className="text-2xl mb-4">Login</h2>
        <form>
          {/* Email input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={userData.email}
              onChange={(e) => setUserData({...userData, email: e.target.value})}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Password input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={userData.password}
              onChange={(e) => setUserData({...userData, password: e.target.value})}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Sign In button */}
          <button
            type="submit"
            className="
              bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
            "
            onClick={signInHandler}
          >
            Sign In
          </button>

          {/* Signup link */}
          <div className="text-center mt-4">
            Don't have an account?{' '}
            <Link href="/signup">
              <p className="text-blue-500 hover:text-blue-700 inline-block">Sign Up</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
