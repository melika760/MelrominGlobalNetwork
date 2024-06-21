"use client"
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Countries } from '@/app/constants/constants'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
 
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronsUpDown, LoaderPinwheel } from 'lucide-react'
import useInputs from '@/app/_components/_hooks/use-inputs'
import { useRouter } from 'next/navigation'
import {collection,addDoc} from "firebase/firestore"
import { auth, db } from '@/config/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'sonner'
import { Description } from '@radix-ui/react-dialog'
const ForwarderForm = () => {
  const {value:companyname,ValueIsvalid:NameIsvalid, hasError:NameHasError,Changehandler:NameChange,Blurhandler:NameBlur}=useInputs(value=>value.trim()!=="");
  const {value:Address,ValueIsvalid:AddressIsvalid, hasError:AddressHasError,Changehandler:AddressChange,Blurhandler:AddressBlur}=useInputs(value=>value.trim()!=="");
  const {value:Phone,ValueIsvalid:PhoneIsvalid, hasError:PhoneHasError,Changehandler:PhoneChange,Blurhandler:PhoneBlur}=useInputs(value=>value.length>10);
  const {value:Mobile,ValueIsvalid:MobileIsvalid, hasError:MobileHasError,Changehandler:MobileChange,Blurhandler:MobileBlur}=useInputs(value=>value.length>10);
  const {value:Ex,ValueIsvalid:ExIsvalid, hasError:ExHasError,Changehandler:ExChange,Blurhandler:ExBlur}=useInputs(value=>value.length>0);
  const {value:des,ValueIsvalid:desIsvalid, hasError:desHasError,Changehandler:desChange,Blurhandler:desBlur}=useInputs(value=>value.length>10);
  const [selectedCounty, setSelectedCountry] = useState(null);
const[open,setopen]=useState(false)
const[loading,setloading]=useState(false)
const[checkboxes,setselectedcheckbox]=useState({
  option1:false,
  option2:false,
  option3:false,
  option4:false,
})
const isAnyCheckboxChecked = Object.values(checkboxes).some(value => value);
const router=useRouter()
const[user]=useAuthState(auth)
const[transportation,settransportation]=useState([])
const handlecheckbox=(event)=>{
  const { id, checked,value } = event.target;
  setselectedcheckbox(prevState => ({
    ...prevState,
    [id]: checked,
  }));
  if (checked) {settransportation((prevSelected) => [...prevSelected, value])}else{
    settransportation(((prevSelected) =>
      prevSelected.filter((item) => item !== value)
    ))
  }
}
const ForwarderProfile=async(event)=>{
  setloading(true)
  event.preventDefault();
  
  if (!user) {
    console.error("User is not authenticated");
    return;
  }
  try {
    const docRef = await addDoc(collection(db, "Forwarders"), {
      name: companyname,
      Address: Address,
      country: selectedCounty,
      Phone: Phone,
      Mobile: Mobile,
      transportationtype: transportation,
      Experience:Ex,
      description:des,
      role: "Forwarder",
      userId: user.uid

    });
    toast("Your profile is ready!")
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
  setloading(false)
  router.replace("/dashboard")
}
  return (
    <form className='grid md:grid-cols-2 grid-cols-1 gap-11 w-full' onSubmit={ForwarderProfile}>
      <div className='w-full flex flex-col gap-5 mt-7 mr-10'>
  <label>
   Full Name: <Input type="text" placeholder="Enter your company name." className= {`${NameHasError && "border-red-500"} mt-2`} value={companyname} onChange={NameChange} onBlur={NameBlur}/>
   {NameHasError && <p className='mt-2 text-sm text-red-500'>Please enter your company name.</p>}
  </label>
  <label>
   Address: <Input type="text" placeholder="Enter your address." className={`${AddressHasError && "border-red-500"} mt-2`} value={Address} onChange={AddressChange} onBlur={AddressBlur}/>
   {AddressHasError && <p className='mt-2 text-sm text-red-500'>Please enter your address.</p>}
  </label>
  <div className='flex flex-col'>
  <label className='mb-2'>Country:</label>
<Popover open={open} onOpenChange={setopen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="md:w-[500px] w-[200px] justify-between text-gray-500"
        >
          {selectedCounty
            ? Countries.find((country) => country.value === selectedCounty)?.label
            : "Select Country..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
      <Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Countries">
      {Countries.map(country=>(
        <CommandItem key={country.label} value={country.value} onSelect={(currentValue) => {
          setSelectedCountry(currentValue === selectedCounty ? "" : currentValue)
          setopen(false)
        }}>{country.value}</CommandItem>
      ))}
      
     
    </CommandGroup>
  
  </CommandList>
</Command>
      </PopoverContent>
    </Popover>


<div className='mt-5'>
  <label htmlFor="Description" className="block text-md "> Description: </label>

  <textarea
  value={des}
  onChange={desChange}
  onBlur={desBlur}
    id="Description"
    className={`${desHasError && "border-red-500"} mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm p-2 `}
    rows="4"
    placeholder="Enter description about your company"
  ></textarea>
  {desHasError && <p className='mt-2 text-sm text-red-500'>Please enter your companys' description.</p>}
</div>
  </div>

  
    </div>
    <div className='w-full flex flex-col gap-5 mt-7 mr-10'>
  <label>
   Company Number: <Input type="num" placeholder="Enter your company Number." className={`${PhoneHasError && "border-red-500"} mt-2`} value={Phone} onChange={PhoneChange} onBlur={PhoneBlur}/>
   {PhoneHasError && <p className='mt-2 text-sm text-red-500'>Please enter your company Number.</p>}
  </label>

    <label>
  Mobile: <Input type="num" placeholder="Enter your mobile number." className={`${MobileHasError && "border-red-500"} mt-2`} value={Mobile} onChange={MobileChange} onBlur={MobileBlur}/>
  {MobileHasError && <p className='mt-2 text-sm text-red-500'>Please enter your mobile.</p>}
  </label>
  <label>
  Experience: <Input type="num" placeholder="Enter years of experience." className={`${ExHasError && "border-red-500"} mt-2`} value={Ex} onChange={ExChange} onBlur={ExBlur}/>
  {ExHasError && <p className='mt-2 text-sm text-red-500'>Please enter years of experience.</p>}
  </label>
  <label>
Select Transportation Type:
<fieldset>
  <legend className="sr-only">Checkboxes</legend>

  <div className="space-y-2 mt-3">
    <label htmlFor="Option1" className="flex cursor-pointer items-start gap-4">
      <div className="flex items-center">
        &#8203;
        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option1"  checked={checkboxes["Option1"]} onChange={handlecheckbox} value={"Air Freight"}/>
      </div>

      <div>
        <strong className="font-medium text-gray-900"> Air Freight</strong>
      </div>
    </label>

    <label htmlFor="Option2" className="flex cursor-pointer items-start gap-4">
      <div className="flex items-center">
        &#8203;
        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option2"  checked={checkboxes["Option2"]} onChange={handlecheckbox} value={"Sea Freight"}/>
      </div>

      <div>
        <strong className="font-medium text-gray-900"> Sea Freight </strong>
      </div>
    </label>

    <label htmlFor="Option3" className="flex cursor-pointer items-start gap-4">
      <div className="flex items-center">
        &#8203;
        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option3"  checked={checkboxes["Option3"]} onChange={handlecheckbox} value={"Rail Freight"} />
      </div>

      <div>
        <strong className="font-medium text-gray-900"> Rail Freight </strong>
      </div>
    </label>
    <label htmlFor="Option4" className="flex cursor-pointer items-start gap-4">
      <div className="flex items-center">
        &#8203;
        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option4"  checked={checkboxes["Option4"]} onChange={handlecheckbox} value={"Overland Freight"}/>
      </div>

      <div>
        <strong className="font-medium text-gray-900"> Overland Freight </strong>
      </div>
    </label>
  </div>
</fieldset>
  </label>
  <Button disabled={!(NameIsvalid && AddressIsvalid && PhoneIsvalid && MobileIsvalid && isAnyCheckboxChecked && ExIsvalid && desIsvalid)}>
  {loading? <LoaderPinwheel className='animate-spin'/>:"Go to Dashboard"}
  </Button>
    </div>
    </form>)

}

export default ForwarderForm
