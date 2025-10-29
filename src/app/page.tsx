// src/app/page.tsx
import React from 'react';
import dynamicImport from 'next/dynamic';

import Hero from '@/components/sections/Hero';
import TrustAndProblem from '@/components/sections/TrustAndProblem'; // <-- UNCOMMENT THIS IMPORT
// import BrandsOfAuthority from '@/components/sections/BrandsOfAuthority';
// import ReviewWall from '@/components/sections/ReviewWall';
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
      <TrustAndProblem /> {/* <-- UNCOMMENT THIS INSTANCE */}

      {/* --- OTHER SECTIONS STILL COMMENTED OUT --- */}
      {/*
      <BrandsOfAuthority />
      <ReviewWall />
      <LocalProof />
      <ServiceFunnel />
      */}
    </main>
  );
}