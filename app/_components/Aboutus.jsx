import React from 'react'
import Image from 'next/image'
const Aboutus = () => {
  return (
    <section>
    <div className="mx-auto max-w-screen-2xl px-8 py-16  sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <div className="relative z-10 lg:py-16">
          <div className="relative h-64 sm:h-80 lg:h-full">
        <Image src="/Networking.png"className='absolute inset-3 h-full w-full object-contain  scale-105' width={550} height={250}/>
          </div>
        </div>
  
        <div className="relative flex items-center bg-gray-100">
          <span
            className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
          ></span>
  
          <div className="p-8 sm:p-16 lg:p-24">
            <h2 className="text-2xl font-bold sm:text-3xl text-blue-950">
              Who We Are?
            </h2>
  
            <p className="mt-4 text-gray-600">
            Being a worldwide non-exclusive network, Melromin is neutrally managed and operated to benefit every member on its network.Melromin is continuously striving to add new, innovative, and high-value membership benefits.Every member of Melromin network, on each transportation service contract, is automatically covered by the most generous and extensive financial protection program in the industry, which allows your company to conduct business with other members with complete security and peace of mind.
            </p>
  <p className='text-blue-950 mt-3 font-bold text-lg'>NEUTRALLY MANAGED TO BENEFIT ALL MEMBERS</p>

          </div>
        </div>
      </div>
    </div>
   
  </section>
  )
}

export default Aboutus
