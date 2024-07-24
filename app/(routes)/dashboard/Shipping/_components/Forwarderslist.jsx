"use client"
import React, { useEffect, useState } from 'react';
import { auth} from "@/config/firebaseConfig";
import { ArrowBigDown, ArrowBigUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuthState } from 'react-firebase-hooks/auth';
import globalapi from '@/app/_utils/globalapi';
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
            <h2 className="text-primary font-bold text-xl mb-8">Forwarders List</h2>
            <div className='p-6'>
                <div className='grid grid-cols-4 gap-4 p-4 border-b-2 bg-gray-100'>
                    <h3 className='font-bold'>Forwarder</h3>
                    <h3 className='font-bold'>Country</h3>
                    <h3 className='font-bold'>More</h3>
                </div>
                <div>
                    {forwarders.length > 0 ? (
                        forwarders.map((forwarder, index) => (
                            <div key={index} className='flex flex-col justify-between'>
                                <div className='grid grid-cols-4 gap-4 p-4 border-b-2 items-center relative'>
                                    <p>{forwarder.name}</p>
                                    <p>{forwarder.country}</p>
                                    <Button onClick={() => toggleMoreInfo(index)} className="w-[55px]" variant={"ghost"}>
                                        {moreInfo[index] ? <ArrowBigUp className='text-primary cursor-pointer'/> : <ArrowBigDown className='text-primary cursor-pointer'/>}
                                    </Button>
                                    <Button onClick={() => sendData(forwarder)} className="absolute right-9">Choose</Button>
                                </div>
                                <div>
                                    {moreInfo[index] &&
                                        <div className='p-4'>
                                            <p className='mb-5'><strong>About Company:</strong> {forwarder.description}</p>
                                            <p><strong>Experience:</strong> {forwarder.Experience} Years</p>
                                        </div>
                                    }
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='text-center text-gray-500'>No suitable forwarders found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Forwarderslist;
