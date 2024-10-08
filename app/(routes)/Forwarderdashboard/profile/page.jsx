"use client";
import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from '@/config/firebaseConfig';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LoaderCircleIcon } from 'lucide-react';

const fetchUserData = async (userId) => {
  try {
    const q = query(collection(db, "Forwarders"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      return { id: userDoc.id, ...userDoc.data() };
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

const ForwardersProfile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const auth = getAuth();
  
    useEffect(() => {
      const fetchData = () => {
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            const data = await fetchUserData(user.uid);
            setUserData(data);
            setLoading(false);
          } else {
            setError("No authenticated user found.");
            setLoading(false);
          }
        });
      };
      fetchData();
    }, [auth]);
  
    if (loading) return (
      <div className='flex justify-center items-center h-screen text-blue-950'>
        <LoaderCircleIcon className='animate-spin h-8 w-8' />
        <span className='ml-2'>Loading...</span>
      </div>
    );
    
    if (error) return <p className='text-red-600 text-center'>{error}</p>;
    if (!userData) return <p className='text-center text-gray-500'>No user data found.</p>;
  
    return (
      <div className='p-4 sm:p-10 max-w-4xl mx-auto'>
        <h2 className='text-2xl sm:text-3xl font-extrabold text-blue-800 mb-6 text-center'>Your Profile</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-lg font-semibold'>Company Name:</h3>
            <p className='text-blue-900 mb-4'>{userData.name}</p>
            <h3 className='text-lg font-semibold'>Address:</h3>
            <p className='text-blue-900 mb-4'>{userData.Address}</p>
            <h3 className='text-lg font-semibold'>Description:</h3>
            <div className='overflow-auto max-h-32 break-words'>
              <p className='text-blue-900 mb-4'>{userData.description}</p>
            </div>
            <h3 className='text-lg font-semibold'>Experience:</h3>
            <p className='text-blue-900 mb-4'>{userData.Experience} Years</p>
            <h3 className='text-lg font-semibold'>Transportation Type:</h3>
            <ul className='text-blue-900'>
              {userData.transportationtype.map((item, index) => (
                <li key={index} className='mt-1'>{item}</li>
              ))}
            </ul>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-lg font-semibold'>Mobile:</h3>
            <p className='text-blue-900 mb-4'>{userData.Mobile}</p>
            <h3 className='text-lg font-semibold'>Phone:</h3>
            <p className='text-blue-900 mb-4'>{userData.Phone}</p>
            <h3 className='text-lg font-semibold'>Country:</h3>
            <p className='text-blue-900 mb-4'>{userData.country}</p>
            <h3 className='text-lg font-semibold mt-6'>Do you want to change your data?</h3>
            <Link href="/Forwarderdashboard/EditProfile">
              <Button className='mt-4'>Click here!</Button>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default ForwardersProfile;
