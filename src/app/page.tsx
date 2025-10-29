// src/app/page.tsx
import React from 'react';
// Keep dynamic import commented out
// import dynamic from 'next/dynamic';

import Hero from '@/components/sections/Hero';
// Comment out all other section imports
// import TrustAndProblem from '@/components/sections/TrustAndProblem';
// import BrandsOfAuthority from '@/components/sections/BrandsOfAuthority';
// import ReviewWall from '@/components/sections/ReviewWall';
// import LocalProof from '@/components/sections/LocalProof';
// import ServiceFunnel from '@/components/sections/ServiceFunnel';

// Keep forcing dynamic rendering for now
export const dynamic = 'force-dynamic';

// Keep BrandSlider commented out
// const BrandSlider = dynamic(
//   () => import('@/components/sections/BrandSlider'),
//   { ssr: false }
// );

export default function Home() {
  return (
    <main>
      {/* 1. Render ONLY the Hero component */}
      <Hero />

      {/* --- ALL OTHER SECTIONS TEMPORARILY REMOVED --- */}
      {/*
      <BrandSlider />
      <TrustAndProblem />
      <BrandsOfAuthority />
      <ReviewWall />
      <LocalProof />
      <ServiceFunnel />
      */}
    </main>
  );
}