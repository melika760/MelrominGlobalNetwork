import { CheckCircle, Clock, CreditCard, Tags } from 'lucide-react'
import React from 'react'

const Icons = () => {
const perks=[
    {
        name:"Fast & Easy",
        id:1,
        Icon:Clock,
    },
    {
        name:"Trustworthy",
        id:2,
        Icon:CheckCircle,
    },
    {
        name:"Great Price",
        id:3,
        Icon:Tags,
    },
    {
        name:"Secure Payment",
        id:4,
        Icon:CreditCard,
    },
]
  return (
    <div className="grid grid-cols-4 gap-y-5 sn:grid-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-5 bg-gray-100 mt-20">
{perks.map((perk)=>(
  <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center my-10">
    <div className="md:flex-shrink-0 flex justify-center">
      <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-950">{<perk.Icon className="w-1/3 h-1/3"/>}</div>

    </div>
    <div className="mt-3 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
<h3 className="text-base md:font-medium text-gray-900">{perk.name}</h3>

    </div>
  </div>
))}
</div>
  )
}

export default Icons
