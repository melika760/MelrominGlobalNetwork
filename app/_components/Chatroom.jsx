"use client"
import React, { useState, useEffect } from 'react';
import { collection, addDoc, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/config/firebaseConfig';
import MessageCard from './MessageCard';
import MessageInput from './MessageInput';

const Chatroom = ({user}) => {
const messages=[
  {
    sender:"ketty",
    id:1,
    content:"hey",
    time:"2 hours ago"
  },
  {
    sender:"Sam",
    id:2,
    content:"hey You",
    time:"2 hours ago"
  },
]
  return(<div className='flex flex-col h-screen'>
    <div className='flex-1 overflow-y-auto p-10'>
      {messages.map((message)=>(
        <MessageCard key={message.id} message={message} user={"Sam"}/>
      ))}
    </div>
     <MessageInput/>
  </div>
   
  );
}

export default Chatroom
