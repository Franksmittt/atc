// src/app/services/brakes/page.tsx
// Server Component - Engineered for Local SEO Ranking on "Brakes & Discs".
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Disc3, ShieldCheck, Wrench, Microscope } from 'lucide-react'; // Removed unused 'Zap' import
// --- Metadata: Targeted for High-Volume SEO Keywords ---
export const metadata = {
  // Target keywords: Brakes, Discs, ATE, Alberton, Service
  title: "Brake Service & Disc Replacement | ATE Brake Experts in Alberton",
  description: "Expert brake pad and disc replacement near you. We only fit premium ATE and Textar components, guaranteeing maximum stopping power and vehicle safety in Alberton.",
};
// Data Structure for Brake Value Propositions
const BRAKE_VALUE_PROPS = [
  {
    icon: Disc3,
    title: "Official ATE Dealer",
    detail: "We stock the full range of ATE brake systems, known globally for superior stopping performance and quality.",
  },
  {
    icon: ShieldCheck,
    title: "Full System Safety Check",
    detail: "Every brake service includes a visual check of your shocks, alignment, and tyres to ensure comprehensive safety.",
  },
  {
    icon: Wrench,
    // FIX: Replaced ' with ' (Line 58)
    detail: "Our **36-year** experienced technicians guarantee precision fitment, eliminating squeaks and maximizing component life.",
  },
];
export default function BrakeServicesPage() {
  return (
    <main>
      {/* 1. Services Header: H1 Focus on Core Service */}
      <section className="pt-32 pb-20 bg-neutral-900 text-white border-b-8 border-primary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 uppercase text-center leading-tight">
            Certified Brake <span className="text-primary">Service Experts</span>
          </h1>
          <p className="text-xl text-neutral-400 text-center">
            Your safety stops here. We specialize in high-performance **ATE Brakes** for reliable stopping power in Alberton.
          </p>
        </div>
      </section>

      {/* 2. Brand Authority & Problem/Solution */}
      <section className="py-24 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
                {/* Authority Content */}
                <div className='space-y-6'>
                    <h2 className="text-4xl font-extrabold text-neutral-800 dark:text-white">
                        Don&apos;t Compromise on Braking Safety
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400">
                        Brakes are the single most critical component on your vehicle. Unlike cheaper alternatives that fade under pressure, we exclusively fit **ATE**, **Textar**, and **Safeline** systems—the choice of the world&apos;s top vehicle manufacturers.
                    </p>
                    <div className='space-y-4 pt-4'>
                        {BRAKE_VALUE_PROPS.map((prop, index) => (
                            <div key={index} className="flex items-start">
                    
                                <prop.icon className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-neutral-800 dark:text-white">{prop.title}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{prop.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Placeholder or CTA Card */}
                <div className="p-8 bg-neutral-100 dark:bg-neutral-900 rounded-xl shadow-2xl border-t-8 border-primary text-center space-y-4">
                    <Microscope className="h-16 w-16 text-primary mx-auto" />
                    <h3 className="text-2xl font-bold text-neutral-800 dark:text-white">
                        Is it time for a brake inspection?
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        If you hear squealing, grinding, or feel a spongy pedal, book your priority brake check immediately.
                    </p>
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/hover text-white text-lg font-bold w-full">
                        <Link href="/contact">Get a Brake Quote Now</Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Final CTA (Lead Magnet Repetition) */}
      <section className="py-16 bg-primary dark:bg-primary/90 text-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-extrabold mb-4">
                  Free Assessment: Brakes Included.
              </h2>
              <p className="text-lg mb-6">
                  Our FREE 6-Point Vehicle Assessment includes a visual brake inspection at no cost and no obligation.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-neutral-100 font-bold">
                  <Link href="/assessment">Book My FREE Assessment</Link>
              </Button>
          </div>
      </section>
    </main>
  );
}