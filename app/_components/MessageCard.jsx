import moment from 'moment';
import React from 'react'

const MessageCard = ({message,me}) => {
    const isMessagefromMe=message.sender===me.uid;
    const formatTimeAgo = (timestamp) => {
      const date = timestamp?.toDate();
      const momentDate = moment(date);
      return momentDate.fromNow();
    };
  return (
    <div key={message.id} className={`flex mb-4 ${isMessagefromMe?"justify-end":"justify-start"}`}>
        <div className={` ${isMessagefromMe?"ml-2 mr-2":"mr-2"}`}>
            <div className={`text-white p-2 rounded-md ${isMessagefromMe?"bg-blue-500 self-end":"bg-purple-500 self-start"}`}>
            {
          message.image && <img src={message.image} className='max-h-60 w-60 mb-4' />
        }
                <p>{message.content}</p>
                <div className='text-xs text-gray-200'>{formatTimeAgo(message.time)}</div>
            </div>
        </div>
    </div>
  )
}

export default MessageCard
