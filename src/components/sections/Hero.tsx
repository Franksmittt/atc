// src/components/sections/Hero.tsx
// Simplified server component for basic hero section.

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-neutral-800">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white uppercase leading-tight">
          Don&apos;t Just Change Tyres. <span className="text-primary">Invest in Safety.</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-medium mb-4 text-neutral-400">
          Alberton&apos;s Family-Run Fitment Experts Since <span className="font-extrabold text-primary">1989.</span>
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-10 text-lg text-white">
          <span>✓ Pirelli & ATE Quality</span>
          <span>✓ Over 35 Years Experience</span>
        </div>
        <Button
          asChild
          className="h-auto py-3 px-4 text-base font-bold whitespace-normal sm:py-4 sm:px-8 sm:text-lg sm:whitespace-nowrap bg-primary hover:bg-primary/90 text-white"
        >
          <Link href="/assessment">
            Claim Your 6-Point Assessment Today
          </Link>
        </Button>
        <p className="mt-4 text-sm text-neutral-500">
          {/* FIX: Replaced ' with &apos; to resolve unescaped entity error (Line 32) */}
          *No Obligation. No Hassle. We Check Shocks, Brakes & Batteries.
        </p>
      </div>
    </section>
  );
}