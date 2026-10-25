import React from 'react';
import { 
  Palette, 
  Printer, 
  Send, 
  CheckCircle2, 
  Layers, 
  BookOpen, 
} from 'lucide-react';
import { RangoliDivider, RangoliCorner } from './RangoliArt';

export default function WhatWeDo() {
  const steps = [
    {
      step: '०१',
      title: 'Choose Your A6 Canvas',
      desc: 'Select between our signature A6 Flat Card (sleek double-sided heirloom) or the classic A6 One-Fold Greeting Card that stands proudly on festive altars and mantlepieces.',
      icon: Layers,
    },
    {
      step: '०२',
      title: 'Personalise In Real-Time 3D',
      desc: 'Add your family surname, personalized prayers, or corporate logo. Choose from 24K Gold, Rose Gold, Antique Copper, or Platinum foil finishes with instant proofing.',
      icon: Palette,
    },
    {
      step: '०३',
      title: 'We Hot-Foil Stamp & Print',
      desc: 'Using Heidelberg presses and custom brass dies heated to 180°C, we deboss every card onto 380 GSM Italian cotton board for an unmistakable tactile impression.',
      icon: Printer,
    },
    {
      step: '०४',
      title: 'Wax-Sealed & Delivered',
      desc: 'Each card is nestled in an artisanal envelope, sealed by hand with rich royal wax, and delivered in luxury velvet presentation keepsake boxes.',
      icon: Send,
    },
  ];

  return (
    <section id="what-we-do" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3 font-indie-body">
          Simplicity In Every Detail
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-indie-display font-bold text-white tracking-tight leading-tight">
          What We Do, <span className="gold-foil-text">In Three Simple Words:</span>
          <br />
          Design. Personalise. Print.
        </h2>
        <RangoliDivider className="my-4 opacity-75" />
        <p className="text-base sm:text-lg text-neutral-300 font-indie-body leading-relaxed">
          In an era of fleeting WhatsApp forwards, we restore the sacred ritual of physical Diwali greetings. 
          Bespoke festive stationery printed with deep reverence, precision foils, and your family's personal warmth.
        </p>
      </div>

      {/* The 4-Step Process Flow with Indic Numerals & Indie Fonts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.step}
              className="relative p-7 rounded-3xl bg-neutral-900/50 border border-white/10 hover:border-amber-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-3xl font-indie-display font-black text-amber-500/30 group-hover:text-amber-400/80 transition-colors mb-4">
                {item.step}
              </div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-indie-display font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-indie-body leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Two Formats: Side-by-Side Comparison with Rangoli Framing */}
      <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.04] to-black/50 border border-amber-500/20 backdrop-blur-xl relative overflow-hidden">
        {/* Subtle Rangoli watermark in corner */}
        <div className="absolute top-0 right-0 p-4 opacity-25 pointer-events-none">
          <RangoliCorner className="w-24 h-24" flip={true} />
        </div>
        <div className="absolute bottom-0 left-0 p-4 opacity-25 pointer-events-none">
          <RangoliCorner className="w-24 h-24" />
        </div>

        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-2 font-mono">
            A6 PORTRAIT STANDARD (105 × 148 MM)
          </span>
          <h3 className="text-2xl sm:text-3xl font-indie-display font-bold text-white">
            Two Formats. Infinite Warmth.
          </h3>
          <p className="text-sm text-neutral-400 mt-2 font-indie-body">
            Engineered to the golden ratio of postal art. Compact enough for treasured keepsakes, majestic enough for sacred blessings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Format 1: A6 Flat Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 text-xs font-semibold mb-4 font-indie-body">
                <Layers className="w-3.5 h-3.5" />
                Format ०१
              </div>
              <h4 className="text-xl font-indie-display font-bold text-white mb-2">
                A6 Flat Card (Front & Back)
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 font-indie-body leading-relaxed mb-6">
                A single solid sheet of heavyweight 380 GSM cotton board. The front showcases your deep jewel motif and 24K foil stamping. The reverse bears your handwritten-style note, vintage postal stamp, and minted seal.
              </p>
              
              <ul className="space-y-2.5 text-xs text-neutral-300 font-indie-body">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Ultra-rigid 380 GSM stock (zero bend or curling)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Dual-sided metallic foil and letterpress printing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Ideal for framing or slip-in luxury hampers</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-neutral-400 font-indie-body">Dimensions</span>
              <span className="text-xs font-mono text-amber-300">105 mm × 148 mm</span>
            </div>
          </div>

          {/* Format 2: A6 One-Fold Greeting Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-black/40 border border-amber-500/30 flex flex-col justify-between shadow-[0_0_30px_rgba(245,158,11,0.08)]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-4 border border-amber-500/40 font-indie-body">
                <BookOpen className="w-3.5 h-3.5" />
                Format ०२ • Most Cherished
              </div>
              <h4 className="text-xl font-indie-display font-bold text-white mb-2">
                A6 One-Fold Greeting Card (Bi-Fold)
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 font-indie-body leading-relaxed mb-6">
                The timeless greeting card experience. Opens effortlessly along a scored spine. The front cover creates an awe-inspiring first impression, while the interior spread holds your intimate prayers and family signatures.
              </p>
              
              <ul className="space-y-2.5 text-xs text-neutral-300 font-indie-body">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Self-standing at 90° for festive pooja altars & desks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Interior left features sacred Sanskrit shloka with diya watermark</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Interior right hosts your personalized family letter & photo</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-neutral-400 font-indie-body">Dimensions</span>
              <span className="text-xs font-mono text-amber-300">105 × 148 mm (Folded) • 210 × 148 mm (Open)</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
