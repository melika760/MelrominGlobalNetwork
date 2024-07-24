import React from 'react'

const UserCard = ({name, latestMessage, time }) => {
  return (
    <div className="flex items-center p-4 border-b border-gray-200 relative hover:cursor-pointer">
        <div className="flex-1">
          <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{name}</h2>
           </div>
          <p className="text-gray-500 truncate">{latestMessage}</p>
          <p>{time}</p>
       </div>

    

  </div>
);
}

export default UserCard
