"use client"
import React from 'react'
import Image from 'next/image'
import Icons from './Icons'
const Works = () => {

  return (
  <section className='mt-20 overflow-x-hidden'>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-24">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
    <div className="relative overflow-hidden sm:h-80  md:h-full  " >
        <div className=' w-full  h-full  z-0'>
        <Image src="/people.jpg" className='object-contain w-full rounded ' width={500} height={50} alt="Hero"/>
        </div>
     
      </div>
      <div className="lg:py-24" >
        <h2 className="text-3xl font-extrabold  text-gray-800 "> Who We Are</h2>

        <p className="mt-4 text-gray-800 sm:text-md">
        As a global, non-exclusive network, Melromin is independently managed to serve the interests of all its members. We are committed to continuously enhancing our platform by introducing innovative, high-value benefits to our membership. Every Melromin member is automatically protected by the most comprehensive financial security program in the industry on all transportation service contracts. This ensures that your business dealings within our network are conducted with absolute confidence and peace of mind.
        </p>
       <Icons />
      </div>
   
    </div>
  </div>
</section>
  )
}

export default Works
