"use client"
import { auth } from '@/config/firebaseConfig'
import {  LogOut, UserCircle2Icon } from 'lucide-react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { signOut } from 'firebase/auth'
  
const Dashboardheader = () => {
    const[user]=useAuthState(auth)
  return (
    <div className='float-right text-primary flex items-center mr-5 mt-5 cursor-pointer'>
        
        <DropdownMenu>
  <DropdownMenuTrigger><UserCircle2Icon className='text-xl'/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Shipping Inquiry</DropdownMenuItem>
    <DropdownMenuItem>Chat</DropdownMenuItem>
    <DropdownMenuItem>Contract</DropdownMenuItem>
    <DropdownMenuItem>Payment</DropdownMenuItem>
    <DropdownMenuItem onClick={()=>signOut(auth)}>Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
    </div>
  )
}

export default Dashboardheader
