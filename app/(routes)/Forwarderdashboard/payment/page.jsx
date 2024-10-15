"use client"
import globalapi from '@/app/_utils/globalapi';
import { auth } from '@/config/firebaseConfig';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';

const payment = () => {
    const [user] = useAuthState(auth);
const[data,setdata]=useState([])
    useEffect(() => {
      const fetchData = async () => {
        if (user) {
          try {
            const data = await globalapi.getContracts(user);
            setdata(data)
          } catch (error) {
            console.log(error);
          }
        }
      };
      fetchData();
    }, [user]);
  return (
    <div>
      
    </div>
  )
}

export default payment
