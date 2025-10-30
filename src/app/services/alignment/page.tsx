// src/app/services/alignment/page.tsx
// Server Component - Engineered for Local SEO Ranking on "Wheel Alignment & Balancing".
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Wrench, Shield, TrendingUp } from 'lucide-react'; // Removed unused 'Zap' import

// --- Metadata: Targeted for High-Volume SEO Keywords ---
export const metadata = {
  // Target keywords: 3D Wheel Alignment, Balancing, Tyre Warranty, Alberton
  title: "3D Wheel Alignment & Balancing | Alberton's Tyre Warranty Specialists",
  description: "Mandatory alignment and balancing for high-mileage warranties. We use state-of-the-art 3D equipment to ensure perfect steering geometry, maximizing tyre life and fuel efficiency in Alberton.",
};
export default function AlignmentServicesPage() {
  return (
    <main>
      {/* 1. Services Header: H1 Focus on Core Service */}
      <section className="pt-32 pb-20 bg-neutral-900 text-white border-b-8 border-primary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 uppercase text-center leading-tight">
            3D Wheel <span className="text-primary">Alignment</span> & Balancing
          </h1>
          <p className="text-xl text-neutral-400 text-center">
            Precision adjustment that guarantees your tyre warranty, maximizes lifespan, and ensures safe handling.
          </p>
        </div>
      </section>

      {/* 2. Value Proposition & Warranty Anchor */}
      <section className="py-24 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
       
            <div className="space-y-6">
                <h2 className="text-4xl font-extrabold text-neutral-800 dark:text-white">
                    It&apos;s Not Optional. It&apos;s Mandatory for Warranty.
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                    Most premium tyre warranties require **alignment and balancing every 10,000 km**. Our experts use advanced 3D scanning equipment to adjust the steering angles to factory specifications, protecting your investment.
                </p>
                <ul className="space-y-4 pt-4">
                    <li className="flex items-center text-lg text-primary font-semibold">
                        <Shield className="h-6 w-6 mr-3 flex-shrink-0" /> Tyre Warranty Protection
                    </li>
                    <li className="flex items-center text-lg text-primary font-semibold">
                        <Wrench className="h-6 w-6 mr-3 flex-shrink-0" /> Prevent Premature Tyre Wear
                    </li>
                    <li className="flex items-center text-lg text-primary font-semibold">
                        <TrendingUp className="h-6 w-6 mr-3 flex-shrink-0" /> Improve Fuel Efficiency
                    </li>
                </ul>
                <div className="pt-6">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/hover text-white font-bold">
                        <Link href="/contact">Book Your Alignment Appointment</Link>
                    </Button>
                </div>
            </div>
            {/* Image Placeholder */}
            <div className="rounded-xl overflow-hidden shadow-2xl">
                 
            </div>
        </div>
      </section>

      {/* 3. CTA to Free Assessment (Pre-Alignment Check) */}
      <section className="py-16 bg-neutral-100 dark:bg-neutral-900 text-center">
          <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-extrabold text-neutral-800 dark:text-white mb-4">
                  Do You Need Alignment Now?
              </h2>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-6">
                  If your steering wheel is pulling or vibrating, book your **FREE** 6-Point Vehicle Assessment—it includes a quick alignment diagnosis.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/hover text-white font-bold">
                  <Link href="/assessment">Book My FREE Alignment Check</Link>
              </Button>
          </div>
      </section>
    </main>
  );
}