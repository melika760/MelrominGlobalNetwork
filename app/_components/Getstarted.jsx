"use client";

import {
  LogIn,
  MessageSquareText,
  ReceiptText,
  ScrollText,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const GetStarted = () => {
  const router=useRouter()
  const start=()=>{
router.push('/sign-up')
  }
  return (
    <section className="my-[12rem] overflow-x-hidden" id="start">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            Get Started
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Whether you're a supplier or a forwarder, getting started is fast
            and easy. Just follow the steps below!
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Supplier Card */}
          <div className="border shadow-lg bg-white md:py-12 py-8 md:px-10 px-5 rounded-xl hover:shadow-xl transition-transform hover:-translate-y-1">
            <h3 className="font-semibold text-xl text-gray-900 mb-6 border-b pb-2">
              Suppliers
            </h3>
            <ul className="space-y-4 text-gray-700 text-base">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full">
                  <LogIn size={18} className="text-primary" />
                </div>
                Sign up on our site
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full">
                  <ReceiptText size={18} className="text-primary" />
                </div>
                Fill out the inquiry form
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full">
                  <MessageSquareText size={18} className="text-primary" />
                </div>
                Select your favorite forwarders and start chatting
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full">
                  <ScrollText size={18} className="text-primary" />
                </div>
                Seal the deal and arrange payment right here
              </li>
            </ul>
            <p className="font-bold text-gray-900 mt-6">
              Bingo! We guarantee your shipment will arrive on time.
            </p>
            <button className="mt-6 w-full bg-primary hover:bg-white hover:text-primary border-primary border-2 text-white  py-3 px-4 rounded-md transition-colors duration-300 text-md">
              Start as Supplier
            </button>
          </div>

          {/* Forwarder Card */}
          <div className="border shadow-lg bg-white md:py-12 py-8 md:px-10 px-5 rounded-xl hover:shadow-xl transition-transform hover:-translate-y-1">
            <h3 className="font-semibold text-xl text-gray-900 mb-6 border-b pb-2">
              Forwarders
            </h3>
            <ul className="space-y-4 text-gray-700 text-base">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full">
                  <LogIn size={18} className="text-primary" />
                </div>
                Sign up on our site
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full">
                  <MessageSquareText size={18} className="text-primary" />
                </div>
                Get quotes from suppliers and start chatting
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full">
                  <ScrollText size={18} className="text-primary" />
                </div>
                Seal the deal and arrange payment right here
              </li>
            </ul>
             <br/>
            <br/>
            <p className="font-bold text-gray-900 mt-6">
              Bingo! We guarantee you'll get paid on time.
            </p>
           
            <button className="mt-6 w-full bg-primary hover:bg-white hover:text-primary border-primary border-2 text-white  py-3 px-4 rounded-md transition-colors duration-300 text-md" onClick={start}>
              Start as Forwarder
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
