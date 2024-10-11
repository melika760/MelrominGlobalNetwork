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
        <Image src="/transport.JPG" className='object-contain w-full ' width={550} height={250}/>
        {/* <Image src="/hero.png" className='object-contain w-full -rotate-45 ' width={550} height={250}/> */}
        {/* <Image src="/hero-bg.png" className=' max-sm:hidden absolute -top-24  -right-1/3 -z-10 w-full h-screen  overflow-hidden' width={350} height={390}/> */}
        </div>
     
      </div>

      <div className="lg:py-24">
        <h2 className="md:text-2xl font-bold text-lg">THE WORLDS' FIRST PARTNERSHIP BETWEEN LOGISTICS AND SUPPLY CHAIN.</h2>

        <p className="mt-4 text-gray-600">
        Melromin Global Network create an environment for all the suppliers and buyers to connect with freight forwarding companies around the globe!
        </p>
        <Link href={"#start"}><Button className="mt-10">Explore Now!</Button></Link>

      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
