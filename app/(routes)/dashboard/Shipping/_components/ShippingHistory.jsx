"use client";
import { InfoIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { auth } from "@/config/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import globalapi from '@/app/_utils/globalapi';
import CheckData from './CheckData';

const ShippingHistory = () => {
  const [shippingData, setShippingData] = useState([]);
  const [user] = useAuthState(auth);
const[edit,setEdit]=useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
 const data= await globalapi.getDatas(user)
        setShippingData(data);
      } catch (error) {
        setShippingData([]);
      }
    };
    fetchData();
  }, [user]);
  const ChangeContent=(item)=>{
   setEdit(item)
      }


  return (
<div>
 {!edit ? 
 (<div className='p-4 sm:p-6'>
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
            <InfoIcon className='text-primary cursor-pointer' onClick={()=>ChangeContent(item)}/>
           
          </div>
         
       
        ))
      ) : (
        <p className='text-center text-gray-500'>No shipping data available.</p>
      )}
    </div>
   
    </div>):(<CheckData datas={edit} back={()=>setEdit(null)}/>)}
  
    </div>
  );
};

export default ShippingHistory;
