import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
const Hero = () => {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <div className=' relative xl:w-full w-[90%] xl:h-full h-[590px] z-0'>
        <Image src="/hero.png" className='object-contain w-full ' width={550} height={250}/>
        {/* <Image src="/hero-bg.png" className='absolute xl:-top-24  -right-1/3 md:-right-1/3  -z-10 w-full h-screen  overflow-hidden' width={350} height={390}/> */}
        </div>
     
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">THE WORLDS' FIRST PARTNERSHIP BETWEEN LOGISTICS AND SUPPLY CHAIN.</h2>

        <p className="mt-4 text-gray-600">
        Melromin Global Network create an environment for all the suppliers and byers to connect with freight forwarding companies around the globe!
        </p>
<Button className="mt-10">Explore Now!</Button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
