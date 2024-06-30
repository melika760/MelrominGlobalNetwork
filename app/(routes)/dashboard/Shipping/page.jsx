"use client"
import React, { useEffect, useState } from "react";
import Shippingform from "./_components/Shippingform";

import ShippingHistory from "./_components/ShippingHistory";
import { Button } from "@/components/ui/button";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { auth, db } from "@/config/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
const Shipping = () => {
    const[loading,setloading]=useState(false)
    const[Isopen,setIsOpen]=useState(true)
    const[SecondOpen,setSecondOpen]=useState(false)
    const[user]=useAuthState(auth)
    const router=useRouter()
    const AddingData=async(formData)=>{
        setloading(true)
try{ const datas=await addDoc(collection(db,"ShippingData"),{
    Commodity:formData.Commodity,
    VolumeWeight:formData.VolumeWeight,
    Dimenssion:formData.Dimenssion,
    Temprature:formData.Temprature,
    GrossWeight:formData.GrossWeight,
HsCode:formData.HS,
    Special:formData.Special,
    Note:formData.Note,
    origin:formData.selectedCounty,
    destination :formData.destination,
    date:formData.date,
    transportation:formData.transportation,
    Switch:formData.Switch,
    transit:formData.transit,
    userId:user.uid
 })
 router.push("/dashboard/ForwarderList")
toast("Inquiery submitted successfully!")
}catch(error){
    console.log(error)
    toast("Something went wrong!please try again")
 }
    setloading(false)
    }
    const getDatas=async()=>{
const getshipping=await getDocs(collection(db,"ShippingData"));
const shippingData=[];
 getshipping.forEach((doc)=>{
    shippingData.push({id:doc.id,...doc.data()})
})
return shippingData;
    }
    const[content,setContent]=useState(<Shippingform onAdd={AddingData} loading={loading}/>)
    const toggle=()=>{
        setIsOpen(true)
        setSecondOpen(false)
      setContent(<Shippingform onAdd={AddingData} loading={loading}/>)
    }
    const secondtoggle=()=>{
        setSecondOpen(true)
        setIsOpen(false)
  setContent(<ShippingHistory shipdata={getDatas} />)
    }
   
 return(<div className="p-10">
  <div className="flex flex-row">
    <Button className={`${Isopen && "bg-secondary border-b-2"}`} variant="ghost"onClick={toggle}>Inquiery Form</Button>
    <Button className={`${SecondOpen && "bg-secondary border-b-2"}`} variant="ghost"onClick={secondtoggle}>Submited Inquiery</Button>
  </div>
   <div className="border-lg border-gray-400 shadow-lg pb-8">
    {content}
   </div>
 </div>)
}

export default Shipping
