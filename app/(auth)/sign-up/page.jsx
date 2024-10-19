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
import { auth, db } from '@/config/firebaseConfig';
import Customedropdown from '@/app/_components/Customedropdown';
import { UpdateContex } from '@/app/Store/UpdateContex';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';

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
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (res.user && res.user.uid) {
       
        console.log(res.user)
        await setDoc(doc(db, "users", res.user.uid), {
          role: role,
          email: email,
          userId: res.user.uid,
        });
        toast.success("Your account was created successfully!");
        router.replace("/Welcome");
      } else {
        throw new Error("User creation failed.");
      }
    } catch (e) {
      console.error("Error during sign-up:", e.message);
      toast.error(`Failed to create account: ${e.message}`);
    } finally {
      setLoader(false); // Always hide the loader after the process
    }
  };
  
  
  

  return (
    <div className='flex items-baseline justify-center my-20 '>
      <div className='flex flex-col items-center p-10 bg-slate-100 border border-gray-200 rounded-md m-4 shadow-lg'>
        <Image src={"/logo2.png"} width={200} height={200} alt='Logo' className='mb-5 object-contain' />
        
        <h2 className='font-bold text-3xl max-md:text-xl'>Create an Account</h2>
        <h2 className='text-gray-500 text-center mt-3'>Enter your email and password to create an account</h2>
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
    <h3 className='text-primary ml-8 cursor-pointer'onClick={()=>document.getElementById("my_modal_1").showModal()}>Read our Terms & Conditions</h3>
    <div>
  
<dialog id="my_modal_1" className="modal ">
 <div className="modal-box relative p-6 bg-white rounded-lg shadow-lg max-w-lg w-full">
  <h2>Melromin Global Network GDPR Policy</h2>
 <ul>
          <label>
          <strong >1. Introduction</strong>
          <li className='mb-2'>
          This policy outlines how Melromin Global Network collects, uses, stores, and protects the personal data of suppliers and forwarders in compliance with the General Data Protection Regulation (GDPR).
          </li>
          </label>
          <label>
          <strong>2. Data Controller</strong>
          <li className='mb-2'>
          Melromin Global Network,[88 Uxendon Hill,London,HA9SJ], is the data controller responsible for determining the purposes and means of processing personal data.</li>
          </label>
          <label>
          <strong>3. Data We Collect</strong>
          <li className='mb-2 mt-1'>
          We collect personal data necessary for our business operations, including:
          <ul className='list-disc mb-2 p-2'>
            <li>Contact information (name, email, phone number)</li>
            <li>Business information (company name, address, VAT number)</li>
            <li>Financial information (for invoicing and payment purposes)</li>
          </ul>
        </li>
          </label>
          <label>
          <strong>4. Lawful Basis for Processing</strong>
          <li className='mb-2 mt-1'>
          We process personal data based on the following legal grounds:
          <ul className='list-disc mb-2 p-2'>
            <li><strong>Contract:</strong> To fulfill our contractual obligations with suppliers and forwarders.</li>
            <li><strong>Legitimate Interest:</strong> To operate our business efficiently and to improve our services.</li>
          </ul>
        </li>
          </label>
          <label>
          <strong>5. Purpose of Data Processing</strong>
          <li className='mb-2 mt-1'>
          We collect and process personal data for the following purposes:
          <ul className='list-disc mb-2 p-2'>
            <li>Facilitating connections between suppliers and forwarders.</li>
            <li>Providing customer support.</li>
            <li>Managing business relationships.</li>
            <li>Complying with legal and regulatory requirements.</li>
          </ul>
        </li>
          </label>
          <label>
          <strong>6. Data Subject Rights</strong>
          <li className='mb-2 mt-1'>
          Individuals have the right to:
          <ul className='list-disc mb-2 p-2'>
            <li>Access their personal data.</li>
            <li>Request rectification of inaccurate data.</li>
            <li>Request erasure of their personal data.</li>
            <li>Restrict processing of their personal data.</li>
            <li>Data portability.</li>
            <li>Object to processing.</li>
          </ul>
          To exercise these rights, please contact us at info@melrominglobalnetwork.co.uk
        </li>
          </label>
          <label>
          <strong>7. Data Security</strong>
          <li className='mb-2 mt-1'>
          We implement appropriate technical and organizational measures to protect personal data against unauthorized or unlawful processing and accidental loss, destruction, or damage. These measures include:
          <ul className='list-disc mb-2 p-2'>
            <li>Access control measures</li>
            <li>Encryption of data</li>
            <li>Regular security assessments</li>
          </ul>
        </li>
          </label>
          <label>
          <strong>8. Data Retention</strong>
          <li className='mb-2 mt-1'>
          We retain personal data for as long as necessary to fulfill the purposes for which it was collected or as required by law.
        </li>
          </label>
          <label>
          <strong>9. Data Breaches</strong>
          <li className='mb-2 mt-1'>
          In the event of a personal data breach, we will notify the relevant supervisory authority and affected individuals without undue delay.
        </li>
          </label>
          <label>
          <strong>10. Transfers of Personal Data</strong>
          <li className='mb-2 mt-1'>
          We may transfer personal data to third parties, such as IT service providers, within the EU. If data is transferred outside the EU, appropriate safeguards will be in place
        </li>
          </label>
          <label>
          <strong>11. Changes to This Policy</strong>
          <li className='mb-2 mt-1'>
          We may update this policy from time to time. Any changes will be posted on our website.
        </li>
          </label>
          <label>
          <strong>Additional Considerations</strong>
          <li>
          <ul className='list-disc p-2 mb-2'>
            <li><strong>Privacy Policy:</strong> Consider creating a separate privacy policy for website visitors.</li>
            <li><strong>Data Protection Impact Assessments (DPIAs):</strong>  Conduct DPIAs for high-risk processing activities.</li>
            <li><strong>Employee Training:</strong> Ensure employees are aware of their GDPR obligations.</li>
            <li><strong>Data Subject Access Requests (DSARs):</strong>Establish procedures for handling DSARs.</li>
          </ul>
        </li>
          </label>
        </ul>
        <button
      onClick={() => document.getElementById('my_modal_1').close()}
      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-500 hover:text-gray-700 transition-transform transform hover:scale-110"
    >
      ✕
    </button>
 </div>
</dialog>
    </div>
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
