import React from 'react';
import { ArrowUpRight, MapPin, Landmark, Sparkles } from 'lucide-react';
import CardMockup from './CardMockup';
import { CARD_DESIGNS } from '../data/designs';
import { getWhatsAppUrl, BUSINESS_CONFIG } from '../config/business';

export default function DesignsGallery() {
  return (
    <section id="designs" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#E8E1D3]">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F2EDE2] border border-[#E0D7C4] text-[#7A6A4E] text-[11px] uppercase tracking-[0.2em] font-medium mb-3">
          <Landmark className="w-3.5 h-3.5 text-[#8C6A28]" />
          <span>Diwali Through India's Heritage</span>
        </div>
        
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2A231C] tracking-tight">
          A Card That Feels Personal.
        </h2>
        
        <p className="mt-4 text-base sm:text-lg text-[#554D45] font-light leading-relaxed">
          Explore our festive concepts. Every design can be customised to match your client's brand.
        </p>

        {/* USP Statement Callout Banner */}
        <div className="mt-8 p-6 sm:p-7 rounded-[6px] bg-[#FAF4E6] border border-[#E5D7B7] text-left sm:text-center text-sm sm:text-[15px] text-[#5C4D2E] leading-relaxed max-w-3xl mx-auto shadow-sm">
          <div className="flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#4A0E1C] mb-2.5 font-sans">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#8C6A28] shrink-0" />
            <span>Celebrating Diwali Through India's Architectural Legacy</span>
          </div>
          Instead of generic festive clip-art, each card celebrates an authentic Indian architectural icon—such as <strong className="font-semibold text-[#2A231C]">Amber Fort in Jaipur</strong>, the <strong className="font-semibold text-[#2A231C]">Taj Mahal in Agra</strong>, and <strong className="font-semibold text-[#2A231C]">Jal Mahal in Jaipur</strong>. Artfully crafted as a single-sided A6 flat card with bespoke typography for your client's brand.
        </div>
      </div>

      {/* Responsive Three-Column Desktop Grid (Preserving existing layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-7 items-stretch">
        {CARD_DESIGNS.map((design) => {
          // Generates prefilled WhatsApp URL with: "Hi! I'm interested in [DESIGN NAME] — [MONUMENT] design..."
          const whatsappUrl = getWhatsAppUrl(
            BUSINESS_CONFIG.WHATSAPP_MESSAGES.designSpecific(design.name, design.monumentName)
          );

          return (
            <div 
              key={design.id}
              className="flex flex-col justify-between rounded-[4px] bg-[#FAF7F2] border border-[#E5DEC9] p-5 transition-all duration-300 hover:border-[#C5A059] hover:shadow-md group"
            >
              <div>
                {/* 1. Header: Location Label & CUSTOMISABLE Badge */}
                <div className="flex items-center justify-between mb-3 gap-2">
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-[#F2EDE2] text-[#8C7132] border border-[#E5DEC9] truncate">
                    <MapPin className="w-2.5 h-2.5 shrink-0" />
                    <span>{design.location}</span>
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-[#4A0E1C]/10 text-[#4A0E1C] border border-[#4A0E1C]/20 shrink-0 font-medium">
                    {design.label}
                  </span>
                </div>

                {/* 2. Large Portrait Preview of Greeting Card (A6 Flat Ratio 105 × 148 mm) */}
                <div className="py-2 flex items-center justify-center">
                  <CardMockup design={design} className="transition-transform duration-300 group-hover:scale-[1.02]" />
                </div>

                {/* 3. Small Architectural Inspiration Label */}
                <div className="mt-5">
                  <div className="text-[10px] font-mono text-[#8C7132] uppercase tracking-widest mb-1 font-medium">
                    {design.monumentLabel}
                  </div>

                  {/* 4. Poetic Name */}
                  <h3 className="font-serif text-xl font-normal text-[#2A231C]">
                    {design.name}
                  </h3>

                  {/* 5. Concise Two-Line Monument Description */}
                  <p className="mt-2 text-xs text-[#5C544B] font-light leading-relaxed min-h-[38px]">
                    {design.description}
                  </p>

                  {/* Palette Sub-detail */}
                  <div className="mt-2 text-[10px] text-[#8C7A5C] font-mono">
                    Palette: {design.paletteText}
                  </div>
                </div>
              </div>

              {/* 6. Action Button: ENQUIRE ABOUT THIS DESIGN */}
              <div className="mt-6 pt-4 border-t border-[#E8E1D3]">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-sm bg-[#4A0E1C] group-hover:bg-[#380B15] text-[#FAF7F2] text-xs uppercase tracking-wider font-medium transition-colors"
                  aria-label={`Enquire about ${design.name} — ${design.monumentName} on WhatsApp`}
                >
                  <span>Enquire About This Design</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E0B767]" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Note for Hamper Companies & Custom Requests */}
      <div className="mt-14 p-5 rounded-sm bg-[#F5EFEB] border border-[#E2D8C3] max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5C544B]">
        <div>
          <span className="font-semibold text-[#2A231C] block sm:inline">Looking for a specific regional monument or custom brand palette? </span>
          <span>We can adapt your client's chosen Indian heritage landmark, executive greeting, and company logo into print-ready A6 flat cards.</span>
        </div>
        <a 
          href="#contact" 
          className="shrink-0 text-xs font-semibold text-[#8C6A28] hover:underline uppercase tracking-wider"
        >
          Custom Inquiries →
        </a>
      </div>

    </section>
  );
}
