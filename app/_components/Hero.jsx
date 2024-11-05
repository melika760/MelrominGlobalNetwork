import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
//     <section>
//   <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
//     <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
//       <div className="relative overflow-hidden rounded-lg sm:h-80 lg:order-last md:h-full ">
//         <div className=' w-full  h-full  z-0'>
//         <Image src="/img2.png" className='object-contain w-full ' width={500} height={50} alt="Hero"/>
//         </div>
     
//       </div>

//       <div className="lg:py-24">
//         <h2 className="md:text-2xl font-bold text-lg ">The World’s First Partnership in Logistics and Supply Chain.</h2>

//         <p className="mt-4 text-gray-600">
//         Melromin Global Network fosters a dynamic environment that connects suppliers and buyers with freight forwarding companies worldwide.
//         </p>
//         <Link href={"#start"} className="max-sm:flex max-sm:justify-center"><Button className="mt-10 w-[150] max-sm:w-full text-primary" variant={"secondary"} >Explore Now!</Button></Link>

//       </div>
//     </div>
//   </div>
// </section>
<section
  className="relative bg-[url(/network3.png)] bg-cover bg-center bg-no-repeat  "
>
  <div
    className=" absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/15 ltr:sm:bg-gradient-to-l rtl:sm:bg-gradient-to-r"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl  bg-gradient-to-r from-blue-900 via-blue-500 to-purple-500 bg-clip-text text-transparent">
      The World’s First Partnership in  Logistics and Supply Chain

        {/* <strong className="font-extrabold text-blue-900"> Logistics  </strong>and <strong className="font-extrabold text-blue-900">Supply Chain</strong> */}
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed text-gray-700">
      Melromin Global Network fosters a dynamic environment that connects suppliers and buyers with freight forwarding companies worldwide.
      </p>

      <div className="mt-8 flex  gap-4 text-center">
        <a
          href="#start"
          className="block w-full rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-500 focus:outline-none focus:ring active:bg-primary sm:w-auto max-sm:px-3"
        >
          Get Started
        </a>

        <a
          href="#work"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-primary shadow hover:text-primary focus:outline-none focus:ring active:text-primary sm:w-auto max-sm:px-3"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
