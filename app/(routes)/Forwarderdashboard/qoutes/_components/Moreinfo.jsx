import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { IconLeft } from 'react-day-picker';

const Moreinfo = ({ quote, onBack }) => {
  if (!quote) return null;

  return (
    <div className='p-12'>
         <ArrowLeft className='text-primary cursor-pointer' onClick={onBack}/>
      <div className='p-4 sm:p-10 max-w-4xl mx-auto'>
        <div className='flex items-center'>
         
          <h2 className='text-2xl sm:text-3xl font-extrabold text-primary mb-6 text-center'>More Data</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-lg font-semibold'>Dimension:</h3>
            <p className='text-blue-900 mb-4'>{quote.Dimenssion}</p>
            <h3 className='text-lg font-semibold'>Gross Weight:</h3>
            <p className='text-blue-900 mb-4'>{quote.GrossWeight}</p>
            <h3 className='text-lg font-semibold'>Volume Weight:</h3>
            <p className='text-blue-900 mb-4'>{quote.VolumeWeight}</p>
            <h3 className='text-lg font-semibold'>HS Code:</h3>
            <div className='overflow-auto max-h-32 break-words'>
              <p className='text-blue-900 mb-4'>{quote.HS}</p>
            </div>
            <h3 className='text-lg font-semibold'>Special Condition:</h3>
            <p className='text-blue-900 mb-4'>{quote.Special}</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-lg font-semibold'>Temperature:</h3>
            <p className='text-blue-900 mb-4'>{quote.Temprature}</p>
            <h3 className='text-lg font-semibold'>Switch:</h3>
            <p className='text-blue-900 mb-4'>{quote.Switch}</p>
            <h3 className='text-lg font-semibold'>Transit:</h3>
            <p className='text-blue-900 mb-4'>{quote.transit}</p>
            <h3 className='text-lg font-semibold'>Date:</h3>
            <p className='text-blue-900 mb-4'>{quote.date}</p>
            <h3 className='text-lg font-semibold mt-6'>Do you want to start chat?</h3>
            <Button className='mt-4'>Click here!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Moreinfo;