// src/app/services/batteries/page.tsx
// Server Component - Engineered to funnel high-intent battery traffic to the specialized Alberton Battery Mart website.
// This page captures local search intent but directs users (and SEO authority) to the partner site.
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Clock, Zap, ExternalLink, MapPin } from 'lucide-react'; // Removed unused 'BatteryCharging' import
import type { Metadata } from "next";
// Explicit import for Metadata type

// --- External Link Constant (Crucial for SEO link equity transfer) ---
const ALBERTON_BATTERY_MART_URL = "https://www.albertonbatterymart.co.za";
// --- Metadata: Targeted for High-Volume SEO Keywords ---
export const metadata: Metadata = {
  title: "Willard & Exide Car Batteries | FREE Testing & Replacement in Alberton",
  description: "Need a new car battery? We recommend our specialized partner, Alberton Battery Mart, located right next door. Get free testing, expert fitment, and the best prices on Willard and Exide batteries.",
  // CRUCIAL SEO: Use canonical tag to signal that the partner site is the primary source of this content.
  alternates: {
      canonical: ALBERTON_BATTERY_MART_URL, 
  },
};
export default function BatteriesServicesPage() {
  return (
    <main>
      {/* 1. Services Header: H1 Focus on Core Service */}
      <section className="pt-32 pb-20 bg-neutral-900 text-white border-b-8 border-primary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 uppercase text-center leading-tight">
            Car Battery Sales & <span className="text-primary">Diagnostics</span>
          </h1>
          <p className="text-xl text-neutral-400 text-center">
            For specialized battery service, we partner with Alberton Battery Mart, right next door.
          </p>
        </div>
      </section>

      {/* 2. Funneling Section (Primary SEO Callout & Link) */}
      <section className="py-24 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        
            <div className="space-y-6">
                <h2 className="text-4xl font-extrabold text-neutral-800 dark:text-white">
                    Need a New Battery?
                    Visit Our Specialist Partner.
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                    While we check battery health as part of our FREE 6-Point Assessment, all primary battery sales, urgent callouts, and specialist fitment services are handled by Alberton Battery Mart.
                    They are the local authority and offer:
                </p>
                <ul className="space-y-4 pt-4">
                    <li className="flex items-center text-lg text-primary font-semibold">
                        <Zap className="h-6 w-6 mr-3 flex-shrink-0" /> FREE Callout, Testing & Fitment
                    </li>
                    <li className="flex items-center text-lg text-primary font-semibold">
                        <Clock className="h-6 w-6 mr-3 flex-shrink-0" /> Fastest Service in Alberton
                    </li>
                    <li className="flex items-center text-lg text-primary font-semibold">
                        <MapPin className="h-6 w-6 mr-3 flex-shrink-0" /> Located Right Next Door (Link Building)
                    </li>
                </ul>
            </div>
            {/* CTA Card for Immediate Funnel */}
            <div className="rounded-xl overflow-hidden shadow-2xl p-8 bg-neutral-100 dark:bg-neutral-900 text-center space-y-4">
                <h3 className='text-2xl font-bold text-primary'>Visit Alberton Battery Mart Now</h3>
                <p className='text-neutral-600 dark:text-neutral-400'>For quotes, pricing, and urgent callouts, please use their dedicated website.</p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/hover text-white font-bold w-full">
                    {/* CRUCIAL LINK: External link to the specialized site */}
                    <a href={ALBERTON_BATTERY_MART_URL} target="_blank" rel="noopener noreferrer">
                        Go to Battery Mart Website <ExternalLink className='ml-2 h-5 w-5' />
                    </a>
                </Button>
            </div>
        </div>
      </section>

      {/* 3. Final CTA: ATC Assessment (Maintain Core Service) */}
      <section className="py-16 bg-primary dark:bg-primary/90 text-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-extrabold mb-4">
                  Still Not Sure?
                  Start With Our FREE Assessment.
              </h2>
              <p className="text-lg mb-6">
                  Our FREE 6-Point Vehicle Assessment includes a quick battery check and directs you to the right place.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-neutral-100 font-bold">
                  <Link href="/assessment">Book My FREE Assessment</Link>
              </Button>
          </div>
      </section>
    </main>
  );
}