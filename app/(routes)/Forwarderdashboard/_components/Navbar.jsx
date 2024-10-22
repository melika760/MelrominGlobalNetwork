"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { MessageSquareText, ReceiptText, ScrollText, Tags, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const dashboardMenu=[
        {
            id:1,
            name:"Profile",
            path:"/Forwarderdashboard/profile",
            icon:User
        },
        {
            id:2,
            name:"Qoutes",
            path:"/Forwarderdashboard/qoutes",
            icon:ReceiptText
        },
        {
            id:3,
            name:"Chat",
            path:"/Forwarderdashboard/chat",
            icon:MessageSquareText
        },
        {
            id:4,
            name:"Contract & Payment",
            path:"/Forwarderdashboard/contract",
            icon:ScrollText
        },
     
    ]
    const path=usePathname()
    const[activepath,setactivepath]=useState(path)
    useEffect(()=>{
       path&&setactivepath(path)
    },[path])
  return (
    <div className='p-5 py-14 '>
        <div><Image src={"/logo4.png"} height={150} width={150} alt='LOGO'/>
        </div>
      <div className='mt-5 flex flex-col gap-4'>
        {dashboardMenu.map((item,index)=>(
            <Link href={item.path} key={index}>
             <Button className={`w-full flex gap-2 justify-start hover:bg-blue-100 scale-95 hover:scale-100 transition-allease-in-out ${activepath===item.path && "text-primary bg-blue-100"}`} variant="ghost">
             <item.icon/>{item.name}</Button>
            </Link>
           
        ))}
      </div>
    </div>
  )
}

export default Navbar
