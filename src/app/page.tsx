// src/app/page.tsx
import React from 'react';
import dynamicImport from 'next/dynamic'; // Renamed the import

import Hero from '@/components/sections/Hero';
import TrustAndProblem from '@/components/sections/TrustAndProblem';
import BrandsOfAuthority from '@/components/sections/BrandsOfAuthority';
import ReviewWall from '@/components/sections/ReviewWall';
import LocalProof from '@/components/sections/LocalProof';
import ServiceFunnel from '@/components/sections/ServiceFunnel';

// Force this page to be dynamically rendered
export const dynamic = 'force-dynamic'; // Keep this export for segment config

// Dynamically import BrandSlider with SSR turned off using the renamed import
const BrandSlider = dynamicImport( // Use the renamed import here
  () => import('@/components/sections/BrandSlider'),
  { ssr: false } // This ensures it only renders on the client-side
);

export default function Home() {
  return (
    <main>
      {/* 1. HOOK: High-impact entry point */}
      <Hero />

      {/* 2. AUTHORITY WALL: Brand Slider is placed here for INSTANT CREDIBILITY */}
      {/* Render the dynamically imported BrandSlider */}
      <BrandSlider />

      {/* 3. CONTEXT: Establishes Heritage and differentiates the Value */}
      <TrustAndProblem />

      {/* 4. PROOF: Validates the safety claim by showcasing premium brands (Detailed) */}
      <BrandsOfAuthority />

      {/* 5. SOCIAL PROOF: Integrates real customer testimonials */}
      <ReviewWall />

      {/* 6. CONVERSION: Quick metrics and service funnels */}
      <LocalProof />
      <ServiceFunnel />

      {/* Further content can be added here */}
    </main>
  );
}