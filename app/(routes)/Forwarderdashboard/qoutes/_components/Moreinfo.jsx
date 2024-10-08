import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/config/firebaseConfig';
import { collection, query, where, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import moment from 'moment';
import { toast } from 'sonner';
const Moreinfo = ({ quote, onBack }) => {
  const router = useRouter();
const[user]=useAuthState(auth)
const formatTimeAgo = (timestamp) => {
  if (!timestamp || !timestamp.toDate) {
    return "No timestamp available";
  }
  const date = timestamp.toDate();
  const momentDate = moment(date);
  return momentDate.calendar();
};
  const startChat = async () => {
    try {
      // Sort the user IDs to ensure consistency
      const sortedUsers = [quote.SupplierId, quote.forwarderId].sort();
  
      // Query for an existing chatroom with both users and the same commodity
      const q = query(
        collection(db, 'chatrooms'),
        where('users', '==', sortedUsers),  // Match both users
        where('usersData.Commodity', '==', quote.Commodity)  // Match commodity
      );
      
      const querySnapshot = await getDocs(q);
      let chatroomId;
  
      // Check if chatroom exists
      if (!querySnapshot.empty) {
        querySnapshot.forEach(doc => {
          chatroomId = doc.id;  // Existing chatroom found
        });
      }
  
      if (!chatroomId) {
        // Create a new chatroom if none exists
        const chatroomData = {
          users: sortedUsers,  // Store the sorted array of users
          usersData: {
            Supplier: quote.SupplierId,
            userfwd: quote.forwarderId,
            Commodity: quote.Commodity,
            Status: "Active"
          },
          timestamp: serverTimestamp(),
          lastMessage: null
        };
  
        const chatroomRef = await addDoc(collection(db, 'chatrooms'), chatroomData);
        chatroomId = chatroomRef.id;
      }
  toast("Your chat is already exist!")
      // Route to the chat page with the chatroomId
      router.replace(`/Forwarderdashboard/chat?chatroomId=${chatroomId}`);
    } catch (error) {
      console.error('Error creating or checking chatroom:', error);
      alert(error.message);
    }
  };
  
  
const dates=formatTimeAgo(quote.date)
  return (
    <div className='md:p-12'>
      <ArrowLeft className='text-primary cursor-pointer' onClick={onBack}/>
      <div className='p-4 sm:p-10 max-w-4xl mx-auto'>
        <div className='flex items-center'>
          <h2 className='text-2xl sm:text-3xl font-extrabold text-blue-800 mb-6 text-center'>More Data</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-lg font-semibold'>Dimension:</h3>
            <p className='text-blue-900 mb-4'>{quote.Dimenssion}</p>
            <h3 className='text-lg font-semibold'>Gross Weight:</h3>
            <p className='text-blue-900 mb-4'>{quote.GrossWeight}</p>
            <h3 className='text-lg font-semibold'>Volume Weight:</h3>
            <p className='text-blue-900 mb-4'>{quote.VolumeWeight}</p>
            <h3 className='text-lg font-semibold'>HS Code:</h3>
            <div className='overflow-auto max-h-32 break-words'>
              <p className='text-blue-900 mb-4'>{quote.HS}</p>
            </div>
            <h3 className='text-lg font-semibold'>Special Condition:</h3>
            <p className='text-blue-900 mb-4'>{quote.Special}</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-lg font-semibold'>Temperature:</h3>
            <p className='text-blue-900 mb-4'>{quote.Temprature}</p>
            <h3 className='text-lg font-semibold'>Switch:</h3>
            <p className='text-blue-900 mb-4'>{quote.Switch}</p>
            <h3 className='text-lg font-semibold'>Transit:</h3>
            <p className='text-blue-900 mb-4'>{quote.transit}</p>
            <h3 className='text-lg font-semibold'>Date:</h3>
            <p className='text-blue-900 mb-4'>{dates}</p>
            <h3 className='text-lg font-semibold mt-6'>Do you want to start chat?</h3>
            <Button className='mt-4' onClick={startChat}>Click here!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Moreinfo;
