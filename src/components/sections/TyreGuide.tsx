// src/components/sections/TyreGuide.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Truck, Camera, MessageSquareText } from 'lucide-react';
// The WhatsApp link from the Header component
const WHATSAPP_LINK = "https://wa.me/27818849807?text=Hi%2C%20I%20need%20a%20tyre%20quote.%20Here%20is%20a%20photo%20of%20my%20tyre%20sidewall%20for%20the%20size%3A";

/**
 * Explains how to find and read tyre size markings.
 * Includes a strong CTA to WhatsApp a photo.
 */
export default function TyreGuide() {
    return (
        <section className="py-24 bg-neutral-100 dark:bg-neutral-900 transition-colors duration-500">
            <div className="container mx-auto px-4 max-w-6xl">

                <header className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-neutral-800 dark:text-white mb-4">
                        How To Check Your Tyre Size
                    </h2>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400">
                        Knowing your tyre size is essential for safety, performance, and when you need to purchase replacements.
                    </p>
                </header>

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    
                    {/* Column 1: Where to Find It */}
                    <div className="lg:col-span-1 space-y-6 p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-xl border-t-4 border-primary/50 h-full">
                        <Truck className="h-10 w-10 text-primary mb-2" />
                        <h3 className="text-2xl font-bold text-neutral-800 dark:text-white">
                            🔍 Where to Find Your Size
                        </h3>
                        <p className="font-semibold text-neutral-800 dark:text-neutral-300">
                            There are three main places to check for the correct tyre size:
                        </p>
                        <ul className="space-y-4 text-neutral-600 dark:text-neutral-400 text-base">
                            <li>
                                <strong className='text-primary'>1. Tyre Sidewall:</strong> Look for a series of numbers and letters (e.g., 205/55 R16 91V).
                            </li>
                            <li>
                                <strong className='text-primary'>2. Vehicle Placard:</strong> A sticker with the manufacturer&apos;s recommended size and pressure (usually inside the driver&apos;s door jamb or fuel filler flap).
                            </li>
                            <li>
                                <strong className='text-primary'>3. Owner&apos;s Manual:</strong> Lists all correct tyre sizes, load index, and speed rating recommended by the manufacturer.
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: How to Read It */}
                    <div className="lg:col-span-1 space-y-4 p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-xl border-t-4 border-primary/50 h-full">
                        <h3 className="text-2xl font-bold text-neutral-800 dark:text-white mb-4">
                            🔢 How to Read the Markings
                        </h3>
                        <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-md text-center">
                            <code className="text-primary font-mono text-xl block">205/55 R16 91V</code>
                        </div>
                        <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 text-sm">
                            <li><strong className='text-primary'>205:</strong> Tyre Width (in mm)</li>
                            <li><strong className='text-primary'>55:</strong> Aspect Ratio (Sidewall Height as % of Width)</li>
                            <li><strong className='text-primary'>R:</strong> Construction Type (Radial)</li>
                            <li><strong className='text-primary'>16:</strong> Rim Diameter (in inches)</li>
                            <li><strong className='text-primary'>91:</strong> Load Index (Max Weight Capacity)</li>
                            <li><strong className='text-primary'>V:</strong> Speed Rating (Max Safe Speed)</li>
                        </ul>
                        <p className="pt-4 text-sm font-semibold text-neutral-800 dark:text-neutral-300">
                            Pro Tip: Look for &apos;DOT&apos; followed by a code; the last four digits indicate the manufacturing date (e.g., 3524 means the 35th week of 2024).
                        </p>
                    </div>

                    {/* Column 3: The WhatsApp CTA (High-Intent Conversion) */}
                    <div className="lg:col-span-1 space-y-6 p-6 bg-primary dark:bg-primary/90 rounded-xl shadow-2xl text-white h-full flex flex-col justify-between">
                        <Camera className="h-10 w-10 mb-2" />
                        <h3 className="text-2xl font-extrabold">
                            Save Time: Send Us a Photo!
                        </h3>
                        <p className="text-lg">
                            The quickest way to get an accurate quote is to simply send us a clear photo of your current tyre&apos;s sidewall via WhatsApp.
                        </p>
                        <Button 
                            asChild
                            size="lg"
                            className="bg-white text-primary hover:bg-neutral-200 font-bold w-full flex items-center"
                        >
                            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                <MessageSquareText className="h-5 w-5 mr-2" /> WhatsApp Tyre Photo Now
                            </a>
                        </Button>
                    </div>
                </div>

                <div className='text-center mt-16'>
                    <Link href="/blog/how-to-read-your-tyre-size" className="text-primary font-semibold hover:underline dark:text-primary-foreground/80">
                        Read the Full Tyre Size Blog Post →
                    </Link>
                </div>
            </div>
        </section>
    );
}