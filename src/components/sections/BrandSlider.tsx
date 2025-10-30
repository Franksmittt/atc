// src/components/sections/BrandSlider.tsx
"use client"; // <<<--- This directive is correct

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Truck, Disc3, BatteryCharging } from 'lucide-react';
import Link from 'next/link';

// Consolidated Brand List (Used twice for visual infinite looping)
const ALL_BRANDS = [
  { name: "Pirelli", icon: Truck },
  { name: "ATE Brakes", icon: Disc3 },
  { name: "Michelin", icon: Truck },
  { name: "Willard Batteries", icon: BatteryCharging },
  { name: "Bilstein Shocks", icon: Disc3 },
  { name: "BF Goodrich", icon: Truck },
  { name: "Dunlop", icon: Truck },
  { name: "Exide Batteries", icon: BatteryCharging },
];

export default function BrandSlider() {
  // Embla Carousel Setup: We use loop:true and dragFree to enable infinite appearance
  const [emblaRef, emblaApi] = useEmblaCarousel({
      loop: true,
      align: 'start',
      dragFree: true,
      // Play around with speed for a smoother effect if needed
  });

  // Autoplay Logic: Scrolls to the next slide every few seconds
  useEffect(() => {
    if (!emblaApi) return;

    // Use setInterval to continuously trigger a smooth scroll to the next slide
    const autoplay = setInterval(() => {
      // Check if we are near the end, and if so, jump back to the start (optional for cleaner loop visual)
      if (emblaApi.scrollProgress() > 0.99) {
        // Use true for snap, false for immediate jump might be 
        // better visually
        emblaApi.scrollTo(0, false);
      } else {
         emblaApi.scrollNext();
      }
    }, 4000); // Scrolls every 4 seconds

    // Cleanup: Clear interval when the component is unmounted
    return () => clearInterval(autoplay);
  }, [emblaApi]);
  // Re-run effect if emblaApi changes

  return (
    // Minimalistic dark background to contrast with the Hero and main content
    <section className="py-8 bg-neutral-900 dark:bg-neutral-950 text-white border-y border-neutral-700">
      <div className="container mx-auto px-4">

        <p className="text-center text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
          Trusted Partners in Safety & Performance
        </p>

        {/* Carousel Container (Embla Viewport) */}
         <div className="embla overflow-hidden cursor-grab" ref={emblaRef}> {/* */}

          {/* Carousel Wrapper (Embla Container) - Duplicated content for visual infinite effect */}
          {/* RESPONSIVENESS: Reduced mobile horizontal spacing from space-x-8 to space-x-6 */}
          <div className="embla__container flex space-x-6 md:space-x-12"> {/* */}

            {/* Display list twice to ensure seamless looping effect */}
             {[...ALL_BRANDS, ...ALL_BRANDS].map((brand, index) => ( //
              <div
                 key={`${brand.name}-${index}`} // Use a more unique key
                // RESPONSIVENESS: Reduced mobile padding-right from pr-8 to pr-6
                className="embla__slide flex-shrink-0 flex items-center justify-center min-w-max pr-6"
                style={{ flex: '0 0 auto' }}
              > {/* */}
                <Link href="/services" className="flex items-center space-x-2 sm:space-x-3 
 group transition-opacity opacity-80 hover:opacity-100">
                    {/* RESPONSIVENESS: Reduced icon size on small screens */}
                    <brand.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:animate-pulse" />
                    {/* RESPONSIVENESS: Reduced text size on small screens (text-lg) */}
                    <span className="text-lg sm:text-xl md:text-2xl font-bold uppercase whitespace-nowrap text-white">
                      {brand.name}
                     </span> {/* */}
                 </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} //