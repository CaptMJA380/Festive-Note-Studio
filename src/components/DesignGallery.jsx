import React from 'react';
import { CARD_DESIGNS } from '../data/cardDesigns';
import { DiyaIllustration, MandalaMotif, PichwaiLotusMotif, ArchMotif, RangoliMotif } from './CardMotifs';
import { Sparkles, ArrowRight } from 'lucide-react';
import { RangoliDivider, RangoliCorner } from './RangoliArt';

export default function DesignGallery({ onSelectDesign }) {
  const getThumbnailMotif = (motifType) => {
    switch (motifType) {
      case 'mandala':
        return (
          <div className="relative w-28 h-28 flex items-center justify-center">
            <MandalaMotif foilId="24k-gold" className="w-full h-full opacity-60 absolute" />
            <DiyaIllustration foilId="24k-gold" className="w-16 h-16 relative z-10" />
          </div>
        );
      case 'lotus':
        return (
          <div className="relative w-28 h-28 flex flex-col items-center justify-center">
            <PichwaiLotusMotif foilId="rose-gold" className="w-24 h-20" />
            <DiyaIllustration foilId="rose-gold" className="w-12 h-12 -mt-2" />
          </div>
        );
      case 'arch':
        return (
          <div className="relative w-24 h-32 flex flex-col items-center justify-center">
            <ArchMotif foilId="24k-gold" className="w-full h-full absolute inset-0" />
            <DiyaIllustration foilId="24k-gold" className="w-12 h-12 mt-6 relative z-10" />
          </div>
        );
      case 'rangoli':
        return (
          <div className="relative w-28 h-28 flex items-center justify-center">
            <RangoliMotif foilId="24k-gold" className="w-full h-full" />
            <div className="absolute z-10 scale-75">
              <DiyaIllustration foilId="24k-gold" className="w-12 h-12" />
            </div>
          </div>
        );
      default:
        return <DiyaIllustration foilId="24k-gold" className="w-16 h-16" />;
    }
  };

  return (
    <section id="designs" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3 font-indie-body">
          Curated A6 Portrait Edition
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-indie-display font-bold text-white tracking-tight">
          Four Masterworks of <span className="gold-foil-text">Festive Devotion</span>
        </h2>
        <RangoliDivider className="my-4 opacity-75" />
        <p className="text-base sm:text-lg text-neutral-300 font-indie-body leading-relaxed">
          Every motif is historically researched and drawn by our in-house calligraphers before being translated into precision brass embossing dies.
        </p>
      </div>

      {/* Grid of Designs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CARD_DESIGNS.map((design) => (
          <div
            key={design.id}
            className="flex flex-col justify-between rounded-3xl bg-neutral-900/60 border border-white/10 overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl group"
          >
            {/* Visual Card Mockup in Mini Stage */}
            <div className={`p-8 flex items-center justify-center min-h-[260px] relative overflow-hidden ${design.bgClass}`}>
              <div className="absolute inset-0 bg-radial from-amber-500/10 to-transparent opacity-50" />
              
              {/* Mini Card Frame (A6 Ratio) */}
              <div className="relative w-36 h-52 rounded-xl border border-amber-500/30 p-3 flex flex-col items-center justify-between shadow-2xl backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                <div className="text-[8px] tracking-[0.2em] font-serif text-amber-300/80 uppercase">
                  DIWALI 2026
                </div>

                <div className="my-auto">
                  {getThumbnailMotif(design.motifType)}
                </div>

                <div className="text-center">
                  <div className="font-indie-display text-xs font-bold text-amber-200">
                    {design.defaultTitle}
                  </div>
                  <div className="text-[8px] text-neutral-300 font-indie-script">
                    With Family Blessings
                  </div>
                </div>
              </div>
            </div>

            {/* Design Information Content */}
            <div className="p-6 flex-1 flex flex-col justify-between bg-black/40">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-indie-body">
                    {design.category}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-indie-body">
                    A6 • 105 × 148 mm
                  </span>
                </div>

                <h3 className="text-lg font-indie-display font-bold text-white group-hover:text-amber-300 transition-colors">
                  {design.name}
                </h3>
                
                <p className="text-xs text-neutral-300 mt-2 font-indie-body leading-relaxed">
                  {design.tagline}
                </p>

                {/* Shloka highlight */}
                <div className="mt-4 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[11px] text-amber-300 font-indie-body line-clamp-1 italic">
                    "{design.shloka.split('\n')[0]}"
                  </div>
                  <div className="text-[9px] text-neutral-400 mt-0.5 line-clamp-1 font-indie-body">
                    {design.shlokaMeaning}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href="#studio"
                  onClick={() => onSelectDesign(design)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-black text-amber-300 text-xs font-semibold border border-amber-500/30 transition-all duration-200 font-indie-body"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Personalise in 3D</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
