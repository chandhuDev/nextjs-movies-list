"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import supabase from "@/constants";

const page = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  
  const signUpHandler = async (e) => {
    e.preventDefault()
    
    let { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    if(data.user && data.user.id){
      window.alert("check your mail to confirm your registration")
      router.refresh()
    }
    console.log(error);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow">
        <h2 className="text-2xl mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) =>
                setEmail( e.target.value )
              }
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
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
              value={password}
              onChange={(e) =>
                setPassword( e.target.value )
              }
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="
              bg-blue-500 hover:bg-blue-600 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
            "
            onClick={signUpHandler}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
