import React from 'react'
import Image from 'next/image'
const Works = () => {
  return (
    <section>
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold sm:text-4xl text-blue-950">
       How it works?!
        </h2>
      </div>
  
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
       {/* <Image className=' h-full w-full object-cover rounded-md shadow-md' src="/transportation-1.jpg" alt='transportation' width={500} height={200}/> */}
       <Image className=' h-full w-full object-cover rounded-md shadow-md' src="/img7.png" alt='transportation' width={500} height={200}/>
        </div>
  
        <div className="lg:py-16">
        <h2 className=' font-medium'> World-Class Solutions for <span className="text-blue-800 font-bold">Freight Forwarders</span> and the <span className="text-blue-800 font-bold">Supply Chain</span></h2>
          <article className="space-y-4 text-gray-700">
            <p className="leading-8">
            By eliminating third-party forwarders, we reduce freight costs, benefiting both suppliers and buyers. Our platform connects suppliers and buyers who need transportation and logistics services, creating a competitive marketplace for freight forwarding and transportation companies. Companies can showcase their capabilities and service quality to meet the needs of their customers
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Works
