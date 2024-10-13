"use client";
import { auth } from '@/config/firebaseConfig';
import { InfoIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Moreinfo from './_components/Moreinfo';
import globalapi from '@/app/_utils/globalapi';
import Image from 'next/image';

const Qoutes = () => {
  const [allQuotes, setQuotes] = useState([]);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          const userId = user.uid;
          const data = await globalapi.fetchQuotes(userId);
          setQuotes(data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [user]);

  const handleMoreInfoClick = (quote) => {
    setSelectedQuote(quote);
  };

  const handleBackClick = () => {
    setSelectedQuote(null);
  };

  return (
    <div className='min-h-screen bg-gray-50 p-4 pt-12 lg:p-12'>
      {!selectedQuote ? (
        <div className='bg-white shadow-md rounded-lg'>
          <div className='md:grid-cols-5 md:grid hidden items-center justify-between p-4 border-b bg-gray-200'>
            <h3 className='font-semibold text-sm sm:text-base text-gray-700'>Commodity</h3>
            <h3 className='font-semibold text-sm sm:text-base text-gray-700'>Origin</h3>
            <h3 className='font-semibold text-sm sm:text-base text-gray-700'>Destination</h3>
            <h3 className='font-semibold text-sm sm:text-base text-gray-700'>Transportation</h3>
            <h3 className='font-semibold text-sm sm:text-base text-gray-700'>More</h3>
          </div>
          <div>
            {allQuotes.length > 0 ? (
              allQuotes.map((quote) => (
                <div
                  key={quote.id}
                  className='md:grid-cols-5 grid grid-cols-1 items-center md:justify-between gap-4 p-4 border-b hover:bg-gray-50 transition-colors duration-300'
                >
                  <p className='text-sm sm:text-base text-gray-800'><span className='font-semibold text-sm sm:text-base text-gray-700 md:hidden sm:block'>Commodity:</span> {quote.Commodity}</p>
                  <p className='text-sm sm:text-base text-gray-800'><span className='font-semibold text-sm sm:text-base text-gray-700 md:hidden sm:block'>Origin:</span> {quote.selectedCounty}</p>
                  <p className='text-sm sm:text-base text-gray-800'><span className='font-semibold text-sm sm:text-base text-gray-700 md:hidden sm:block'>Destination:</span> {quote.destination}</p>
                  <p className='text-sm sm:text-base text-gray-800'><span className='font-semibold text-sm sm:text-base text-gray-700 md:hidden sm:block'>Transportation:</span> {quote.transportation}</p>
                  <span className='font-semibold text-sm sm:text-base text-gray-700 md:hidden sm:flex'>More info
                 </span>
                 <span>   <InfoIcon
                    className='text-primary cursor-pointer text-lg sm:text-xl'
                    onClick={() => handleMoreInfoClick(quote)}
                  /></span>
  
                </div>
              ))
            ) : (
              <div className="flex flex-col justify-center text-center items-center">
        <Image src="/img8.png" className='object-contain ' width={300} height={100}/>
          <p className='text-center text-gray-500'>No shipping data available.</p>
      </div>
            )}
          </div>
        </div>
      ) : (
        <Moreinfo quote={selectedQuote} onBack={handleBackClick} />
      )}
    </div>
  );
};

export default Qoutes;
