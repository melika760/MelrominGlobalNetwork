"use client"
import React, { useState, useEffect } from 'react';
import { collection, addDoc, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/config/firebaseConfig';
import Users from '@/app/_components/Users';
import Chatroom from '@/app/_components/Chatroom';

const Chats = () => {
  const [user] = useAuthState(auth);
 return(<div className='flex h-screen'>
<div className='flex-shrink-0 w-3/12'>
<Users user={user}/>
</div>
<div className='flex-grow-0 w-3/12'>
<Chatroom/>
</div>
 </div>)
};

export default Chats;

