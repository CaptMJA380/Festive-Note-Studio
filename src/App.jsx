import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DesignsGallery from './components/DesignsGallery';
import WhyPartner from './components/WhyPartner';
import HowItWorks from './components/HowItWorks';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#24211E] selection:bg-[#C5A059]/25 selection:text-[#3B0B16]">
      {/* 1. Navigation Bar */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Our Designs Gallery */}
        <DesignsGallery />

        {/* 4. Why Partner With Us (For Hamper Suppliers) */}
        <WhyPartner />

        {/* 5. How It Works (4-Step Process) */}
        <HowItWorks />

        {/* 6. Call To Action & Contact */}
        <ContactCTA />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
