"use client";
import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore"; // Updated imports
import { auth, db } from '@/config/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import SupForms from '@/app/_components/Supforms';
import ForwarderProfile from '../profile/page';
import Forwarderprofile from '@/app/_components/Forwarderprofile';

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
    const q = query(collection(db, "Forwarders"), where("userId", "==", user.uid));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const docRef = doc(db, "Forwarders", userDoc.id);
      await updateDoc(docRef, {
        name: FormsData.companyname|| "",
        Address: FormsData.Address|| "",
        country: FormsData.selectedCounty|| "",
        Phone: FormsData.Phone|| "",
        Mobile: FormsData.Mobile|| "",
        transportationtype: FormsData.transportation|| [],
        Experience:FormsData.Ex|| "",
        description:FormsData.des|| "",
        role: "Forwarder",
       
      });

      toast("Your profile updated successfully!")
    } else {
      console.error("No document found for user ID:", user.uid);
    }
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
