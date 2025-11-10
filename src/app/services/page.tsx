// src/app/services/page.tsx
// Server Component - Engineered for Local SEO Ranking.

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// REMOVED: Wrench was causing the unused variable error.
import { Car, Zap, BatteryCharging, Disc3, Shield, RotateCw } from 'lucide-react';
// --- Metadata: Targeted for High-Volume SEO Keywords ---
export const metadata = {
  // Target keywords: Tyre Brands, Fitment, Brakes, Alignment, Alberton
  title: "Car Servicing, Tyres, Brakes & Alignment | Alberton Fitment Experts",
  description: "Official Pirelli & ATE dealer offering Minor Vehicle Servicing, 3D Wheel Alignment, and guaranteed safety components in Alberton. Book your service online now.",
};
// Data Structure for the Strategically Mapped Services
const SEO_MAPPED_SERVICES = [
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "FREE 6-Point Safety Check",
    description: "The mandatory first step. We check shocks, brakes, battery health, and tyre wear to identify hidden defects. Book your free check online.",
    link: "/assessment",
    cta: "Book Free Check",
  },
  {
    icon: <Car className="h-8 w-8 text-white" />,
    title: "Premium Tyre Sales & Fitment",
    description: "Official dealers for Pirelli, Michelin, and 8 top brands. Precision fitting, computerized balancing, and alignment for maximum safety.",
    // Link updated to the new dedicated Tyre page
    link: "/services/tyres",
    cta: "Shop Tyres & Book",
  },
  {
    icon: <Disc3 className="h-8 w-8 text-white" />,
    title: "Brakes & Shocks (ATE & Bilstein)",
    description: "Expert installation of ATE Brakes and Bilstein Shocks. We guarantee road holding, safety, and reliable performance with premium brands.",
    // Link updated to the new dedicated Brakes page (since it's a higher priority safety item)
    link: "/services/brakes",
    cta: "Get Brakes & Shocks Quote",
  },
  {
    icon: <Zap className="h-8 w-8 text-white" />,
    title: "3D Wheel Alignment",
    description: "Mandatory for high-mileage warranties. State-of-the-art 3D alignment ensures safety, fuel efficiency, and max tyre life.",
    // Link updated to the new dedicated Alignment page
    link: "/services/alignment",
    cta: "Book 3D Alignment",
  },
  {
    icon: <RotateCw className="h-8 w-8 text-white" />,
    title: "Balancing & Rotation",
    description: "Routine tyre rotation and computerized balancing every 10,000 km to eliminate vibrations and ensure even tread wear.",
    // Link updated to the new dedicated Balancing page
    link: "/services/balancing-rotation",
    cta: "Book Balancing Service",
  },
  {
    icon: <BatteryCharging className="h-8 w-8 text-white" />,
    title: "Battery Sales & Diagnostics",
    description: "Urgent replacement service. High-quality Willard, Exide, and ATLASBX batteries with reliable warranties and free on-site testing.",
    // Link updated to the new dedicated Batteries page
    link: "/services/batteries",
    cta: "Check Battery Price",
  },
];


export default function ServicesPage() {
  return (
    <main>
      {/* Services Header: Reinforces New Identity (Minor Maintenance Center) */}
      <section className="pt-32 pb-20 bg-neutral-900 text-white border-b-8 border-primary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl font-extrabold mb-4 uppercase text-center">
            Your <span className="text-primary">Full-Service</span> Vehicle Maintenance Center
          </h1>
          <p className="text-xl text-neutral-400 text-center">
            We offer expert tyre fitment, routine minor servicing, and safety component replacement—all backed by a **36-year** family guarantee in Alberton.
          </p>
        </div>
      </section>

      {/* Core Services Grid: SEO-Mapped Funnel */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 max-w-6xl">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SEO_MAPPED_SERVICES.map((service) => (
              <div
                key={service.title}
                className="bg-white dark:bg-neutral-950 p-6 rounded-lg shadow-xl border border-neutral-200 dark:border-neutral-700
                           hover:shadow-2xl hover:border-primary transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                    <div className="w-16 h-16 bg-primary flex items-center justify-center rounded-full mb-4">
                        {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-800 dark:text-white mb-3">
                        {service.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-base">
                        {service.description}
                    </p>
                </div>
                {/* BUTTON IMPLEMENTATION (as requested) */}
                <Button asChild className="w-full bg-primary hover:bg-primary/hover text-white font-bold mt-4">
                    <Link href={service.link}>
                        {service.cta} →
                    </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section: Guarantee Lock-In Marketing */}
      <section className="py-16 bg-primary dark:bg-primary/90 text-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-extrabold mb-4">
                  Protect Your Investment: The High-Mileage Guarantee
              </h2>
              <p className="text-lg mb-6">
                  Tyre guarantees require mandatory service. Maintain your warranty by booking your routine
                  <span className='font-bold underline'> Alignment, Balancing, and Rotation every 10,000 km</span> exclusively with us.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-neutral-100 font-bold">
                  <Link href="/contact">Book Your Next 10,000 km Service</Link>
              </Button>
          </div>
      </section>
    </main>
  );
}