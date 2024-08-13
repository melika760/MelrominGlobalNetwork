import { Input } from '@/components/ui/input'
import { CalendarIcon, Paperclip, ScrollText, Send } from 'lucide-react'
import React, { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"

const MessageInput = () => {
  const[date,setDate]=useState(Date())
  return (
    <div className='flex items-center p-4 border-t border-gray-200'>
    <Paperclip className='text-gray-500 cursor-pointer mr-2 text-xs'/>
    <Sheet>
  <SheetTrigger><h3 className='text-primary'><ScrollText className='text-gray-500 cursor-pointer mr-2 text-xs'/></h3></SheetTrigger>
  <SheetContent className="snap-y   md:h-[500px] h-[400px]" side="top">
    <SheetHeader>
      <SheetTitle className="text-center items-center">Ready for making contract?</SheetTitle>
      <SheetDescription className="m-12 p-12">
      <Label htmlfor="TotalAmount">Enter Final Agreed Amount:<Input placeholder="$..." type="text" className="m-3"/></Label>
      <Label htmlfor="DeliveryDate">Select Agreed Delivery Date:<Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal m-3",
            !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover></Label>
    
      </SheetDescription>
      
    </SheetHeader>
  </SheetContent>
</Sheet>
    
  <Input type="text" className="flex-1 border-none p-2 outline-none" placeholder="Type your message"/>
  <Send className='text-gray-500 cursor-pointer ml-2'/>
    </div>
  )
}

export default MessageInput
