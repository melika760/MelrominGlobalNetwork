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
    const q = query(collection(db, "Suppliers"), where("userId", "==", userId));
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

const Profile = () => {
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

  if (loading) return <div className=' flex justify-center text-blue-950 '><LoaderCircleIcon className='animate-spin'/>Loading</div>;
  if (error) return <p>{error}</p>;
  if (!userData) return <p>No user data found.</p>;

  return (
    <div className='p-10' key={userData.id}>
      <h2 className='text-3xl font-extrabold text-primary mb-5'>Your Profile</h2>
       <div className='grid md:grid-cols-2 gap-12'>
      <div>
        <h2 className='text-lg'>Company Name:<span className='text-blue-900 font-semibold'> {userData.name}</span></h2>
        <h2 className='text-lg mt-5 mb-5'>Adress: <span className='text-blue-900 font-semibold'>{userData.Address}</span></h2>
        <h2 className='text-lg'>Transportation Type: <ul className='text-blue-900 font-semibold'>{userData.transportationtype.map((item,index)=>(<li key={index}className='mt-5'>{item}</li>))}</ul></h2>
      </div>
      <div >
        <h2 className='text-lg'>Mobile: <span className='text-blue-900 font-semibold'>{userData.Mobile}</span></h2>
        <h2 className='text-lg mt-5 mb-5'>Phone: <span className='text-blue-900 font-semibold'>{userData.Phone}</span></h2>
        <h2 className='text-lg'>Country:<span className='text-blue-900 font-semibold'>{userData.country}</span> </h2>
        <h2 className='mt-12 mb-5'>Do you want to change your data?</h2><Link href={"/dashboard/Editprofile"}><Button>Click here!</Button></Link>
      </div>
    </div>
  
    </div>
   
  );
};

export default Profile;
