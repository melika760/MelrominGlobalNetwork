"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import useInput from '../_hooks/use-input';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { LoaderIcon, MessageSquareX } from 'lucide-react';
import { useCreateUserWithEmailAndPassword,useAuthState } from "react-firebase-hooks/auth";
import { auth } from '@/config/firebaseConfig';
import Customedropdown from '@/app/_components/Customedropdown';
import { UpdateContex } from '@/app/Store/UpdateContex';


const CreateAccount = () => {

 const [selectedValue, setSelectedValue] = useState(null);
const[checkbox,setcheckbox]=useState(false)
const{role,setrole}=useContext(UpdateContex)
const router = useRouter();
const [createUser] = useCreateUserWithEmailAndPassword(auth);
const [loader, setLoader] = useState(false);
const[user]=useAuthState(auth)
// useEffect(()=>{
//   if(user){
//     router.push("/")
//          }
// },[])
useEffect(()=>{
  if(selectedValue===null){
    return
  }
  setrole(selectedValue.value)
},[selectedValue])
    const options = [
      { label: 'Forwarder', value: 'Forwarder' },
      { label: 'Supplier', value: 'Supplier' },
     
    ];
    const handleSelect = (option) => {
      setSelectedValue(option);
      
      // console.log('Selected:', option);
    };
  const validateEmail = (value) => {
    return {
      isValid: value.includes("@"),
      errorMessages: value.includes("@") ? [] : ["Please enter a valid email."]
    };
  };

  const validatePassword = (value) => {
    const errors = [];
    if (value.length <= 6) errors.push("Password must be longer than 6 characters.");
    if (!/[A-Z]/.test(value)) errors.push("Password must include at least one uppercase letter.");
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) errors.push("Password must include at least one special character.");
    
    return {
      isValid: errors.length === 0,
      errorMessages: errors
    };
  };

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    errorMessages: emailErrorMessages,
    changeHandler: emailChange,
    blurHandler: emailBlur,
  } = useInput(validateEmail);

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    errorMessages: passwordErrorMessages,
    changeHandler: passwordChange,
    blurHandler: passwordBlur,
  } = useInput(validatePassword);

 

  const handleSignUp = async () => {
    setLoader(true);
    try {
      const res = await createUser(email, password);
      router.replace("/Welcome")
    
     
    } catch (e) {
      console.log(e);
      toast("Failed to create account!");
    }
    setLoader(false);
  };

  return (
    <div className='flex items-baseline justify-center my-20'>
      <div className='flex flex-col items-center p-10 bg-slate-100 border border-gray-200'>
        <Image src={"/logo2.png"} width={200} height={200} alt='Logo' className='mb-5 object-contain' />
        
        <h2 className='font-bold text-3xl'>Create an Account</h2>
        <h2 className='text-gray-500'>Enter your email and password to create an account</h2>
        <div className='w-full flex flex-col gap-5 mt-7'>
          <Input
            placeholder="Email"
            value={email}
            onChange={emailChange}
            onBlur={emailBlur}
            className={`${emailHasError && "border-red-500"}`}
          />
          {emailHasError && emailErrorMessages.map((msg, idx) => (
            <div key={idx} className='mx-2 my-2 flex text-red-500 text-sm'>
                 < MessageSquareX />
                 <p className=" ml-2">{msg}</p>
            </div>
           
          ))}
          <Input
            type='password'
            placeholder="Password"
            value={password}
            onChange={passwordChange}
            onBlur={passwordBlur}
            className={`${passwordHasError && "border-red-500"}`}
          />
          {passwordHasError && passwordErrorMessages.map((msg, idx) => (
           <div key={idx} className='mx-2 my-2 flex text-red-500 text-sm'>
           < MessageSquareX />
           <p className=" ml-2">{msg}</p>
      </div>
          ))}
            <Customedropdown options={options} onSelect={handleSelect} placeholder='Please select your role'/>
       <div>
<fieldset>
  <div className="space-y-2">
    <label htmlFor="Option1" className="flex cursor-pointer items-start gap-4">
      <div className="flex items-center">
        &#8203;
        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option1" onChange={(event)=>setcheckbox(event.target.checked)} checked={checkbox}/>
      </div>

      <div>
        <strong className="font-medium text-gray-900"> Accept Terms and Condition </strong>
      </div>
    </label>
    
  </div>
</fieldset>
       </div>
          <Button onClick={handleSignUp} disabled={!checkbox||!selectedValue ||!passwordIsValid || !emailIsValid}>
            {loader ? <LoaderIcon className='animate-spin' /> : "Create An Account"}
          </Button>
          <p>Already have an account?
            <Link href="/sign-in" className='text-blue-500'>Click here to Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
