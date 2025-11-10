// src/app/blog/how-to-read-your-tyre-size/page.tsx
// Dynamic Server Component - Optimized for Article Content.

import React from 'react';
import Link from 'next/link';
import { Briefcase } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';

// --- MOCK Data Fetcher for this specific post ---
const MOCK_POST = {
    slug: "how-to-read-your-tyre-size",
    title: "How to Read Your Tyre Size: The Definitive Safety Guide",
    content: `
        <p>That's a great question! Knowing your tyre size is essential for safety, performance, and when you need to purchase replacements.</p>
        <p>Here is a guide on where to find your tyre size and how to read the markings.</p>

        <h2>🔍 Where to Find Your Tyre Size</h2>
        <p>There are three main places to check for the correct tyre size for your vehicle:</p>
        
        <h3>The Tyre Sidewall (Current Tyres)</h3>
        <p>This is the most common place. Look for a series of numbers and letters, often the largest printing on the side of the tyre.</p>
        <p class='text-sm italic font-semibold text-red-600 dark:text-red-400'>
            Caution: If your vehicle did not come with the original wheels or if a previous owner changed the size, the tyres on the car might not be the manufacturer's recommended size.
        </p>

        <h3>Vehicle Placard/Sticker</h3>
        <p>Your car's manufacturer provides a sticker or plate with the recommended tyre size and correct inflation pressures.</p>
        <p>Common Locations: Inside the driver's side door jamb (where the door latches), inside the fuel filler flap, or in the glove box.</p>
        
        <h3>Owner's Manual</h3>
        <p>Your vehicle's owner's manual will list the correct tyre sizes, load index, and speed rating recommended by the manufacturer.</p>

        <h2>🔢 How to Read the Tyre Size Markings</h2>
        <p>The tyre size is given as a sequence of numbers and letters, usually in a format like this: <code class="bg-primary/20 p-1 rounded font-mono">205/55 R16 91V</code>.</p>
        
        <table class="w-full text-left border-collapse my-6">
            <thead>
                <tr>
                    <th class="border p-2 bg-neutral-200 dark:bg-neutral-700">Marking</th>
                    <th class="border p-2 bg-neutral-200 dark:bg-neutral-700">Example (205/55 R16 91V)</th>
                    <th class="border p-2 bg-neutral-200 dark:bg-neutral-700">Meaning</th>
                </tr>
            </thead>
            <tbody>
                <tr><td class="border p-2">205</td><td class="border p-2 font-bold">Tyre Width</td><td class="border p-2">The width of the tyre in millimetres from sidewall to sidewall.</td></tr>
                <tr><td class="border p-2">55</td><td class="border p-2 font-bold">Aspect Ratio (Profile)</td><td class="border p-2">The height of the tyre's sidewall, expressed as a percentage of the tyre's width. (Height is 55% of 205mm).</td></tr>
                <tr><td class="border p-2">R</td><td class="border p-2 font-bold">Construction Type</td><td class="border p-2">Indicates the internal construction of the tyre. R stands for Radial (the most common type).</td></tr>
                <tr><td class="border p-2">16</td><td class="border p-2 font-bold">Rim Diameter</td><td class="border p-2">The diameter of the wheel rim that the tyre is designed to fit, measured in inches.</td></tr>
                <tr><td class="border p-2">91</td><td class="border p-2 font-bold">Load Index</td><td class="border p-2">A numerical code that refers to the maximum weight the tyre can carry when fully inflated.</td></tr>
                <tr><td class="border p-2">V</td><td class="border p-2 font-bold">Speed Rating</td><td class="border p-2">An alphabetical code that indicates the maximum speed the tyre can safely maintain. (e.g., 'V' is rated up to 240 km/h).</td></tr>
            </tbody>
        </table>

        <h3>💡 Pro Tip: Take a Photo!</h3>
        <p>Take a clear photo of the tyre sidewall with your phone before you contact us—this makes it easy to ensure you have all the necessary information for a quick, accurate quote.</p>
        
        <div class="mt-8 text-center">
            <Button asChild size="lg" class="bg-primary hover:bg-primary/hover text-white font-bold">
                <Link href="/contact">Get a Quote with My Tyre Size</Link>
            </Button>
        </div>
    `,
    author: "The ATC Team",
    published: "November 10, 2025",
};

// --- SEO Feature 1: Dynamic Metadata (Top-Tier Google Performance) ---
export async function generateMetadata({ params }: { params: { slug: string } }) {
  if (params.slug !== MOCK_POST.slug) {
    return { title: "Article Not Found | Alberton Tyre Clinic" };
  }

  return {
    title: `${MOCK_POST.title} | Alberton Tyre Clinic`,
    description: "The definitive guide on how to read the numbers and letters on your tyre sidewall to ensure you purchase the correct and safest replacement tyres in Alberton.",
  };
}

// --- SEO Feature 2: Static Path Generation (Fast Loading/Pre-rendering) ---
export async function generateStaticParams() {
    // In production, fetch ALL post slugs from the Drizzle DB here
    return [
        { slug: "pirelli-vs-michelin-safety-alberton" },
        { slug: "stop-the-squeal-ate-brakes-vs-generic" },
        { slug: "shock-absorber-warning-signs" },
        // --- NEW SLUG FOR PRE-RENDERING ---
        { slug: "how-to-read-your-tyre-size" },
    ];
}


// --- The Core Article Component ---
export default async function SinglePostPage({ params }: { params: { slug: string } }) {
    
    // NOTE: In a real app, this would be the actual database fetch.
    if (params.slug !== MOCK_POST.slug) {
        notFound(); // Renders the default Next.js 404 page
    }

    const post = MOCK_POST;

    return (
        <main>
            {/* Article Header */}
            <section className="pt-32 pb-16 bg-neutral-900 text-white border-b border-primary/50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary">
                        {post.title}
                    </h1>
                    <div className="flex items-center text-sm text-neutral-400 space-x-4">
                        <span className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1" /> By {post.author || "The ATC Team"}
                        </span>
                        <span>
                            Published on {post.published}
                        </span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-16 bg-white dark:bg-neutral-800">
                <div className="container mx-auto px-4 max-w-4xl text-neutral-800 dark:text-neutral-200">
                    
                    {/* WARNING: Using dangerouslySetInnerHTML is required for HTML/Markdown content */}
                    <div 
                        className="prose dark:prose-invert prose-lg max-w-none prose-headings:text-primary prose-a:text-primary"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-16 border-t border-neutral-200 dark:border-neutral-700 pt-8">
                        <Button variant="outline" asChild size="lg" className="border-primary text-primary hover:bg-primary/5 dark:text-primary dark:border-primary">
                            <Link href="/blog">← Back to Blog Index</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}