"use client";
import { InfoIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { auth, db } from "@/config/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, getDocs, query, where } from "firebase/firestore";

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

  return (
    <div className='p-6'>
      <div className='grid grid-cols-5 gap-4 p-4 border-b-2 bg-gray-100'>
        <h3 className='font-bold'>Commodity</h3>
        <h3 className='font-bold'>Origin</h3>
        <h3 className='font-bold'>Destination</h3>
        <h3 className='font-bold'>Transportation</h3>
        <h3 className='font-bold'>More</h3>
      </div>
      <div>
        {shippingData.length > 0 ? (
          shippingData.map((item, index) => (
            <div
              key={index}
              className='grid grid-cols-5 gap-4 p-4 border-b-2 items-center'
            >
              <p>{item.Commodity}</p>
              <p>{item.origin}</p>
              <p>{item.destination}</p>
              <p>{item.transportation}</p>
              <InfoIcon className='text-primary cursor-pointer' />
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
