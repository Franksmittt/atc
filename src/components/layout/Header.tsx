// src/components/layout/Header.tsx
"use client"; // Add this directive because we'll use useState for mobile menu

import React, { useState } from 'react'; // Import useState
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"; // Import Sheet components
import { Phone, MapPin, Clock, MessageSquareText, Menu, X } from 'lucide-react'; // Import Menu and X icons

// Strategic navigation links
const NAV_LINKS = [
    { name: 'Our Experts', href: '/about' },
    { name: 'Services & Brands', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
];

// High-impact WhatsApp link
const WHATSAPP_LINK = "https://wa.me/27119078495?text=Hello%2C%20I%20saw%20your%20website%20and%20need%20a%20quote%20for%20tyres.";

export default function Header() {
    // State to control mobile menu visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        // Ensure the header takes full width and stays sticky
        <header className="sticky top-0 z-50 w-full">
            {/* 1. TOP BAR: URGENT CONTACT & HOURS (Dark Charcoal) */}
            <div className="bg-neutral-900 hidden md:block border-b border-neutral-800">
                <div className="container flex h-10 max-w-screen-2xl items-center justify-end px-4 mx-auto">
                    <div className="flex items-center text-xs text-neutral-400 space-x-6">
                        {/* Address/Location */}
                        <a href="https://maps.app.goo.gl/YourMapLink" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors">
                            <MapPin className="h-4 w-4 mr-1 text-primary" />
                            26 St Columb St, New Redruth, Alberton
                        </a>
                        {/* Phone Number */}
                        <a href="tel:+27119078495" className="flex items-center font-bold text-primary hover:text-white transition-colors">
                            <Phone className="h-4 w-4 mr-1" />
                            +27 11 907 8495
                        </a>
                        {/* Operating Hours (Updated) */}
                        <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-primary" />
                            Mon - Fri: 08:00 - 17:00 | Sat: 08:00 - 12:00
                        </span>
                    </div>
                </div>
            </div>

            {/* 2. MAIN NAV BAR: BRANDING, NAV LINKS & CTAS */}
            <div className="bg-white/95 dark:bg-neutral-800/95 backdrop-blur supports-[backdrop-filter]:bg-background/80
                            border-b border-neutral-200 dark:border-neutral-700">
                <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 mx-auto">

                    {/* Logo/Home Link */}
                    <Link href="/" className="flex items-center space-x-2 flex-shrink-0 mr-6">
                        {/* Consider adding an actual logo image here */}
                        <span className="font-bold text-xl sm:text-2xl text-neutral-800 dark:text-white uppercase tracking-tight whitespace-nowrap">
                            Alberton <span className="text-primary">Tyre Clinic</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation Links (Centered) */}
                    <nav className="hidden lg:flex items-center justify-center flex-grow space-x-1 mx-6">
                        {NAV_LINKS.map(link => (
                            <Button key={link.name} variant="ghost" asChild>
                                <Link
                                    href={link.href}
                                    className="text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-primary transition-colors px-3 py-2" // Added padding
                                >
                                    {link.name}
                                </Link>
                            </Button>
                        ))}
                    </nav>

                    {/* Right-side CTAs & Mobile Menu Trigger */}
                    <div className="flex items-center space-x-2 flex-shrink-0">
                        {/* CTA 1: WHATSAPP (Always visible on desktop, moved inside mobile menu otherwise) */}
                        <Button
                            asChild
                            size="sm"
                            className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold transition-colors shadow-md hidden sm:flex" // Hide below sm breakpoint
                        >
                            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <MessageSquareText className="h-4 w-4 mr-1.5" />
                                WhatsApp Now
                            </a>
                        </Button>

                        {/* CTA 2: FREE ASSESSMENT (Hidden below sm breakpoint) */}
                        <Button
                            asChild
                            className="hidden sm:inline-flex bg-primary hover:bg-primary/hover text-white font-bold transition-colors"
                            size="sm"
                        >
                            <Link href="/assessment">
                                FREE Assessment
                            </Link>
                        </Button>

                        {/* Theme Toggle */}
                        <ThemeToggle />

                        {/* Mobile Menu Button (Visible only on lg and below) */}
                        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="lg:hidden text-neutral-800 dark:text-neutral-200"
                                    aria-label="Open main menu"
                                >
                                    <Menu className="h-6 w-6" /> {/* Use Menu icon */}
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white dark:bg-neutral-900 p-6">
                                {/* Optional: Add a header inside the sheet */}
                                <div className="flex justify-between items-center mb-6">
                                    <span className="font-bold text-lg">Menu</span>
                                    <SheetClose asChild>
                                        <Button variant="ghost" size="icon" aria-label="Close menu">
                                            <X className="h-6 w-6" />
                                        </Button>
                                    </SheetClose>
                                </div>
                                <nav className="flex flex-col space-y-3">
                                    {NAV_LINKS.map((link) => (
                                        <SheetClose asChild key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-lg font-medium text-neutral-700 dark:text-neutral-200 hover:text-primary transition-colors py-2"
                                                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                                            >
                                                {link.name}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                    {/* Mobile CTAs */}
                                    <hr className="my-4 border-neutral-200 dark:border-neutral-700"/>
                                    <SheetClose asChild>
                                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center text-lg font-medium py-2 text-[#25D366] hover:text-[#128C7E] transition-colors">
                                            <MessageSquareText className="h-5 w-5 mr-2" /> WhatsApp Us
                                        </a>
                                    </SheetClose>
                                     <SheetClose asChild>
                                        <Link href="/assessment" className="flex items-center text-lg font-medium py-2 text-primary hover:text-primary/80 transition-colors">
                                           Book FREE Assessment
                                        </Link>
                                    </SheetClose>
                                </nav>
                            </SheetContent>
                        </Sheet> {/* Correctly closed Sheet component */}
                    </div> {/* Correctly closed right-side div */}
                </div> {/* Correctly closed container div */}
            </div> {/* Correctly closed main nav bar div */}
        </header> /* Correctly closed header element */
    ); // Correctly closed return statement
} // Correctly closed component function