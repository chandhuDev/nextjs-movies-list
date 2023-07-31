import React from 'react'
import Image from 'next/image'
import Button from '@/re-used/Button'
import { navbarItems } from '@/constants'
import image_1 from '@/images/image_1.svg'


const Home = async () => {
  return (
    <>
      <div className='w-full h-screen  bg-black/90 text-white font-sans'>
        
        <div className='w-2/3 rounded-[36px] container mx-auto border-[0.5px] text-xl font-extralight border-white/50 flex flex-row justify-between px-16 items-center py-3 relative top-10'>
          
         
          <Image src={image_1} alt='navbar_image' className='text-black'/>
          <div className='flex flex-row gap-x-7'>
            {navbarItems.map((item,index)=>{
              return <div className='cursor-pointer' key={index}>{item}</div>
            })}
          </div>
          <Button text="launch app" styles="bg-[#64AE9D]/95 text-black"/>
        </div>
        <div className='mt-40'>
         <div className='w-3/5 container mx-auto h-full flex flex-col gap-y-4'>
          <h2 className='text-[#64AE9D]/95 text-center text-lg font-medium font-sans'>JET PROTOCOL</h2>
          <h2 className='w-full text-5xl text-center'>the next generation of <span className='block'>defi governance</span></h2>
          <p className='w-full text-center text-xl font-extralight text-white/70'>experience open source, transparent and effeicient borrowing<span className='block'>and lending on solana.</span> </p>
          <div className='w-1/2 justify-evenly items-center container mx-auto h-full flex flex-row mt-6'>
            <Button text="read docs" styles="bg-[#64AE9D]/95 text-black"/>
            <Button text="how it works" styles="bg-black/70 text-white"/>
          </div>
        </div>
        </div>
        <div>

        </div>
      </div> 
    </>
  )
}

export default Home
