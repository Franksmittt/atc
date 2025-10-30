// src/components/layout/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
    // Current year for copyright date
    const currentYear = new Date().getFullYear();
    return (
        // High-contrast, dark background footer
        <footer className="pt-16 pb-8 bg-neutral-900 dark:bg-neutral-950 text-neutral-300 border-t-8 border-primary/50">
            <div className="container mx-auto px-4 max-w-screen-2xl">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 pb-10 mb-8 border-b border-neutral-700">

                    {/* Column 1: Brand & Authority (Span 2 cols on tablet) */}
                     <div className="md:col-span-2 lg:col-span-1">
                        <Link href="/" className="inline-block text-2xl font-extrabold text-white uppercase tracking-tight hover:text-primary transition-colors mb-3">
                             Alberton <span className="text-primary">Tyre Clinic</span> {/* */}
                         </Link>
                        <p className="text-sm leading-relaxed text-neutral-400 max-w-xs mb-4">
                            {/* FIX: Replaced Alberton's with Alberton&apos;s */}
                            Alberton&apos;s trusted **family-run fitment experts since 1989**. We prioritize your safety over sales, guaranteed.
                        </p>

                        {/* Trust Anchor Badges */}
                        <div className="space-y-1 text-xs font-semibold">
                            <span className="text-primary block">✓ Official Pirelli Dealer</span> {/* */}
                             <span className="text-primary block">✓ ATE Braking Specialist</span>
                             <span className="text-primary block">✓ Over 35 Years Service</span>
                         </div> {/* */}
                    </div>

                    {/* Column 2: Core Services & Quick Links (SEO Focus) */}
                    <div>
                        <h4 className="text-lg font-bold uppercase text-white mb-4 border-b border-primary/30 pb-2"> {/* */}
                            Quick Service Links
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/services" className="hover:text-primary transition-colors">All Services</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">Our Experts</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Safety Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                            {/* You can add more specific service links here if needed */}
                            {/* <li><Link href="/services/tyres" className="hover:text-primary transition-colors">Tyre Sales & Fitment</Link></li> */}
                            {/* <li><Link href="/services/brakes" className="hover:text-primary transition-colors">Brakes & Shocks</Link></li> */}
                        </ul>
                     </div>


                     {/* Column 3: Contact & Operation (High-Conversion) */}
                    <div> {/* */}
                        <h4 className="text-lg font-bold uppercase text-white mb-4 border-b border-primary/30 pb-2">
                             Contact & Location {/* */}
                        </h4>
                        <ul className="space-y-3 text-sm">
                             <li className="flex items-start">
                                 <MapPin className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" /> {/* */}
                                <a href="https://maps.app.goo.gl/YourMapLink" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                     26 St Columb St, New Redruth, Alberton {/* */}
                                </a>
                            </li>
                             <li className="flex items-center">
                                 <Phone className="h-4 w-4 mr-2 text-primary flex-shrink-0" /> {/* */}
                                <a href="tel:+27119078495" className="font-extrabold hover:text-primary transition-colors">
                                     +27 11 907 8495 {/* */}
                                </a>
                            </li>
                             <li className="flex items-start">
                                 <Mail className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> {/* */}
                                 <a href="mailto:info@albertontyreclinic.co.za" className="break-all hover:text-primary transition-colors">
                                     info@albertontyreclinic.co.za {/* */}
                                </a>
                             </li>
                            <li className="pt-2 flex items-start text-primary font-bold"> {/* */}
                                <Clock className="h-4 w-4 mr-2 flex-shrink-0 mt-1" />
                                <div>
                                    <span>Mon - Fri: 08:00 - 17:00</span>
                                    <br />
                                    <span>Sat: 08:00 - 12:00</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Primary CTA / Lead Magnet (Adjusted margin for tablet) */}
                     <div className="bg-neutral-800 p-6 rounded-lg border-t-4 border-primary shadow-xl md:mt-10 lg:mt-0"> {/* */}
                        <h4 className="text-xl font-extrabold text-white mb-3">
                            Safety is Free.
                        </h4> {/* */}
                        <p className="text-sm text-neutral-400 mb-4">
                            {/* FIX: Replaced Don't with Don&apos;t and vehicle's with vehicle&apos;s */}
                            Don&apos;t guess your vehicle&apos;s condition. Book your free safety check today.
                        </p>
                         <Button asChild className="w-full bg-primary hover:bg-primary/hover text-white font-bold">
                            <Link href="/assessment">
                                 Book FREE Assessment → {/* */}
                            </Link>
                        </Button>
                     </div>

                </div>


                 {/* Bottom Bar: Legal, Copyright, and Maintenance Credit (Stack on small screens) */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 pt-4 space-y-4 md:space-y-0"> {/* */}

                    {/* Copyright & Maintenance Credit (Combined for visual impact) */}
                     <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left"> {/* */}
                        <a href="https://www.endpointmedia.co.za" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-white transition-colors">
                            Designed, Developed & Maintained by Endpoint Media. {/* Escaped ampersand */}
                        </a> {/* */}
                        <span className="hidden md:inline-block">|</span>
                        <span className="mb-2 md:mb-0">
                             © {currentYear} Alberton Tyre Clinic. All rights reserved. {/* */}
                        </span>
                    </div>

                    {/* Legal Links */}
                    <div className="space-x-4">
                         <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                         <span className="hidden md:inline-block">|</span> {/* */}
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                 </div>

            </div>
         </footer> //
    );
}