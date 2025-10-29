// src/components/sections/ReviewWall.tsx
// Server Component - Dynamic display of customer testimonials.

import React from 'react';
import { Star, Zap, DollarSign, HeartHandshake } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const TESTIMONIALS = [
    {
        quote: "Excellent service, with pricing better than I could find from anyone in Alberton on batteries. Staff are knowledgeable and efficient.",
        author: "Marius Senekal",
        claim: "Best Pricing",
        icon: DollarSign,
    },
    {
        quote: "They helped me to replace my brake lights, which is not their core business. This customer service is exemplary and I would gladly refer anyone to them.", //
        author: "Kimberlee Carlson",
        claim: "Exceptional Service (Extra Mile)",
        icon: HeartHandshake,
    },
    {
        quote: "Quick and friendly service and well priced. Will recommend to anyone. They are usually very busy, but that is a sign of good business.",
        author: "Balony The Only",
        claim: "Speed & Value", //
        icon: Zap,
    },
    {
        quote: "My grandfather used them, my dad used them and now I use them. They have been giving great service for 3 generations of my family and they are still the best I know.",
        author: "Craig Joshua Boden",
        claim: "Generational Trust (28 Years)",
        icon: Star,
    },
];

export default function ReviewWall() {
    return (
        // Light background for a clean, professional look
        <section className="py-24 bg-white dark:bg-neutral-800 transition-colors duration-500">
            <div className="container mx-auto px-4 max-w-6xl">

                <header className="text-center mb-16 max-w-3xl mx-auto">
                     <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-800 dark:text-white mb-3">
                        Real Reviews. Real <span className="text-primary">Alberton Trust.</span>
                    </h2> {/* */}
                    <p className="text-xl text-neutral-600 dark:text-neutral-400">
                         {/* Corrected: Replaced 'don't' with 'don&apos;t' */}
                        We don&apos;t just promise service; our customers prove it. Read hundreds more like these on Google.
                    </p> {/* */}
                </header>

                {/* Testimonial Grid with Thematic Focus */}
                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> {/* */}
                    {TESTIMONIALS.map((review, index) => (
                        <blockquote
                            key={index}
                             className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-xl shadow-lg border-t-4 border-primary/50 flex flex-col justify-between h-full" //
                        >
                            <review.icon className="h-6 w-6 text-primary mb-3" />
                             {/* Corrected: Replaced surrounding quotes with HTML entities */}
                            <p className="text-lg italic text-neutral-800 dark:text-neutral-200 mb-4">
                                &quot;{review.quote}&quot;
                            </p> {/* */}
                            <footer>
                                 <p className="font-semibold text-sm text-neutral-700 dark:text-neutral-300">
                                    — {review.author}
                                 </p> {/* */}
                                <p className="text-xs font-bold text-primary mt-1">
                                    Claim: {review.claim}
                                 </p> {/* */}
                            </footer>
                        </blockquote>
                    ))}
                </div>


                 {/* Final CTA to View All Proof */}
                <div className="text-center mt-12"> {/* */}
                    <Button variant="outline" asChild size="lg" className="border-primary text-primary hover:bg-primary/5 dark:text-primary dark:border-primary">
                        <Link href="/reviews">View 4.7/5 Stars from 310+ Customers →</Link>
                     </Button> {/* */}
                </div>
            </div>
        </section>
    );
} //