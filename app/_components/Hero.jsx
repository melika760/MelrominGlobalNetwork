import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
<section
  className="relative h-[870px] bg-[url(/heros.jpg)] bg-cover bg-center bg-no-repeat "
>
  <div
    className=" absolute inset-0 bg-black/70 sm,xl:bg-transparent sm,xl:from-black/95 sm,xl:to-black/10 ltr:sm,xl:bg-gradient-to-l rtl:sm,xl:bg-gradient-to-r"
  ></div>
  

  <div
    className="relative z-10 items-center mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 h-full"
  >
    <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
      <h1 className=" text-3xl font-bold sm:text-5xl  text-white ">
      The World’s First Logistics & Supply Chain Partnership
      
      </h1>

      <p className="mt-7 max-w-lg sm:text-xl/relaxed text-white leading-snug">
      Melromin Global Network fosters a dynamic environment that connects suppliers and buyers with freight forwarding companies worldwide.
      </p>

      <div className="mt-8 flex  gap-4 text-center">
        <Link
          href="#start"
        >
      <Button  className="bg-primary hover:bg-white hover:text-primary  text-white w-[160px]    rounded-md transition-colors duration-300 text-md">
Get Started
   </Button>
        </Link>

        <Link
          href="/About"
        >
            <Button  className="bg-white hover:bg-primary hover:text-white hover:border-primary hover:border-2 w-[160px]  text-primary    rounded-md transition-colors duration-300 text-md">
Learn more
   </Button>
        </Link>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
