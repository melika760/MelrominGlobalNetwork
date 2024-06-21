import React from 'react'
import SideNavbar from './_components/SideNavbar'
import Dashboardheader from './_components/Dashboardheader'

const Dashboardlayout = ({children}) => {
  return (
    <div>
        <div className='hidden md:block md:w-64 bg-slate-50 h-screen fixed'>
            <SideNavbar/>
        </div>
        <div className='md:ml-64'>
        <Dashboardheader/>
        {children}
        </div>
     
    </div>
  )
}

export default Dashboardlayout
