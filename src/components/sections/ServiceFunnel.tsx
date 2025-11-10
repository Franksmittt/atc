// src/components/sections/ServiceFunnel.tsx
// Server Component - Directing user intent to specific service pages.

import React from 'react';
import Link from 'next/link';
import { Car, Disc3, Zap, BatteryCharging, DollarSign, BookOpen } from 'lucide-react';

const SERVICE_CATEGORIES = [
    { title: "Tyres & Rims", icon: Car, link: "/services/tyres", cta: "Shop Tyres Now" },
    { title: "Brakes & Discs", icon: Disc3, link: "/services/brakes", cta: "Book Brake Service" },
    { title: "Shocks & Suspension", icon: Zap, link: "/services/shocks", cta: "Get Suspension Quote" },
    { title: "Car Batteries", icon: BatteryCharging, link: "/services/batteries", cta: "Free Battery Test" },
    { title: "Promotions & Deals", icon: DollarSign, link: "/promotions", cta: "View Deals" },
    // --- NEW: Pro Tip Card linking to the new blog post ---
    { title: "Pro Tip: Tyre Guide", icon: BookOpen, link: "/blog/how-to-read-your-tyre-size", cta: "Read Guide" },
];

export default function ServiceFunnel() {
    return (
        // Light background (contrasts with dark proof section above)
        <section className="py-24 bg-white dark:bg-neutral-800 transition-colors duration-500">
            <div className="container mx-auto px-4 max-w-6xl">
                
                <header className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-neutral-800 dark:text-white mb-3">
                        Find Exactly What You Need. Fast.
                    </h2>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400">
                        Select one of our five core service categories to see brands, pricing, and book your fitting instantly.
                    </p>
                </header>

                {/* --- Grid adjusted for 6 items (3 columns on small screens, 5 on large) --- */}
                <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {SERVICE_CATEGORIES.map((category) => (
                        <Link 
                            key={category.title} 
                            href={category.link} 
                            className="group flex flex-col items-center justify-center p-6 bg-neutral-100 dark:bg-neutral-900 rounded-lg shadow-lg 
                                       hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300"
                        >
                            <category.icon className="h-10 w-10 text-primary group-hover:text-white mb-3 transition-colors" />
                            <h3 className="text-lg font-semibold text-neutral-800 dark:text-white group-hover:text-white transition-colors mb-1">
                                {category.title}
                            </h3>
                            <span className="text-sm text-primary group-hover:text-white font-bold">
                                {category.cta} →
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}