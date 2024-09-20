"use client"
import globalapi from '@/app/_utils/globalapi';
import { Button } from '@/components/ui/button';
import { auth } from '@/config/firebaseConfig';
import { ArrowBigDown, ArrowBigUp } from 'lucide-react';
import React, { useEffect, useState } from 'react'

import { useAuthState } from 'react-firebase-hooks/auth';
import moment from 'moment';
import Image from 'next/image';
const Contracts = () => {
    const[contracts,setcontracts]=useState([])
    const [moreInfo, setMoreInfo] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
      const fetchData = async () => {
        if (user) {
          try {
            const data = await globalapi.getContracts(user);
            setcontracts(data);
          } catch (error) {
            console.log(error);
          }
        }
      };
      fetchData();
    }, [user]);
    console.log(contracts)
    const formatTimeAgo = (agreedDate) => {
        // const date = agreedDate?.toDate();
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
      <h2 className="text-primary font-bold text-xl mb-8">Contracts List</h2>
      <div className='p-6'>
                <div className='grid grid-cols-4 gap-4 p-4 border-b-2 bg-gray-100'>
                    <h3 className='font-bold'>Commodity</h3>
                    <h3 className='font-bold'>Final Amount</h3>
                    <h3 className='font-bold'>Delivery Date</h3>
                    <h3 className='font-bold'>More</h3>
                </div>
                
                <div>
                    {contracts.length > 0 ? (
                        contracts.map((contract, index) => (
                            <div key={index} className='flex flex-col justify-between'>
                                <div className='grid grid-cols-4 gap-4 p-4 border-b-2 items-center relative'>
                                    <p>{contract.Commodity}</p>
                                    <p>{contract.finalAmount}</p>
                                    <p>{formatTimeAgo(contract.agreedDate)}</p>
                                    
                                    <Button onClick={() => toggleMoreInfo(index)} className="w-[55px]" variant={"ghost"}>
                                        {moreInfo[index] ? <ArrowBigUp className='text-primary cursor-pointer'/> : <ArrowBigDown className='text-primary cursor-pointer'/>}
                                    </Button>
                                    
                                </div>
                                <div>
                                    {moreInfo[index] &&
                                        <div className='p-4'>
                                                 <div className='flex justify-start space-x-10 '>
                                            <p className='mb-5'>Status:{contract.Status}</p>
                                            <p>Sealed the Deal at:{formatTimeAgos(contract.createdAt)}</p>
                                            </div>
                         <Image src={contract.contractImageURL} alt='OfficialContract' className='w-[100px] mt-6' width={50} height={50}/>
                    
                                        <Button className="w-[155px] mt-5">Go to payment!</Button>
                                        </div>
                                    }
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='text-center text-gray-500 mt-8'>No Contracts found.</p>
                    )}
                </div>
                </div>
    </section>
  )
}

export default Contracts
