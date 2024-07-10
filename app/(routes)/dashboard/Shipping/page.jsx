"use client"
import React, { useState } from "react";
import Shippingform from "./_components/Shippingform";
import ShippingHistory from "./_components/ShippingHistory";
import { Button } from "@/components/ui/button";
import { auth } from "@/config/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "sonner";
import Forwarderslist from "./_components/Forwarderslist";
import globalapi from "@/app/_utils/globalapi";

const Shipping = () => {
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const [secondOpen, setSecondOpen] = useState(false);
    const [user] = useAuthState(auth);
    const AddingData = async (formData) => {
      setLoading(true);
  
try{globalapi.addData(formData,user)
          toast("Inquiery submitted successfully!");
          setContent(<Forwarderslist selectedCountry={formData.destination} inquiery={formData} transportation={formData.transportation}/>)}
          catch(error){
            toast("something went wrong!")
          }

      setLoading(false);
    
  };
    const [content, setContent] = useState(<Shippingform onAdd={AddingData} loading={loading}/>);


    const toggle = () => {
        setIsOpen(true);
        setSecondOpen(false);
        setContent(<Shippingform onAdd={AddingData} loading={loading}/>);
    };

    const secondtoggle = () => {
      setSecondOpen(true);
      setIsOpen(false);
      setContent(<ShippingHistory />);
  };

    return (
        <div className="p-10">
            <div className="flex flex-row">
                <Button className={`${isOpen && "bg-secondary border-b-2"}`} variant="ghost" onClick={toggle}>Inquiery Form</Button>
                <Button className={`${secondOpen && "bg-secondary border-b-2"}`} variant="ghost" onClick={secondtoggle}>Submitted Inquiery</Button>
            </div>
            <div className="border-lg border-gray-400 shadow-lg pb-8">
                {content}
            </div>
        </div>
    );
};

export default Shipping;
