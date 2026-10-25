import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, UserCheck, Sparkles } from 'lucide-react';
import CardMockup from './CardMockup';
import { CARD_DESIGNS } from '../data/designs';

export default function PersonalisationDemo() {
  const royalDesign = CARD_DESIGNS[0]; // The Royal Diya
  
  // Interactive sample names to show hamper suppliers how bulk recipient names work
  const [activeName, setActiveName] = useState('Aarav');
  const sampleRecipients = ['Aarav', 'Priya', 'Vikram', 'Neha', 'Kabir'];

  return (
    <section id="personalisation" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#E8E1D3]">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EDE2] border border-[#E0D7C4] text-[#7A6A4E] text-[11px] uppercase tracking-[0.2em] font-medium mb-3">
          <span>The Power of Personalisation</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2A231C] tracking-tight">
          One Design. Every Employee. A Personal Touch.
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#554D45] font-light leading-relaxed">
          Transform a standard corporate greeting into an individually addressed keepsake. 
          Each recipient receives their name and approved festive message, while your client's branding stays pristine.
        </p>
      </div>

      {/* Visual Before and After Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
        
        {/* BEFORE: Generic Card */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-3 px-1 max-w-[320px]">
            <span className="text-xs sm:text-sm uppercase font-mono tracking-wider text-[#7A7268] font-medium">
              Standard / Generic
            </span>
            <span className="text-xs text-[#A3998C] italic">
              Easily forgotten
            </span>
          </div>

          {/* Generic Card Visual */}
          <div className="w-full max-w-[320px] opacity-80 filter grayscale-[20%] transition-all hover:opacity-100 hover:grayscale-0">
            <CardMockup 
              design={royalDesign}
              customRecipient="Valued Employee"
              customMessage="Wishing you a Happy Diwali!"
              customCompany="Corporate Client"
            />
          </div>

          <div className="mt-4 p-4 sm:p-5 rounded-[6px] bg-[#F2EDE2]/80 border border-[#E5DEC9] w-full max-w-[320px] text-xs sm:text-sm text-[#5C544B] leading-relaxed shadow-xs">
            <span className="text-sm font-semibold text-[#2A231C] block mb-1.5">Generic Card Copy:</span>
            <p className="font-serif italic text-sm sm:text-base text-[#4A4239]">
              “Wishing you a Happy Diwali!”
            </p>
            <div className="text-xs text-[#7A7268] mt-2 font-light">
              Lacks individual recognition and is often left behind in the packaging.
            </div>
          </div>
        </div>

        {/* Arrow Divider */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center my-2 lg:my-0">
          <div className="w-12 h-12 rounded-full bg-[#EAE2D2] text-[#8C6A28] flex items-center justify-center shadow-inner">
            <ArrowRight className="w-6 h-6 rotate-90 lg:rotate-0" />
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#8C6A28] mt-2 font-semibold">
            Elevated With Us
          </span>
        </div>

        {/* AFTER: Personalised Card */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-3 px-1 max-w-[320px]">
            <span className="text-xs sm:text-sm uppercase font-mono tracking-wider text-[#4A0E1C] font-semibold flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4A0E1C]" />
              Personalised Greeting
            </span>
            <span className="text-xs text-[#8C6A28] font-medium">
              Kept on desks & mantles
            </span>
          </div>

          {/* Personalised Card Visual with Live Sample Recipient Toggle */}
          <div className="w-full max-w-[320px] relative">
            <CardMockup 
              design={royalDesign}
              customRecipient={activeName}
              customMessage="May the light of Diwali fill your heart with happiness, your home with warmth, and your days with endless hope."
              customCompany="The Executive Team"
            />
          </div>

          {/* Recipient sample switcher */}
          <div className="mt-4 p-4 sm:p-5 rounded-[6px] bg-[#FAF7F2] border border-[#C5A059]/50 w-full max-w-[320px] text-xs sm:text-sm text-[#2A231C] leading-relaxed shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-sm sm:text-[15px] text-[#4A0E1C]">Personalised Copy:</span>
              <span className="text-xs font-mono text-[#8C6A28]">Preview Names:</span>
            </div>
            
            {/* Quick interactive switcher */}
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {sampleRecipients.map((name) => (
                <button
                  key={name}
                  onClick={() => setActiveName(name)}
                  className={`px-3 py-1 rounded text-xs transition-all font-medium ${
                    activeName === name
                      ? 'bg-[#4A0E1C] text-[#FAF7F2] font-semibold shadow-xs'
                      : 'bg-[#F2EDE2] text-[#554D45] hover:bg-[#EAE2D2]'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>

            <p className="font-serif italic text-xs sm:text-[13.5px] text-[#3A3229] leading-relaxed">
              “Dear {activeName},<br />
              May the light of Diwali fill your heart with happiness, your home with warmth, and your days with endless hope.<br />
              <span className="font-sans not-italic text-xs text-[#7A7268] mt-1 block">Warm wishes, The Team</span>”
            </p>
          </div>
        </div>

      </div>

      {/* Explanatory Feature Callout */}
      <div className="mt-16 sm:mt-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 sm:pt-12 border-t border-[#E8E1D3]">
        <div className="flex items-start gap-3.5">
          <CheckCircle2 className="w-6 h-6 text-[#8C6A28] shrink-0 mt-0.5" />
          <div>
            <h4 className="text-base sm:text-lg font-serif font-medium text-[#2A231C]">Unique Employee Names</h4>
            <p className="text-xs sm:text-sm text-[#554D45] mt-1.5 font-light leading-relaxed">
              Simply supply an Excel or CSV file of approved names. We format and typeset each card individually.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3.5">
          <CheckCircle2 className="w-6 h-6 text-[#8C6A28] shrink-0 mt-0.5" />
          <div>
            <h4 className="text-base sm:text-lg font-serif font-medium text-[#2A231C]">Approved Client Message</h4>
            <p className="text-xs sm:text-sm text-[#554D45] mt-1.5 font-light leading-relaxed">
              Your client approves a single brand message or custom department-wise notes. No manual retyping required.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3.5">
          <CheckCircle2 className="w-6 h-6 text-[#8C6A28] shrink-0 mt-0.5" />
          <div>
            <h4 className="text-base sm:text-lg font-serif font-medium text-[#2A231C]">Consistent Brand Identity</h4>
            <p className="text-xs sm:text-sm text-[#554D45] mt-1.5 font-light leading-relaxed">
              Exact logo positioning, corporate colors, and executive signatures stay uniform throughout the print batch.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
