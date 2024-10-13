"use client"
import { Input } from '@/components/ui/input'
import React,{useState} from 'react'
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
import { Button } from '@/components/ui/button'
import { ChevronsUpDown, LoaderPinwheel } from 'lucide-react'
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import useInputs from '@/app/_components/_hooks/use-inputs'

const Shippingform = ({onAdd,loading}) => {
  const {value:Commodity,ValueIsvalid:CommodityIsvalid, hasError:CommodityHasError,Changehandler:CommodityChange,Blurhandler:CommodityBlur}=useInputs(value=>value.trim()!=="");
  const {value:VolumeWeight,ValueIsvalid:VolumeWeightIsvalid, hasError:VolumeWeightHasError,Changehandler:VolumeWeightChange,Blurhandler:VolumeWeightBlur}=useInputs(value=>value.trim()!==""); 
  const {value:Dimenssion,ValueIsvalid:DimenssionIsvalid, hasError:DimenssionHasError,Changehandler:DimenssionChange,Blurhandler:DimenssionBlur}=useInputs(value=>value.trim()!=="");
  const {value:Temprature ,ValueIsvalid:TempratureIsvalid, hasError:TempratureHasError,Changehandler:TempratureChange,Blurhandler:TempratureBlur}=useInputs(value=>value.trim()!=="");
  const {value:GrossWeight,ValueIsvalid:GrossWeightIsvalid, hasError:GrossWeightHasError,Changehandler:GrossWeightChange,Blurhandler:GrossWeightBlur}=useInputs(value=>value.trim()!=="");
  const {value:HS,ValueIsvalid:HSIsvalid, hasError:HSHasError,Changehandler:HSChange,Blurhandler:HSBlur}=useInputs(value=>value.trim()!=="");
  const {value:Special,ValueIsvalid:SpecialIsvalid, hasError:SpecialHasError,Changehandler:SpecialChange,Blurhandler:SpecialBlur}=useInputs(value=>value.trim()!=="");
  const {value:Note,ValueIsvalid:NoteIsvalid, hasError:NoteHasError,Changehandler:NoteChange,Blurhandler:NoteBlur}=useInputs(value=>value.trim()!=="");
  const [selectedCounty, setSelectedCountry] = useState(null);
    const[destination,setdestination]=useState(null)
    const[open,setopen]=useState(false)
    const[open2,setopen2]=useState(false)
    const[transportation,settransportation]=useState("Air")
    const[Switch,setSwitch]=useState("No")
    const[transit,settransit]=useState("No")
    const[date,setDate]=useState(Date())
const ShppingformSubmit=(event)=>{
  event.preventDefault();

onAdd({
  Commodity,
  VolumeWeight,
  Dimenssion,
  Temprature,
  GrossWeight,
  HS,
  Special,
  Note,
  selectedCounty,
  destination,
  date,
  transportation,
  Switch,
  transit
})
}
    return (
      <div className='md:p-12 p-4'>
        <h2 className='text-blue-950 font-bold text-xl mb-8'>Inquiery Form</h2>
        <form className='grid md:grid-cols-2 grid-cols-1 gap-6' onSubmit={ShppingformSubmit}>
  <div>
  <div className='flex flex-col'>
      <label className='mb-2'>Origin:</label>
    <Popover open={open} onOpenChange={setopen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="md:w-[520px] w-[200px] justify-between text-gray-500"
            >
              {selectedCounty
                ? Countries.find((country) => country.value === selectedCounty)?.label
                : "Select Country..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="md:w-[520px] w-[200px] p-0">
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
      <div className='flex flex-col mt-5 mb-5'>
      <label className='mb-2'>Destination:</label>
    <Popover open={open2} onOpenChange={setopen2}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open2}
              className="md:w-[520px] w-[200px] justify-between text-gray-500"
            >
              {destination
                ? Countries.find((country) => country.value === destination)?.label
                : "Select Country..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="md:w-[520px] w-[200px] p-0">
          <Command>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Countries">
          {Countries.map(country=>(
            <CommandItem key={country.label} value={country.value} onSelect={(currentValue) => {
              setdestination(currentValue === destination ? "" : currentValue)
              setopen2(false)
            }}>{country.value}</CommandItem>
          ))}
          
         
        </CommandGroup>
      
      </CommandList>
    </Command>
          </PopoverContent>
        </Popover>
      </div>
      <label htmlFor='Commodity'>Commodity:<Input type="text" className={`${CommodityHasError && "border-red-500"} mt-2 mb-5`} value={Commodity} onChange={CommodityChange} onBlur={CommodityBlur}/></label>
      {CommodityHasError && <p className='text-red-500 font-sm mb-5'>Enter your Commodity.</p>}
      <label htmlFor='VolumeWeight'>Volume Weight:
        <Input type="text" className={`${VolumeWeightHasError && "border-red-500"} mt-2 mb-5`} value={VolumeWeight} onChange={VolumeWeightChange} onBlur={VolumeWeightBlur}/></label>
      {VolumeWeightHasError && <p className='text-red-500 font-sm mb-5'>Enterv Volume Weight.</p>}
      <label htmlFor='Dimenssion'>Dimenssion:<Input type="text" className={`${DimenssionHasError && "border-red-500"} mt-2 mb-5`} value={Dimenssion} onChange={DimenssionChange} onBlur={DimenssionBlur}/></label>
      {DimenssionHasError && <p className='text-red-500 font-sm mb-5'>Enter Dimenssion.</p>}
      <div>
        <label htmlFor='TransportationType'>Transportation type:</label>
        <RadioGroup defaultValue="Air" onValueChange={settransportation}>
  <div className="flex items-center space-x-2 p-3">
    <RadioGroupItem value="Air" id="Air" />
    <Label htmlFor="Air">Air Freight</Label>
  </div>
  <div className="flex items-center space-x-2 p-3">
    <RadioGroupItem value="Sea" id="Sea" />
    <Label htmlFor="Sea">Sea Freight</Label>
  </div>
  <div className="flex items-center space-x-2 p-3">
    <RadioGroupItem value="Rail" id="Rail" />
    <Label htmlFor="Rail">Rail Freight</Label>
  </div>
  <div className="flex items-center space-x-2 p-3">
    <RadioGroupItem value="Overland" id="Overland" />
    <Label htmlFor="Overland">Overland Freight</Label>
  </div>
</RadioGroup>


      </div>
  </div>
  <div className='flex-1 md:ml-8'>
  <label>Temprature control:
    <Input type="text" className={`${TempratureHasError && "border-red-500"} mt-2 mb-5`} value={Temprature} onChange={TempratureChange} onBlur={TempratureBlur}/></label>
  {TempratureHasError && <p className='text-red-500 font-sm mb-5'>Enter Temprature control.</p>}

  <label>Gross Weight:
    <Input type="text" className={`${GrossWeightHasError && "border-red-500"} mt-2 mb-5`} value={GrossWeight} onChange={GrossWeightChange} onBlur={GrossWeightBlur}/></label>
  {GrossWeightHasError && <p className='text-red-500 font-sm mb-5'>Enter Gross weight.</p>}
  <label>HS code:<Input type="text" className={`${HSHasError && "border-red-500"} mt-2 mb-5`} value={HS} onChange={HSChange} onBlur={HSBlur}/></label>
  {HSHasError && <p className='text-red-500 font-sm mb-5'>Enter your HS Code.</p>}
  <label>Special condition:<Input type="text" className={`${SpecialHasError && "border-red-500"} mt-2 mb-5`} value={Special} onChange={SpecialChange} onBlur={SpecialBlur}/></label>
  {SpecialHasError && <p className='text-red-500 font-sm mb-5'>Enter any special condition,if there isn't enter N/A.</p>}
  <div className='flex flex-col mt-5 mb-8'>
  <label>Delivery date:</label>
  <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
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
      </Popover>
    <div className='mt-8 mb-5 flex flex-row gap-12 justify-between'>
        <div><p>Switch:</p>
        <RadioGroup defaultValue="No" onValueChange={setSwitch}>
  <div className="flex items-center space-x-2 p-3">
    <RadioGroupItem value="Yes" id="withSwitch" />
    <Label htmlFor="withSwitch">Yes</Label>
  </div>
  <div className="flex items-center space-x-2 p-3">
    <RadioGroupItem value="No" id="WithoutSwitch" />
    <Label htmlFor="WithoutSwitch">No</Label>
  </div></RadioGroup></div>

  <div className='ml-20'><p>Transit:</p>
        <RadioGroup defaultValue="No" onValueChange={settransit}>
  <div className="flex items-center space-x-2 p-3">
    <RadioGroupItem value="Yes" id="Transit" />
    <Label htmlFor="Transit">Yes</Label>
  </div>
  <div className="flex items-center space-x-2 p-3">
    <RadioGroupItem value="No" id="Withouttransit" />
    <Label htmlFor="Withouttransit">No</Label>
  </div></RadioGroup></div>  
  
    </div>
    <div className='mt-5'>
<label htmlFor="Note" className="block text-md "> Notes: </label>

<textarea
  id="Inquery"
  className={`${NoteHasError && "border-red-500"} mt-2 w-full rounded-lg border border-gray-300 align-top shadow-sm sm:text-sm p-2`} value={Note} onChange={NoteChange} onBlur={NoteBlur}
  rows="4"
  placeholder="Enter additional notes about your inquery!"
></textarea>
{NoteHasError && <p className='text-red-500 font-sm '>Enter any additional notes,if there isn't enter N/A.</p>}
</div>
  </div>
  
  </div>
        </form>
        <Button type="submit" className="md:w-[400px] w-[280px] md:float-right  mr-12" disabled={!(CommodityIsvalid && VolumeWeightIsvalid && DimenssionIsvalid && TempratureIsvalid && GrossWeightIsvalid && HSIsvalid && SpecialIsvalid && NoteIsvalid)}  onClick={ShppingformSubmit}>
          {loading? <LoaderPinwheel className='animate-spin'/>:"Submit"}</Button>
      </div>
    )
}

export default Shippingform
