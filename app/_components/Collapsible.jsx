"use client"
import { Button } from '@/components/ui/button';
import React, { useRef, useState } from 'react'

const Collapsible = ({title,children}) => {
    const[Isopen,setIsOpen]=useState(false)
    const contentRef = useRef(null);
    const toggle=()=>{
        setIsOpen(!Isopen)
    }
  return (
<div className="w-[200px] p-10">
            <Button 
                className="w-[300px] py-2 px-4  focus:outline-none focus:ring focus:ring-blue-300 transition duration-200" variant={"ghost"}
                onClick={toggle}
            >
                {title}
            </Button>
            <div
                ref={contentRef}
                className="overflow-hidden transition-max-height duration-300 ease-out"
                style={{
                    maxHeight: Isopen ? `${contentRef.current.scrollHeight}px` : '0px',
                }}
            >
                <div className="py-2 px-4">
                    {children}
                </div>
            </div>
        </div>
  )
}

export default Collapsible
