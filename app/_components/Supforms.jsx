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



const SupForms = ({onAdd,loading}) => {
    const {value:companyname,ValueIsvalid:NameIsvalid, hasError:NameHasError,Changehandler:NameChange,Blurhandler:NameBlur}=useInputs(value=>value.trim()!=="");
    const {value:Address,ValueIsvalid:AddressIsvalid, hasError:AddressHasError,Changehandler:AddressChange,Blurhandler:AddressBlur}=useInputs(value=>value.trim()!=="");
    const {value:Phone,ValueIsvalid:PhoneIsvalid, hasError:PhoneHasError,Changehandler:PhoneChange,Blurhandler:PhoneBlur}=useInputs(value=>value.length>10);
    const {value:Mobile,ValueIsvalid:MobileIsvalid, hasError:MobileHasError,Changehandler:MobileChange,Blurhandler:MobileBlur}=useInputs(value=>value.length>10);
    const [selectedCounty, setSelectedCountry] = useState(null);
  const[open,setopen]=useState(false)
  const[checkboxes,setselectedcheckbox]=useState({
    option1:false,
    option2:false,
    option3:false,
    option4:false,
  })
  const isAnyCheckboxChecked = Object.values(checkboxes).some(value => value);
  const[transportation,settransportation]=useState([])
  const handlecheckbox=(event)=>{
    const { id, checked,value} = event.target;
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
  const SupplierProfile=async(event)=>{
  event.preventDefault();
 onAdd({companyname,
     Address,
     selectedCounty, 
     Phone,
 Mobile,
 transportation,
 })
  }
    return (
      <form className='grid md:grid-cols-2 grid-cols-1 gap-11 w-full' onSubmit={SupplierProfile}>
        <div className='w-full flex flex-col gap-5 mt-7 mr-10'>
    <label>
     Company Name: <Input type="text" placeholder="Enter your company name." className= {`${NameHasError && "border-red-500"} mt-2`} value={companyname} onChange={NameChange} onBlur={NameBlur}/>
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
    </div>
  
    
      </div>
      <div className='w-full flex flex-col gap-5 mt-7 mr-10'>
    <label>
     Company Phone Number: <Input type="num" placeholder="Enter your company phone." className={`${PhoneHasError && "border-red-500"} mt-2`} value={Phone} onChange={PhoneChange} onBlur={PhoneBlur}/>
     {PhoneHasError && <p className='mt-2 text-sm text-red-500'>Please enter your company phone.</p>}
    </label>
  
      <label>
    Mobile: <Input type="num" placeholder="Enter your mobile number." className={`${MobileHasError && "border-red-500"} mt-2`} value={Mobile} onChange={MobileChange} onBlur={MobileBlur}/>
    {MobileHasError && <p className='mt-2 text-sm text-red-500'>Please enter your mobile.</p>}
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
    <Button disabled={!(NameIsvalid && AddressIsvalid && PhoneIsvalid && MobileIsvalid && isAnyCheckboxChecked)}>
      {loading? <LoaderPinwheel className='animate-spin'/>:"Save"}</Button>
      </div>
      </form>
      
    )
  
}

export default SupForms
