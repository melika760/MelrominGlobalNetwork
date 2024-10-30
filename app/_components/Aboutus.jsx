import React from 'react'
import Image from 'next/image'
const Aboutus = () => {
  return (
    <section id="work">
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
  
          <div className="p-0 sm:p-16 lg:p-24">
            <h2 className="text-3xl font-extrabold sm:text-4xl  text-blue-900">
              How it works?
            </h2>
            {/* <p className='text-blue-950 mt-3 font-bold text-lg'>Impartially Managed to Benefit Every Member</p> */}
            <p className="mt-4 text-gray-600">
            By eliminating third-party forwarders, we reduce freight costs, benefiting both suppliers and buyers. Our platform connects suppliers and buyers who need transportation and logistics services, creating a competitive marketplace for freight forwarding and transportation companies. Companies can showcase their capabilities and service quality to meet the needs of their customers
           </p>
  

          </div>
        </div>
      </div>
    </div>
   
  </section>
  )
}

export default Aboutus
