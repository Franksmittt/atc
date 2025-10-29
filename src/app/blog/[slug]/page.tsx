// src/app/blog/[slug]/page.tsx
// Dynamic Server Component - Optimized for Article Content.

import React from 'react';
import Link from 'next/link';
import { Briefcase } from 'lucide-react';
import { notFound } from 'next/navigation';

// 💥 FIX: ADD THE MISSING BUTTON IMPORT 💥
import { Button } from '@/components/ui/button';

// --- MOCK Data Fetcher (Replaced by Drizzle/Database in production) ---
const fetchPostBySlug = async (slug: string) => {
    // In a real application, this would query the Drizzle ORM:
    // const post = await db.query.posts.findFirst({ where: eq(posts.slug, slug) });
    
    // Using mock data for immediate compilation and testing
    const POSTS = [
        {
            slug: "pirelli-vs-michelin-safety-alberton",
            title: "Pirelli vs. Michelin: Which Tyre Guarantees More Safety on Alberton Roads?",
            content: `<p>Choosing the right tyre is the single most important safety decision you make. For Alberton's mix of highway and local roads, we break down why both Pirelli and Michelin offer superior performance over budget brands...</p>
                      <h3>Why Pirelli Excels on Wet Alberton Roads</h3>
                      <p>Pirelli's advanced tread compounds provide optimal grip in wet conditions, a necessity during our high summer rainfall months. This translates directly to shorter stopping distances when you need it most. We are your official local dealer...</p>
                      <h3>Michelin: Longevity Meets Performance</h3>
                      <p>Michelin often leads in tread life and fuel efficiency. If you are a high-mileage driver in Alberton, investing in Michelin means fewer replacements and better long-term value. Our computerized fitting ensures you get maximum life out of every rotation...</p>`,
            author: "Jaco V.",
            published: "October 28, 2025",
        },
        // ... include other posts here for testing ...
    ];

    return POSTS.find(p => p.slug === slug);
};

// --- SEO Feature 1: Dynamic Metadata (Top-Tier Google Performance) ---
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await fetchPostBySlug(params.slug);

  if (!post) {
    return { title: "Article Not Found | Alberton Tyre Clinic" };
  }

  return {
    title: `${post.title} | Alberton Tyre Clinic`,
    description: post.content.substring(0, 150) + "...", // Use a snippet as the meta description
  };
}

// --- SEO Feature 2: Static Path Generation (Fast Loading/Pre-rendering) ---
export async function generateStaticParams() {
    // In production, fetch ALL post slugs from the Drizzle DB here
    return [
        { slug: "pirelli-vs-michelin-safety-alberton" },
        { slug: "stop-the-squeal-ate-brakes-vs-generic" },
        { slug: "shock-absorber-warning-signs" },
    ];
}


// --- The Core Article Component ---
export default async function SinglePostPage({ params }: { params: { slug: string } }) {
    const post = await fetchPostBySlug(params.slug);

    if (!post) {
        notFound(); // Renders the default Next.js 404 page
    }

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