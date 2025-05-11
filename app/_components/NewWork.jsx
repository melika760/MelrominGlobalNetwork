import React from 'react'
import { Handshake, MapPinned, Repeat2 } from "lucide-react";
const NewWork = () => {
    const Forwarders=[{title:"Reduce costs through streamlined processes",icon:Handshake},
        {title:"Expand your market reach and connect with more partners.",icon:Handshake},
        {title:"Boost visibility within the platform",icon:Handshake},{title:"Improve customer satisfaction through efficient services.",icon:Handshake}]
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
                   <div className='grid grid-cols-2 gap-8'>
                    <div> <h2>Forwarders:</h2>
          {Forwarders.map((item)=>(
            <ul className='mt-3'>
                <li className='flex gap-2'>{item.title} </li>
            </ul>
          ))}</div>
                   </div>
                 
        </div>
      </div>

      <div>
        <img
          src="/connect.jpg"
          className="rounded"
          alt=""
        />
      </div>
    </div>
  </div>
</section>
  )
}

export default NewWork
