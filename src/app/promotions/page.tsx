// src/app/promotions/page.tsx
// Server Component - Dedicated page for promotions and special deals.

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tag, Clock, TrendingDown } from 'lucide-react';

// --- Metadata: Targeted for Deals and Offers ---
export const metadata = {
  title: "Tyre & Service Promotions | Best Deals in Alberton",
  description: "View the current promotions and special offers on premium tyres, ATE brakes, and vehicle servicing at Alberton Tyre Clinic. Limited-time deals!",
};

const CURRENT_PROMOTIONS = [
    {
        title: "Free Alignment Check with Any 4 New Tyres",
        description: "Maximize your tyre life. Buy any four tyres and receive a complimentary 3D Wheel Alignment check, valued at R350.",
        icon: TrendingDown,
        cta: "Claim This Deal",
        link: "/assessment",
    },
    {
        title: "15% Off ATE Brake Pad & Disc Replacement",
        description: "Upgrade to guaranteed stopping power. Get a discount on ATE components when you book the full brake service package.",
        icon: Tag,
        cta: "Get Brake Quote",
        link: "/services/brakes",
    },
    {
        title: "R200 Cashback on All Willard Batteries",
        description: "Winter-ready power! Receive a R200 instant cashback when purchasing and fitting any high-capacity Willard battery.",
        icon: Clock,
        cta: "Check Battery Price",
        link: "/services/batteries",
    },
];

export default function PromotionsPage() {
    return (
        <main>
            {/* Header: H1 Focus on Deals */}
            <section className="pt-32 pb-20 bg-neutral-900 text-white border-b-8 border-primary">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 uppercase leading-tight">
                        Current <span className="text-primary">Deals & Offers</span>
                    </h1>
                    <p className="text-xl text-neutral-400">
                        Limited-time safety and savings for Alberton drivers. Book now before these deals expire!
                    </p>
                </div>
            </section>

            {/* Promotions Grid */}
            <section className="py-24 bg-white dark:bg-neutral-800">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-3 gap-8">
                        {CURRENT_PROMOTIONS.map((promo, index) => (
                            <div
                                key={index}
                                className="p-8 bg-neutral-100 dark:bg-neutral-900 rounded-xl shadow-2xl border-t-8 border-primary hover:shadow-primary/30 transition-shadow duration-300"
                            >
                                <promo.icon className="h-10 w-10 text-primary mb-4" />
                                <h2 className="text-2xl font-bold text-neutral-800 dark:text-white mb-3">
                                    {promo.title}
                                </h2>
                                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                                    {promo.description}
                                </p>
                                <Button asChild className="w-full bg-primary hover:bg-primary/hover text-white font-bold">
                                    <Link href={promo.link}>{promo.cta} →</Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA: Reminder about free check */}
            <section className="py-16 bg-neutral-100 dark:bg-neutral-900 text-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/hover text-white font-bold">
                    <Link href="/assessment">Got a Question? Book Your FREE Assessment Now</Link>
                </Button>
            </section>
        </main>
    );
}