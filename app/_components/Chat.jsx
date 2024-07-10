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
    <div className="chat-container">
      <div className="messages">
        {messages.map(message => (
          <div key={message.id} className={`message ${message.from === user.uid ? 'sent' : 'received'}`}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="new-message">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;

