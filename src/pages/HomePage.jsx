import React from 'react';
import Hero from '../components/Hero';
import PhilosophyIntro from '../components/PhilosophyIntro';
import Services from '../components/Services';
import CelebrationsPortfolio from '../components/CelebrationsPortfolio';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';
import FaqAndShowcase from '../components/FaqAndShowcase';

export default function HomePage({ onOpenBooking, onNavigate }) {
  return (
    <main className="page-view home-page-view">
      <Hero onOpenBooking={onOpenBooking} />
      <div id="intro">
        <PhilosophyIntro />
      </div>
      <Services onNavigate={onNavigate} />
      <CelebrationsPortfolio />
      <Process />
      <Testimonials />
      <CtaBanner onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
      <FaqAndShowcase />
    </main>
  );
}
