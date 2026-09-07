// src/app/services/tyres/page.tsx
// Server Component - Engineered for Local SEO Ranking on "Tyres & Fitment".
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Zap, ShieldCheck, TrendingUp, Handshake } from 'lucide-react'; // Removed unused 'Image' and 'Car' imports
// --- NEW IMPORT ---
import TyreGuide from '@/components/sections/TyreGuide';


// --- Metadata: Targeted for High-Volume SEO Keywords ---
export const metadata = {
  // Target keywords: Tyre Brands, Fitment, Pirelli, Michelin, Alberton
  title: "New Tyre Sales, Fitment & Alignment | Alberton's Premium Tyre Experts",
  description: "Bridgestone, Continental, Goodyear, Dunlop and Hankook fitted in Alberton. Precision tyre fitting, computerized balancing, and 3D wheel alignment.",
};

// Data Structure for Key Tyre Brands & Value
const PREMIUM_BRANDS = [
  { name: "Bridgestone", detail: "SA volume leader. Shop hero: Turanza T005. Local Dueler A/T002 for bakkies.", href: "/brands/bridgestone" },
  { name: "Continental", detail: "Local plant + BestDrive network. Shop hero: PremiumContact 6, with PC7 as current flagship.", href: "/brands/continental" },
  { name: "Goodyear", detail: "Major local manufacturer. Shop hero: EfficientGrip Performance 2. Wrangler for bakkies.", href: "/brands/goodyear" },
  { name: "Dunlop", detail: "Sumitomo Rubber SA. Shop hero: Grandtrek AT5 with 100,000 km mileage warranty (T&Cs).", href: "/brands/dunlop" },
  { name: "Hankook", detail: "Major import player. Shop hero: Ventus Prime 3, with Prime 4 as the current successor.", href: "/brands/hankook" },
  { name: "Pirelli & Michelin", detail: "Premium import options we still quote alongside the local factory brands.", href: "/brands" },
];

export default function TyreServicesPage() {
  return (
    <main>
      {/* 1. Services Header: H1 Focus on Core Service */}
      <section className="pt-32 pb-20 bg-neutral-900 text-white border-b-8 border-primary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 uppercase text-center leading-tight">
            Tyres & Fitment <span className="text-primary">You Can Trust</span>
          </h1>
          <p className="text-xl text-neutral-400 text-center">
            Precision tyre sales, fitting, balancing, and alignment. We only sell brands that guarantee your safety.
          </p>
        </div>
      </section>

      {/* 2. Premium Brand Showcase (Authority) */}
      <section className="py-24 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <h2 className="text-4xl font-extrabold text-center text-neutral-800 dark:text-white mb-12">
            Current SA Tyre Brands We Fit
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PREMIUM_BRANDS.map((brand) => (
              <Link key={brand.name} href={brand.href} className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 text-center hover:border-primary hover:shadow-xl transition-shadow">
                <Handshake className="h-10 w-10 text-primary mx-auto mb-4" /> 
                <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-2">{brand.name}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{brand.detail}</p>
                <span className="mt-3 inline-block text-sm font-bold text-primary">View products →</span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 3. The Alberton Fitment Difference (USP/Process) */}
      <section className="py-24 bg-neutral-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4 max-w-6xl">
            
            <h2 className="text-4xl font-extrabold text-center text-neutral-800 dark:text-white mb-12">
                Why Choose Us for Your Next Tyres?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-xl border-t-4 border-primary/50">
                    <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-white">Safety Guarantee</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                        Every fitment includes a free brake, shock, and battery check—ensuring your entire safety system is road-ready.
                    </p>
                </div>
                <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-xl border-t-4 border-primary/50">
                    <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-white">3D Precision Alignment</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                        We use state-of-the-art 3D technology to guarantee maximum tyre life and optimal vehicle handling.
                    </p>
                </div>
                <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-xl border-t-4 border-primary/50">
                    <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-white">Best Local Value</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                        Competitive pricing on all major brands with the guaranteed honest service only a family-run clinic can offer.
                    </p>
                </div>
            </div>
            <div className="text-center mt-12">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/hover text-white text-lg font-bold">
                    <Link href="/contact">Request a Tyre Quote Now</Link>
                </Button>
            </div>
        </div>
      </section>

      {/* 4. NEW: Tyre Size Guide (Utility and final CTA) */}
      <TyreGuide />

      {/* 5. Final CTA (Lead Magnet Repetition) */}
      <section className="py-16 bg-primary dark:bg-primary/90 text-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-extrabold mb-4">
                  Not Sure What You Need? Start With Safety.
              </h2>
              <p className="text-lg mb-6">
                  Book your FREE 6-Point Vehicle Assessment now.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-neutral-100 font-bold">
                  <Link href="/assessment">Book My FREE Assessment</Link>
              </Button>
          </div>
      </section>
    </main>
  );
}