// src/app/about/page.tsx
// Server Component - High trust, low friction page.

import React from 'react';
import Link from 'next/link';
import { Briefcase, MapPin, Users, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

// Metadata for SEO and Authority
export const metadata = {
  title: "Alberton Tyre Clinic History | Family-Run Fitment Experts Since 1996",
  description: "Learn about the Alberton Tyre Clinic family legacy. Over 28 years of trusted, honest tyre and brake service in Alberton. Meet the expert staff who prioritize your safety.",
};

export default function AboutPage() {
    return (
        <main>
            {/* Hero Header: History and Trust */}
            <section className="pt-32 pb-20 bg-neutral-900 dark:bg-neutral-950 text-white border-b-8 border-primary">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h1 className="text-5xl font-extrabold mb-4 uppercase">
                        Our <span className="text-primary">28-Year</span> Heritage in Alberton
                    </h1>
                    <p className="text-xl text-neutral-400">
                        A family business founded on honesty, expertise, and a commitment to your vehicle’s safety since 1996.
                    </p>
                </div>
            </section>

            {/* Section 2: The Legacy Story */}
            <section className="py-24 bg-white dark:bg-neutral-800">
                <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
                    
                    {/* Image Placeholder */}
                    <div className="rounded-xl overflow-hidden shadow-2xl">
                        <Image
                            src="/placeholder-family-shop.jpg" // Placeholder for an old photo or family image
                            alt="Alberton Tyre Clinic team and original shop in 1996"
                            width={800}
                            height={600}
                            priority
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Story Content */}
                    <div className="space-y-6 text-neutral-800 dark:text-neutral-200">
                        <h3 className="text-3xl font-bold text-primary">
                            From One Bay to a Local Institution
                        </h3>
                        <p className="text-lg">
                            We started in 1996 with a single fitment bay and a simple goal: to provide the most honest, high-quality tyre service in Alberton. While the technology (and the speed of our computerized balancing) has changed, our dedication to treating every customer like family has not.
                        </p>
                        
                        <ul className="space-y-3 pt-3">
                            <li className="flex items-center text-primary font-semibold">
                                <Briefcase className="h-5 w-5 mr-3" />
                                Over two decades of specialized focus on vehicle safety.
                            </li>
                            <li className="flex items-center text-primary font-semibold">
                                <MapPin className="h-5 w-5 mr-3" />
                                Deeply committed to the Alberton community.
                            </li>
                            <li className="flex items-center text-primary font-semibold">
                                <Users className="h-5 w-5 mr-3" />
                                Multi-generational family commitment to the business.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 3: Meet the Experts (Staff Authority) */}
            <section className="py-24 bg-neutral-100 dark:bg-neutral-900">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <h3 className="text-4xl font-extrabold text-neutral-800 dark:text-white mb-12">
                        Meet the Staff Who Guarantee Your Safety
                    </h3>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Staff Member 1: Jaco (Manager/Lead) */}
                        <div className="p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border-t-4 border-primary/70">
                            <Image src="/placeholder-jaco.jpg" alt="Jaco" width={200} height={200} className="rounded-full mx-auto mb-4 w-32 h-32 object-cover border-4 border-primary/50" />
                            <h4 className="text-xl font-bold text-neutral-800 dark:text-white">Jaco V.</h4>
                            <p className="text-primary font-semibold mb-3">Shop Manager & Chief Technician</p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                Jaco ensures every fitment meets our 1996 standard of excellence. Focused on customer satisfaction and honest advice.
                            </p>
                        </div>

                        {/* Staff Member 2: Shane (Service/Sales) */}
                        <div className="p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border-t-4 border-primary/70">
                            <Image src="/placeholder-shane.jpg" alt="Shane" width={200} height={200} className="rounded-full mx-auto mb-4 w-32 h-32 object-cover border-4 border-primary/50" />
                            <h4 className="text-xl font-bold text-neutral-800 dark:text-white">Shane J.</h4>
                            <p className="text-primary font-semibold mb-3">Sales & Customer Relations</p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                Known for quick service and getting customers the best price. Your first point of contact for quotes and queries.
                            </p>
                        </div>
                        
                        {/* Staff Member 3: Carel (Fitment Specialist) */}
                         <div className="p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border-t-4 border-primary/70">
                            <Image src="/placeholder-carel.jpg" alt="Carel" width={200} height={200} className="rounded-full mx-auto mb-4 w-32 h-32 object-cover border-4 border-primary/50" />
                            <h4 className="text-xl font-bold text-neutral-800 dark:text-white">Carel W.</h4>
                            <p className="text-primary font-semibold mb-3">Lead Alignment Technician</p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                The expert in 3D wheel alignment, ensuring your high-performance tyres last as long as they should.
                            </p>
                        </div>

                        {/* Staff Member 4: The Team (Collective Trust) */}
                        <div className="p-6 bg-neutral-800 dark:bg-neutral-900 rounded-xl shadow-lg border-t-4 border-primary">
                            <HeartHandshake className="h-16 w-16 text-white mx-auto mt-6 mb-4" />
                            <h4 className="text-2xl font-bold text-primary mb-3">The Full Team</h4>
                            <p className="text-sm text-neutral-300">
                                Every member of the Alberton Tyre Clinic team is dedicated to efficient, honest, and expert service.
                            </p>
                            <Button asChild className="mt-4 bg-primary hover:bg-primary/hover text-white">
                                <Link href="/booking">Book Your Visit</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

             {/* CTA Section: Repetition of Lead Magnet (Final Conversion Push) */}
            <section className="py-16 bg-primary dark:bg-primary/90 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-extrabold mb-4">
                        Ready to Join Our Family of Satisfied Drivers?
                    </h2>
                    <p className="text-lg mb-6">
                        Book your FREE 6-Point Vehicle Assessment now and experience the 28-year difference.
                    </p>
                    <Button asChild size="lg" className="bg-white text-primary hover:bg-neutral-100 font-bold">
                        <Link href="/assessment">Book My FREE Assessment</Link>
                    </Button>
                </div>
            </section>
        </main>
    );
}