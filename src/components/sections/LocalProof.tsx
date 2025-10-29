// src/components/sections/LocalProof.tsx
"use client"; // <<<--- ADD THIS DIRECTIVE

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

export default function LocalProof() {
    return (
        // Bright, primary-colored background to break up the dark sections
        <section className="py-20 bg-primary dark:bg-primary/90 text-white shadow-2xl">
            <div className="container mx-auto px-4 max-w-5xl text-center">

                {/* Main Headline: Local Authority */}
                 <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                    Don&apos;t Just Take Our Word For It.
                </h2>
                <p className="text-xl mb-10">
                    See why over 500 drivers in Alberton trust our family-run team.
                </p>

                {/* Proof Metrics Grid */}
                <div className="grid sm:grid-cols-3 gap-8 mb-12">

                    {/* Metric 1: Google Rating */}
                    <div className="bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white p-6 rounded-lg shadow-xl">
                        <div className="flex justify-center items-center text-5xl font-bold text-primary mb-2">
                            4.9
                             <Star className="h-8 w-8 ml-2 fill-primary text-primary" />
                        </div>
                        <p className="text-sm font-semibold">Average Google Rating</p>
                    </div>

                     {/* Metric 2: Total Reviews */}
                    <div className="bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white p-6 rounded-lg shadow-xl">
                        <div className="text-5xl font-bold mb-2">
                             500+
                        </div>
                        <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">Verified Local Reviews</p>
                    </div>

                    {/* Metric 3: Years Experience */}
                    <div className="bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white p-6 rounded-lg shadow-xl">
                        <div className="text-5xl font-bold text-primary mb-2">
                            28
                         </div>
                        <p className="text-sm font-semibold">Years in Alberton</p>
                    </div>
                </div>

                 {/* Closing CTA */}
                 <Button asChild size="lg" className="bg-white text-primary hover:bg-neutral-100 font-bold">
                    <Link href="/reviews">Read All Our 5-Star Reviews →</Link>
                </Button>
            </div>
        </section>
    );
}