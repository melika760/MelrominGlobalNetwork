import React from 'react'
import Image from 'next/image'
const Works = () => {
  return (
    <section>
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold sm:text-4xl">
       How it works?!
        </h2>
      </div>
  
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
       <Image className='absolute inset-0 h-full w-full object-cover' src={"/Networking.png"} alt='Networking' width={500} height={200}/>
        </div>
  
        <div className="lg:py-16">
        <h2 className='text-primary font-medium'> PROVIDING WORLD-CLASS BENEFITS TO FREIGHT FORWARDERS AND THE SUPPLY CHAIN</h2>
          <article className="space-y-4 text-gray-600">
            <p>
            By removing the third-party forwarder, we help the freight cost to be reduced which is beneficiary to the suppliers and the byers.
By gathering all the suppliers and byers who potentially are in need of transportation and logistics services to send or receive their shipments we are creating a sales environment for the freight forwarding and transportation companies according to their capabilities and the quality if their services.
t!
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Works
