"use client"
import React, { useState, useEffect } from 'react';
import { collection, addDoc, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/config/firebaseConfig';

const Chat = ({ supplierId }) => {
  const [user] = useAuthState(auth);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (!user || !supplierId) return;

    const q = query(
      collection(db, 'messages'),
      where('users', 'array-contains', user.uid),
      orderBy('createdAt')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [user, supplierId]);

  const sendMessage = async () => {
    if (newMessage.trim() === '') return;

    await addDoc(collection(db, 'messages'), {
      text: newMessage,
      createdAt: new Date(),
      users: [user.uid, supplierId],
      from: user.uid
    });

    setNewMessage('');
  };

  return (
    <div className="h-[100vh] flex flex-col">
      <div className="flex-1 overflow-y-scroll p-4">
        {messages.map(message => (
          <div key={message.id} className={`mb-4 ${message.from === user.uid ? 'sent' : 'received'}`}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <form className="flex p-4">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </form>
    </div>
  );
};

export default Chat;

