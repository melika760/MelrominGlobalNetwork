"use client"
import React from 'react'
import Navbar from './_components/Navbar';
import ForwarderHeader from './_components/ForwarderHeader';
import withAuth from '@/app/_utils/withAuth';
import withRole from '@/app/_utils/withRole';


const Forwarderlayout = ({children}) => {
  return (
    <div>
    <div className='hidden md:block md:w-64 bg-slate-50 h-screen fixed shadow-sm'>
      <Navbar/>
    </div>
    <div className='md:ml-64'>
 <ForwarderHeader/>
    {children}
    </div>
 
</div>
  )
}

export default withAuth(withRole("Forwarder")(Forwarderlayout)) ;
