import React from 'react'
import { Eye, HandCoins, Handshake, TrendingUp } from "lucide-react";
const NewWork = () => {
    const Suppliers=[{title:"Reduce costs through streamlined processes",icon:HandCoins},
        {title:"Expand your market reach and connect with more partners.",icon:Handshake},
        {title:"Boost visibility within the platform",icon:Eye},{title:"Improve customer satisfaction through efficient services.",icon:TrendingUp}]
  
    const Forwarders=[{title:"Lower operational costs by optimizing logistics",icon:HandCoins},
        {title:"Expand your market reach and access a wider client base.",icon:Handshake},
        {title:"Increase visibility within the network",icon:Eye},{title:"Enhance customer satisfaction with reliable tracking and communication.",icon:TrendingUp}]
        return (
    <section className='my-[12rem]'>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div className="max-w-lg md:max-w-none">
        <h2 className="text-3xl font-extrabold sm:text-4xl text-gray-800">
                How It Works
              </h2>

          <p className="mt-4 text-gray-800">
         The complexities of freight forwarding can hinder both efficient shipping for suppliers and optimized logistics for forwarders. Melromin offers a user-friendly platform that simplifies these processes by fostering seamless connections and providing the necessary tools for smoother operations. Discover how our tailored features empower both suppliers and forwarders, leading to greater efficiency and control.
                   </p>

  <div className="space-y-4 mt-5">
  <details className="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900"
    >
      <h2 className="text-lg font-bold  mb-4 text-[#6930c3]">Forwarders</h2>

      <svg
        className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

 {Forwarders.map((item)=>(
            <ul className='mt-5 flex flex-col space-y-8'>
                <li className='flex gap-2 text-gray-800'><span><item.icon size={28} strokeWidth={1.5} />
          
                </span>{item.title} </li>
            </ul>
          ))}
  </details>



  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900"
    >
      <h2 className="text-lg font-bold  mb-4 text-[#6930c3]">Suppliers</h2>

      <svg
        className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

 {Suppliers.map((item)=>(
            <ul className='mt-5 flex flex-col space-y-8'>
                <li className='flex gap-2 text-gray-800'><span><item.icon size={28} strokeWidth={1.5} />
          
                </span>{item.title} </li>
            </ul>
          ))}
  </details>
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
