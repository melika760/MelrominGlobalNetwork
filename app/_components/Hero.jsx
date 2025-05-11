import React from 'react'


const Hero = () => {
  return (
<section
  className="relative bg-[url(/heros.jpg)] bg-cover bg-center bg-no-repeat  "
>
  <div
    className=" absolute inset-0 bg-black/75 sm,xl:bg-transparent sm,xl:from-black/95 sm,xl:to-black/10 ltr:sm,xl:bg-gradient-to-l rtl:sm,xl:bg-gradient-to-r"
  ></div>
  

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
      <h1 className=" text-8xl font-bold sm:text-5xl  text-white ">
      The World’s First Logistics & Supply-Chain Partnership
      
      </h1>

      <p className="mt-7 max-w-lg sm:text-xl/relaxed text-white leading-snug">
      Melromin Global Network fosters a dynamic environment that connects suppliers and buyers with freight forwarding companies worldwide.
      </p>

      <div className="mt-8 flex  gap-4 text-center">
        <a
          href="#start"
          className="block w-full rounded shadow-xl bg-[#6930c3] px-12 py-3 text-sm font-medium text-white  hover:bg-white hover:text-[#6930c3] focus:outline-none focus:ring active:bg-primary sm:w-auto max-sm:px-3"
        >
          Get Started
        </a>

        <a
          href="#work"
          className="block w-full rounded shadow-xl bg-white px-12 py-3 text-sm font-medium text-[#6930c3]  hover:text-white hover:bg-[#6930c3] focus:outline-none focus:ring active:text-primary sm:w-auto max-sm:px-3"
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
