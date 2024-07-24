import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react'
import React, { useState } from 'react'
import Shippingform from './Shippingform';
import globalapi from '@/app/_utils/globalapi';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/config/firebaseConfig';
import moment from 'moment';
const CheckData = ({datas,back}) => {
  const [change,setchange]=useState(false)
  const[loading,setloading]=useState(false)
  const [user] = useAuthState(auth);
  const UpdateData = async (formData) => {
    setloading(true)
try{
  await globalapi.UpdatingInquieries(formData,user)
}catch(error){
  console.log(error)
}
    setloading(false)
  };
  return (
    <div className='p-4'>
      <ArrowLeft onClick={back} className='cursor-pointer text-primary text-xl font-bold'/>
      
     {!change &&<div className=' sm:p-10 max-w-4xl mx-auto'>
        <h2 className='text-2xl sm:text-3xl font-extrabold text-primary mb-6 text-center'>Details</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-lg font-semibold'>Commodity:</h3>
            <p className='text-blue-900 mb-4'>{datas.Commodity}</p>
            <h3 className='text-lg font-semibold'>Origin:</h3>
            <p className='text-blue-900 mb-4'>{datas.origin}</p>
            <h3 className='text-lg font-semibold'>Destination:</h3>
           
              <p className='text-blue-900 mb-4'>{datas.destination}</p>
            <h3 className='text-lg font-semibold'>Volume Weight:</h3>
            <p className='text-blue-900 mb-4'>{datas.VolumeWeight}</p>
            <h3 className='text-lg font-semibold'>Gross Weight:</h3>
            <p className='text-blue-900 mb-4'>{datas.GrossWeight}</p>
            <h3 className='text-lg font-semibold'>Dimenssion:</h3>
            <p className='text-blue-900 mb-4'>{datas.Dimenssion}</p>
            <h3 className='text-lg font-semibold'>Switch:</h3>
            <p className='text-blue-900 mb-4'>{datas.Switch}</p>
            <h3 className='text-lg font-semibold'>Transit:</h3>
            <p className='text-blue-900 mb-4'>{datas.transit}</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-lg font-semibold'>Temprature:</h3>
            <p className='text-blue-900 mb-4'>{datas.Temprature}</p>
            <h3 className='text-lg font-semibold'>HS code:</h3>
            <p className='text-blue-900 mb-4'>{datas.HsCode}</p>
            <h3 className='text-lg font-semibold'>Special condition:</h3>
            <p className='text-blue-900 mb-4'>{datas.Special}</p>
            <h3 className='text-lg font-semibold'>Date:</h3>
            <p className='text-blue-900 mb-4'>{moment(datas.date).format("MMMM Do YYYY")}</p>
            <h3 className='text-lg font-semibold'>Transportation:</h3>
            <p className='text-blue-900 mb-4'>{datas.transportation}</p>
            <h3 className='text-lg font-semibold'>Notes:</h3>
            <div className='overflow-auto max-h-32 break-words'><p className='text-blue-900 mb-4 '>{datas.Note}</p></div>
            <h3 className='text-lg font-semibold mt-6'>Do you want to change your data?</h3>
          <Button onClick={()=>setchange(true)}>Click here!</Button>
          </div>
        </div>
      </div>}
      {change && <Shippingform onAdd={UpdateData} loading={loading}/>}
    </div>
  )
}

export default CheckData
