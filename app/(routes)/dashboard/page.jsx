"use client"
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import { LogOut } from 'lucide-react'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      dashboard
      <LogoutLink><LogOut/></LogoutLink>
    </div>
  )
}

export default Dashboard
