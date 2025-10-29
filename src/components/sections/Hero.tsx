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
           {/* Corrected: Replaced 'Don't' with 'Don&apos;t' */}
          Don&apos;t Just Change Tyres. <span className="text-primary">Invest in Safety.</span>
        </h1>

        {/* H2/Subheading: Strategic Trust Anchors - Clear and High-Impact */}
        <h2 className="text-xl md:text-2xl font-medium mb-4
                       text-neutral-400"> {/* */}
           {/* Corrected: Replaced 'Alberton's' with 'Alberton&apos;s' */}
          Alberton&apos;s Family-Run Fitment Experts Since <span className="font-extrabold text-primary">1996.</span>
        </h2>

         {/* Core USP Points - Quick Trust Indicators */}
        <div className="flex justify-center space-x-6 mb-10 text-lg"> {/* */}
            <span className="flex items-center text-white">
                <span className="text-primary mr-2">✓</span> Pirelli & ATE Quality
            </span>
            <span className="flex items-center text-white">
                 <span className="text-primary mr-2">✓</span> Over 28 Years Experience {/* */}
            </span>
        </div>

        {/* Primary Lead Magnet CTA (FREE ASSESSMENT) - Orange Dominant */}
        <Button
            asChild
            size="xl"
             className="text-xl md:text-2xl font-bold px-12 py-8 transition-all
                       bg-primary hover:bg-primary/hover text-white" // Uses orange bg-primary //
        >
          <Link href="/assessment">
            Claim Your FREE 6-Point Vehicle Assessment Today
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