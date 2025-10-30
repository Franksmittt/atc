// src/app/services/balancing-rotation/page.tsx
// Server Component - Engineered for routine maintenance and tyre life extension.

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RotateCw, Wrench, CheckCircle } from 'lucide-react'; // Removed unused 'Zap' and 'Shield' imports

// --- Metadata: Targeted for Routine Maintenance Keywords ---
export const metadata = {
  // Target keywords: Wheel Balancing, Tyre Rotation, Vibration, Alberton
  title: "Wheel Balancing & Tyre Rotation Service | Maximize Tyre Lifespan in Alberton",
  description: "Eliminate road vibrations and prevent uneven tyre wear with expert computerized wheel balancing and routine tyre rotation. Essential service every 10,000 km to protect your investment.",
};
export default function BalancingRotationPage() {
  return (
    <main>
      {/* 1. Services Header: H1 Focus on Core Service */}
      <section className="pt-32 pb-20 bg-neutral-900 text-white border-b-8 border-primary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 uppercase text-center leading-tight">
            Wheel Balancing & <span className="text-primary">Tyre Rotation</span>
          </h1>
          <p className="text-xl text-neutral-400 text-center">
            Routine service every 10,000 km is critical to safety, comfort, and honouring your tyre warranty.
          </p>
        </div>
      </section>

      {/* 2. Service Breakdown (What's Included) */}
      <section className="py-24 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-start">
      
            {/* Column 1: Rotation */}
            <div className="p-8 bg-neutral-100 dark:bg-neutral-900 rounded-xl shadow-xl border-t-8 border-primary/70">
                <RotateCw className="h-10 w-10 text-primary mb-4" />
                <h2 className="text-3xl font-extrabold text-neutral-800 dark:text-white mb-4">
                    Tyre Rotation
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                    Swapping the position of your tyres (e.g., front-to-back) ensures **even wear** across all four tyres, maximizing their lifespan and guaranteeing manufacturer warranty compliance.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-center text-neutral-800 dark:text-neutral-200">
                        <CheckCircle className="h-5 w-5 mr-3 text-primary flex-shrink-0" /> **Goal:** Maximize Tyre Lifespan
                    </li>
                    <li className="flex items-center text-neutral-800 dark:text-neutral-200">
                        <CheckCircle className="h-5 w-5 mr-3 text-primary flex-shrink-0" /> **Symptom:** Recommended service interval (not fixing a specific fault)
                    </li>
                </ul>
            </div>
            
            {/* Column 2: Balancing */}
            <div className="p-8 bg-neutral-100 dark:bg-neutral-900 rounded-xl shadow-xl border-t-8 border-primary/70">
                <Wrench className="h-10 w-10 text-primary mb-4" />
                <h2 className="text-3xl font-extrabold text-neutral-800 dark:text-white mb-4">
                    Computerized Wheel Balancing
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                    We use a computerized machine to detect and correct tiny weight imbalances in the tyre and rim assembly, fixing the root cause of high-speed vibrations.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-center text-neutral-800 dark:text-neutral-200">
                        <CheckCircle className="h-5 w-5 mr-3 text-primary flex-shrink-0" /> **Goal:** Eliminate Road Vibration & Improve Comfort
                    </li>
                    <li className="flex items-center text-neutral-800 dark:text-neutral-200">
                        <CheckCircle className="h-5 w-5 mr-3 text-primary flex-shrink-0" /> **Symptom:** Steering wheel or seat vibration above 80 km/h
                    </li>
                </ul>
            </div>
        </div>
      </section>

      {/* 3. The Alignment Distinction (Clear Funnel) */}
      <section className="py-20 bg-neutral-900 dark:bg-neutral-950 text-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-extrabold mb-4">
                  Need Alignment Too? What&apos;s the Difference?
              </h2>
              <p className="text-lg text-neutral-400 mb-6">
                  Balancing fixes weight issues (vibration). **Alignment** fixes angle issues (steering pull, uneven wear). We recommend doing both together.
              </p>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-bold">
                  <Link href="/services/alignment">Learn About 3D Wheel Alignment →</Link>
              </Button>
          </div>
      </section>

      {/* 4. Final CTA (Lead Magnet Repetition) */}
      <section className="py-16 bg-primary dark:bg-primary/90 text-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-extrabold mb-4">
                  Ready for Your 10,000 km Service?
              </h2>
              <p className="text-lg mb-6">
                  Book your Tyre Rotation and Balancing now, or include a **FREE** assessment of your overall safety system.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-neutral-100 font-bold">
                  <Link href="/contact">Book My Rotation & Balancing</Link>
              </Button>
          </div>
      </section>
    </main>
  );
}