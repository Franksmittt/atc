// src/app/page.tsx
import React from 'react';
import dynamicImport from 'next/dynamic';

import Hero from '@/components/sections/Hero';
import TrustAndProblem from '@/components/sections/TrustAndProblem';
import BrandsOfAuthority from '@/components/sections/BrandsOfAuthority';
import ReviewWall from '@/components/sections/ReviewWall'; // <-- UNCOMMENT THIS IMPORT
// import LocalProof from '@/components/sections/LocalProof';
// import ServiceFunnel from '@/components/sections/ServiceFunnel';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

// Dynamically import BrandSlider with SSR turned off
const BrandSlider = dynamicImport(
  () => import('@/components/sections/BrandSlider'),
  { ssr: false }
);

export default function Home() {
  return (
    <main>
      {/* 1. HOOK: High-impact entry point */}
      <Hero />

      {/* 2. AUTHORITY WALL: Brand Slider is placed here for INSTANT CREDIBILITY */}
      <BrandSlider />

      {/* 3. CONTEXT: Establishes Heritage and differentiates the Value */}
      <TrustAndProblem />

      {/* 4. PROOF: Validates the safety claim by showcasing premium brands (Detailed) */}
      <BrandsOfAuthority />

      {/* 5. SOCIAL PROOF: Integrates real customer testimonials */}
      <ReviewWall /> {/* <-- UNCOMMENT THIS INSTANCE */}

      {/* --- OTHER SECTIONS STILL COMMENTED OUT --- */}
      {/*
      <LocalProof />
      <ServiceFunnel />
      */}
    </main>
  );
}