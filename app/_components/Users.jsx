"use client"
import React,{useState,useEffect} from 'react'
import { collection, onSnapshot, query, addDoc, serverTimestamp,where,getDocs} from 'firebase/firestore';
import { db,auth} from '@/config/firebaseConfig';
import { useRouter } from 'next/navigation';
const Users = ({userData}) => {
  const[loading,setloading]=useState(false);
  const[users,setusers]=useState([])
  const router=useRouter()
  return (
    <div className='shadow-lg h-screen overflow-auto mt-4 mb-20'>
      
    </div>
  )
}

export default Users
