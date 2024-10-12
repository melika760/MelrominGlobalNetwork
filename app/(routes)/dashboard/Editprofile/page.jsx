"use client";
import React, { useState } from 'react';
import { auth } from '@/config/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import SupForms from '@/app/_components/Supforms';
import globalapi from '@/app/_utils/globalapi';


const EditProfile = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
 const[user]=useAuthState(auth)

 const SupplierProfile = async (FormsData) => {
  setLoading(true);

  if (!user) {
    console.error("User is not authenticated");
    setLoading(false);
    return;
  }

try{
  await globalapi.EditSupplierprofile(FormsData,user)
}catch(error){
  console.log(error)
}
  setLoading(false);
  router.replace("/dashboard/profile");
};


  return (<div className='md:p-10 p-2'>
       <h2 className='text-3xl font-extrabold text-blue-800 mb-10'>Edit Profile</h2>
  <SupForms onAdd={SupplierProfile} loading={loading}/>
  </div>
   
  );
};

export default EditProfile ;
