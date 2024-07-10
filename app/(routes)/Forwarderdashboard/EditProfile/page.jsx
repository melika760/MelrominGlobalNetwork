"use client";
import React, { useState} from 'react';
import { auth} from '@/config/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import Forwarderprofile from '@/app/_components/Forwarderprofile';
import globalapi from '@/app/_utils/globalapi';

const EditProfiles = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
 const[user]=useAuthState(auth)

 const ForwardersProfile = async (FormsData) => {
  setLoading(true);

  if (!user) {
    console.error("User is not authenticated");
    setLoading(false);
    return;
  }

  try {
await globalapi.EditForwarderprofile(FormsData,user)
  } catch (error) {
    console.error("Error updating document:", error);
  }

  setLoading(false);
  router.replace("/Forwarderdashboard/profile");
};


  return (<div className='md:p-10 p-2'>
       <h2 className='text-3xl font-extrabold text-primary mb-10'>Edit Profile</h2>
  <Forwarderprofile onAdd={ForwardersProfile} loading={loading}/>
  </div>
   
  );
}

export default EditProfiles
