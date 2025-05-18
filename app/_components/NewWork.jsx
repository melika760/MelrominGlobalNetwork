import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NewWork = () => {
  
        return (
    <section className='my-[12rem] max-sm:my-7'>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2  md:items-center md:gap-8">
   <div className='hidden max-sm:block'>
        <img
          src="/connect.jpg"
          className="rounded-md  "
          alt=""
        />
      </div>
      <div>
        <div className="max-w-lg md:max-w-none">
        <h2 className="text-3xl font-extrabold  text-gray-800">
                How It Works
              </h2>

          <p className="my-8 text-gray-800 max-sm:text-md">
         The complexities of freight forwarding can hinder both efficient shipping for suppliers and optimized logistics for forwarders. Melromin offers a user-friendly platform that simplifies these processes by fostering seamless connections and providing the necessary tools for smoother operations. Discover how our tailored features empower both suppliers and forwarders, leading to greater efficiency and control.
                   </p>
<div className='mt-5'>
  <Link href={'/Services'}>
                         <button  className="bg-primary hover:bg-white hover:text-primary border-primary border-2 text-white  py-3 px-6 rounded-md transition-colors duration-300 text-md">
                            Check Our Services
   </button></Link>
</div>
 
                 
        </div>
      </div>

      <div className='max-sm:hidden'>
        <img
          src="/connect.jpg"
          className="rounded-md  "
          alt=""
        />
      </div>
    </div>
  </div>
</section>
  )
}

export default NewWork
