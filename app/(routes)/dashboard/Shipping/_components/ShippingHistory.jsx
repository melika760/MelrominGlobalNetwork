"use client";
import { InfoIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const ShippingHistory = ({ shipdata }) => {
  const [shippingData, setShippingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await shipdata();
        setShippingData(Array.isArray(data) ? data : []);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setShippingData([]);
      }
    };
    fetchData();
  }, [shipdata]);

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
