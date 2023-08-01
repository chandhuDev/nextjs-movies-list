"use client"
import React,{useEffect,useState} from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import { navbarItems } from '@/constants'
import image_1 from '@/images/image_1.svg'
import Corousel from '@/components/Corousel'
import { useRouter } from 'next/navigation'

import supabase from '@/constants'



const Home = () => {
  const [userSession,setUserSession] = useState()
  const router = useRouter()

  const navigateHandler = () => {
  if(userSession) {
    router.push('/home')
  }
  router.push('/login')
  }

 useEffect(()=>{
  const getUserSession = async () =>{
    const { data, error } = await supabase.auth.getSession()
    
    if(data.session!=null){
      setUserSession(true)
    }
    else {
      setUserSession(false)
    }
   }
   getUserSession()
},[])


 return (
    <>
    <div className='relative w-full h-screen flex justify-center items-start'>
      <div className=' w-[480px] h-[520px] rounded-full bg-[#2bffce] blur-3xl -translate-y-20'>
      </div>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black text-white font-sans z-20'>
       <div className='relative'>
        <div className='w-2/3 rounded-[36px] container mx-auto border-[0.5px] text-xl font-extralight border-white/50 flex flex-row justify-between px-16 items-center py-2 relative top-8'>
          <Image src={image_1} alt='navbar_image' className='text-black'/>
          <div className='flex flex-row gap-x-8'>
            {navbarItems.map((item,index)=>{
              return <div className='cursor-pointer text-xl' key={index}>{item}</div>
            })}
          </div>
          <Button text="launch app" styles="bg-[#64AE9D]/95 text-black py-1"/>
        </div>
          <button className='cursor-pointer rounded-3xl px-4 py-2 text-black font-medium bg-[#64AE9D]/95 absolute right-12 top-10' onClick={navigateHandler}>Home</button>
          
       </div>
       <div className='mt-28'>
          <div className='h-[0.5px] rounded-[36px] bg-white w-60 mx-auto'>
          </div>
          <div className='w-3/5 container mx-auto h-full flex flex-col gap-y-4 mt-20'>
            <h2 className='text-[#64AE9D]/95 text-center text-lg font-medium font-sans'>JET PROTOCOL</h2>
            <h2 className='w-full text-5xl text-center'>the next generation of <span className='block italic font-serif font-medium'>defi governance</span></h2>
            <p className='w-full text-center text-xl font-extralight text-white/70'>experience open source, transparent and effeicient borrowing<span className='block'>and lending on solana.</span> </p>
            <div className='w-1/2 justify-evenly items-center container mx-auto h-full flex flex-row mt-6'>
              <Button text="read docs" styles="bg-[#64AE9D]/95 text-black"/>
              <Button text="how it works" styles="bg-black/70 text-white"/>
            </div>
        </div>
       </div>
       <div>
         <Corousel />
       </div>
      </div> 
    </div>
    </>
  )
}

export default Home
