"use client"
import { UpdateContex } from '@/app/Store/UpdateContex';
import { Button } from '@/components/ui/button';
import React,{useContext, useEffect, useState} from 'react'
import SupplierForm from './_Forms/SupplierForm';
import ForwarderForm from './_Forms/ForwarderForm';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/config/firebaseConfig';
import { useRouter } from 'next/navigation';



const Welcome = () => {
  const{role,setrole}=useContext(UpdateContex)
  const[user]=useAuthState(auth)
  const router=useRouter()
  useEffect(()=>{
    if(!user){
      router.push("/")
           }
  },[])
  return (
    <div className='flex items-baseline justify-center my-20'>
    <div className='flex flex-col items-center p-20 bg-slate-100 border border-gray-200 shadow-md rounded-md'>
      <h2 className='font-bold text-3xl'>Welcome!</h2>
      <h2 className='text-gray-500 mt-5'>Let's Create Your Profile together</h2>
     {role==="Supplier" && <SupplierForm/>}
     {role==="Forwarder" && <ForwarderForm/>}
    </div>
  </div>
);
}

export default Welcome
