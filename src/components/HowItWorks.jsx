import React from 'react';
import { Palette, FileSpreadsheet, FileCheck, Printer } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose a Design",
      subtitle: "Select a design or request a branded version.",
      description: "Pick from our distinct concepts depicting India's iconic monuments or let us adapt your client's existing visual identity, brand colours, and logo.",
      icon: Palette
    },
    {
      number: "02",
      title: "Share Approved Details",
      subtitle: "Provide authorised recipient names and the approved greeting.",
      description: "Simply share an Excel/CSV sheet with employee names and the approved festive message from the client's executive team.",
      icon: FileSpreadsheet
    },
    {
      number: "03",
      title: "Review the Sample",
      subtitle: "Approve the artwork and sample personalisation.",
      description: "We generate digital proofs for your review. Once you and your corporate client give the green light, we prepare the final production batch.",
      icon: FileCheck
    },
    {
      number: "04",
      title: "Print and Pack",
      subtitle: "Receive print-ready files, with physical printing available by arrangement.",
      description: "Get print-ready, high-resolution PDF files with bleed lines, or have us handle full printing and deliver boxed cards directly to your packing unit.",
      icon: Printer
    }
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#E8E1D3]">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EDE2] border border-[#E0D7C4] text-[#7A6A4E] text-[11px] uppercase tracking-[0.2em] font-medium mb-3">
          <span>Seamless 4-Step Process</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2A231C] tracking-tight">
          How It Works
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#554D45] font-light leading-relaxed">
          Zero friction for your team. Here is how we turn your client's employee roster into finished festive cards ready to slip into hampers.
        </p>
      </div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="rounded-[4px] bg-[#FAF7F2] border border-[#E5DEC9] p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#C5A059]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl text-[#8C6A28] font-normal">
                    {step.number}
                  </span>
                  <div className="w-9 h-9 rounded-sm bg-[#F2EDE2] border border-[#E0D7C4] flex items-center justify-center text-[#8C6A28]">
                    <Icon className="w-4 h-4 stroke-[1.5]" />
                  </div>
                </div>

                <h3 className="font-serif text-lg font-normal text-[#2A231C] mb-1">
                  {step.title}
                </h3>
                
                <h4 className="text-xs font-medium text-[#7A6A4E] mb-2 leading-snug">
                  {step.subtitle}
                </h4>

                <p className="text-xs text-[#5C544B] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Production & Timeline Clarification Note */}
      <div className="mt-12 p-4 rounded-sm bg-[#F7F2E7] border border-[#E2D8C3] max-w-3xl mx-auto text-center text-xs text-[#6B6258] font-light leading-relaxed">
        <strong className="font-medium text-[#2A231C]">Please Note: </strong>
        Bulk order quantities, production turnaround timelines, and physical printing charges are clearly confirmed in writing prior to order acceptance to ensure on-time delivery for your Diwali dispatch schedules.
      </div>

    </section>
  );
}
