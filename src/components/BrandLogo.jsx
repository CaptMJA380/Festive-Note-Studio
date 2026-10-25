import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';

/**
 * Minimalist Heritage Emblem Mark (Amber Arch & Diya Flame)
 */
export const LogoMark = ({ className = "w-8 h-8", light = false }) => {
  const archStroke = light ? "#FAF7F2" : "#4A0E1C";
  const goldAccent = "#C5A059";
  const glowFill = light ? "#4A0E1C" : "#FAF1DC";

  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Royal Palace Cusped Archway (Inspired by Jaipur & Mughal Heritage) */}
      <path 
        d="M 50 13
           C 52.8 18.5, 57.2 21.2, 63 23.4
           C 70 26, 75.5 31.5, 75.5 39.5
           L 75.5 82
           C 75.5 83.5, 74 85, 72 85
           L 28 85
           C 26 85, 24.5 83.5, 24.5 82
           L 24.5 39.5
           C 24.5 31.5, 30 26, 37 23.4
           C 42.8 21.2, 47.2 18.5, 50 13 Z" 
        stroke={archStroke} 
        strokeWidth="2.4" 
        strokeLinejoin="round" 
        fill={light ? "rgba(255,255,255,0.05)" : "#FAF7F2"} 
      />

      {/* Inner Muted Gold Foil Hairline */}
      <path 
        d="M 50 19.5
           C 52.2 23.8, 55.8 26, 60.5 28
           C 66.2 30.2, 70.5 34.8, 70.5 41.5
           L 70.5 80
           L 29.5 80
           L 29.5 41.5
           C 29.5 34.8, 33.8 30.2, 39.5 28
           C 44.2 26, 47.8 23.8, 50 19.5 Z" 
        stroke={goldAccent} 
        strokeWidth="1" 
        opacity="0.85" 
        fill="none" 
      />

      {/* Warm Festive Diya Aureole */}
      <circle cx="50" cy="48" r="14" fill={glowFill} opacity="0.75" />

      {/* Royal Diya Flame */}
      <path 
        d="M 50 37
           C 46 44, 44 49, 45.6 53.5
           C 47.2 57.2, 52.8 57.2, 54.4 53.5
           C 56 49, 54 44, 50 37 Z" 
        fill={goldAccent} 
      />

      {/* Flame Inner Radiance Heart */}
      <path 
        d="M 50 43.5
           C 48.2 47.5, 47.6 50, 48.6 52.5
           C 49.3 54, 50.7 54, 51.4 52.5
           C 52.4 50, 51.8 47.5, 50 43.5 Z" 
        fill="#FFFDF7" 
      />

      {/* Minimalist Brass Diya Bowl */}
      <path 
        d="M 38 61 C 41 68, 59 68, 62 61 Z" 
        fill={archStroke} 
        stroke={goldAccent} 
        strokeWidth="1.2" 
      />
      <line 
        x1="36" 
        y1="61" 
        x2="64" 
        y2="61" 
        stroke={goldAccent} 
        strokeWidth="1.2" 
        strokeLinecap="round" 
      />

      {/* Delicate Accent Dots */}
      <circle cx="50" cy="72" r="1.6" fill={goldAccent} />
      <circle cx="43.5" cy="72" r="1.1" fill={goldAccent} opacity="0.6" />
      <circle cx="56.5" cy="72" r="1.1" fill={goldAccent} opacity="0.6" />

      {/* Pinnacle Celestial Star Sparkle */}
      <path 
        d="M 50 6 L 51 9 L 54 10 L 51 11 L 50 14 L 49 11 L 46 10 L 49 9 Z" 
        fill={goldAccent} 
      />
    </svg>
  );
};

/**
 * Brand Logo with Responsive Wordmark Lockup
 */
export default function BrandLogo({ 
  className = "", 
  markSize = "w-9 h-9 sm:w-10 sm:h-10",
  showSubtitle = true,
  light = false 
}) {
  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {/* Heritage Mark */}
      <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
        <LogoMark className={markSize} light={light} />
      </div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <span className={`font-serif text-xl sm:text-2xl font-normal tracking-wide transition-colors leading-tight ${
          light ? 'text-[#FAF7F2]' : 'text-[#2A231C] group-hover:text-[#8C6A28]'
        }`}>
          {BUSINESS_CONFIG.BRAND_NAME}
        </span>
        {showSubtitle && (
          <span className={`text-[8.5px] sm:text-[9px] uppercase tracking-[0.22em] font-sans -mt-0.5 ${
            light ? 'text-[#C5A059]' : 'text-[#786F64]'
          }`}>
            Personalised Corporate Stationery • Pune
          </span>
        )}
      </div>
    </div>
  );
}
