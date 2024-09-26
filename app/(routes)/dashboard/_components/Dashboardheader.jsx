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
import { useRouter } from 'next/navigation'
import Link from 'next/link'
  
const Dashboardheader = () => {
    const[user]=useAuthState(auth)
    const router=useRouter()
    const logout=()=>{
      signOut(auth)
      router.replace("/")
    }
  return (
    <div className='float-right text-primary flex items-center mr-5 mt-5 cursor-pointer'>
        
        <DropdownMenu>
  <DropdownMenuTrigger><UserCircle2Icon className='text-xl'/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
   <Link href="/dashboard/profile"><DropdownMenuItem>Profile</DropdownMenuItem> </Link> 
   <Link href="/dashboard/Shipping"><DropdownMenuItem>Shipping Inquiry</DropdownMenuItem></Link>
   <Link href="/dashboard/chat"><DropdownMenuItem>Chat</DropdownMenuItem></Link>
   <Link href="/dashboard/contract"><DropdownMenuItem>Contract</DropdownMenuItem></Link>
   <Link href="/dashboard/payment"> <DropdownMenuItem>Payment</DropdownMenuItem></Link>
    <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
    </div>
  )
}

export default Dashboardheader
