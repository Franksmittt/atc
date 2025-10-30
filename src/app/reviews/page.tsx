// src/app/reviews/page.tsx
// Server Component - Dedicated page for maximum social proof and trust.

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Star, Zap, DollarSign, HeartHandshake } from 'lucide-react';
// --- Metadata: Targeted for Social Proof and Trust ---
export const metadata = {
  title: "5-Star Customer Reviews | Alberton Tyre Clinic Trust Score",
  description: "Read hundreds of verified 5-star Google reviews from satisfied Alberton drivers. We are trusted for honest service, expert fitment, and fair pricing.",
};
// Re-using the core testimonial structure for consistency
const TESTIMONIALS = [
    {
        quote: "They helped me to replace my brake lights, which is not their core business. This customer service is exemplary and I would gladly refer anyone to them.",
        author: "Kimberlee Carlson",
        claim: "Exceptional Service (Extra Mile)",
        icon: HeartHandshake,
    },
    {
        quote: "My grandfather used them, my dad used them and now I use them. They have been giving great service for 3 generations of my family and they are still the best I know.",
        author: "Craig Joshua Boden",
        claim: "Generational Trust (28 Years)",
        icon: Star,
    },
    {
        quote: "Excellent service, with pricing better than I could find from anyone in Alberton on batteries. Staff are knowledgeable and efficient.",
        author: "Marius Senekal",
        claim: "Best Pricing",
        icon: DollarSign,
    },
    {
        quote: "Quick and friendly service and well priced. Will recommend to anyone. They are usually very busy, but that is a sign of good business.",
        author: "Balony The Only",
        claim: "Speed & Value",
        icon: Zap,
    },
];

export default function ReviewsPage() {
    return (
        <main>
            {/* Header: H1 Focus on Trust */}
            <section className="pt-32 pb-20 bg-neutral-900 text-white border-b-8 border-primary">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 uppercase leading-tight">
                        Real <span className="text-primary">5-Star</span> Alberton Trust
                    </h1>
                    <p className="text-xl text-neutral-400">
                        We have a 4.9/5 star average over 500+ verified local reviews. Read what our customers say.
                    </p>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-24 bg-white dark:bg-neutral-800">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-extrabold text-neutral-800 dark:text-white mb-12 text-center">
                        Selected Customer Testimonials
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {TESTIMONIALS.map((review, index) => (
                            <blockquote
                                key={index}
                                className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-xl shadow-lg border-t-4 border-primary/50 flex flex-col justify-between h-full"
                            >
                                <review.icon className="h-6 w-6 text-primary mb-3" />
                                <p className="text-lg italic text-neutral-800 dark:text-neutral-200 mb-4">
                                    {/* FIX: Replaced quotes with &quot; (Line 72) */}
                                    &quot;{review.quote}&quot;
                                </p>
                                <footer>
                                    <p className="font-semibold text-sm text-neutral-700 dark:text-neutral-300">
                                        — {review.author}
                                    </p>
                                    <p className="text-xs font-bold text-primary mt-1">
                                        Focus: {review.claim}
                                    </p>
                                </footer>
                            </blockquote>
                        ))}
                    </div>
                     <div className="text-center mt-12">
                        <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 dark:text-primary dark:border-primary">
                            <a href="http://google.com/reviews/alberton-tyre-clinic" target="_blank" rel="noopener noreferrer">
                                View ALL 500+ Google Reviews →
                            </a>
                        </Button>
                     </div>
                </div>
            </section>

            {/* CTA: Assessment */}
            <section className="py-16 bg-primary dark:bg-primary/90 text-white text-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-neutral-100 font-bold">
                    <Link href="/assessment">Book Your FREE Safety Assessment Now</Link>
                </Button>
            </section>
        </main>
    );
}