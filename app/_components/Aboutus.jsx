import React from 'react'
import Image from 'next/image'
const Aboutus = () => {
  return (
    <section>
    <div className="mx-auto max-w-screen-2xl px-8 py-16  max-sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <div className="relative z-10 lg:py-16">
          <div className="relative h-64 sm:h-80 lg:h-full">
        <Image src="/Networking.png"className='absolute inset-3 h-full w-full object-contain scale-105 max-sm:scale-120 animate-spin ' width={550} height={250}/>
          </div>
        </div>
  
        <div className="relative flex items-center lg:bg-gray-100">
          <span
            className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
          ></span>
  
          <div className="p-2 sm:p-16 lg:p-24">
            <h2 className="text-2xl font-bold sm:text-3xl text-blue-950">
              Who We Are?
            </h2>
            <p className='text-blue-950 mt-3 font-bold text-lg'>Impartially Managed to Benefit Every Member</p>
            <p className="mt-4 text-gray-600">
            As a global, non-exclusive network, Melromin is independently managed to serve the interests of all its members. We are committed to continuously enhancing our platform by introducing innovative, high-value benefits to our membership. Every Melromin member is automatically protected by the most comprehensive financial security program in the industry on all transportation service contracts. This ensures that your business dealings within our network are conducted with absolute confidence and peace of mind.
           </p>
  

          </div>
        </div>
      </div>
    </div>
   
  </section>
  )
}

export default Aboutus
