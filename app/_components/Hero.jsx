import React from 'react'


const Hero = () => {
  return (
<section
  className="relative bg-[url(/network3.png)] bg-cover bg-center bg-no-repeat  "
>
  <div
    className=" absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/15 ltr:sm:bg-gradient-to-l rtl:sm:bg-gradient-to-r"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right ">
      <h1 className="text-3xl font-extrabold sm:text-5xl  bg-gradient-to-r from-blue-900 via-blue-500 to-purple-500 bg-clip-text text-transparent ">
      The World’s First Partnership in Logistics and Supply Chain
      
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed text-gray-700 leading-snug">
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
