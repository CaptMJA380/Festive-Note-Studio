import React from 'react';
import { Feather, Flame, Sparkles, Compass, Award } from 'lucide-react';
import { RangoliDivider } from './RangoliArt';

export default function Craftsmanship() {
  const specs = [
    {
      title: '380 GSM Cotton Core',
      desc: 'Pressed from 100% virgin cotton linters. Provides that authoritative, weighted hand feel with pillowy softness.',
      icon: Feather,
      stat: '380',
      unit: 'GSM WEIGHT',
    },
    {
      title: '0.4 mm Foil Deboss Depth',
      desc: 'Precision engraved brass dies heat-stamp the metallic foil deep into the cotton fibers at 180°C.',
      icon: Sparkles,
      stat: '0.4',
      unit: 'MM EMBOSS DEPTH',
    },
    {
      title: 'A6 Golden Ratio Aspect',
      desc: '105 mm × 148 mm standard portrait proportions. Stands with perfect balance on pooja altars & executive desks.',
      icon: Compass,
      stat: '105×148',
      unit: 'MM DIMENSIONS',
    },
    {
      title: 'Hand-Poured Wax Seal',
      desc: 'Each envelope is individually sealed using custom burgundy wax blended with natural resin and pine rosin.',
      icon: Flame,
      stat: '100%',
      unit: 'ARTISANAL TOUCH',
    },
  ];

  return (
    <section id="craft" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3 font-indie-body">
          Sensory Perfection
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-indie-display font-bold text-white tracking-tight">
          Crafted to be <span className="gold-foil-text">Felt, Not Just Seen</span>
        </h2>
        <RangoliDivider className="my-4 opacity-75" />
        <p className="text-base sm:text-lg text-neutral-300 font-indie-body leading-relaxed">
          Inspired by luxury horology and fine bookbinding, we treat every card as an heirloom piece intended to be kept for decades.
        </p>
      </div>

      {/* 4 Technical Feature Cards (Apple Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {specs.map((spec) => {
          const Icon = spec.icon;
          return (
            <div
              key={spec.title}
              className="p-8 rounded-3xl bg-neutral-900/40 border border-white/10 hover:border-amber-500/30 backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-300 mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-indie-display font-bold text-white mb-2">
                  {spec.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-indie-body leading-relaxed">
                  {spec.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-3xl font-indie-display font-black text-amber-300">
                  {spec.stat}
                </div>
                <div className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mt-0.5">
                  {spec.unit}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Packaging & Unboxing Feature Highlight */}
      <div className="mt-12 rounded-3xl bg-gradient-to-r from-amber-950/30 via-neutral-900/60 to-purple-950/20 border border-amber-500/20 p-8 sm:p-12 overflow-hidden relative">
        <div className="max-w-2xl relative z-10">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold block mb-2">
            THE UNBOXING RITUAL
          </span>
          <h3 className="text-2xl sm:text-4xl font-indie-display font-bold text-white">
            Delivered in Velvet-Lined Keepsake Presentation Boxes
          </h3>
          <p className="mt-4 text-sm sm:text-base text-neutral-300 font-indie-body leading-relaxed">
            Your personalised cards arrive nestled within a matte black rigid box with magnetic closure, protected by golden parchment tissue paper and tied with a raw silk ribbon. Even opening the package is an unforgettable celebration.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-amber-300/90">
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              Handmade Deckled Cotton Envelopes
            </span>
            <span>•</span>
            <span>Custom Calligraphy Addressed</span>
            <span>•</span>
            <span>Scented Sandalwood Infused Vellum</span>
          </div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

    </section>
  );
}
