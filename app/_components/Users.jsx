"use client"
import React,{useState,useEffect} from 'react'
import { collection, onSnapshot, query,where,getDocs} from 'firebase/firestore';
import { db,auth} from '@/config/firebaseConfig';
import { useRouter } from 'next/navigation';
import UserCard from './UserCard';

const Users = ({userData, setSelectedChatroom}) => {
  const[loading,setLoading]=useState(false);
  const[UserChatrooms,setUserChatrooms]=useState([])
  const router=useRouter()
  useEffect(() => {
    if (!userData?.uid) {
      console.log('userData.uid is undefined');
      return;
    }
  
  
    setLoading(true);
    const chatroomsQuery = query(
      collection(db, 'chatrooms'),
      where('users', 'array-contains', userData.uid) 
    );
  
    const unsubscribeChatrooms = onSnapshot(
      chatroomsQuery,
      (snapshot) => {
        const chatrooms = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUserChatrooms(chatrooms);
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching chatrooms:', error);
        setLoading(false);
      }
    );
  
    return () => unsubscribeChatrooms();
  }, [userData]);

  const openChat = async (chatroom) => {
    const data = {
      id: chatroom.id,
      myData: userData,
      otherData: chatroom.usersData,
    }
    setSelectedChatroom(data);
}
  
  return (
    <div className='shadow-lg h-screen overflow-auto mt-4 mb-20'>
      <h2 className='text-center font-bold text-gray-800'>Chats</h2>
     {UserChatrooms.map((chatroom)=>{
      console.log(chatroom.usersData.Commodity)
      return(  <div key={chatroom.id} onClick={()=>{openChat(chatroom)}}>
        <UserCard name={chatroom.usersData?.Commodity || 'Unknown Commodity'}  latestMessage={chatroom.lastMessage}/>
             </div>)
     }
    
)}
     
     </div>
  )
}

export default Users
