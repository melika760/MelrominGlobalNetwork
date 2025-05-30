"use client"
import { Poppins } from "next/font/google";
import "./globals.css";
import { UpdateContex } from "./Store/UpdateContex";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";

const inter = Poppins({ subsets: ["latin"],weight:['500'] });


export default function RootLayout({ children }) {
  const[role,setrole]=useState("")
  return (
    <html lang="en">
      <body className={inter.className}>
        <UpdateContex.Provider value={{role,setrole}}>{children}</UpdateContex.Provider>
        <Toaster />
        </body>
    </html>
  );
}
