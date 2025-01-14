"use client"
import { LogIn,MessageSquareText,ReceiptText,ScrollText} from 'lucide-react'
import React from 'react'
import useScroll from './_hooks/use-scroll'

const Getstarted = () => {
  useScroll()
  return (
    <section className='my-20 overflow-x-hidden' id='start'>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-extrabold sm:text-4xl  text-gray-800" data-animation="animate-fade-in">Get Started</h2>
    </div>

    <div className="mt-8 grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-10">
    <div className='border shadow-lg bg-gray-100 md:py-20 py-10 md:px-20 px-5 rounded-md'data-animation="animate-turnleft">
<h2 className='font-bold text-lg'>Suppliers:</h2>
<ul className='my-7'>
    <li className='flex py-2'><LogIn className='mr-2 h-5 w-4 '/> Sign up on our site</li>
    <li className='flex py-2'><ReceiptText className='mr-2 h-5 w-4'/> Fill out the inquiry form</li>
    <li className='flex py-2'><MessageSquareText className='mr-2 h-5 w-5 max-sm:w-6'/>Pick your favorite forwarders and start chatting with them</li>
    <li className='flex py-2'><ScrollText className='mr-2 h-5 w-4 max-sm:w-5'/>Seal the deal and arrange payment right here </li>
</ul>
<p className='font-bold text-lg text-black'>Bingo! We guarantee your shipment will arrive on time.</p>
    </div>
    <div className='border shadow-lg bg-gray-100 md:py-20 py-10 md:px-20 px-5 rounded-md'data-animation="animate-turnright">
<h2 className='font-bold text-lg'>Forwarders:</h2>
<ul className='my-7'>
    <li className='flex py-2'><LogIn className='mr-2 h-5 w-4'/> Sign up on our site</li>
    <li className='flex py-2'><MessageSquareText className='mr-2 h-5 w-5 max-sm:w-6'/>Get quotes from suppliers and start chatting with them</li>
    <li className='flex py-2'><ScrollText className='mr-2 h-5 w-4 max-sm:w-5'/>Seal the deal and arrange payment right here </li>
</ul>
<p className='font-bold text-lg text-black'>Bingo! We guarantee you'll get paid on time.</p>
    </div>
    </div>
    

  
  </div>
</section>
  )
}

export default Getstarted
