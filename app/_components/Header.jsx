"use client"; // Added 'use client' directive

import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Keep next/image
import { Button } from '@/components/ui/button'; // Assuming this is a client component
import Link from 'next/link';  // Keep next/link
import { useAuthState } from 'react-firebase-hooks/auth'; // Firebase hook for auth state
import { auth } from '@/config/firebaseConfig'; // Firebase config
import { signOut } from 'firebase/auth'; // Firebase sign-out function
import { UserCircle2, Menu, X } from 'lucide-react'; // Import Lucide icons
import globalapi from '../_utils/globalapi'; // Check if this works client-side
import { useRouter } from 'next/navigation'; // Keep next/router

const Header = () => {
    const [user] = useAuthState(auth);
    const [path, setPath] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle
    const router = useRouter(); // Initialize the router

    useEffect(() => {
        if (user) {
            globalapi.getUsers(user).then((userData) => {
                if (userData.length > 0) {
                    const role = userData[0].role;
                    if (role === "Supplier") {
                        setPath("/dashboard");
                    } else if (role === "Forwarder") {
                        setPath("/Forwarderdashboard");
                    }
                }
            });
        }
    }, [user]);

    const handleLogout = () => {
        signOut(auth).then(() => {
            router.push('/'); // Redirect after logout
        }).catch(error => {
            console.error("Error signing out: ", error);
        });
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the mobile menu state
    };

    return (
        <header className="bg-white shadow-sm fixed w-full z-50">
            <div className=" py-2 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-12">
                  <Link href={'/'}>
                   <Image
                        src="/logo.png"
                        width={90}
                        height={70}
                        className="object-contain mt-3"
                        alt="Logo"
                    /></Link> 
                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex space-x-12 text-sm font-medium">
                        <Link href="/About" className="text-gray-700 hover:text-primary">
                            About
                        </Link>
                        <Link href="/Services" className="text-gray-700 hover:text-primary">
                            Services
                        </Link>
                    </nav>
                </div>

                {/* Login and Signup on the right */}
                {user ? (
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" onClick={handleLogout}>Logout</Button>
                        <Link href={path}>
                            <UserCircle2 className="text-primary w-6 h-6" />
                        </Link>
                    </div>
                ) : (
                    <div className="flex items-center space-x-4">
                        <Link href="/sign-in">
                            <Button variant="ghost" className="sm:text-sm text-gray-800">Login</Button>
                        </Link>
                        <span className="text-[#6930c3] text-xl">|</span>
                        <Link href="/sign-up">
                            <Button variant="ghost" className="sm:text-sm text-gray-800">Signup</Button>
                            </Link>
                        </div>
                    )}

                {/* Mobile Hamburger Icon */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-gray-700">
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md absolute w-full top-full left-0">
                    <div className="flex flex-col items-center py-4 space-y-4">
                        <Link href="/About" className="text-gray-700 hover:text-[hsl(261,59%,48%)]" onClick={toggleMenu}>
                            About Us
                        </Link>
                        <Link href="/Works" className="text-gray-700 hover:text-[hsl(261,59%,48%)]" onClick={toggleMenu}>
                            Works
                        </Link>
                     
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
