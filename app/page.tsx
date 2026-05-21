'use client';

import Hero from '@/app/components/Hero';
import Divisions from '@/app/components/Divisions';
import Stats from '@/app/components/Stats';
import Testimonials from '@/app/components/Testimonials';
import CTASection from '@/app/components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <Divisions />
      <Stats />
      <Testimonials />
      <CTASection />
    </>
  );
}