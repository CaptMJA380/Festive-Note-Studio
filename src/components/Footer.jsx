import React from 'react';
import { 
  BUSINESS_CONFIG, 
  getWhatsAppUrl, 
  getMailtoUrl, 
  getTelUrl 
} from '../config/business';
import { ShieldCheck, MessageSquare, Mail, Phone, MapPin } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF7F2] border-t border-[#E8E1D3] pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-[#5C544B]">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E8E1D3]">
          
          {/* Column 1: Brand & Description (5 cols) */}
          <div className="md:col-span-5">
            <BrandLogo />
            <p className="mt-4 text-xs text-[#6B6258] font-light leading-relaxed max-w-sm">
              We partner with corporate hamper makers and gifting companies across Pune and Maharashtra to deliver bespoke, individually personalised Diwali greeting cards as a seamless add-on to client gift hampers.
            </p>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#2A231C] mb-3 font-sans">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <a href="#" className="hover:text-[#8C6A28] transition-colors">Home</a>
              </li>
              <li>
                <a href="#designs" className="hover:text-[#8C6A28] transition-colors">Our Designs</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#8C6A28] transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#for-suppliers" className="hover:text-[#8C6A28] transition-colors">For Hamper Suppliers</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#8C6A28] transition-colors">Discuss Order</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Location (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#2A231C] mb-3 font-sans">
              Corporate Enquiries
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8C6A28] shrink-0" />
                <span>{BUSINESS_CONFIG.LOCATION}</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#8C6A28] shrink-0" />
                <a 
                  href={getWhatsAppUrl(BUSINESS_CONFIG.WHATSAPP_MESSAGES.general)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#8C6A28] transition-colors font-mono"
                >
                  WhatsApp: {BUSINESS_CONFIG.PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#8C6A28] shrink-0" />
                <a 
                  href={getMailtoUrl()} 
                  className="hover:text-[#8C6A28] transition-colors font-mono"
                >
                  {BUSINESS_CONFIG.BUSINESS_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8C6A28] shrink-0" />
                <a 
                  href={getTelUrl()} 
                  className="hover:text-[#8C6A28] transition-colors font-mono"
                >
                  {BUSINESS_CONFIG.PHONE_NUMBER}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Data Privacy & Confidentiality Statement */}
        <div className="py-6 border-b border-[#E8E1D3] flex items-start gap-3 text-[11px] text-[#7A7268] font-light leading-relaxed">
          <ShieldCheck className="w-4 h-4 text-[#8C6A28] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-[#4A4239]">Corporate Data Privacy & Confidentiality: </span>
            All recipient and employee details provided by corporate clients are processed strictly for the purpose of authorised personalisation. Data is handled with strict confidentiality and deleted following the completion and agreed retention period of each festive order.
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8A8175] font-light">
          <div>
            © {currentYear} {BUSINESS_CONFIG.BRAND_NAME}. All rights reserved.
          </div>
          <div>
            Bespoke Diwali Greeting Cards for Corporate Gifting Partnerships
          </div>
        </div>

      </div>
    </footer>
  );
}
