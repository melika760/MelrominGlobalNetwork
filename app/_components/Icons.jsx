import { Globe } from 'lucide-react'
import React from 'react'

const Icons = () => {
  return (
    <div className='mt-7 grid grid-cols-3 gap-4'>
      <div className='text-center items-center flex flex-col space-y-5'>
        <h2>Global Reach</h2>
        <div className=' w-[70px] rounded-full h-[70px] items-center flex flex-col justify-center border-purple-950 border-2'>
        <Globe size={28} color="#3b0764" strokeWidth={1.5} />
        </div>
        
      </div>
    </div>
  )
}

export default Icons
