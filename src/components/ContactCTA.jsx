import React from 'react';
import { MessageSquare, Mail, Phone, MapPin, AlertCircle, ArrowUpRight } from 'lucide-react';
import { 
  BUSINESS_CONFIG, 
  getWhatsAppUrl, 
  getMailtoUrl, 
  getTelUrl 
} from '../config/business';

export default function ContactCTA() {
  const whatsappUrl = getWhatsAppUrl(BUSINESS_CONFIG.WHATSAPP_MESSAGES.general);
  const mailtoUrl = getMailtoUrl();
  const telUrl = getTelUrl();

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#E8E1D3]">
      
      {/* Configuration Status Notice (only displays when placeholder is active) */}
      {!BUSINESS_CONFIG.IS_CONFIGURED && (
        <div className="mb-10 p-3.5 rounded-sm bg-[#FFFDF5] border border-[#E8C872] max-w-3xl mx-auto flex items-start gap-3 text-xs text-[#7A601E]">
          <AlertCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-semibold text-[#5A4512]">Contact Configuration Note: </span>
            Contact links are currently using placeholders from <code className="bg-[#FAF3DC] px-1 py-0.5 rounded font-mono text-[11px]">src/config/business.js</code>. 
            Update <code className="bg-[#FAF3DC] px-1 py-0.5 rounded font-mono text-[11px]">WHATSAPP_NUMBER</code>, <code className="bg-[#FAF3DC] px-1 py-0.5 rounded font-mono text-[11px]">BUSINESS_EMAIL</code>, and set <code className="bg-[#FAF3DC] px-1 py-0.5 rounded font-mono text-[11px]">IS_CONFIGURED: true</code> prior to your production launch.
          </div>
        </div>
      )}

      {/* Main CTA Card */}
      <div className="rounded-[4px] bg-[#FAF7F2] border border-[#E0D7C4] p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-sm relative overflow-hidden">
        
        {/* Subtle decorative inner border */}
        <div className="absolute inset-2 sm:inset-3 border border-[#E8E1D3] pointer-events-none rounded-[2px]" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#8C7132] font-medium block mb-3">
            Diwali 2026 Corporate Partnerships
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2A231C] tracking-tight leading-tight">
            Let's Make Your Diwali Hampers More Personal.
          </h2>

          <p className="mt-4 text-base text-[#554D45] font-light leading-relaxed">
            Have corporate Diwali orders underway? Let's explore how personalised greeting cards can add value to your existing hampers.
          </p>

          {/* Three Working Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[#4A0E1C] hover:bg-[#380B15] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium transition-all shadow-sm hover:shadow"
            >
              <MessageSquare className="w-4 h-4 text-[#E0B767]" />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E0B767]" />
            </a>

            {/* Email */}
            <a
              href={mailtoUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[#FAF7F2] hover:bg-[#F2EDE2] text-[#2A231C] text-xs uppercase tracking-widest font-medium border border-[#DCD3C0] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#8C7132]" />
              <span>Email Us</span>
            </a>

            {/* Call */}
            <a
              href={telUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[#FAF7F2] hover:bg-[#F2EDE2] text-[#2A231C] text-xs uppercase tracking-widest font-medium border border-[#DCD3C0] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#8C7132]" />
              <span>Call Us</span>
            </a>
          </div>

          {/* Direct Details Display */}
          <div className="mt-10 pt-8 border-t border-[#E8E1D3] flex flex-wrap items-center justify-center gap-6 text-xs text-[#6B6258] font-light">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#8C7132]" />
              <span>{BUSINESS_CONFIG.LOCATION}</span>
            </div>
            <span>•</span>
            <div>
              <span className="text-[#8A8175]">Email: </span>
              <span className="font-mono text-[#2A231C]">{BUSINESS_CONFIG.BUSINESS_EMAIL}</span>
            </div>
            <span>•</span>
            <div>
              <span className="text-[#8A8175]">Phone: </span>
              <span className="font-mono text-[#2A231C]">{BUSINESS_CONFIG.PHONE_NUMBER}</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
