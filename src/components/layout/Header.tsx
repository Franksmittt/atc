// src/components/layout/Header.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ThemeToggle } from '@/components/theme-toggle'; // <-- UNCOMMENT THIS LINE
import { Button } from '@/components/ui/button';
// Keep dynamic imports for Sheet components
const DynamicSheet = dynamic(() => import('@/components/ui/sheet').then((mod) => mod.Sheet), { ssr: false });
const DynamicSheetTrigger = dynamic(() => import('@/components/ui/sheet').then((mod) => mod.SheetTrigger), { ssr: false });
const DynamicSheetContent = dynamic(() => import('@/components/ui/sheet').then((mod) => mod.SheetContent), { ssr: false });
const DynamicSheetClose = dynamic(() => import('@/components/ui/sheet').then((mod) => mod.SheetClose), { ssr: false });
import { Phone, MapPin, Clock, MessageSquareText, Menu, X } from 'lucide-react';
// NAV_LINKS and WHATSAPP_LINK remain the same

const NAV_LINKS = [
    { name: 'Our Experts', href: '/about' },
    { name: 'Services & Brands', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
];
const WHATSAPP_LINK = "https://wa.me/27119078495?text=Hello%2C%20I%20saw%20your%20website%20and%20need%20a%20quote%20for%20tyres.";


export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 w-full">
            {/* Top Bar (Keep as before, but added flex-wrap for responsiveness) */}
            <div className="bg-neutral-900 hidden md:block border-b border-neutral-800">
                <div className="container flex h-10 max-w-screen-2xl items-center justify-end px-4 mx-auto">
                    {/* ... content ... */}
                     <div className="flex flex-wrap items-center justify-end text-xs text-neutral-400 space-x-4 md:space-x-6">
                        <a href="https://maps.app.goo.gl/YourMapLink" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors">
                            <MapPin className="h-4 w-4 mr-1 text-primary" /> 26 St Columb St, New Redruth, Alberton
                         </a>
                        <a href="tel:+27119078495" className="flex items-center font-bold text-primary hover:text-white transition-colors">
                            <Phone className="h-4 w-4 mr-1" /> +27 11 907 8495
                         </a>
                        <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-primary" /> Mon - Fri: 08:00 - 17:00 | Sat: 08:00 - 12:00
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Nav Bar */}
             <div className="bg-white/95 dark:bg-neutral-800/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-neutral-200 dark:border-neutral-700">
                <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 mx-auto">
                    {/* Logo (Adjusted for responsiveness) */}
                    <Link href="/" className="flex items-center space-x-2 mr-4 min-w-0">
                         <span className="font-bold text-lg sm:text-xl md:text-2xl text-neutral-800 dark:text-white uppercase tracking-tight">
                            Alberton <span className="text-primary">Tyre Clinic</span>
                        </span>
                    </Link>

                     {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center justify-center flex-grow space-x-1 mx-6">
                       {NAV_LINKS.map(link => (
                            <Button key={link.name} variant="ghost" asChild>
                                 <Link
                                    href={link.href}
                                    className="text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-primary transition-colors px-3 py-2"
                                >
                                    {link.name}
                                 </Link>
                            </Button>
                        ))}
                    </nav>

                    {/* Right Side (Adjusted spacing) */}
                    <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                        {/* WhatsApp Button */}
                        <Button
                             asChild
                            size="sm"
                            className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold transition-colors shadow-md hidden sm:flex"
                        >
                             <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <MessageSquareText className="h-4 w-4 mr-1.5" /> WhatsApp Now
                            </a>
                         </Button>
                        {/* Assessment Button */}
                        <Button
                            asChild
                             className="hidden sm:inline-flex bg-primary hover:bg-primary/hover text-white font-bold transition-colors"
                            size="sm"
                        >
                         <Link href="/assessment">
                                FREE Assessment
                            </Link>
                        </Button>

                         {/* UNCOMMENT ThemeToggle */}
                        <ThemeToggle />

                        {/* Mobile Menu (using DynamicSheet components) */}
                         <DynamicSheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            {/* ... SheetTrigger and SheetContent using Dynamic components ... */}
                            <DynamicSheetTrigger asChild>
                                 <Button
                                    variant="ghost"
                                    size="icon"
                                     className="lg:hidden text-neutral-800 dark:text-neutral-200"
                                    aria-label="Open main menu"
                                >
                                     <Menu className="h-6 w-6" />
                                </Button>
                            </DynamicSheetTrigger>
                             <DynamicSheetContent side="right" className="w-[300px] sm:w-[400px] bg-white dark:bg-neutral-900 p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="font-bold text-lg">Menu</span>
                                     <DynamicSheetClose asChild>
                                        <Button variant="ghost" size="icon" aria-label="Close menu">
                                             <X className="h-6 w-6" />
                                        </Button>
                                    </DynamicSheetClose>
                                 </div>
                                <nav className="flex flex-col space-y-3">
                                    {NAV_LINKS.map((link) => (
                                         <DynamicSheetClose asChild key={link.name}>
                                            <Link
                                                 href={link.href}
                                                className="text-lg font-medium text-neutral-700 dark:text-neutral-200 hover:text-primary transition-colors py-2"
                                                 onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                 {link.name}
                                            </Link>
                                         </DynamicSheetClose>
                                    ))}
                                    <hr className="my-4 border-neutral-200 dark:border-neutral-700"/>
                                     <DynamicSheetClose asChild>
                                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center text-lg font-medium py-2 text-[#25D366] hover:text-[#128C7E] transition-colors">
                                             <MessageSquareText className="h-5 w-5 mr-2" /> WhatsApp Us
                                        </a>
                                     </DynamicSheetClose>
                                     <DynamicSheetClose asChild>
                                        <Link href="/assessment" className="flex items-center text-lg font-medium py-2 text-primary hover:text-primary/80 transition-colors">
                                             Book FREE Assessment
                                        </Link>
                                     </DynamicSheetClose>
                                </nav>
                            </DynamicSheetContent>
                        </DynamicSheet>
                     </div>
                </div>
            </div>
        </header>
    );
}