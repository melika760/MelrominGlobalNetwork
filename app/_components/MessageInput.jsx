import { Input } from '@/components/ui/input'
import { CalendarIcon, Paperclip, ScrollText, Send } from 'lucide-react'
import { storage } from '@/config/firebaseConfig'
import{ ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
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

const MessageInput = ({ sendMessage, message, setMessage,image,setImage }) => {
  const[date,setDate]=useState(Date())
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Display image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      console.error('No file selected.');
      return;
    }

    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error('Error uploading file:', error.message);
      },
      () => {
        // Upload complete, get download URL and log it
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          // Reset file state and update message with download URL
          setFile(null);
          setImage(downloadURL);
          // Clear image preview
          setImagePreview(null);
          document.getElementById('my_modal_3').close()
        });
      }
    );
  };
  return (
    <div className='flex items-center p-4 border-t border-gray-200'>
    <Paperclip className='text-gray-500 cursor-pointer mr-2 text-xs' onClick={() => document.getElementById('my_modal_3').showModal()}/>
    <Sheet>
  <SheetTrigger><h3 className='text-primary'><ScrollText className='text-gray-500 cursor-pointer mr-2 text-xs'/></h3></SheetTrigger>
  <SheetContent className="snap-y   md:h-[500px] h-[400px]" side="top">
    <SheetHeader>
      <SheetTitle className="text-center items-center">Ready for making contract?</SheetTitle>
      <SheetDescription className="m-12 p-12">
      <Label htmlFor="TotalAmount">Enter Final Agreed Amount:<Input placeholder="$..." type="text" className="m-3"/></Label>
      <Label htmlFor="DeliveryDate">Select Agreed Delivery Date:<Popover>
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
    
  <Input type="text" className="flex-1 border-none p-2 outline-none" placeholder="Type a message..." value={message}
        onChange={(e) => setMessage(e.target.value)}/>
  <Send className='text-gray-500 cursor-pointer ml-2' onClick={() => sendMessage()}/>
      <dialog id="my_modal_3" className="modal ">
  <div className="modal-box relative p-6 bg-white rounded-lg shadow-lg max-w-lg w-full">
    <form method="dialog" className="space-y-4">
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Uploaded"
          className="mx-auto max-h-60 w-auto object-cover rounded-md border border-gray-200 mb-4"
        />
      )}
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleFileChange} 
        className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 focus:outline-none"
      />
      <div 
        onClick={handleUpload} 
        className="btn btn-sm btn-primary w-full py-2 mt-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
      >
        Upload
      </div>
      {uploadProgress > 0 && (
        <progress value={uploadProgress} max="100" className="progress progress-primary w-full h-3 rounded-lg mt-2"></progress>
      )}
    </form>
    <button
      onClick={() => document.getElementById('my_modal_3').close()}
      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-500 hover:text-gray-700 transition-transform transform hover:scale-110"
    >
      ✕
    </button>
  </div>
</dialog>


    </div>
  )
}

export default MessageInput
