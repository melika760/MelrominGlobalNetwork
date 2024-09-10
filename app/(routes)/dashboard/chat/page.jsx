"use client"
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/config/firebaseConfig';
import Users from '@/app/_components/Users';
import Chatroom from '@/app/_components/Chatroom';

const chat = () => {
  const [user] = useAuthState(auth);
  const [selectedChatroom, setSelectedChatroom] = useState(null);
 return(<div className='flex h-screen'>
<div className='flex-shrink-0 w-3/12'>
<Users userData={user} setSelectedChatroom={setSelectedChatroom}/>
</div>
<div className='flex-grow-0  w-9/12'>
<Chatroom user={user} selectedChatroom={selectedChatroom}/>
</div>
 </div>)
};

export default chat
