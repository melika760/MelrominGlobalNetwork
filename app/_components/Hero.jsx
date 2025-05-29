import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
<section className="relative bg-[url(/heros.jpg)] bg-cover bg-center bg-no-repeat">
  <div className="absolute inset-0 bg-black/70 sm,xl:bg-transparent sm,xl:from-black/95 sm,xl:to-black/10 ltr:sm,xl:bg-gradient-to-l rtl:sm,xl:bg-gradient-to-r"></div>
  <div className="relative z-10 mx-auto max-w-screen-xl max-sm:px-3 flex min-h-screen items-center px-3 py-12">
    <div className="max-w-xl ltr:sm:text-center rtl:sm:text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-white">
        The World’s First Logistics & Supply Chain Partnership
      </h1>

      <p className="mt-6 text-sm sm:text-lg text-white leading-relaxed">
        Melromin Global Network fosters a dynamic environment that connects suppliers and buyers with freight forwarding companies worldwide.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 text-center">
        <Link href="#start">
          <Button className="bg-primary hover:bg-white hover:text-primary text-white w-full sm:w-[160px] rounded-md transition-colors duration-500 text-md">
            Get Started
          </Button>
        </Link>

        <Link href="/About">
          <Button className="block max-sm:hidden bg-white hover:bg-primary hover:text-white hover:border-primary hover:border-2 text-primary w-full sm:w-[160px] rounded-md transition-colors duration-500 text-md">
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
