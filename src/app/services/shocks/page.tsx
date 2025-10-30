// src/app/services/shocks/page.tsx
// Server Component - Engineered for Local SEO Ranking on "Shocks & Suspension".
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TrendingDown, Gauge, Car } from 'lucide-react'; // Removed unused 'Zap' import

// --- Metadata: Targeted for High-Volume SEO Keywords ---
export const metadata = {
  title: "Bilstein Shock Absorbers & Suspension Service | Alberton Experts",
  description: "Expert shock absorber replacement and suspension assessment in Alberton. We supply high-quality Bilstein and Monroe components to restore vehicle handling, comfort, and safety.",
};
export default function ShocksServicesPage() {
  return (
    <main>
      {/* 1. Services Header: H1 Focus on Core Service */}
      <section className="pt-32 pb-20 bg-neutral-900 text-white border-b-8 border-primary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 uppercase text-center leading-tight">
            Shocks & Suspension <span className="text-primary">Fitment</span>
          </h1>
          <p className="text-xl text-neutral-400 text-center">
            Restore handling and comfort. Expert installation of **Bilstein**, Monroe, and Gabriel suspension components.
          </p>
        </div>
      </section>

      {/* 2. Problem/Solution & Authority */}
      <section className="py-24 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Placeholder */}
            <div className="rounded-xl overflow-hidden shadow-2xl">
                 
            </div>

            <div className="space-y-6">
                <h2 className="text-4xl font-extrabold text-neutral-800 dark:text-white">
                    Failing Shocks Compromise Safety
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                    Worn-out shock absorbers dramatically increase your stopping distance and reduce tyre grip. We offer a free, no-obligation inspection of your suspension system.
                </p>
                <ul className="space-y-4 pt-4">
                    <li className="flex items-center text-lg text-primary font-semibold">
                        <TrendingDown className="h-6 w-6 mr-3 flex-shrink-0" /> Reduce Stopping Distance
                    </li>
                    <li className="flex items-center text-lg text-primary font-semibold">
                        <Gauge className="h-6 w-6 mr-3 flex-shrink-0" /> Restore Vehicle Handling
                    </li>
                    <li className="flex items-center text-lg text-primary font-semibold">
                        <Car className="h-6 w-6 mr-3 flex-shrink-0" /> Prevent Premature Tyre Wear
                    </li>
                </ul>
                <div className="pt-6">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/hover text-white font-bold">
                        <Link href="/contact">Get a Suspension Quote</Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Final CTA: Assessment */}
      <section className="py-16 bg-primary dark:bg-primary/90 text-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-extrabold mb-4">
                  Experiencing a Bouncy Ride?
              </h2>
              <p className="text-lg mb-6">
                  Book your **FREE** 6-Point Vehicle Assessment—we specifically check your shocks for leaks and damage.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-neutral-100 font-bold">
                  <Link href="/assessment">Book My FREE Shock Check</Link>
              </Button>
          </div>
      </section>
    </main>
  );
}