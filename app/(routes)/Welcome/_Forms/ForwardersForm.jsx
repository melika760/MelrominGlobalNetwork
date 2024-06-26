import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from '@/config/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import Forwarderprofile from '@/app/_components/Forwarderprofile'
const ForwardersForm = () => {
    const[loading,setLoading]=useState(false)
    const[user]=useAuthState(auth);
    const router=useRouter()
    const AddItems=async(FormDatas)=>{
        if (!user) {
            console.error("User is not authenticated");
            router.push("/sign-up")
            return;
          }
          setLoading(true);
try{const docRef=await addDoc(collection(db,"Forwarders"),{
    name: FormDatas.companyname,
    Address: FormDatas.Address,
    country: FormDatas.selectedCounty,
    Phone: FormDatas.Phone,
    Mobile: FormDatas.Mobile,
    transportationtype: FormDatas.transportation,
    Experience:FormDatas.Ex,
    description:FormDatas.des,
    role: "Forwarder",
    userId: user.uid
})
console.log("Document written with ID: ", docRef.id);
}catch(error){
    console.error("Error adding document: ", error)
}
setLoading(false);
router.replace("/dashboard/profile");
    }
  return (
   <Forwarderprofile onAdd={AddItems} loading={loading}/>
  )
}

export default ForwardersForm
