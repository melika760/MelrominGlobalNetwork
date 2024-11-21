"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Handshake, MapPinned, Repeat2 } from "lucide-react";

const Aboutus = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-Zoom-in-out");
            observer.unobserve(entry.target); // Stop observing once animation is triggered
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <section id="work">
      <div className="mx-auto max-w-screen-2xl px-8 py-16 max-sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                src="/Networking.png"
                className="scroll-animate absolute inset-3 h-full w-full object-contain scale-105 max-sm:scale-120"
                width={550}
                height={250}
                alt="Networking"
              />
            </div>
          </div>

          <div className="relative flex items-center lg:bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-0 sm:p-16 lg:p-24">
              <h2 className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent">
                How It Works
              </h2>
              <p className="mt-4 text-gray-600">
                Melromin offers a user-friendly platform to simplify freight
                forwarding for suppliers and forwarders such as:
              </p>
              <ul className="mt-4 text-gray-600 list-none leading-relaxed space-y-4">
                <li className="flex gap-2">
                  <Handshake color="#1a6bc1" className="w-9" />
                  enabling efficient connections
                </li>
                <li className="flex gap-2">
                  <Repeat2 color="#1a6bc1" className="w-9" />
                  seamless transactions
                </li>
                <li className="flex gap-2">
                  <MapPinned color="#1a6bc1" className="w-9" />
                  real-time shipment tracking
                </li>
              </ul>
              <p className="mt-4 text-gray-600">
                For suppliers, Melromin reduces costs and expands market reach;
                for forwarders, it boosts visibility and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
