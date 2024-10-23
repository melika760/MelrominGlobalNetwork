import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative overflow-hidden rounded-lg sm:h-80 lg:order-last md:h-full ">
        <div className=' w-full  h-full  z-0'>
        <Image src="/img2.png" className='object-contain w-full ' width={500} height={50} alt="Hero"/>
        </div>
     
      </div>

      <div className="lg:py-24">
        <h2 className="md:text-2xl font-bold text-lg ">The World’s First Partnership in Logistics and Supply Chain.</h2>

        <p className="mt-4 text-gray-600">
        Melromin Global Network fosters a dynamic environment that connects suppliers and buyers with freight forwarding companies worldwide.
        </p>
        <Link href={"#start"} className="max-sm:flex max-sm:justify-center"><Button className="mt-10 w-[150] max-sm:w-full text-primary" variant={"secondary"} >Explore Now!</Button></Link>

      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
