import React from 'react';
import { Check, Sparkles, ShieldCheck, Truck, MessageCircle } from 'lucide-react';
import { RangoliDivider } from './RangoliArt';

export default function PricingBox({ onOrderClick }) {
  const tiers = [
    {
      name: 'The Intimate Circle',
      badge: 'Perfect for Family',
      quantity: '15 Bespoke Cards',
      price: '₹1,850',
      pricePerCard: '₹123 / card',
      desc: 'Ideal for sending to parents, close siblings, and cherished elders.',
      features: [
        'Choice of A6 Flat or One-Fold',
        '24K Gold or Rose Gold Foil Stamping',
        '380 GSM Italian Cotton Stock',
        '15 Handmade Deckle Envelopes',
        'Hand-Poured Wax Seals included',
        'Rigid Keepsake Presentation Box',
        'Free Digital Proofing on WhatsApp',
      ],
      popular: false,
    },
    {
      name: 'The Festive Family Box',
      badge: 'Most Cherished Choice',
      quantity: '35 Bespoke Cards',
      price: '₹3,450',
      pricePerCard: '₹98 / card',
      desc: 'Our bestselling set for extended family, lifelong friends, and neighbors.',
      features: [
        'Choice of A6 Flat or One-Fold',
        'Any of 4 Metallic Foil Finishes',
        '380 GSM Cotton or Laid Linen',
        '35 Handmade Deckle Envelopes',
        '35 Hand-Poured Wax Seals',
        'Luxury Velvet-Lined Gift Box',
        'Free Scented Sandalwood Vellum',
        'Priority 48-hr Print & Ship',
      ],
      popular: true,
    },
    {
      name: 'The Grand Celebration',
      badge: 'Royal Guild Edition',
      quantity: '75 Bespoke Cards',
      price: '₹6,450',
      pricePerCard: '₹86 / card',
      desc: 'Comprehensive edition for large families, executive circles, and community leaders.',
      features: [
        'Choice of A6 Flat or One-Fold',
        'Dual-foil accent option',
        'Any Premium Paper Stock',
        '75 Custom Calligraphy Envelopes',
        'Custom Monogrammed Wax Stamp (Kept by you)',
        'Two Rigid Presentation Keepsake Boxes',
        'Free Direct Courier to Recipient List',
        'Complimentary Express Shipping',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3 font-indie-body">
          Transparent Box Collections
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-indie-display font-bold text-white tracking-tight">
          Presented in <span className="gold-foil-text">Heirloom Keepsake Boxes</span>
        </h2>
        <RangoliDivider className="my-4 opacity-75" />
        <p className="text-base sm:text-lg text-neutral-300 font-indie-body leading-relaxed">
          Every order includes your fully personalised card designs, handmade envelopes, real wax seals, and our signature magnetic presentation box.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
              tier.popular
                ? 'bg-gradient-to-b from-amber-950/40 via-neutral-900/90 to-black border-2 border-amber-500/60 shadow-[0_0_50px_rgba(245,158,11,0.2)] md:-translate-y-2'
                : 'bg-neutral-900/40 border border-white/10 hover:border-white/20'
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-black text-xs font-bold uppercase tracking-wider shadow-lg">
                Most Popular
              </div>
            )}

            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 font-mono">
                {tier.badge}
              </div>
              <h3 className="text-2xl font-indie-display font-bold text-white mt-1">
                {tier.name}
              </h3>
              <p className="text-xs text-neutral-400 mt-2 font-indie-body">
                {tier.desc}
              </p>

              {/* Price */}
              <div className="mt-6 pb-6 border-b border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-indie-display font-black text-white">
                    {tier.price}
                  </span>
                  <span className="text-xs text-neutral-400 font-indie-body">
                    / {tier.quantity}
                  </span>
                </div>
                <div className="text-[11px] text-amber-400 font-mono mt-1">
                  {tier.pricePerCard} • All taxes & box included
                </div>
              </div>

              {/* Features */}
              <div className="mt-6 space-y-3">
                <div className="text-xs font-semibold text-neutral-300 uppercase tracking-wider font-indie-body">
                  What is included:
                </div>
                {tier.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 text-xs text-neutral-300 font-indie-body">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                onClick={() => onOrderClick({ plan: tier.name, quantity: tier.quantity, price: tier.price })}
                className={`w-full py-3.5 px-6 rounded-2xl font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 font-indie-body ${
                  tier.popular
                    ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black shadow-lg hover:brightness-110'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Select {tier.quantity}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Trust & Guarantee bar */}
      <div className="mt-14 p-6 rounded-2xl bg-black/40 border border-white/10 flex flex-wrap items-center justify-around gap-6 text-xs text-neutral-300">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-amber-400" />
          <span>100% Satisfaction or Free Reprints</span>
        </div>
        <div className="flex items-center gap-2.5">
          <MessageCircle className="w-5 h-5 text-emerald-400" />
          <span>WhatsApp Proofing Before Printing</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Truck className="w-5 h-5 text-amber-400" />
          <span>Pan-India 2 to 4 Day Express Delivery</span>
        </div>
      </div>

    </section>
  );
}
