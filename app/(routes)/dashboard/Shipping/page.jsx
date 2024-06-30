"use client"
import React, { useState } from "react";
import Shippingform from "./_components/Shippingform";
import Collapsible from "@/app/_components/Collapsible";
const Shipping = () => {
    const[loading,setloading]=useState(false)
    const AddingData=(formData)=>{
        setloading(true)
    console.log(formData)
    setloading(false)
    }
 return(<div>
    <Collapsible title={"ShippingInquery"}>  <Shippingform onAdd={AddingData} loading={loading}/></Collapsible>

 </div>)
}

export default Shipping
