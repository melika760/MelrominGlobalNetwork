"use client";
import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from '@/config/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';

import SupForms from '@/app/_components/Supforms'

const SuppliersForm = () => {
    const router=useRouter();
    const [loading,setLoading]=useState(false)
const [user]=useAuthState(auth)
    const Addfirebase=async(formData)=>{
        if (!user) {
            console.error("User is not authenticated");
            router.push("/sign-up")
            return;
          }
      
          setLoading(true);
          try{
            const docref=await addDoc(collection(db,"Suppliers"),{
                name:formData.companyname,
                Address:formData.Address,
                country:formData.selectedCounty,
                Phone:formData.Phone,
                Mobile:formData.Mobile,
                transportationtype:formData.transportation,
                role:"Supplier",
                userId: user.uid
            })
            console.log("Document written with ID: ", docref.id);

          }catch(error){console.error("Error adding document: ", error);

          }
          setLoading(false);
          router.replace("/dashboard/profile");
    }
  return (
    <div>
      <SupForms onAdd={Addfirebase} loading={loading}/>
    </div>
  )
}

export default SuppliersForm
