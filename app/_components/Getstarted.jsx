import { LogIn,MessageSquareText,ReceiptText,ScrollText} from 'lucide-react'
import React from 'react'

const Getstarted = () => {
  return (
    <section className='my-20'>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-bold sm:text-4xl text-blue-950">Get Started</h2>
    </div>

    <div className="mt-8 grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-10">
    <div className='border shadow-lg bg-gray-100 md:py-20 py-10 md:px-20 px-5 rounded-md'>
<h2 className='font-bold text-lg'>Suppliers:</h2>
<ul className='my-7'>
    <li className='flex text-blue-950 py-2'><LogIn className='mr-2'/> Sign up to our website</li>
    <li className='flex text-blue-950 py-2'><ReceiptText className='mr-2'/> Compelete Shippment inquiry</li>
    <li className='flex text-blue-950 py-2'><MessageSquareText className='mr-2'/>Choose your selected forwarders and start to chat with them</li>
    <li className='flex text-blue-950 py-2'><ScrollText className='mr-2'/>Make your contract and arrange your payment through our website </li>
</ul>
<p className='font-bold text-lg text-black'>Bingo! we will guarantee your shippment will be delivered at your agreed time.</p>
    </div>
    <div className='border shadow-lg bg-gray-100 md:py-20 py-10 md:px-20 px-5 rounded-md'>
<h2 className='font-bold text-lg'>Forwarders:</h2>
<ul className='my-7'>
    <li className='flex text-blue-950 py-2'><LogIn className='mr-2'/> Sign up to our website</li>
    <li className='flex text-blue-950 py-2'><MessageSquareText className='mr-2'/>Get quotes from suppliers and start chat with them</li>
    <li className='flex text-blue-950 py-2'><ScrollText className='mr-2'/>Make your contract and get your payment through our website </li>
</ul>
<p className='font-bold text-lg text-black'>Bingo! we will guarantee you will get paid at agreed time.</p>
    </div>
    </div>
    

  
  </div>
</section>
  )
}

export default Getstarted
