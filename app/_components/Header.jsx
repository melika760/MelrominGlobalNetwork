"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth} from '@/config/firebaseConfig'
import { signOut } from 'firebase/auth'
import { UserCircle2 } from 'lucide-react'
import globalapi from '../_utils/globalapi'
import { useRouter } from 'next/router'


const Header = () => {
    const [user]=useAuthState(auth)
    const [path,setpath]=useState("")
    useEffect(()=>{
     if(user){
      globalapi.getUsers(user).then((userData)=>{
        if(userData.length>0){
          const role=userData[0].role;
          if(role==="Supplier"){
            setpath("/dashboard")
          }else if(role==="Forwarder"){
            setpath("/Forwarderdashboard")
          }
        }
      })
     }
    },[user])

  return (
<div className='flex items-center justify-between p-4 shadow-sm'>
  <div className='flex items-center gap-10'>
  <Image src="/logo.png" width={150} height={70} className='object-contain mt-5 md:w-[150px] w-[110px]'/>
  </div>
  {user?<div className='flex justify-start space-x-0'><Button variant={"ghost"} onClick={()=>signOut(auth)}>Logout</Button><Link href={path}><UserCircle2 className='mt-2 text-primary'/></Link></div>:<div className='flex justify-between gap-3'>
  <Link href={"/sign-in"}><Button variant={"ghost"} className="sm:text-sm  text-gray-800">Login</Button></Link>
  <span className='text-[#6930c3] text-xl'>|</span>
<Link href="/sign-up"><Button variant={"ghost"} className="sm:text-sm text-gray-800 ">Signup</Button></Link>

</div>}

</div>
)

}

export default Header
