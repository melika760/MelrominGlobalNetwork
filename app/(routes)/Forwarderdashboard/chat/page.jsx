"use client";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config/firebaseConfig";
import Users from "@/app/_components/Users";
import Chatroom from "@/app/_components/Chatroom";
import { useSearchParams } from "next/navigation";

const Chats = () => {
  const [user] = useAuthState(auth);
  const [selectedChatroom, setSelectedChatroom] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const searchParams = useSearchParams();
  const chatroomId = searchParams.get("chatroomId");

  // Check if the window is mobile-sized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile if width <= 768px
    };
    // Run on component mount
    handleResize();
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (chatroomId) {
      setSelectedChatroom(chatroomId);
    }
  }, [chatroomId]);

  return (
    <div className="flex h-screen">
      {/* If on mobile and no chatroom is selected, show users list */}
      {isMobile && !selectedChatroom && (
        <div className="w-full">
          <Users userData={user} setSelectedChatroom={setSelectedChatroom} />
        </div>
      )}

      {/* If on mobile and a chatroom is selected, show chatroom */}
      {isMobile && selectedChatroom && (
        <div className="w-full">
          <Chatroom user={user} selectedChatroom={selectedChatroom} />
        </div>
      )}

      {/* If not on mobile, show both users and chatroom */}
      {!isMobile && (
        <>
          <div className="flex-shrink-0 w-3/12">
            <Users userData={user} setSelectedChatroom={setSelectedChatroom} />
          </div>
          <div className="flex-grow w-9/12">
            <Chatroom user={user} selectedChatroom={selectedChatroom} />
          </div>
        </>
      )}
    </div>
  );
};

export default Chats;