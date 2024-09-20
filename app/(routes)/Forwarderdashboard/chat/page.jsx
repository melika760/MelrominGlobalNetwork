"use client"
import React, { useState,useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/config/firebaseConfig';
import Users from '@/app/_components/Users';
import Chatroom from '@/app/_components/Chatroom';
import { useSearchParams } from 'next/navigation';

const Chats = () => {
  const [user] = useAuthState(auth);
  const [selectedChatroom, setSelectedChatroom] = useState(null);
  const searchParams = useSearchParams();
  const chatroomId = searchParams.get('chatroomId');
  useEffect(() => {
    if (chatroomId) {
      setSelectedChatroom(chatroomId);
    }
  }, [chatroomId]);
 return(<div className='flex h-screen'>
<div className='flex-shrink-0 w-3/12'>
<Users userData={user} setSelectedChatroom={setSelectedChatroom}/>
</div>
<div className='flex-grow-0  w-9/12'>
<Chatroom user={user} selectedChatroom={selectedChatroom}/>
</div>
 </div>)
};

export default Chats;

