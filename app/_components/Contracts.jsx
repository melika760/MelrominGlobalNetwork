"use client";

import globalapi from '@/app/_utils/globalapi';
import { Button } from '@/components/ui/button';
import { auth } from '@/config/firebaseConfig';
import { ArrowBigDown, ArrowBigUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import moment from 'moment';
import Image from 'next/image';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from './Checkout';
import { toast } from 'sonner';
import useInputs from './_hooks/use-inputs';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Contracts = ({path}) => {
  const [contracts, setContracts] = useState([]);
  const [moreInfo, setMoreInfo] = useState({});
  const [user] = useAuthState(auth);
 const[amount,setamount]=useState(100);
 const [loading, setLoading] = useState(false);
 
 const{
  value:enteredName,
  ValueIsvalid:NameIsValid,
  hasError:NameHasError,
  Changehandler:NameChange,
  Blurhandler:NameBlur,
  reset:Namereset
  }=useInputs(value=>value.trim()!="")
   
 const{
  value:enteredSort,
  ValueIsvalid:SortIsValid,
  hasError:SortHasError,
  Changehandler:SortChange,
  Blurhandler:SortBlur,
  reset:Sortreset
  }=useInputs(value=>value.trim()!="")
   
 const{
  value:enteredAccount,
  ValueIsvalid:AccountIsValid,
  hasError:AccountHasError,
  Changehandler:AccountChange,
  Blurhandler:AccountBlur,
  reset:Accountreset
  }=useInputs(value=>value.trim()!="")
  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          const data = await globalapi.getContracts(user);
          setContracts(data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [user]);


  const formatTimeAgo = (agreedDate) => {
    const momentDate = moment(agreedDate);
    return momentDate.format("MMM Do YY");
  };

  const formatTimeAgos = (agreedDate) => {
    const date = agreedDate?.toDate();
    const momentDate = moment(date);
    return momentDate.format("MMM Do YY");
  };

  const toggleMoreInfo = (index) => {
    setMoreInfo(prev => ({ ...prev, [index]: !prev[index] }));
  };

 const changepage=async(finalAmount,status)=>{
  if(path==="/dashboard"){
    const num= parseFloat(finalAmount)
    setamount(num)
    document.getElementById("paymentModal").showModal()
    await globalapi.UpdateContract(user)
  }else if(path==="/Forwarderdashboard" && status==="Active"){
    document.getElementById("PaymentModal2").showModal()

  }else{
    toast(`Your Payment Status is ${status}!If you have any problem contact us`)
  }
 }
 const SaveDatas=async(e)=>{
  e.preventDefault();
  const formData = {
    enteredName,
    enteredSort,
    enteredAccount,
  };
try{setLoading(true)
  await globalapi.addPayment(formData,user)
  Namereset(),Sortreset(),Accountreset()
  document.getElementById('PaymentModal2').close();
 
}catch(e){
  toast("Something went wrong please try again!")
  console.log(e)
}
 }

  return (
    <section className="md:p-12 p-4">
      <h2 className="text-blue-950 text-center font-bold text-xl mb-8 p-4">Contracts</h2>
      <div className='p-6'>
        {contracts.length > 0 ? (
          <>
            <div className='md:grid-cols-4 gap-8 md:grid hidden items-center justify-between p-4 border-b bg-gray-200'>
              <h3 className='font-bold'>Commodity</h3>
              <h3 className='font-bold'>Final Amount</h3>
              <h3 className='font-bold'>Delivery Date</h3>
              <h3 className='font-bold'>More</h3>
            </div>
            <div>
              {contracts.map((contract, index) => (
                <div key={index} className='flex flex-col justify-between'>
                  <div className={`md:grid-cols-4 grid grid-cols-1 items-center md:justify-between gap-8 p-4 border-b hover:bg-gray-50 transition-colors duration-300 ${contract.Status === "Pending" ? "border-b-yellow-500" : contract.Status === "Active" ? "border-b-red-900" : contract.Status === "Success" ? "border-b-green-500" : "border-b-gray-500"}`}>
                    <p className='text-sm sm:text-base text-gray-800'>
                      <span className='font-semibold text-sm sm:text-base text-gray-700 md:hidden sm:block'>Commodity:</span> 
                      {contract.Commodity}
                    </p>
                    <p className='text-sm sm:text-base text-gray-800'>
                      <span className='font-semibold text-sm sm:text-base text-gray-700 md:hidden sm:block'>Final Amount:</span> 
                      {contract.finalAmount}
                    </p>
                    <p className='text-sm sm:text-base text-gray-800'>
                      <span className='font-semibold text-sm sm:text-base text-gray-700 md:hidden sm:block'>Delivery Date:</span> 
                      {formatTimeAgo(contract.agreedDate)}
                    </p>
                    <Button onClick={() => toggleMoreInfo(index)} className='w-[55px] ' variant={"ghost"}>
                      {moreInfo[index] ? <ArrowBigUp className={` cursor-pointer ${contract.Status === "Pending" ? "text-yellow-500" : contract.Status === "Active" ? "text-red-900" : contract.Status === "Success" ? "text-green-500" : "text-gray-500"}`} /> : <ArrowBigDown className={` cursor-pointer ${contract.Status === "Pending" ? "text-yellow-500" : contract.Status === "Active" ? "text-red-900" : contract.Status === "Success" ? "text-green-500" : "text-gray-500"}`} />}
                    </Button>
                  </div>
                  <div>
                    {moreInfo[index] && (
                      <div className='p-4'>
                        <div className='flex justify-start space-x-10 '>
                          <p className='text-sm sm:text-base text-gray-800 mb-5'>Status: {contract.Status}</p>
                          <p className='text-sm sm:text-base text-gray-800'>Made the Contract at: {formatTimeAgos(contract.createdAt)}</p>
                        </div>
                        <div className='flex flex-col justify-center'>
                          <Image src={contract.contractImageURL} alt='OfficialContract' className='md:w-[150px] w-full mt-6' width={150} height={50} />
                      <Button className="md:w-[155px] mt-5 w-full" onClick={()=>changepage(contract.finalAmount,contract.Status)}>{path==="/Forwarderdashboard"?"Check Payment":"Go to Payment!"}</Button>
                        </div>
      <dialog id='PaymentModal2' className='modal'>
      <div className="modal-box relative p-6 bg-white rounded-lg shadow-lg max-w-lg w-full">
        <h2>Please Enter your bank details to arrange the payment</h2>
        <form method="dialog" className="space-y-4" onSubmit={SaveDatas}>
        <Label htmlFor="TotalAmount">Enter your Full Name:<Input placeholder="John Johnson" type="text" className="mt-5 mb-5"onChange={NameChange} onBlur={NameBlur} value={enteredName}/></Label>
       {NameHasError && <p className='text-sm text-red-800'>Please Enter Your Full Name</p>}
        <Label htmlFor="TotalAmount">Enter your Sort Code:<Input placeholder="40-32-34" type="text" className="mt-5 mb-5"onChange={SortChange} onBlur={SortBlur} value={enteredSort}/></Label>
        {SortHasError && <p className='text-sm text-red-800'>Please Enter Your Sort Code</p>}
        <Label htmlFor="TotalAmount">Enter your Account Number:<Input placeholder="84486649" type="text" className="mt-5 mb-5"onChange={AccountChange} onBlur={AccountBlur} value={enteredAccount}/></Label>
        {AccountHasError && <p className='text-sm text-red-800'>Please Enter Your Account Number</p>}
        <Button  className=" mt-5 w-full" type="submit" disabled={!NameIsValid || !SortIsValid || !AccountIsValid}>Submit</Button>
        </form>
        <button
      onClick={() => document.getElementById('PaymentModal2').close()}
      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-500 hover:text-gray-700 transition-transform transform hover:scale-110"
    >
      ✕
    </button>
      </div>
      </dialog>
  <dialog className='modal'id='paymentModal'>
                          <div className='modal-box relative p-6 bg-white rounded-lg shadow-lg max-w-lg w-ful'>
                  <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10 ">
        <h1 className="text-4xl font-extrabold mb-2">Forwarder</h1>
        <h2 className="text-2xl">
          has requested
          <span className="font-bold"> {contract.finalAmount}</span>
        </h2>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: amount,
          currency: "usd",
        }}
      >
        <Checkout amount={amount} />
      </Elements>
      <button
      onClick={() => document.getElementById('paymentModal').close()}
      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-500 hover:text-gray-700 transition-transform transform hover:scale-110"
    >
      ✕
    </button>
    </main></div>

                  </dialog>
                      </div>
                      
                    )}
                  </div>
                 
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center text-center items-center mt-3">
            <Image src="/Contract3.png" className='object-contain rounded-full' width={300} height={100} />
            <p className='text-center text-gray-500 mt-3'>No contract data available.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contracts;
