import React from 'react'

const MessageCard = ({message,user}) => {
    const isMessagefromMe=message.sender===user;
  return (
    <div key={message.id} className={`flex mb-4 ${isMessagefromMe?"justify-end":"justify-start"}`}>
        <div className={` ${isMessagefromMe?"ml-2 mr-2":"mr-2"}`}>
            <div className={`text-white p-2 rounded-md ${isMessagefromMe?"bg-blue-500 self-end":"bg-purple-500 self-start"}`}>
                <p>{message.content}</p>
                <div className='text-xs text-gray-200'>{message.time}</div>
            </div>
        </div>
    </div>
  )
}

export default MessageCard
