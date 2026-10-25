import React from 'react';

// Sacred Diya SVG with dynamic foil gradient
export const DiyaIllustration = ({ foilId, className = "w-32 h-32" }) => {
  return (
    <svg viewBox="0 0 200 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={`flameGlow-${foilId}`} cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#FFF3B0" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#F59E0B" stopOpacity="0.7" />
          <stop offset="80%" stopColor="#D97706" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`goldShine-${foilId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE082" />
          <stop offset="35%" stopColor="#F59E0B" />
          <stop offset="70%" stopColor="#FFF3B0" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
      </defs>

      {/* Flame radiant halo */}
      <circle cx="100" cy="55" r="48" fill={`url(#flameGlow-${foilId})`} className="animate-pulse" />

      {/* Inner sacred flame */}
      <path
        d="M100 15 C92 38, 86 54, 88 68 C90 80, 110 80, 112 68 C114 54, 108 38, 100 15 Z"
        fill={`url(#goldShine-${foilId})`}
      />
      <path
        d="M100 32 C96 46, 93 56, 95 64 C97 70, 103 70, 105 64 C107 56, 104 46, 100 32 Z"
        fill="#FFFFFF"
        opacity="0.85"
      />

      {/* Diya Clay / Brass Vessel Rim */}
      <ellipse cx="100" cy="88" rx="66" ry="14" stroke={`url(#goldShine-${foilId})`} strokeWidth="3" fill="none" />
      <ellipse cx="100" cy="88" rx="58" ry="10" stroke={`url(#goldShine-${foilId})`} strokeWidth="1" strokeDasharray="3 3" />

      {/* Diya Bowl Body */}
      <path
        d="M34 88 C40 125, 70 144, 100 144 C130 144, 160 125, 166 88 Z"
        stroke={`url(#goldShine-${foilId})`}
        strokeWidth="3.5"
        fill="rgba(245, 158, 11, 0.08)"
      />

      {/* Traditional Carved Base / Pedestal */}
      <path
        d="M82 144 C82 152, 70 156, 68 158 L132 158 C130 156, 118 152, 118 144 Z"
        fill={`url(#goldShine-${foilId})`}
      />

      {/* Filigree carvings on diya bowl */}
      <path
        d="M60 102 C80 120, 120 120, 140 102"
        stroke={`url(#goldShine-${foilId})`}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="100" cy="116" r="3" fill={`url(#goldShine-${foilId})`} />
      <circle cx="85" cy="112" r="2.5" fill={`url(#goldShine-${foilId})`} />
      <circle cx="115" cy="112" r="2.5" fill={`url(#goldShine-${foilId})`} />
    </svg>
  );
};

// Ornate Mandala for Ayodhya Mandala Design
export const MandalaMotif = ({ foilId, className = "w-48 h-48" }) => {
  return (
    <svg viewBox="0 0 300 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`mandalaGold-${foilId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF3B0" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
      </defs>

      {/* Concentric sacred circles */}
      <circle cx="150" cy="150" r="140" stroke={`url(#mandalaGold-${foilId})`} strokeWidth="1" opacity="0.6" />
      <circle cx="150" cy="150" r="132" stroke={`url(#mandalaGold-${foilId})`} strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="150" cy="150" r="110" stroke={`url(#mandalaGold-${foilId})`} strokeWidth="1" />
      <circle cx="150" cy="150" r="75" stroke={`url(#mandalaGold-${foilId})`} strokeWidth="1.5" />
      <circle cx="150" cy="150" r="40" stroke={`url(#mandalaGold-${foilId})`} strokeWidth="1" strokeDasharray="2 3" />

      {/* 12 Petal Lotus Array */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <g key={deg} transform={`rotate(${deg} 150 150)`}>
          <path
            d="M150 40 C140 70, 140 100, 150 110 C160 100, 160 70, 150 40 Z"
            stroke={`url(#mandalaGold-${foilId})`}
            strokeWidth="1.5"
            fill="rgba(245, 158, 11, 0.04)"
          />
          <circle cx="150" cy="30" r="2.5" fill={`url(#mandalaGold-${foilId})`} />
        </g>
      ))}

      {/* 24 Rays */}
      {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345].map((deg) => (
        <line
          key={`ray-${deg}`}
          x1="150"
          y1="114"
          x2="150"
          y2="130"
          transform={`rotate(${deg} 150 150)`}
          stroke={`url(#mandalaGold-${foilId})`}
          strokeWidth="1"
          opacity="0.8"
        />
      ))}
    </svg>
  );
};

// Royal Pichwai Lotus Motif
export const PichwaiLotusMotif = ({ foilId, className = "w-44 h-44" }) => {
  return (
    <svg viewBox="0 0 240 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`pichwaiFoil-${foilId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF1F2" />
          <stop offset="40%" stopColor="#FB7185" />
          <stop offset="100%" stopColor="#BE123C" />
        </linearGradient>
      </defs>

      {/* Water ripple base */}
      <path d="M40 170 Q120 185 200 170" stroke={`url(#pichwaiFoil-${foilId})`} strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M60 182 Q120 194 180 182" stroke={`url(#pichwaiFoil-${foilId})`} strokeWidth="1" />

      {/* Central Majestic Lotus */}
      <g transform="translate(20, 20)">
        {/* Outer large petals */}
        <path d="M100 130 C40 120, 20 70, 45 40 C70 65, 85 95, 100 130 Z" stroke={`url(#pichwaiFoil-${foilId})`} strokeWidth="1.8" fill="rgba(251, 113, 133, 0.08)" />
        <path d="M100 130 C160 120, 180 70, 155 40 C130 65, 115 95, 100 130 Z" stroke={`url(#pichwaiFoil-${foilId})`} strokeWidth="1.8" fill="rgba(251, 113, 133, 0.08)" />
        
        {/* Mid petals */}
        <path d="M100 130 C60 100, 50 50, 75 25 C90 50, 95 85, 100 130 Z" stroke={`url(#pichwaiFoil-${foilId})`} strokeWidth="1.8" fill="rgba(251, 113, 133, 0.12)" />
        <path d="M100 130 C140 100, 150 50, 125 25 C110 50, 105 85, 100 130 Z" stroke={`url(#pichwaiFoil-${foilId})`} strokeWidth="1.8" fill="rgba(251, 113, 133, 0.12)" />
        
        {/* Central Crown Petal */}
        <path d="M100 130 C88 85, 88 40, 100 10 C112 40, 112 85, 100 130 Z" stroke={`url(#pichwaiFoil-${foilId})`} strokeWidth="2.2" fill="rgba(255, 241, 242, 0.2)" />
        
        {/* Sacred Pollen droplets */}
        <circle cx="100" cy="5" r="3" fill={`url(#pichwaiFoil-${foilId})`} />
        <circle cx="75" cy="20" r="2.5" fill={`url(#pichwaiFoil-${foilId})`} />
        <circle cx="125" cy="20" r="2.5" fill={`url(#pichwaiFoil-${foilId})`} />
      </g>
    </svg>
  );
};

// Traditional Royal Archway (Jharokha) with Hanging Bells
export const ArchMotif = ({ foilId, className = "w-full h-full" }) => {
  return (
    <svg viewBox="0 0 300 420" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`archGold-${foilId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF3B0" />
          <stop offset="50%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
      </defs>

      {/* Outer framing double border */}
      <rect x="18" y="18" width="264" height="384" rx="4" stroke={`url(#archGold-${foilId})`} strokeWidth="1.5" opacity="0.7" />
      <rect x="24" y="24" width="252" height="372" rx="2" stroke={`url(#archGold-${foilId})`} strokeWidth="0.8" strokeDasharray="3 3" />

      {/* Mughal / Rajput Jharokha Arch */}
      <path
        d="M40 370 L40 180 C40 120, 90 70, 150 70 C210 70, 260 120, 260 180 L260 370"
        stroke={`url(#archGold-${foilId})`}
        strokeWidth="2"
      />
      <path
        d="M50 370 L50 185 C50 135, 95 90, 150 90 C205 90, 250 135, 250 185 L250 370"
        stroke={`url(#archGold-${foilId})`}
        strokeWidth="1"
        strokeDasharray="2 3"
      />

      {/* Arch Peak Finial */}
      <path d="M150 48 L154 62 L150 70 L146 62 Z" fill={`url(#archGold-${foilId})`} />
      <circle cx="150" cy="42" r="3" fill={`url(#archGold-${foilId})`} />

      {/* Hanging Festive Brass Bells */}
      <line x1="80" y1="180" x2="80" y2="230" stroke={`url(#archGold-${foilId})`} strokeWidth="1" strokeDasharray="2 2" />
      <path d="M74 230 C74 225, 86 225, 86 230 L88 238 L72 238 Z" fill={`url(#archGold-${foilId})`} />
      <circle cx="80" cy="241" r="1.5" fill={`url(#archGold-${foilId})`} />

      <line x1="220" y1="180" x2="220" y2="230" stroke={`url(#archGold-${foilId})`} strokeWidth="1" strokeDasharray="2 2" />
      <path d="M214 230 C214 225, 226 225, 226 230 L228 238 L212 238 Z" fill={`url(#archGold-${foilId})`} />
      <circle cx="220" cy="241" r="1.5" fill={`url(#archGold-${foilId})`} />
    </svg>
  );
};

// 8-Fold Rangoli Geometry Motif
export const RangoliMotif = ({ foilId, className = "w-44 h-44" }) => {
  return (
    <svg viewBox="0 0 260 260" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`rangoliGold-${foilId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF7D6" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>

      {/* Outer Star of Lakshmi (Ashtalakshmi 8-pointed star) */}
      <g transform="translate(130, 130)">
        <rect x="-85" y="-85" width="170" height="170" stroke={`url(#rangoliGold-${foilId})`} strokeWidth="1.5" fill="none" />
        <rect x="-85" y="-85" width="170" height="170" stroke={`url(#rangoliGold-${foilId})`} strokeWidth="1.5" fill="none" transform="rotate(45)" />

        {/* Diagonal Petal curves */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <g key={deg} transform={`rotate(${deg})`}>
            <path d="M0 -30 C-15 -60, -10 -90, 0 -115 C10 -90, 15 -60, 0 -30" stroke={`url(#rangoliGold-${foilId})`} strokeWidth="1.2" />
            <circle cx="0" cy="-115" r="2.5" fill={`url(#rangoliGold-${foilId})`} />
          </g>
        ))}

        <circle cx="0" cy="0" r="45" stroke={`url(#rangoliGold-${foilId})`} strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="0" cy="0" r="18" fill="rgba(245, 158, 11, 0.15)" stroke={`url(#rangoliGold-${foilId})`} strokeWidth="1.5" />
      </g>
    </svg>
  );
};

// Royal Stamp & Wax Seal for Card Reverse / Interior
export const WaxSealMotif = ({ className = "w-16 h-16" }) => {
  return (
    <div className={`relative flex items-center justify-center rounded-full shadow-2xl bg-gradient-to-br from-[#800F1E] via-[#5C0A15] to-[#36040C] border-2 border-[#D97706]/40 ${className}`}>
      {/* Molten wax organic ring */}
      <div className="absolute inset-1 rounded-full border border-amber-300/30 flex items-center justify-center">
        <div className="text-center font-display text-amber-200 tracking-widest text-[9px] font-bold">
          SWARNA
          <br />
          <span className="text-[7px] text-amber-300/80 tracking-normal font-sans">MINTED</span>
        </div>
      </div>
    </div>
  );
};
