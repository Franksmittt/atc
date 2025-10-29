// src/components/sections/TrustAndProblem.tsx
// Server Component

import React from 'react';
import { Truck, Shield, DollarSign } from 'lucide-react'; // Trust Icons
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function TrustAndProblem() {
  return (
    // Contrasting background (light/white) below the dark hero
    <section className="py-24 bg-white dark:bg-neutral-800 transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* --- Block 1: The TRUST ANCHOR --- */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-neutral-800 dark:text-white mb-3">
            More Than Tyres. It&apos;s Our Heritage. {/* Escaped It's */}
           </h2> {/* */}
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
             {/* Corrected: Replaced 'Alberton's' with 'Alberton&apos;s' */}
            We are Alberton&apos;s trusted family-run fitment center, established in 1996. We know your safety matters.
          </p>
        </div>

        {/* Three-Column Trust Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">


           <div className="text-center p-6 border dark:border-neutral-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"> {/* */}
            <Truck className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-2">Local & Reliable</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
               {/* Corrected: Replaced 'don't' with 'don&apos;t' */}
              28 years serving Alberton. We don&apos;t guess; we rely on experience to fit your vehicle right, every time.
            </p> {/* */}
          </div>

          <div className="text-center p-6 border dark:border-neutral-700 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-2">Safety First Policy</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
               We focus on premium brands (Pirelli, ATE) and assess your full vehicle safety components, not just the tyres. {/* */}
            </p> {/* */}
          </div>

          <div className="text-center p-6 border dark:border-neutral-700 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <DollarSign className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-2">Fair, Honest Pricing</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
               We provide the best local pricing and will never upsell a service you don&apos;t actually need. {/* Escaped don't */}
            </p> {/* */}
          </div>
        </div>

        {/* --- Block 2: The Problem/Solution Contrast --- */}
        <div className="grid md:grid-cols-2 gap-12 items-start bg-neutral-100 dark:bg-neutral-900 p-10 rounded-xl border border-primary/20">

          {/* Problem Column */}
          <div className="space-y-6">
            <h3 className="text-3xl
 font-bold text-neutral-800 dark:text-white"> {/* */}
              The Generic Fitment Problem
            </h3>
            <ul className="space-y-3 text-neutral-600 dark:text-neutral-400 text-lg">
              <li className="flex items-start">
                <span className="text-destructive font-extrabold text-2xl mr-3 leading-none">×</span>
                 <p>High-pressure sales and unnecessary upsells based on commission targets.</p> {/* */}
              </li>
              <li className="flex items-start">
                <span className="text-destructive font-extrabold text-2xl mr-3 leading-none">×</span>
                <p>Low-quality assessments that ignore critical safety components (shocks/brakes).</p>
              </li>
               <li className="flex items-start"> {/* */}
                <span className="text-destructive font-extrabold text-2xl mr-3 leading-none">×</span>
                <p>Inexperienced staff leading to improper fitting that can compromise tyre life.</p>
              </li>
            </ul>
          </div>


           {/* Solution Column */}
          <div className="space-y-6"> {/* */}
            <h3 className="text-3xl font-bold text-primary">
              The Alberton Tyre Clinic Difference
            </h3>
            <ul className="space-y-3 text-neutral-800 dark:text-white text-lg">
              <li className="flex items-start">
                 <span className="text-primary font-extrabold text-2xl mr-3 leading-none">✓</span> {/* */}
                <p>Your FREE 6-Point Assessment is Safety-Driven, Not Sales-Driven.</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-extrabold text-2xl mr-3 leading-none">✓</span>
                 <p>Honest advice from a family of fitment experts, guaranteed.</p> {/* */}
              </li>
              <li className="flex items-start">
                <span className="text-primary font-extrabold text-2xl mr-3 leading-none">✓</span>
                <p>Precision fitment that maximizes performance, safety, and tyre longevity.</p>
               </li> {/* */}
            </ul>
            <div className="pt-4">
                <Button asChild className="text-lg bg-primary hover:bg-primary/hover">
                    <Link href="/assessment">Book Your Free, Honest Assessment</Link>
                </Button>
             </div> {/* */}
          </div>
        </div>
      </div>
    </section>
  );
} //