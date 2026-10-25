import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import CardMockup from './CardMockup';
import { CARD_DESIGNS } from '../data/designs';

export default function Hero() {
  const royalArchway = CARD_DESIGNS[0];
  const imperialPlinth = CARD_DESIGNS[1];
  const lakePavilion = CARD_DESIGNS[2];

  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      
      {/* Subtle Warm Backdrop Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] bg-gradient-to-b from-[#C5A059]/10 via-[#FAF7F2] to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* Target Audience Tagline */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F2EDE2] border border-[#E0D7C4] text-[#7A6A4E] text-[11px] uppercase tracking-[0.2em] font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
          <span>For Corporate Gifting & Hamper Suppliers in Pune</span>
        </div>

        {/* Primary Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#2A231C] tracking-tight leading-[1.12]">
          Make Every Diwali Gift Personal.
        </h1>

        {/* Supporting Text */}
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-[#554D45] font-light leading-relaxed">
          Premium personalised greeting cards for corporate Diwali hampers. Thoughtful festive wishes, individual names and beautiful designs—ready for your clients.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#designs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm bg-[#4A0E1C] hover:bg-[#380B15] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium transition-all shadow-sm hover:shadow"
          >
            <span>Explore Our Designs</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#E0B767]" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm bg-[#FAF7F2] hover:bg-[#F4EFE6] text-[#2A231C] text-xs uppercase tracking-widest font-medium border border-[#DCD3C0] transition-colors"
          >
            <span>Partner With Us</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#8C6A28]" />
          </a>
        </div>
      </div>

      {/* Realistic Stationery Composition: Three A6 Flat Cards */}
      <div className="mt-16 sm:mt-20 relative max-w-4xl mx-auto">
        
        {/* Caption Tag */}
        <div className="text-center mb-6">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#8C7132] font-medium">
            Depicting Real Monuments from India • A6 Flat Cards (105 × 148 mm)
          </span>
        </div>

        {/* 3 Overlapping A6 Flat Cards Layout — Left, Center, and Right */}
        <div className="relative flex items-end justify-center min-h-[400px] sm:min-h-[500px] select-none py-6 px-2">
          
          {/* Card 1 (Left): The Royal Archway */}
          <div className="flex flex-col items-center -mr-8 sm:-mr-14 md:-mr-16 z-10 transform -rotate-3 hover:rotate-0 hover:z-30 hover:scale-[1.03] transition-all duration-300 cursor-pointer w-[175px] sm:w-[240px] md:w-[275px]">
            <div className="w-full shadow-[0_16px_36px_-8px_rgba(36,33,30,0.22)] rounded-[4px] bg-[#FAF7F2]">
              <CardMockup design={royalArchway} />
            </div>
            <div className="text-center mt-3">
              <div className="text-xs sm:text-sm text-[#2A231C] font-serif font-medium">The Royal Archway</div>
              <div className="text-[10px] sm:text-xs text-[#8C7132] font-mono">Amber Fort, Jaipur</div>
            </div>
          </div>

          {/* Card 2 (Center): The Imperial Plinth */}
          <div className="flex flex-col items-center z-20 transform -translate-y-4 sm:-translate-y-6 hover:-translate-y-8 hover:scale-[1.03] transition-all duration-300 cursor-pointer w-[195px] sm:w-[265px] md:w-[305px]">
            <div className="w-full shadow-[0_24px_52px_-10px_rgba(36,33,30,0.30)] rounded-[4px] bg-[#FAF7F2]">
              <CardMockup design={imperialPlinth} />
            </div>
            <div className="text-center mt-3">
              <div className="text-xs sm:text-sm text-[#2A231C] font-serif font-semibold">The Imperial Plinth</div>
              <div className="text-[10px] sm:text-xs text-[#8C7132] font-mono">Taj Mahal, Agra</div>
            </div>
          </div>

          {/* Card 3 (Right): The Lake Pavilion */}
          <div className="flex flex-col items-center -ml-8 sm:-ml-14 md:-ml-16 z-10 transform rotate-3 hover:rotate-0 hover:z-30 hover:scale-[1.03] transition-all duration-300 cursor-pointer w-[175px] sm:w-[240px] md:w-[275px]">
            <div className="w-full shadow-[0_16px_36px_-8px_rgba(36,33,30,0.22)] rounded-[4px] bg-[#FAF7F2]">
              <CardMockup design={lakePavilion} />
            </div>
            <div className="text-center mt-3">
              <div className="text-xs sm:text-sm text-[#2A231C] font-serif font-medium">The Lake Pavilion</div>
              <div className="text-[10px] sm:text-xs text-[#8C7132] font-mono">Jal Mahal, Jaipur</div>
            </div>
          </div>

        </div>

        {/* Feature badges beneath composition */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#6B6258] font-light">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            Individual Recipient Names
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            Corporate Client Branding
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            Delivered Ready to Slip into Hampers
          </span>
        </div>

      </div>

    </section>
  );
}
