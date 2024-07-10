"use client";
import { auth } from '@/config/firebaseConfig';
import { InfoIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Moreinfo from './_components/Moreinfo';
import globalapi from '@/app/_utils/globalapi';
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
    <div>
      {!selectedQuote ? (
        <div className='p-12'>
          <div className='grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-4 p-2 sm:p-4 border-b-2 bg-gray-100'>
            <h3 className='font-bold text-sm sm:text-base'>Commodity</h3>
            <h3 className='font-bold text-sm sm:text-base'>Origin</h3>
            <h3 className='font-bold text-sm sm:text-base'>Destination</h3>
            <h3 className='font-bold text-sm sm:text-base'>Transportation</h3>
            <h3 className='font-bold text-sm sm:text-base'>More</h3>
          </div>
          <div>
            {allQuotes.length > 0 ? (
              allQuotes.map((quote) => (
                <div
                  key={quote.id}
                  className='grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-4 p-2 sm:p-4 border-b-2 items-center text-sm sm:text-base'
                >
                  <p>{quote.Commodity}</p>
                  <p>{quote.origin}</p>
                  <p>{quote.destination}</p>
                  <p>{quote.transportation}</p>
                  <InfoIcon
                    className='text-primary cursor-pointer'
                    onClick={() => handleMoreInfoClick(quote)}
                  />
                </div>
              ))
            ) : (
              <p className='text-center text-gray-500'>No shipping data available.</p>
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
