import {UserCircle2Icon } from 'lucide-react';
import React from 'react'

const UserCard = ({name, latestMessage, time }) => {
  return (
    <div className="flex items-center p-4 border-b  border-gray-200 relative hover:cursor-pointer">
        <div className="flex-1">
          <div className="flex items-center space-x-1">
            <UserCircle2Icon className='text-blue-950'/>
              <h2 className="text-lg font-semibold uppercase text-blue-950">{name}</h2>
           </div>
           <div className='flex justify-between flex-col w-[55%]'>
           <p className="text-gray-500 truncate text-sm">{latestMessage}</p>
           <p className='text-gray-500 text-end text-sm'>{time}</p>
           </div>
       
       </div>

    

  </div>
);
}

export default UserCard
