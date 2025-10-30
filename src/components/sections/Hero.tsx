// src/components/sections/Hero.tsx
// Server Component - Optimized for initial load speed.

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    // High contrast, dark charcoal background (neutral-800)
    <section className="relative h-screen min-h-[600px] flex items-center justify-center
                        bg-neutral-800 dark:bg-neutral-900 transition-colors duration-500">

      {/* Background/Texture Placeholder */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-5"> {/* */}
        <div
          
             className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url('/placeholder-tyre-shop-bg.jpg')` }} // Placeholder local background image
        ></div>
      </div>

      {/* Content: Centered and Prominent */}
      <div className="container mx-auto px-4 text-center z-10 max-w-4xl">


         {/* H1: The Core Value Proposition - White Text for Contrast */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4
                     text-white uppercase leading-tight"> {/* */}
           {/* Corrected: Replaced 'Don't' with 'Don't' */}
          Don't Just Change Tyres.
          <span className="text-primary">Invest in Safety.</span>
        </h1>

        {/* H2/Subheading: Strategic Trust Anchors - Clear and High-Impact */}
        <h2 className="text-xl md:text-2xl font-medium mb-4
                       text-neutral-400"> {/* */}
           {/* Corrected: Replaced 'Alberton's' with 'Alberton's' */}
          Alberton's Family-Run Fitment Experts Since <span className="font-extrabold text-primary">1989.</span>
         </h2>

         {/* Core USP Points - Quick Trust Indicators (Updated to stack on mobile) */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-10 text-lg"> {/* */}
            <span className="flex items-center text-white">
                <span className="text-primary mr-2">✓</span> Pirelli & ATE Quality
            </span>
            
             <span className="flex items-center text-white">
                 <span className="text-primary mr-2">✓</span> Over 35 Years Experience {/* */}
            </span>
        </div>

        {/* PRIMARY CTA - RESPONSIVE FIX:
          1. Shortened text from "Claim Your FREE 6-Point Vehicle Assessment Today"
          2. Removed "py-8" which was causing excessive height.
          3. Adjusted text size to be smaller on mobile (text-lg) and grow on larger screens (md:text-xl).
          4. Adjusted padding (px-8) to be slightly smaller on mobile if needed, but size="xl" handles this well.
        */}
        <Button
            asChild
            size="xl"
  
              className="text-lg md:text-xl font-bold px-8 transition-all
                       bg-primary hover:bg-primary/hover text-white" // Uses orange bg-primary //
        >
          <Link href="/assessment">
            Claim Your FREE 6-Point Assessment
          </Link>
         </Button>

        {/* Secondary Low-Friction CTA Text */}
        <p className="mt-4 text-sm text-neutral-500">
          *No Obligation. No Hassle. We Check Shocks, Brakes & Batteries. {/* */}
        </p>
      </div>
    </section>
  );
} //