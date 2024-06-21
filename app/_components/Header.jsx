"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/config/firebaseConfig'
import { signOut } from 'firebase/auth'
import { UserCircle2 } from 'lucide-react'

const Header = () => {
    const Menu=[
    {
        id:1,
        name:"Home",
        path:"/"
    },
    {
        id:2,
        name:"About Us",
        path:"/"
    },
    {
        id:3,
        name:"Contact Us",
        path:"/"
    },
    ]
    const [user]=useAuthState(auth)
  return (
<div className='flex items-center justify-between p-4 shadow-sm'>
  <div className='flex items-center gap-10'>
  <Image src="/logo.svg" width={180} height={80}/>
    <ul className='md:flex gap-8 hidden'>
    {Menu.map((item,index)=>(
        <Link href={item.path} key={index}>
        <li className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out'>{item.name}</li></Link>
        
    ))}
    </ul>
  </div>
  {user?<div className='flex justify-between gap-3'><Button variant={"ghost"} onClick={()=>signOut(auth)}>Logout</Button><Link href={"/dashboard"}><UserCircle2 className='mt-2 text-primary'/></Link></div>:<div className='flex justify-between gap-3'>
  <Link href={"/sign-in"}><Button variant={"ghost"}>Login</Button></Link>
  
<Link href="/sign-up"><Button>Create Account</Button></Link>

</div>}

</div>
)

}

export default Header
