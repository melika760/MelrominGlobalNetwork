import { Globe, ShieldCheck, Truck } from 'lucide-react'
import React from 'react'

const Icons = () => {
    const Items=[
        {
            Tiltle:'Worldwide Network',
            Icon:Globe
        },
        {
            Tiltle:'Financial Security',
            Icon:ShieldCheck,
        },
        {
            Tiltle:'Reliable Delivery',
            Icon:Truck,
        } 
    ]
  return (
    <div className='mt-9 grid grid-cols-3 gap-4'>
          {Items.map((item)=>(<div className='text-center items-center flex flex-col space-y-5'>
        <div className=' bg-[#6930c3] w-[70px] rounded-full h-[70px] items-center flex flex-col justify-center border-[#6930c3] border-2  hover:scale-105  shadow'>
        <item.Icon size={32} color="#ffff" strokeWidth={1.5} />
        
        </div>
        <h2 className='text-gray-800 font-bold sm:text-sm'>{item.Tiltle}</h2>
      </div>))}
      
    </div>
  )
}

export default Icons
