// src/components/sections/OptimizedLocalServicePages.tsx
// Server Component - Creates an optimized content structure for local SEO targeting.
import React from 'react';
import Link from 'next/link';
// Removed unused 'DollarSign' import
import { Car, Disc3, Zap, BatteryCharging } from 'lucide-react';

const SEO_OPTIMIZED_SERVICES = [
    {
        title: "Tyres & Rims Alberton",
        h2: "New Tyres & Rims for Sale in Alberton",
        description: "Find the best local prices on Pirelli, Michelin, and Dunlop tyres. Our experts provide precision fitting and balancing to ensure safety and longevity.",
        icon: Car,
        link: "/services/tyres",
        cta: "Get a Tyre Quote Now"
    }, //
    {
        title: "Brake & Disc Service Alberton",
        h2: "Expert ATE Brake Pad & Disc Replacement near You",
        description: "We specialise in comprehensive brake checks and fitting of premium brands like ATE, guaranteeing maximum stopping power and vehicle safety in Alberton.",
        icon: Disc3,
        link: "/services/brakes",
         cta: "Book Brake Service" //
    },
    {
        title: "Shocks & Suspension Alberton",
        h2: "Shocks and Suspension Fitment Experts in Alberton",
        description: "Improve vehicle handling, comfort, and safety with a free shocks assessment. We supply high-quality Bilstein, Monroe, and Gabriel suspension components.",
        icon: Zap,
        link: "/services/shocks",
        cta: "Get Suspension Quote"
    }, //
    {
        title: "Car Batteries Alberton",
        h2: "Willard & Exide Car Batteries and Free Testing",
        description: "Don't get stuck! Visit us for a free battery test. We stock and fit a full range of high-performance Willard and Exide car batteries with a full guarantee.",
        icon: BatteryCharging,
        link: "/services/batteries",
        cta: "Free Battery Test"
    }, //
];

export default function OptimizedLocalServicePages() {
    return (
        // Primary SEO landing page content should not be hidden in this component,
        // but this grid forms the core navigable cluster for long-tail service intent. //
        <section className="py-24 bg-white dark:bg-neutral-800 transition-colors duration-500">
            <div className="container mx-auto px-4 max-w-6xl">

                <header className="text-center mb-16 max-w-4xl mx-auto">
                    {/* The primary keyword for the HOMEPAGE is 'Fitment Center Alberton' / 'Tyre Clinic Alberton'.
                        This H2 targets the core local/transactional services. */}
                    <h2 className="text-4xl font-extrabold text-neutral-800 dark:text-white mb-3">
                         {/* Corrected: Replaced 'Alberton's' with 'Alberton&apos;s' */}
                        Alberton&apos;s Full-Service Fitment Centre: Your Local Experts.
                    </h2> {/* */}
                    <p className="text-xl text-neutral-600 dark:text-neutral-400">
                        We provide complete vehicle safety solutions, specialising in premium parts and certified, reliable service right here in Alberton.
                    </p> {/* */}
                </header>

                {/* Grid for key service links, intentionally using strong keyword titles for link text */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SEO_OPTIMIZED_SERVICES.map((service) => (
                         <Link
                            key={service.title}
                            href={service.link}
                            // The H3 below acts as the primary signal for Google on what this page section is about
                            className="group flex flex-col items-center p-6 bg-neutral-100 dark:bg-neutral-900 rounded-xl shadow-lg
                                       hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 transform hover:scale-[1.02]"
                           > {/* */}
                            <service.icon className="h-10 w-10 text-primary group-hover:text-white mb-3 transition-colors" />

                             {/* This is the primary anchor text for the internal link (crucial for SEO) */}
                            <h3 className="text-lg font-extrabold text-neutral-800 dark:text-white group-hover:text-white transition-colors mb-2 text-center">
                                {service.title}
                             </h3> {/* */}
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-200 mb-4 text-center">
                                {service.description}
                             </p> {/* */}
                            <span className="text-sm text-primary group-hover:text-white font-bold underline">
                                {service.cta} →
                             </span> {/* */}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
} //