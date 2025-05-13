import React from 'react'
import Image from 'next/image'
import { MailOpen, PhoneCall, MapPin, Linkedin, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 border-t py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image src="/logo2.png" width={180} height={80} alt='Melromin Logo' />
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg text-center items-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-2">
              <MailOpen className="mr-2 text-[hsl(261,59%,48%)]" />
              <span className="font-semibold ">Email:</span>
            </div>
            <span className="text-gray-800  ">rostam@melromin.co.uk</span>
          </div>

          <div className="flex flex-col items-center justify-center md:items-start">
            <div className="flex items-center mb-2">
              <PhoneCall className="mr-2 text-[hsl(261,59%,48%)]" />
              <span className="font-semibold ">Phone:</span>
            </div>
            <span className="text-gray-800 ">07709875252</span>
          </div>

          <div className="flex flex-col items-center justify-center md:items-start">
            <div className="flex items-center mb-2">
              <MapPin className="mr-2 text-[hsl(261,59%,48%)]" />
              <span className="font-semibold ">Location:</span>
            </div>
            <span className="text-gray-800  text-center">London, UK</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://www.instagram.com/melrominglobalnetwork/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-[hsl(261,59%,48%)] transition"
          >
            <Instagram className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/melika-tafazoli/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[hsl(261,59%,48%)] transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-center text-xs text-gray-500">
          &copy; 2024 Melromin Global Network. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
