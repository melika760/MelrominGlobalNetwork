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
    <div className='md:grid-cols-5 md:grid hidden items-center justify-between p-4 border-b bg-gray-200'>
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
            className='md:grid-cols-5 grid grid-cols-1 items-center md:justify-between gap-4 p-4 border-b hover:bg-gray-50 transition-colors duration-300'
          >
            <p className='text-sm sm:text-base text-gray-800'><span className='font-semibold text-sm sm:text-base text-gray-700 md:hidden sm:block'>Commodity:</span> {item.Commodity}</p>
            <p className='text-sm sm:text-base text-gray-800'><span className='font-semibold text-sm sm:text-base text-gray-700 md:hidden sm:block'>Origin:</span> {item.origin}</p>
            <p className='text-sm sm:text-base text-gray-800'><span className='font-semibold text-sm sm:text-base text-gray-700 md:hidden sm:block'>Destination:</span> {item.destination}</p>
            <p className='text-sm sm:text-base text-gray-800'><span className='font-semibold text-sm sm:text-base text-gray-700 md:hidden sm:block'>Transportation:</span> {item.transportation}</p>
          <div className='flex space-x-2'><p className='font-semibold text-sm sm:text-base text-gray-700 md:hidden sm:block'>More info:</p> <InfoIcon className='text-primary cursor-pointer sm:text-sm' onClick={()=>ChangeContent(item)}/></div> 
           
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
