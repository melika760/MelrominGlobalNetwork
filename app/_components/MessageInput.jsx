import { Input } from '@/components/ui/input'
import { Image, Paperclip, ScrollText, Send, Smile } from 'lucide-react'
import { storage,db, auth } from '@/config/firebaseConfig'
import{ ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from '@/components/ui/label'
import EmojiPicker from 'emoji-picker-react';
import { collection, addDoc, getDoc, getDocs, query, where } from 'firebase/firestore'
import useInputs from './_hooks/use-inputs'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'sonner'

const MessageInput = ({ sendMessage, message, setMessage,image,setImage,selectedChatroom}) => {
  const[date,setDate]=useState(Date())
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); 
  const[contractimg,setContractImg]=useState(null)
  const[disable,setdisable]=useState(false)
 const{
  value:enteredAmount,
  ValueIsvalid:AmountIsValid,
  hasError:AmountHasError,
  Changehandler:AmountChange,
  Blurhandler:AmountBlur
  }=useInputs(value=>value.trim()!="")
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
  const [user]=useAuthState(auth)
  useEffect(() => {
    const checkExistingContract = async () => {
      if (!selectedChatroom || !user) return;
      try {
        const q = query(
          collection(db, 'contracts'),
          where('Commodity', '==', selectedChatroom.otherData.Commodity),
          where('users', 'array-contains', user.uid)
        );
  
        const querySnapshot = await getDocs(q);
        console.log('Query snapshot:', querySnapshot);
        if (!querySnapshot.empty) {
          setdisable(true);
        
        } else {
          setdisable(false)
        }
      } catch (e) {
        console.error('Error checking contract existence: ', e);
      }
    };
  
    checkExistingContract();
  }, [selectedChatroom, user]);
  
  const handleFileChanges = (e) => {
    const selectedFile = e.target.files[0];
    setFile2(selectedFile);

    // Display image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleuploads = async () => {
    if (!file2) {
      console.error('No file selected.');
      return;
    }
  
    const storageRef = ref(storage, `Contracts/${file2.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file2);
  
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
       
        console.error('Error uploading file:', error.message);
      },
      () => {
        setTimeout(() => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              console.log('File available at', downloadURL);
              setFile2(null);
              setContractImg(downloadURL);
              submitContractData(downloadURL);
            })
            .catch((error) => {
              console.error('Error getting download URL:', error.message);
            });
        }, 1000);
      }
    );
  };
  

  const submitContractData = async (imageURL) => {
    try {
      const docRef = await addDoc(collection(db, 'contracts'), {
        finalAmount: enteredAmount,
        agreedDate: date,
        contractImageURL: imageURL,
        createdAt: new Date(),
        Commodity:selectedChatroom.otherData.Commodity,
        users:[selectedChatroom.otherData.Supplier,selectedChatroom.otherData.userfwd],
        Status:selectedChatroom.otherData.Status,
        userId:user.uid
      })
      toast("Your contract is submitted successfully!")
      console.log('Contract submitted with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding contract: ', e)
    }
  }
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
  const handleEmojiClick = (emojiData, event) => {
    setMessage((prevMessage) => prevMessage + emojiData.emoji);
  };
  return (
    <div className='flex items-center p-4 border-t border-gray-200 relative'>
   
 {image ? <Image className='text-green-600 cursor-pointer mr-2 text-xs'/>: <Paperclip className='text-gray-500 cursor-pointer mr-2 text-xs' onClick={() => document.getElementById('my_modal_3').showModal()}/>}
  {!disable &&  <Sheet>
  <SheetTrigger><h3 className='text-primary'><ScrollText className='text-gray-500 cursor-pointer mr-2 text-xs'/></h3></SheetTrigger>
  <SheetContent className="snap-y   md:h-[800px] h-[400px]" side="top">
    <SheetHeader>
      <SheetTitle className="text-center items-center">Ready for making contract?</SheetTitle>
      <SheetDescription className="m-12 p-12">
      <Label htmlFor="TotalAmount">Enter Final Agreed Amount:<Input placeholder="$..." type="text" className="m-3 mt-5 mb-5"onChange={AmountChange} onBlur={AmountBlur} value={enteredAmount}/></Label>
      <Label htmlFor="DeliveryDate">Select Agreed Delivery Date:
      </Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal m-3 mt-5 mb-5",
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
              onSelect={(newDate) => {
                setDate(newDate);
              }}
              initialFocus
          />
        </PopoverContent>
      </Popover>
      <div className='space-y-2'>   
       <Label>
      Upload your Official Contract:
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Uploaded"
          className=" max-h-60 w-auto object-cover rounded-md border border-gray-200 mb-4"
        />
      )}
      <input type="file" className="m-3 mt-5 block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 focus:outline-none outline-none"
    accept="image/*" 
    onChange={handleFileChanges}
    />
    </Label>
 
           <div 
        onClick={()=>handleuploads()} 
        className="btn btn-sm btn-primary w-[200px]  cursor-pointer float-end text-center py-2 mt-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
      >
        Submit contract
      </div>
  
      </div>
   
      </SheetDescription>
      
    </SheetHeader>
  </SheetContent>
</Sheet>} 
{disable && <h3 className='text-primary'><ScrollText className='text-green-500 cursor-pointer mr-2 text-xs'/></h3>}
  

<button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
        <Smile className='text-gray-500 cursor-pointer mr-2 text-xs'/>
      </button>
  <Input type="text" className="flex-1 border-none p-2 outline-none" placeholder="Type a message..." value={message}
        onChange={(e) => setMessage(e.target.value)}/>
  <Send className='text-gray-500 cursor-pointer ml-2' onClick={() => sendMessage()}/>
  {showEmojiPicker && (
        <div className='absolute right-0 bottom-full p-2'>
          <EmojiPicker
            onEmojiClick={handleEmojiClick}
            disableAutoFocus={true}
          />
        </div>
      )}
   
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
        onClick={()=>handleUpload()} 
        className="btn cursor-pointer btn-sm btn-primary text-center w-full py-2 mt-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
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
