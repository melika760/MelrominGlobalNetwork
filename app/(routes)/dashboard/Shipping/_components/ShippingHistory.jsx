"use client";
import { InfoIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { auth, db } from "@/config/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, getDocs, query, updateDoc, where, doc } from "firebase/firestore";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Shippingform from './Shippingform';
import { toast } from 'sonner';

const ShippingHistory = () => {
  const [shippingData, setShippingData] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user) {
          throw new Error("User not authenticated");
        }
        const userId = user.uid;
        const q = query(collection(db, "ShippingData"), where("userId", "==", userId));
        const getshipping = await getDocs(q);
        const data = [];
        getshipping.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setShippingData(Array.isArray(data) ? data : []);
      } catch (error) {
        setShippingData([]);
      }
    };
    fetchData();
  }, [user]);

  const UpdateData = async (formData) => {
    try {
      const c = query(collection(db, "ShippingData"), where("userId", "==", user.uid));
      const changeData = await getDocs(c);
      if (!changeData.empty) {
        const userDoc = changeData.docs[0];
        const docRef = doc(db, "ShippingData", userDoc.id);
        await updateDoc(docRef, {
          Commodity: formData.Commodity,
          VolumeWeight: formData.VolumeWeight,
          Dimenssion: formData.Dimenssion,
          Temprature: formData.Temprature,
          GrossWeight: formData.GrossWeight,
          HsCode: formData.HS,
          Special: formData.Special,
          Note: formData.Note,
          origin: formData.selectedCounty,
          destination: formData.destination,
          date: formData.date,
          transportation: formData.transportation,
          Switch: formData.Switch,
          transit: formData.transit,
          userId: user.uid
        });
        toast("Your Data changed successfully!");
      }
    } catch (error) {
      toast("something went wrong please try again!");
      console.log(error);
    }
  };

  return (
    <div className='p-4 sm:p-6'>
      <div className='grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-4 p-2 sm:p-4 border-b-2 bg-gray-100'>
        <h3 className='font-bold text-sm sm:text-base'>Commodity</h3>
        <h3 className='font-bold text-sm sm:text-base'>Origin</h3>
        <h3 className='font-bold text-sm sm:text-base'>Destination</h3>
        <h3 className='font-bold text-sm sm:text-base'>Transportation</h3>
        <h3 className='font-bold text-sm sm:text-base'>More</h3>
      </div>
      <div>
        {shippingData.length > 0 ? (
          shippingData.map((item, index) => (
            <div
              key={index}
              className='grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-4 p-2 sm:p-4 border-b-2 items-center text-sm sm:text-base'
            >
              <p>{item.Commodity}</p>
              <p>{item.origin}</p>
              <p>{item.destination}</p>
              <p>{item.transportation}</p>
              <Sheet>
                <SheetTrigger><InfoIcon className='text-primary cursor-pointer' /></SheetTrigger>
                <SheetContent className="w-full sm:w-2/3 p-4 sm:p-10 overflow-scroll" side="top">
                  <SheetHeader>
                    <SheetTitle>Do you want to change data?</SheetTitle>
                    <SheetDescription>
                      <Shippingform onAdd={UpdateData} />
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          ))
        ) : (
          <p className='text-center text-gray-500'>No shipping data available.</p>
        )}
      </div>
    </div>
  );
};

export default ShippingHistory;
