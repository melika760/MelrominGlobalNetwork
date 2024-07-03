"use client"
import React, { useEffect, useState } from 'react';
import { auth, db } from "@/config/firebaseConfig";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { ArrowBigDown, ArrowBigUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'sonner';

const getForwardersByCountry = async (country, transportation) => {
    try {
        const q = query(collection(db, "Forwarders"), where("country", "==", country));
        const getForwarders = await getDocs(q);
        const forwarders = [];
        const transportationArray = Array.isArray(transportation) ? transportation : [transportation];

        getForwarders.forEach((doc) => {
            const data = doc.data();
            if (Array.isArray(data.transportationtype)) {
                if (transportationArray.some(t => 
                    data.transportationtype.some(tt => tt.toLowerCase().includes(t.toLowerCase()))
                )) {
                    forwarders.push({ id: doc.id, ...data });
                }
            }
        });
        return forwarders;
    } catch (error) {
        console.error("Error fetching forwarders:", error);
        throw error;
    }
};

const Forwarderslist = ({ selectedCountry, inquiry, transportation }) => {
    const [forwarders, setForwarders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [moreInfo, setMoreInfo] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        const fetchForwarders = async () => {
            try {
                const data = await getForwardersByCountry(selectedCountry, transportation);
                setForwarders(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchForwarders();
    }, [selectedCountry, inquiry, transportation]);

    const sendData = async (forwarder) => {
        try {
            await addDoc(collection(db, "Quotes"), {
                userId: user.uid,
                forwarderId: forwarder.id,
                forwarderName: forwarder.name,
                ...inquiry
            });
            toast("Your data sent to forwarder successfully!");
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
