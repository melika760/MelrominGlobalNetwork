import React from 'react'
import { Eye, HandCoins, Handshake, MapPinned, Repeat2, TrendingUp } from "lucide-react";
const NewWork = () => {
    const Forwarders=[{title:"Reduce costs through streamlined processes",icon:HandCoins},
        {title:"Expand your market reach and connect with more partners.",icon:Handshake},
        {title:"Boost visibility within the platform",icon:Eye},{title:"Improve customer satisfaction through efficient services.",icon:TrendingUp}]
  
    const Suppliers=[{title:"Lower operational costs by optimizing logistics",icon:HandCoins},
        {title:"Expand your market reach and access a wider client base.",icon:Handshake},
        {title:"Increase visibility within the network",icon:Eye},{title:"Enhance customer satisfaction with reliable tracking and communication.",icon:TrendingUp}]
        return (
    <section className='mt-9'>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div className="max-w-lg md:max-w-none">
        <h2 className="text-3xl font-extrabold sm:text-4xl text-gray-800">
                How It Works
              </h2>

          <p className="mt-4 text-gray-800">
          Meiromin offers valuable benefits for both suppliers and forwarders:
                   </p>
                   <div className='grid grid-cols-1 gap-4'>
                    <div className='mt-6'> <h2 className=' font-bold mb-4 text-[#6930c3]'>Suppliers:</h2>
          {Forwarders.map((item)=>(
            <ul className='mt-5 flex flex-col space-y-8'>
                <li className='flex gap-2'><span><item.icon size={28} strokeWidth={1.5} />
          
                </span>{item.title} </li>
            </ul>
          ))}</div>
               <div className='mt-6'> <h2 className='text-[#6930c3] font-bold'>Forwarders:</h2>
          {Forwarders.map((item)=>(
            <ul className='mt-5 flex flex-col space-y-8'>
                <li className='flex gap-2'><span><item.icon size={28} strokeWidth={1.5} />
          
                </span>{item.title} </li>
            </ul>
          ))}</div>
                   </div>
                 
        </div>
      </div>

      <div>
        <img
          src="/connect.jpg"
          className="rounded-md"
          alt=""
        />
      </div>
    </div>
  </div>
</section>
  )
}

export default NewWork
