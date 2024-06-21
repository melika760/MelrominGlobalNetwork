"use client"
import { auth } from '@/config/firebaseConfig';
import { signOut } from 'firebase/auth';
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Profile from './profile/page';




const Dashboard = () => {
  const [user]=useAuthState(auth)
  const router=useRouter()
//  if(!user){
// router.push("/sign-up")
//  }
  return (
    <div>
      
    </div>
  )
}

export default Dashboard
