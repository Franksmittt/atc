// src/components/sections/BrandsOfAuthority.tsx
// Server Component - High visual impact, no client-side JS.

import React from 'react';
import Link from 'next/link';
import { Truck, Zap, BatteryCharging, Disc3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Organized Brand Data for structured display
const BRAND_CATEGORIES = [
  {
    name: "Tyres & Fitment",
    icon: Truck,
    brands: [
      "Pirelli (Dealer)", "Dunlop", "Yokahama", "Kumho",
      "Michelin", "Bridgestone", "BF Goodrich", "Falken"
    ],
    premium: "Pirelli",
  },
  {
    name: "Safety & Suspension",
    icon: Disc3,
    brands: [
      "ATE (Brakes)", "Textar", "Safeline",
      "Bilstein (Shocks)", "Monroe", "Gabriel"
    ],
    premium: "ATE & Bilstein",
  },
  {
    name: "Wheels & Power",
    icon: BatteryCharging,
    brands: [
      "Lenso", "A-Line Wheels", "Black Rhino",
      "Willard (Batteries)", "Exide", "Atlas", "Raylite"
    ],
    premium: "Black Rhino & Willard",
  },
];

export default function BrandsOfAuthority() {
  return (
    // Darker charcoal background for premium visual impact
    <section className="py-24 bg-neutral-900 dark:bg-neutral-950 text-white">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Title: Hierarchy & Contrast */}
        <header className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-3 text-white">
            Quality You Can <span className="text-primary">Trust.</span>
            Safety We <span className="text-primary">Guarantee.</span>
          </h2>
          <p className="text-xl text-neutral-400">
            {/* Corrected: Replaced 'world's' with 'world&apos;s' */}
            We partner with the world&apos;s leading automotive brands to ensure your vehicle leaves safe, every time.
          </p>
        </header>

        {/* 3-Column Brand Categories Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
           {BRAND_CATEGORIES.map((category) => (
            <div
              key={category.name}
              className="bg-neutral-800 p-8 rounded-xl shadow-2xl border-t-8 border-primary/70"
            > {/* */}
              <category.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold
 mb-3 text-white"> {/* */}
                {category.name}
              </h3>

              {/* Premium Focus Badge */}
              <p className="text-sm font-semibold text-primary mb-4 border-b border-neutral-700 pb-3">
                 Premium Focus: {category.premium} {/* */}
              </p>

              {/* Brand List: Proximity & Simplicity */}
              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {category.brands.map(brand => (
                  <p
                     key={brand} //
                    className="text-neutral-300 text-sm font-medium hover:text-white transition-colors flex items-center"
                  >
                    <Zap className="h-4 w-4 text-primary/80 mr-2 flex-shrink-0" />
                     {brand} {/* */}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA: Repetition of Lead Magnet */}
         <div className="text-center mt-20"> {/* */}
          <h3 className="text-3xl font-extrabold text-primary mb-4">
            Safety Starts with an Assessment.
          </h3> {/* */}
          <p className="text-xl text-neutral-300 mb-6">
            Let our experts check your entire vehicle, not just the tread.
          </p> {/* */}
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/hover text-white text-lg font-bold"
          >
            <Link href="/assessment">Book My FREE 6-Point Assessment</Link>
          </Button>
        </div>
       </div> {/* */}
    </section>
  );
} //