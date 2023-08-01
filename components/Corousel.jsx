import React from 'react'
import Image from 'next/image'
import one from '@/images/1.svg'
import two from '@/images/2.svg';
import three from '@/images/3.svg';
import four from '@/images/4.svg';
import five from '@/images/5.svg';
import six from '@/images/6.svg';
import seven from '@/images/7.svg';
import eight from '@/images/8.svg';
import nine from '@/images/9.svg';
import ten from '@/images/10.svg';
import eleven from '@/images/11.svg';


const corousel = () => {
  return (
    <div className='images'>
      <div className='images-slider'>
        <Image src={one} alt="one"  className='h-20 my-0 mx-2'/>
        <Image src={two} alt="two" className='h-20 my-0 mx-2'/>
        <Image src={three} alt="three" className='h-20 my-0 mx-2'/>
        <Image src={four} alt="four" className='h-20 my-0 mx-2'/>
        <Image src={five} alt="five" className='h-20 my-0 mx-2'/>
        <Image src={six} alt="six" className='h-20 my-0 mx-2'/>
        <Image src={seven} alt="seven" className='h-20 my-0 mx-2'/>
        <Image src={eight} alt="eight" className='h-20 my-0 mx-2'/>
        <Image src={nine} alt="nine" className='h-20 my-0 mx-2'/>
        <Image src={ten} alt="ten" className='h-20 my-0 mx-2'/>
        <Image src={eleven} alt="eleven" className='h-20 my-0 mx-2'/>
      </div>
      <div className='images-slider'>
        <Image src={one} alt="one"  className='h-20 my-0 mx-2'/>
        <Image src={two} alt="two" className='h-20 my-0 mx-2'/>
        <Image src={three} alt="three" className='h-20 my-0 mx-2'/>
        <Image src={four} alt="four" className='h-20 my-0 mx-2'/>
        <Image src={five} alt="five" className='h-20 my-0 mx-2'/>
        <Image src={six} alt="six" className='h-20 my-0 mx-2'/>
        <Image src={seven} alt="seven" className='h-20 my-0 mx-2'/>
        <Image src={eight} alt="eight" className='h-20 my-0 mx-2'/>
        <Image src={nine} alt="nine" className='h-20 my-0 mx-2'/>
        <Image src={ten} alt="ten" className='h-20 my-0 mx-2'/>
        <Image src={eleven} alt="eleven" className='h-20 my-0 mx-2'/>
      </div>
    </div>
  )
}

export default corousel
