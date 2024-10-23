"use client"
import React, { useEffect, useState } from 'react';
import { auth} from "@/config/firebaseConfig";
import { ArrowBigDown, ArrowBigUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuthState } from 'react-firebase-hooks/auth';
import globalapi from '@/app/_utils/globalapi';
import Image from 'next/image';
const Forwarderslist = ({ selectedCountry, inquiery, transportation }) => {
    const [forwarders, setForwarders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [moreInfo, setMoreInfo] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        const fetchForwarders = async () => {
            try {
                const data = await globalapi.getForwardersByCountry(selectedCountry, transportation);
                setForwarders(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchForwarders();
    }, [selectedCountry,inquiery, transportation]);

    const sendData = async (forwarder) => {
        try {
          await globalapi.sendDatastofrwd(forwarder,user,inquiery)
              
          } catch (error) {
              console.log(error);
          }
    };

    const toggleMoreInfo = (index) => {
        setMoreInfo(prev => ({ ...prev, [index]: !prev[index] }));
    };

    if (loading) return <p>Loading forwarders...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="md:p-12 p-4">
            <h2 className="text-blue-800 font-bold text-xl mb-8">Forwarders List</h2>
            <div className='p-6'>
                <div className='md:grid-cols-4 md:grid hidden items-center justify-between p-4 border-b bg-gray-200'>
                    <h3 className='font-bold'>Forwarder</h3>
                    <h3 className='font-bold'>Country</h3>
                    <h3 className='font-bold'>More</h3>
                </div>
                <div>
                    {forwarders.length > 0 ? (
                        forwarders.map((forwarder, index) => (
                            <div key={index} className='flex flex-col justify-between items-center'>
                                <div className='md:grid-cols-4 grid grid-cols-1 items-center md:justify-between gap-4 p-4 border-b hover:bg-gray-50 transition-colors duration-300 relative'>
                                    <p className='text-sm sm:text-base text-gray-800'><span className='font-semibold text-sm sm:text-base text-gray-700 md:hidden sm:block'>Forwarders' name:</span>{forwarder.name}</p>
                                    <p className='text-sm sm:text-base text-gray-800'><span className='font-semibold text-sm sm:text-base text-gray-700 md:hidden sm:block'>Country:</span>{forwarder.country}</p>
                                    <span className='font-semibold text-sm sm:text-base text-gray-700 md:hidden sm:flex'>More info
                 </span>
                                   <span><Button onClick={() => toggleMoreInfo(index)} className="w-[55px]" variant={"ghost"}>
                                        {moreInfo[index] ? <ArrowBigUp className='text-primary cursor-pointer'/> : <ArrowBigDown className='text-primary cursor-pointer'/>}
                                    </Button></span> 
                                    <div className='md:hidden block'>
                                    {moreInfo[index] &&
                                        <div className=''>
                                            <p className='text-sm sm:text-base text-gray-800 mb-5'><strong>About Company:</strong> {forwarder.description}</p>
                                            <p className='text-sm sm:text-base text-gray-800'><strong>Experience:</strong> {forwarder.Experience} Years</p>
                                        </div>
                                    }
                                      
                                </div>
                                    <Button onClick={() => sendData(forwarder)} className="md:w-[250px] ">Choose</Button>
                                </div>
                                <div className='max-sm:hidden block'>
                                    {moreInfo[index] &&
                                        <div className='p-2'>
                                            <p className='text-sm sm:text-base text-gray-800 mb-5'><strong>About Company:</strong> {forwarder.description}</p>
                                            <p className='text-sm sm:text-base text-gray-800'><strong>Experience:</strong> {forwarder.Experience} Years</p>
                                        </div>
                                    }
                                      
                                </div>
                              
                            </div>
                        ))
                    ) : (<div className="flex flex-col justify-center text-center items-center">
        <Image src="/img8.png" className='object-contain ' width={300} height={100}/>
        <p className='text-center text-gray-500'>No suitable forwarders found.</p>
      </div>
                        
                    )}
                </div>
            </div>
        </div>
    );
};

export default Forwarderslist;
