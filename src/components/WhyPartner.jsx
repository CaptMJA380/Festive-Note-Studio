import React from 'react';
import { Gift, TrendingUp, Workflow, Check } from 'lucide-react';

export default function WhyPartner() {
  const benefits = [
    {
      title: "Make Your Hampers More Memorable",
      description: "Offer recipients a thoughtful personal touch beyond the usual gift packaging. When employees see their own name printed with care, the entire hamper feels intentional and valued.",
      icon: Gift,
      points: [
        "Authentic artwork featuring real historical monuments from across India",
        "Elevates dry fruits, sweets, and artisanal products into personal gifts",
        "Higher retention—cards are kept on desks long after sweets are enjoyed",
        "Helps your hampers stand out in corporate proposals"
      ]
    },
    {
      title: "Create an Additional Revenue Opportunity",
      description: "Offer personalised cards as an add-on to existing corporate hamper orders. Gifting clients are eager to add a personal touch, allowing you to enhance your per-hamper order value effortlessly.",
      icon: TrendingUp,
      points: [
        "Simple per-card add-on pricing to plug into your client quotations",
        "Zero upfront investment in stationery inventory or equipment",
        "Higher win rates when bidding for premium corporate gifting accounts"
      ]
    },
    {
      title: "Keep Your Workflow Simple",
      description: "We handle design, message personalisation, recipient-wise layouts and print-ready files. Your team focuses on assembling and delivering beautiful hampers without getting bogged down in graphic design.",
      icon: Workflow,
      points: [
        "Send us an employee name list—we handle all formatting and alignment",
        "Quick digital proofs for your client's brand approval",
        "Print-ready PDFs supplied, or optional physical delivery right to your Pune workshop"
      ]
    }
  ];

  return (
    <section id="for-suppliers" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#E8E1D3]">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EDE2] border border-[#E0D7C4] text-[#7A6A4E] text-[11px] uppercase tracking-[0.2em] font-medium mb-3">
          <span>For Corporate Gifting & Hamper Suppliers</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2A231C] tracking-tight">
          Why Partner With Us?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#554D45] font-light leading-relaxed">
          We act as your dedicated stationery backend. You present the concept to your clients, and we do the heavy lifting behind the scenes.
        </p>
      </div>

      {/* 3 Benefit Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <div
              key={benefit.title}
              className="rounded-[4px] bg-[#FAF7F2] border border-[#E5DEC9] p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#C5A059] hover:shadow-sm"
            >
              <div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-sm bg-[#F2EDE2] border border-[#E0D7C4] flex items-center justify-center text-[#8C6A28] mb-6">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#2A231C] leading-snug">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-[#5C544B] font-light leading-relaxed">
                  {benefit.description}
                </p>

                {/* Bullet Points */}
                <div className="mt-6 pt-5 border-t border-[#EAE2D2] space-y-2.5">
                  {benefit.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#4A4239] font-light">
                      <Check className="w-3.5 h-3.5 text-[#8C6A28] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Local Pune Note */}
      <div className="mt-14 p-6 rounded-sm bg-[#F5EFEB] border border-[#E2D8C3] text-center max-w-2xl mx-auto">
        <span className="font-serif text-base text-[#2A231C] block font-normal">
          Based in Pune, Maharashtra
        </span>
        <p className="text-xs text-[#6B6258] mt-1 font-light leading-relaxed">
          Convenient coordination with gifting teams across Hinjawadi, Magarpatta, Baner, Kalyani Nagar, Viman Nagar, and PCMC.
        </p>
      </div>

    </section>
  );
}
