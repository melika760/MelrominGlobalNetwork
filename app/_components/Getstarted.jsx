"use client"
import { LogIn,MessageSquareText,ReceiptText,ScrollText} from 'lucide-react'
import React from 'react'


const Getstarted = () => {
 
  return (
    <section className='my-20 overflow-x-hidden' id='start'>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-extrabold sm:text-4xl  text-gray-800" >Get Started</h2>
    </div>

    <div className="mt-8 grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-10">
    <div className='border shadow-lg bg-gray-100 md:py-20 py-10 md:px-20 px-5 rounded-md'>
<h2 className='font-bold text-lg'>Suppliers:</h2>
<ul className='my-7 flex flex-col gap-3'>
    <li className='flex gap-3'><LogIn  size={18}/> Sign up on our site</li>
    <li className='flex gap-3'><ReceiptText size={18}/> Fill out the inquiry form</li>
    <li className='flex gap-3'><MessageSquareText  size={18}/>Select your favorite forwarders and start chatting.</li>
    <li className='flex gap-3'><ScrollText  size={18}/>Seal the deal and arrange payment right here </li>
</ul>
<p className='font-bold text-lg text-black'>Bingo! We guarantee your shipment will arrive on time.</p>
    </div>
    <div className='border shadow-lg bg-gray-100 md:py-20 py-10 md:px-20 px-5 rounded-md'>
<h2 className='font-bold text-lg'>Forwarders:</h2>
<ul className='my-7 flex flex-col gap-3'>
    <li className='flex gap-3'><LogIn size={18}/> Sign up on our site</li>
    <li className='flex gap-3'><MessageSquareText size={18}/>Get quotes from suppliers and start chatting with them</li>
    <li className='flex gap-3'><ScrollText size={18}/>Seal the deal and arrange payment right here </li>
</ul>
<p className='font-bold text-lg text-black'>Bingo! We guarantee you'll get paid on time.</p>
    </div>
    </div>
    

  
  </div>
</section>
  )
}

export default Getstarted
