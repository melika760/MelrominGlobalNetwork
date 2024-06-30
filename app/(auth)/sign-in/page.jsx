"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import useInput from '../_hooks/use-input';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { LoaderIcon, MessageSquareX } from 'lucide-react';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from '@/config/firebaseConfig';

const SignIn = () => {
   
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

  const router = useRouter();
  const [SignInuser] = useSignInWithEmailAndPassword(auth);
  const [loader, setLoader] = useState(false);

  const handleSignIn = async () => {
    setLoader(true);
try{
const res= await SignInuser(email,password)
router.replace("/dashboard")
}catch(e){

}
    setLoader(false);
  };

  return (
    <div className='flex items-baseline justify-center my-20'>
      <div className='flex flex-col items-center p-10 bg-slate-100 border border-gray-200'>
        <Image src={"/logo2.png"} width={200} height={200} alt='Logo' />
        
        <h2 className='font-bold text-3xl'>Login</h2>
        <h2 className='text-gray-500'>Enter your email and password to login.</h2>
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
          <Button onClick={handleSignIn} disabled={!passwordIsValid || !emailIsValid}>
            {loader ? <LoaderIcon className='animate-spin' /> : "Login"}
          </Button>
          <p>Already have an account?
            <Link href="/sign-up" className='text-blue-500'>Click here to create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
