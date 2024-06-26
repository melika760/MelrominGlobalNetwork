"use client";
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Countries } from '@/app/constants/constants';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronsUpDown, LoaderPinwheel } from 'lucide-react';
import useInputs from '@/app/_components/_hooks/use-inputs';
import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore"; // Updated imports
import { auth, db } from '@/config/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import SupForms from '@/app/_components/Supforms';

const EditProfile = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
 const[user]=useAuthState(auth)

 const SupplierProfile = async (FormsData) => {
  console.log("FormsData:", FormsData); // Log to check FormsData
  setLoading(true);

  if (!user) {
    console.error("User is not authenticated");
    setLoading(false);
    return;
  }

  try {
    const q = query(collection(db, "Suppliers"), where("userId", "==", user.uid));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const docRef = doc(db, "Suppliers", userDoc.id);
      await updateDoc(docRef, {
        name: FormsData.companyname || "", // Ensure default value if undefined
        Address: FormsData.Address || "",
        country: FormsData.selectedCounty || "",
        Phone: FormsData.Phone || "",
        Mobile: FormsData.Mobile || "",
        transportationtype: FormsData.transportation || [],
        role: "Supplier",
      });

      console.log("Document updated with ID:", userDoc.id);
    } else {
      console.error("No document found for user ID:", user.uid);
    }
  } catch (error) {
    console.error("Error updating document:", error);
  }

  setLoading(false);
  router.replace("/dashboard/profile");
};


  return (<div className='md:p-10 p-2'>
       <h2 className='text-3xl font-extrabold text-primary mb-10'>Edit Profile</h2>
  <SupForms onAdd={SupplierProfile} loading={loading}/>
  </div>
   
  );
};

export default EditProfile;
