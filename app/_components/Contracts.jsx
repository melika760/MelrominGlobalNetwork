"use client";

import globalapi from '@/app/_utils/globalapi';
import { Button } from '@/components/ui/button';
import { auth } from '@/config/firebaseConfig';
import { ArrowBigDown, ArrowBigUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import moment from 'moment';
import Image from 'next/image';

const Contracts = () => {
  const [contracts, setContracts] = useState([]);
  const [moreInfo, setMoreInfo] = useState({});
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          const data = await globalapi.getContracts(user);
          setContracts(data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [user]);

  const formatTimeAgo = (agreedDate) => {
    const momentDate = moment(agreedDate);
    return momentDate.format("MMM Do YY");
  };

  const formatTimeAgos = (agreedDate) => {
    const date = agreedDate?.toDate();
    const momentDate = moment(date);
    return momentDate.format("MMM Do YY");
  };

  const toggleMoreInfo = (index) => {
    setMoreInfo(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="md:p-12 p-4">
      <h2 className="text-blue-950 text-center font-bold text-xl mb-8 p-4">Contracts</h2>
      <div className='p-6'>
        {contracts.length > 0 ? (
          <>
            <div className='md:grid-cols-4 gap-8 md:grid hidden items-center justify-between p-4 border-b bg-gray-200'>
              <h3 className='font-bold'>Commodity</h3>
              <h3 className='font-bold'>Final Amount</h3>
              <h3 className='font-bold'>Delivery Date</h3>
              <h3 className='font-bold'>More</h3>
            </div>
            <div>
              {contracts.map((contract, index) => (
                <div key={index} className='flex flex-col justify-between'>
                  <div className='md:grid-cols-4 grid grid-cols-1 items-center md:justify-between gap-8 p-4 border-b hover:bg-gray-50 transition-colors duration-300'>
                    <p className='text-sm sm:text-base text-gray-800'>
                      <span className='font-semibold text-sm sm:text-base text-gray-700 md:hidden sm:block'>Commodity:</span> 
                      {contract.Commodity}
                    </p>
                    <p className='text-sm sm:text-base text-gray-800'>
                      <span className='font-semibold text-sm sm:text-base text-gray-700 md:hidden sm:block'>Final Amount:</span> 
                      {contract.finalAmount}
                    </p>
                    <p className='text-sm sm:text-base text-gray-800'>
                      <span className='font-semibold text-sm sm:text-base text-gray-700 md:hidden sm:block'>Delivery Date:</span> 
                      {formatTimeAgo(contract.agreedDate)}
                    </p>
                    <Button onClick={() => toggleMoreInfo(index)} className="w-[55px]" variant={"ghost"}>
                      {moreInfo[index] ? <ArrowBigUp className='text-primary cursor-pointer' /> : <ArrowBigDown className='text-primary cursor-pointer' />}
                    </Button>
                  </div>
                  <div>
                    {moreInfo[index] && (
                      <div className='p-4'>
                        <div className='flex justify-start space-x-10 '>
                          <p className='text-sm sm:text-base text-gray-800 mb-5'>Status: {contract.Status}</p>
                          <p className='text-sm sm:text-base text-gray-800'>Made the Contract at: {formatTimeAgos(contract.createdAt)}</p>
                        </div>
                        <div className='flex flex-col justify-center'>
                          <Image src={contract.contractImageURL} alt='OfficialContract' className='md:w-[150px] w-full mt-6' width={150} height={50} />
                          <Button className="md:w-[155px] mt-5 w-full">Go to payment!</Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center text-center items-center mt-3">
            <Image src="/Contract3.JPG" className='object-contain rounded-full' width={300} height={100} />
            <p className='text-center text-gray-500 mt-3'>No contract data available.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contracts;
