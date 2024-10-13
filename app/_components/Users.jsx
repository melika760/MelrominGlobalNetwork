"use client"
import React,{useState,useEffect} from 'react'
import { collection, onSnapshot, query,where,getDocs, orderBy} from 'firebase/firestore';
import { db,auth} from '@/config/firebaseConfig';
import { useRouter } from 'next/navigation';
import UserCard from './UserCard';
import moment from 'moment';
import Image from 'next/image';

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
      where('users', 'array-contains', userData.uid),orderBy("timestamp","desc") 
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
const formatTimeAgo = (timestamp) => {
  const date = timestamp?.toDate();
  const momentDate = moment(date);
  return momentDate.fromNow();
};
  return (
    <div className='shadow-lg h-screen overflow-auto mt-4 mb-20'>
      <h2 className='text-center font-bold text-blue-800 text-xl'>Chats</h2>
     {UserChatrooms.map((chatroom)=>{
      return(  <div key={chatroom.id} onClick={()=>{openChat(chatroom)}}>
        <UserCard name={chatroom.usersData?.Commodity || 'Unknown Commodity'} time={formatTimeAgo(chatroom.timestamp)} latestMessage={chatroom.lastMessage}/>
             </div>)
     }
    
)}
{UserChatrooms.length==0 &&  <div className="flex flex-col justify-center text-center items-center mt-8 ">
                      <Image src="/Chat.JPG" className='object-contain rounded-xl' width={300} height={100}/>
                        <p className='text-center text-gray-500'>No Chat available.</p>
                    </div>}
     
     </div>
  )
}

export default Users
