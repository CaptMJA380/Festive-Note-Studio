import React from 'react';

// Large Festive 16-Petal Rangoli Mandala (Background Watermark / Centerpiece)
export const GrandRangoliMandala = ({ className = "w-96 h-96", glow = true }) => {
  return (
    <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rangoliGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="35%" stopColor="#F59E0B" />
          <stop offset="70%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
      </defs>

      {/* Outer Concentric Sacred Rings */}
      <circle cx="200" cy="200" r="190" stroke="url(#rangoliGoldGrad)" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
      <circle cx="200" cy="200" r="182" stroke="url(#rangoliGoldGrad)" strokeWidth="1.5" opacity="0.6" />
      <circle cx="200" cy="200" r="165" stroke="url(#rangoliGoldGrad)" strokeWidth="0.75" opacity="0.5" />
      <circle cx="200" cy="200" r="130" stroke="url(#rangoliGoldGrad)" strokeWidth="1.2" opacity="0.7" />
      <circle cx="200" cy="200" r="95" stroke="url(#rangoliGoldGrad)" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="200" cy="200" r="60" stroke="url(#rangoliGoldGrad)" strokeWidth="1.5" opacity="0.8" />
      <circle cx="200" cy="200" r="28" stroke="url(#rangoliGoldGrad)" strokeWidth="1.2" opacity="0.9" />

      {/* 16 Outer Sacred Lotus Petals */}
      {[...Array(16)].map((_, i) => {
        const deg = i * 22.5;
        return (
          <g key={`outer-${i}`} transform={`rotate(${deg} 200 200)`}>
            <path
              d="M200 18 C185 65, 185 110, 200 130 C215 110, 215 65, 200 18 Z"
              stroke="url(#rangoliGoldGrad)"
              strokeWidth="1.2"
              fill="rgba(245, 158, 11, 0.02)"
            />
            {/* Dewdrop finial */}
            <circle cx="200" cy="12" r="3" fill="url(#rangoliGoldGrad)" opacity="0.9" />
            {/* Inner petal vein */}
            <line x1="200" y1="35" x2="200" y2="105" stroke="url(#rangoliGoldGrad)" strokeWidth="0.8" opacity="0.5" />
          </g>
        );
      })}

      {/* 8 Mid Petal Floral Blossoms */}
      {[...Array(8)].map((_, i) => {
        const deg = i * 45 + 22.5;
        return (
          <g key={`mid-${i}`} transform={`rotate(${deg} 200 200)`}>
            <path
              d="M200 70 C175 105, 175 140, 200 155 C225 140, 225 105, 200 70 Z"
              stroke="url(#rangoliGoldGrad)"
              strokeWidth="1.4"
              fill="rgba(251, 191, 36, 0.04)"
            />
            <circle cx="200" cy="62" r="2" fill="url(#rangoliGoldGrad)" />
          </g>
        );
      })}

      {/* Central Ashtalakshmi Star / 8 Diya Points */}
      <g transform="translate(200, 200)">
        <polygon
          points="0,-48 14,-14 48,0 14,14 0,48 -14,14 -48,0 -14,-14"
          stroke="url(#rangoliGoldGrad)"
          strokeWidth="1.5"
          fill="rgba(245, 158, 11, 0.08)"
        />
        <polygon
          points="0,-48 14,-14 48,0 14,14 0,48 -14,14 -48,0 -14,-14"
          stroke="url(#rangoliGoldGrad)"
          strokeWidth="1.5"
          fill="none"
          transform="rotate(45)"
        />
        <circle cx="0" cy="0" r="10" fill="url(#rangoliGoldGrad)" opacity="0.8" />
      </g>
    </svg>
  );
};

// Elegant Traditional Rangoli Corner Border (used to frame cards and sections)
export const RangoliCorner = ({ className = "w-16 h-16", flip = false }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
    >
      <defs>
        <linearGradient id="cornerGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
      </defs>

      {/* L-Shape Corner Lines with traditional loops */}
      <path d="M6 94 L6 20 C6 12, 12 6, 20 6 L94 6" stroke="url(#cornerGold)" strokeWidth="1.5" />
      <path d="M12 94 L12 24 C12 17, 17 12, 24 12 L94 12" stroke="url(#cornerGold)" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.7" />

      {/* Corner Floral Bloom */}
      <circle cx="28" cy="28" r="8" stroke="url(#cornerGold)" strokeWidth="1.2" />
      <circle cx="28" cy="28" r="3" fill="url(#cornerGold)" />
      
      {/* Decorative Petals pointing inwards */}
      <path d="M28 20 C24 14, 20 8, 28 4 C36 8, 32 14, 28 20 Z" stroke="url(#cornerGold)" strokeWidth="1" fill="rgba(245,158,11,0.15)" />
      <path d="M20 28 C14 24, 8 20, 4 28 C8 36, 14 32, 20 28 Z" stroke="url(#cornerGold)" strokeWidth="1" fill="rgba(245,158,11,0.15)" />
      <path d="M34 34 C44 44, 48 48, 56 46 C48 48, 44 44, 34 34 Z" stroke="url(#cornerGold)" strokeWidth="1" />
      
      {/* Small dots on corner tip */}
      <circle cx="94" cy="6" r="2.5" fill="url(#cornerGold)" />
      <circle cx="6" cy="94" r="2.5" fill="url(#cornerGold)" />
    </svg>
  );
};

// Kolam / Sacred Rice Rangoli Linear Divider
export const RangoliDivider = ({ className = "w-full max-w-md h-8" }) => {
  return (
    <div className={`relative flex items-center justify-center my-6 ${className}`}>
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-amber-500/80" />
      
      {/* Center Traditional Diya & Rangoli Floret */}
      <div className="mx-4 flex items-center gap-2">
        <span className="text-amber-400 text-xs">✦</span>
        <svg viewBox="0 0 40 40" className="w-6 h-6 text-amber-400" fill="none">
          <circle cx="20" cy="20" r="16" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2 2" />
          <polygon points="20,8 23,17 32,20 23,23 20,32 17,23 8,20 17,17" fill="#F59E0B" opacity="0.8" />
          <circle cx="20" cy="20" r="3" fill="#FFF2B2" />
        </svg>
        <span className="text-amber-400 text-xs">✦</span>
      </div>

      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-amber-500/40 to-amber-500/80" />
    </div>
  );
};
