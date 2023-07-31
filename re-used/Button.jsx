"use client"
import React from 'react'

const Button = ({ text, styles}) => {
    return (
       <div className={`rounded-3xl text-center px-5 py-2 text-xl  font-sans font-semibold border-white/80 cursor-pointer border-[0.5px] ${styles}`}>
            {text}
       </div>
    )
}

export default Button
