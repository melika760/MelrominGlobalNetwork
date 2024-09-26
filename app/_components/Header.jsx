"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth} from '@/config/firebaseConfig'
import { signOut } from 'firebase/auth'
import { UserCircle2 } from 'lucide-react'


const Header = () => {
    const [user]=useAuthState(auth)

  return (
<div className='flex items-center justify-between p-4 shadow-sm'>
  <div className='flex items-center gap-10'>
  <Image src="/logo.png" width={150} height={70} className='object-contain mt-5 md:w-[150px] w-[110px]'/>
  </div>
  {user?<div className='flex justify-between gap-3'><Button variant={"ghost"} onClick={()=>signOut(auth)}>Logout</Button><Link href={"/dashboard"}><UserCircle2 className='mt-2 text-primary'/></Link></div>:<div className='flex justify-between gap-3'>
  <Link href={"/sign-in"}><Button variant={"ghost"}>Login</Button></Link>
  
<Link href="/sign-up"><Button>Create Account</Button></Link>

</div>}

</div>
)

}

export default Header
