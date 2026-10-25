import React, { useState } from 'react';

/**
 * Photorealistic SVG Diya illustration for boutique stationery
 */
export const DiyaArtwork = ({ variant = 'gold', className = "w-16 h-14" }) => {
  const isBurgundy = variant === 'burgundy';
  const strokeColor = isBurgundy ? "#E0B767" : "#C5A059";
  const glowColor = isBurgundy ? "#FDE68A" : "#D4AF37";

  return (
    <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={`flame-${variant}`} cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#FFF9E6" />
          <stop offset="40%" stopColor={glowColor} stopOpacity="0.85" />
          <stop offset="100%" stopColor={strokeColor} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Radiant flame aureole */}
      <circle cx="50" cy="24" r="20" fill={`url(#flame-${variant})`} opacity="0.65" />

      {/* Inner flame */}
      <path
        d="M50 8 C46 18, 43 25, 44 32 C45 37, 55 37, 56 32 C57 25, 54 18, 50 8 Z"
        fill={isBurgundy ? "#FFF4CC" : "#C5A059"}
      />
      <path
        d="M50 16 C48 22, 46 26, 47 30 C48 33, 52 33, 53 30 C54 26, 52 22, 50 16 Z"
        fill="#FFFFFF"
        opacity="0.9"
      />

      {/* Diya clay/brass rim */}
      <ellipse cx="50" cy="42" rx="34" ry="7" stroke={strokeColor} strokeWidth="1.6" />
      <ellipse cx="50" cy="42" rx="28" ry="4.5" stroke={strokeColor} strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />

      {/* Diya base curve */}
      <path
        d="M16 42 C19 60, 34 68, 50 68 C66 68, 81 60, 84 42"
        stroke={strokeColor}
        strokeWidth="1.8"
      />

      {/* Diya decorative pedestal */}
      <path
        d="M40 68 L38 74 L62 74 L60 68"
        stroke={strokeColor}
        strokeWidth="1.4"
      />

      {/* Delicate engraved floret on bowl */}
      <circle cx="50" cy="54" r="2.5" fill={strokeColor} opacity="0.8" />
      <circle cx="40" cy="52" r="1.5" fill={strokeColor} opacity="0.6" />
      <circle cx="60" cy="52" r="1.5" fill={strokeColor} opacity="0.6" />
    </svg>
  );
};

/**
 * Single-sided A6 FLAT CARD Component
 * Aspect ratio: 105 x 148 mm (portrait ~ 1 : 1.41)
 * Checks for external image first; if not found, renders realistic physical stationery mockup.
 */
export default function CardMockup({ 
  design, 
  customRecipient = null,
  customMessage = null,
  customCompany = null,
  className = "" 
}) {
  const [imageError, setImageError] = useState(false);

  // If external image is supplied in /public/images/cards/ and loads successfully
  if (design.imagePath && !imageError) {
    return (
      <div 
        className={`relative aspect-[105/148] w-full rounded-[4px] overflow-hidden bg-white card-elevation border border-[#E5DEC9] ${className}`}
        style={{ maxWidth: '320px' }}
      >
        <img 
          src={design.imagePath} 
          alt={`${design.name} — A6 Portrait Flat Diwali Card`}
          onError={(e) => {
            if (design.imagePath && design.imagePath.endsWith('.webp')) {
              e.currentTarget.src = design.imagePath.replace('.webp', '.jpg');
            } else {
              setImageError(true);
            }
          }}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  // Realistic Stationery Fallback Mockup based on design theme
  const { themeType } = design;

  if (themeType === 'burgundy-edit') {
    return (
      <div 
        className={`relative aspect-[105/148] w-full rounded-[4px] p-5 sm:p-6 flex flex-col justify-between texture-paper-burgundy card-elevation border border-[#6B1B2F] select-none text-[#FFF8ED] ${className}`}
        style={{ maxWidth: '320px' }}
      >
        {/* Fine gold border inner frame */}
        <div className="absolute inset-2 sm:inset-3 border border-[#E0B767]/40 pointer-events-none rounded-[2px]" />
        <div className="absolute inset-3 sm:inset-4 border border-[#E0B767]/20 border-dashed pointer-events-none rounded-[1px]" />

        {/* Top Header */}
        <div className="relative z-10 text-center pt-2">
          <span className="text-[9px] sm:text-[10px] tracking-[0.25em] font-serif uppercase text-[#E0B767]/80">
            SHUBH DEEPAVALI
          </span>
          <div className="w-8 h-px bg-[#E0B767]/50 mx-auto mt-1" />
        </div>

        {/* Center Artwork */}
        <div className="relative z-10 my-auto text-center flex flex-col items-center">
          <DiyaArtwork variant="burgundy" className="w-16 h-14 mb-2" />
          <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#FFF9F0] tracking-wide mt-1">
            Festival of Light
          </h4>
          <p className="font-serif text-[11px] sm:text-xs text-[#E0B767]/90 italic mt-1.5 leading-relaxed max-w-[210px]">
            {customMessage || "May the divine glow of Diwali bring boundless warmth, peace and prosperity to you and your family."}
          </p>
        </div>

        {/* Bottom Personalisation Footnote */}
        <div className="relative z-10 text-center pb-1 border-t border-[#E0B767]/25 pt-3">
          <div className="text-[10px] sm:text-[11px] font-serif text-[#E0B767]/90 tracking-wider">
            {customRecipient ? `Prepared for: ${customRecipient}` : "With Warmest Corporate Wishes"}
          </div>
          <div className="text-[9px] text-[#FFF8ED]/70 font-sans mt-0.5">
            {customCompany || "On Behalf of the Leadership Team"}
          </div>
        </div>
      </div>
    );
  }

  if (themeType === 'corporate-classic') {
    return (
      <div 
        className={`relative aspect-[105/148] w-full rounded-[4px] p-5 sm:p-6 flex flex-col justify-between texture-paper-corporate card-elevation border border-[#E2D8C3] select-none text-[#24211E] ${className}`}
        style={{ maxWidth: '320px' }}
      >
        {/* Subtle geometric border */}
        <div className="absolute inset-2 sm:inset-3 border border-[#C5A059]/40 pointer-events-none rounded-[2px]" />

        {/* Top Client Branding Slot (Specific to Corporate Classic) */}
        <div className="relative z-10 pt-2 text-center">
          <div className="inline-block px-3 py-1 border border-dashed border-[#C5A059]/60 rounded text-[9px] font-mono tracking-widest uppercase text-[#8C7132] bg-[#F7F3E8]">
            {customCompany || "CLIENT LOGO HERE"}
          </div>
        </div>

        {/* Center Motif & Greeting */}
        <div className="relative z-10 my-auto text-center flex flex-col items-center">
          <DiyaArtwork variant="gold" className="w-14 h-12 mb-2 opacity-90" />
          <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#2A231C] tracking-wide">
            Diwali Greetings
          </h4>
          <div className="w-8 h-px bg-[#C5A059]/40 mx-auto my-2" />
          <p className="font-serif text-[11px] sm:text-xs text-[#524A42] leading-relaxed max-w-[210px]">
            {customMessage || "Wishing you and your family a season filled with success, prosperity, and radiant new milestones."}
          </p>
        </div>

        {/* Bottom Personalisation Slot */}
        <div className="relative z-10 text-center pb-1 border-t border-[#C5A059]/25 pt-3">
          <div className="text-[10px] sm:text-[11px] font-serif text-[#8C7132] font-medium tracking-wide">
            {customRecipient ? `Exclusively for: ${customRecipient}` : "Personalised with Employee Name"}
          </div>
          <div className="text-[9px] text-[#7A7268] font-sans mt-0.5">
            Festive Wishes • 2026
          </div>
        </div>
      </div>
    );
  }

  if (themeType === 'golden-glow') {
    return (
      <div 
        className={`relative aspect-[105/148] w-full rounded-[4px] p-5 sm:p-6 flex flex-col justify-between texture-paper-cream card-elevation border border-[#DFD6C2] select-none text-[#2A241D] ${className}`}
        style={{ maxWidth: '320px' }}
      >
        {/* Soft ornamental double frame */}
        <div className="absolute inset-2 sm:inset-3 border border-[#C5A059]/35 pointer-events-none rounded-[2px]" />
        <div className="absolute inset-3 sm:inset-4 border border-[#C5A059]/20 pointer-events-none rounded-[1px]" />

        {/* Top Header */}
        <div className="relative z-10 text-center pt-2">
          <span className="text-[9px] sm:text-[10px] tracking-[0.25em] font-serif uppercase text-[#9A7432]">
            FESTIVAL OF LIGHTS
          </span>
        </div>

        {/* Center Artwork */}
        <div className="relative z-10 my-auto text-center flex flex-col items-center">
          <DiyaArtwork variant="gold" className="w-15 h-13 mb-2" />
          <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#2A241D] tracking-wide">
            Warmest Wishes
          </h4>
          <p className="font-serif text-[11px] sm:text-xs text-[#5C5348] italic mt-1.5 leading-relaxed max-w-[210px]">
            {customMessage || "May the coming days illuminate your path with joy, wisdom, and quiet gratitude."}
          </p>
        </div>

        {/* Bottom signature */}
        <div className="relative z-10 text-center pb-1 border-t border-[#C5A059]/25 pt-3">
          <div className="text-[10px] sm:text-[11px] font-serif text-[#9A7432]">
            {customRecipient ? `Especially for ${customRecipient}` : "With Heartfelt Appreciation"}
          </div>
          <div className="text-[9px] text-[#786F64] font-sans mt-0.5">
            {customCompany || "From Your Leadership & Team"}
          </div>
        </div>
      </div>
    );
  }

  // Default: The Royal Diya
  return (
    <div 
      className={`relative aspect-[105/148] w-full rounded-[4px] p-5 sm:p-6 flex flex-col justify-between texture-paper-ivory card-elevation border border-[#E5DEC9] select-none text-[#24211E] ${className}`}
      style={{ maxWidth: '320px' }}
    >
      {/* Traditional fine gold border */}
      <div className="absolute inset-2 sm:inset-3 border border-[#C5A059]/45 pointer-events-none rounded-[2px]" />
      <div className="absolute inset-3 sm:inset-4 border border-[#C5A059]/25 border-dashed pointer-events-none rounded-[1px]" />

      {/* Top Header */}
      <div className="relative z-10 text-center pt-2">
        <span className="text-[9px] sm:text-[10px] tracking-[0.25em] font-serif uppercase text-[#B8860B]">
          SHUBH DEEPAVALI
        </span>
        <div className="w-8 h-px bg-[#C5A059]/50 mx-auto mt-1" />
      </div>

      {/* Center Etched Diya and Greeting */}
      <div className="relative z-10 my-auto text-center flex flex-col items-center">
        <DiyaArtwork variant="gold" className="w-16 h-14 mb-2" />
        <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#2A231C] tracking-wide">
          Radiant Blessings
        </h4>
        <p className="font-serif text-[11px] sm:text-xs text-[#524A42] italic mt-1.5 leading-relaxed max-w-[210px]">
          {customMessage || "May this sacred celebration bring peace, prosperous beginnings, and endless happiness to your home."}
        </p>
      </div>

      {/* Bottom Personalisation Footnote */}
      <div className="relative z-10 text-center pb-1 border-t border-[#C5A059]/30 pt-3">
        <div className="text-[10px] sm:text-[11px] font-serif text-[#B8860B] tracking-wider">
          {customRecipient ? `Prepared for: ${customRecipient}` : "Personalised Recipient Name"}
        </div>
        <div className="text-[9px] text-[#756C62] font-sans mt-0.5">
          {customCompany || "Warm Wishes from the Executive Team"}
        </div>
      </div>
    </div>
  );
}
