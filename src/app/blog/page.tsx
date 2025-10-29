// src/app/blog/page.tsx
// Server Component - Optimized for listing and SEO keywords.

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Force this page to be dynamically rendered to avoid potential static generation issues
export const dynamic = 'force-dynamic'; // <<<--- ADDED THIS LINE

// --- Metadata: Targeted for Blog SEO ---
export const metadata = {
  title: "Car Maintenance Blog & Tyre Safety Tips | Alberton Tyre Clinic",
  description: "Expert advice on vehicle safety, tyre longevity, brake systems, and minor vehicle servicing. Read honest, local content from our Alberton experts.",
};

// --- Mock Data: Simulates fetching data from Drizzle ORM (posts table) ---
const MOCK_POSTS = [
    {
        id: 1,
        slug: "pirelli-vs-michelin-safety-alberton",
        title: "Pirelli vs. Michelin: Which Tyre Guarantees More Safety on Alberton Roads?",
        category: "Tyres & Safety",
        excerpt: "A deep dive into the performance metrics of our two premium tyre brands and how they handle common hazards on South African roads.",
    },
    {
        id: 2,
        slug: "stop-the-squeal-ate-brakes-vs-generic",
        title: "Stop the Squeal: ATE Brakes vs. Generic Systems—Your Safety Investment.",
        category: "Brakes & Shocks",
        excerpt: "Understanding why we only recommend ATE and how generic brake pads compromise your stopping distance and overall vehicle safety.",
    },
    {
        id: 3,
        slug: "shock-absorber-warning-signs",
        title: "5 Warning Signs Your Shock Absorbers are Failing (And Why You Need a Free Check)",
        category: "Suspension & Servicing",
        excerpt: "Ignoring shocks affects steering, braking, and tyre wear. Know the signs and book your free diagnostic assessment today.",
    },
];

export default function BlogIndexPage() {
    return (
        <main>
            {/* Blog Header */}
            <section className="pt-32 pb-20 bg-neutral-900 text-white border-b-8 border-primary">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                     <h1 className="text-5xl font-extrabold mb-4 uppercase">
                        Expert <span className="text-primary">Safety</span> & Maintenance Insights
                    </h1>
                    <p className="text-xl text-neutral-400">
                         Content written by our 28-year experienced technicians to keep you and your family safe on the road.
                    </p>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-24 bg-white dark:bg-neutral-800">
                 <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-3 gap-8">
                        {MOCK_POSTS.map((post) => (
                            <div
                                key={post.id}
                                className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg shadow-lg border-t-4 border-primary/50 hover:shadow-xl transition-shadow"
                            >
                                 <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-2">
                                    {post.title}
                                 </h3>
                                <p className="text-sm text-primary font-semibold mb-3">
                                    {post.category}
                                 </p>
                                <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-base">
                                    {post.excerpt}
                                 </p>
                                <Button variant="link" asChild className="p-0 h-auto text-primary justify-start font-bold">
                                    <Link href={`/blog/${post.slug}`}>
                                         Read Full Article →
                                    </Link>
                                </Button>
                             </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA: Reiterate Lead Magnet */}
            <section className="py-16 bg-neutral-100 dark:bg-neutral-900 text-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/hover text-white font-bold">
                    <Link href="/assessment">Got a Question? Book Your FREE Assessment Now</Link>
                </Button>
            </section>
        </main>
    );
}