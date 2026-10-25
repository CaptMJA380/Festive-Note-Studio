import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  RotateCw, 
  Layers, 
  BookOpen, 
  Check, 
  Volume2, 
  VolumeX, 
  Sliders,
  ChevronRight,
  Flame,
  Eye,
} from 'lucide-react';
import { CARD_DESIGNS, FOIL_FINISHES, PAPER_STOCKS } from '../data/cardDesigns';
import { DiyaIllustration, MandalaMotif, PichwaiLotusMotif, ArchMotif, RangoliMotif, WaxSealMotif } from './CardMotifs';
import { RangoliCorner, RangoliDivider } from './RangoliArt';
import { playPaperSound } from '../utils/audio';

export default function InteractiveCardStage({ 
  selectedDesign, 
  setSelectedDesign, 
  onOrderClick 
}) {
  // Card Type: 'flat' (A6 Flat Card) or 'bifold' (A6 One-Fold Card)
  const [cardType, setCardType] = useState('bifold');
  
  // Flat card flip state: false = front, true = back
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Bifold angle: 0 (closed) to 180 (fully open)
  const [foldAngle, setFoldAngle] = useState(90);

  // Customisation state
  const [selectedFoil, setSelectedFoil] = useState(FOIL_FINISHES[0]);
  const [selectedPaper, setSelectedPaper] = useState(PAPER_STOCKS[0]);
  const [senderName, setSenderName] = useState('The Sharma Family');
  const [customGreeting, setCustomGreeting] = useState(selectedDesign.defaultTitle);
  const [customMessage, setCustomMessage] = useState(
    'May the divine glow of diyas illuminate your home with boundless prosperity, health, and joy this festive season. Looking forward to celebrating together!'
  );
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Mouse tilt & lighting state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, normalizedX: 0.5, normalizedY: 0.5 });
  const [isHovered, setIsHovered] = useState(false);
  const stageRef = useRef(null);

  // Update greeting when design changes
  useEffect(() => {
    setCustomGreeting(selectedDesign.defaultTitle);
  }, [selectedDesign]);

  const handleMouseMove = (e) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const normalizedX = Math.max(0, Math.min(1, x / rect.width));
    const normalizedY = Math.max(0, Math.min(1, y / rect.height));
    
    // Tilt angle limits (-12 to +12 degrees)
    const tiltX = (normalizedY - 0.5) * -16;
    const tiltY = (normalizedX - 0.5) * 16;
    
    setMousePos({ x: tiltX, y: tiltY, normalizedX, normalizedY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0, normalizedX: 0.5, normalizedY: 0.5 });
  };

  const handleFlip = () => {
    if (soundEnabled) playPaperSound('flip');
    setIsFlipped(!isFlipped);
  };

  const handleFoldChange = (angle) => {
    if (soundEnabled) playPaperSound('fold');
    setFoldAngle(angle);
  };

  // Helper to render the motif
  const renderMotif = (type, className) => {
    switch (type) {
      case 'mandala':
        return (
          <div className="relative flex items-center justify-center">
            <MandalaMotif foilId={selectedFoil.id} className="w-56 h-56 opacity-85 absolute" />
            <DiyaIllustration foilId={selectedFoil.id} className="w-28 h-28 relative z-10" />
          </div>
        );
      case 'lotus':
        return (
          <div className="relative flex flex-col items-center justify-center">
            <PichwaiLotusMotif foilId={selectedFoil.id} className="w-48 h-44 relative z-10" />
            <DiyaIllustration foilId={selectedFoil.id} className="w-24 h-24 -mt-4 relative z-10" />
          </div>
        );
      case 'arch':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <ArchMotif foilId={selectedFoil.id} className="absolute inset-0 w-full h-full" />
            <DiyaIllustration foilId={selectedFoil.id} className="w-24 h-24 mt-16 relative z-10" />
          </div>
        );
      case 'rangoli':
        return (
          <div className="relative flex items-center justify-center">
            <RangoliMotif foilId={selectedFoil.id} className="w-52 h-52 relative z-0" />
            <div className="absolute z-10 scale-90">
              <DiyaIllustration foilId={selectedFoil.id} className="w-24 h-24" />
            </div>
          </div>
        );
      default:
        return <DiyaIllustration foilId={selectedFoil.id} className="w-28 h-28" />;
    }
  };

  // Dynamic foil reflection gradient
  const specularGleam = `radial-gradient(circle 260px at ${mousePos.normalizedX * 100}% ${mousePos.normalizedY * 100}%, ${selectedFoil.specular}, transparent 75%)`;

  return (
    <section id="studio" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3 font-indie-body">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Artisanal Interactive 3D Studio
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-indie-display font-bold text-white tracking-tight">
          Watch Your Card <span className="gold-foil-text">Come to Life</span>
        </h2>
        <RangoliDivider className="my-3 opacity-70" />
        <p className="text-neutral-300 text-base sm:text-lg font-indie-body leading-relaxed">
          Experience real hot-foil debossing, tactile cotton grain, and dynamic light reflection. 
          Toggle between our <strong>A6 Flat Portrait</strong> and <strong>One-Fold Greeting Card</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ==========================================================
            LEFT / CENTER: 3D INTERACTIVE CARD VIEWER
           ========================================================== */}
        <div className="lg:col-span-7 flex flex-col items-center">
          
          {/* Viewer Mode Toggles (Apple Segmented Control) */}
          <div className="w-full max-w-md flex items-center justify-between p-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-2xl">
            <button
              onClick={() => {
                if (soundEnabled) playPaperSound('fold');
                setCardType('bifold');
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                cardType === 'bifold'
                  ? 'bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/40 text-amber-200 shadow-lg'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              A6 One-Fold (Bi-fold)
            </button>
            <button
              onClick={() => {
                if (soundEnabled) playPaperSound('flip');
                setCardType('flat');
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                cardType === 'flat'
                  ? 'bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/40 text-amber-200 shadow-lg'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers className="w-4 h-4 text-amber-400" />
              A6 Flat Card (Front & Back)
            </button>
          </div>

          {/* 3D Stage Container */}
          <div
            ref={stageRef}
            onMouseMove={(e) => {
              setIsHovered(true);
              handleMouseMove(e);
            }}
            onMouseLeave={handleMouseLeave}
            className="relative w-full min-h-[540px] sm:min-h-[600px] flex items-center justify-center p-4 rounded-3xl bg-radial from-amber-950/20 via-[#0A0612]/80 to-[#050208] border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden select-none perspective-1500"
          >
            {/* Ambient Lighting Orbs */}
            <div 
              className="absolute w-96 h-96 rounded-full blur-[100px] pointer-events-none transition-all duration-700 opacity-40"
              style={{
                backgroundColor: selectedFoil.color,
                left: `${mousePos.normalizedX * 80}%`,
                top: `${mousePos.normalizedY * 80}%`,
                transform: 'translate(-50%, -50%)',
              }}
            />

            {/* Hint Badge on top */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 text-[11px] text-neutral-300 backdrop-blur-md">
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              <span>Hover & move mouse to catch the foil shimmer</span>
            </div>

            {/* Audio Toggle in top-right */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? 'Mute tactile sound' : 'Enable tactile sound'}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 border border-white/10 text-neutral-400 hover:text-amber-300 transition-colors backdrop-blur-md"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* ========================================================
                CARD VIEW 1: A6 FLAT CARD (Dual sided flip)
               ======================================================== */}
            {cardType === 'flat' && (
              <div 
                className="relative preserve-3d transition-transform duration-700 ease-out cursor-pointer"
                style={{
                  width: '310px',
                  height: '438px', // A6 Portrait proportion (105mm x 148mm ~ 1 : 1.41)
                  transform: `rotateX(${mousePos.x}deg) rotateY(${mousePos.y + (isFlipped ? 180 : 0)}deg)`,
                }}
                onClick={handleFlip}
              >
                {/* ----------------- FRONT SIDE ----------------- */}
                <div 
                  className={`absolute inset-0 rounded-2xl p-6 flex flex-col justify-between shadow-[0_25px_50px_rgba(0,0,0,0.8)] border border-amber-500/25 backface-hidden overflow-hidden ${selectedDesign.bgClass} texture-cotton-dark`}
                >
                  {/* Dynamic Metallic Specular Glare */}
                  <div 
                    className="absolute inset-0 pointer-events-none z-30 mix-blend-overlay transition-opacity duration-300"
                    style={{ background: specularGleam, opacity: isHovered ? 0.9 : 0.4 }}
                  />

                  {/* Top Header & Auspicious Symbol */}
                  <div className="relative z-10 text-center pt-2">
                    <div className="font-indie-body text-xs tracking-[0.25em] text-amber-400/80 uppercase">
                      DIWALI • DEEPAVALI 2026
                    </div>
                    <div className="w-12 h-0.5 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent mt-1.5 opacity-60" />
                  </div>

                  {/* Central Motif Area */}
                  <div className="relative z-10 flex-1 flex flex-col items-center justify-center my-2">
                    {renderMotif(selectedDesign.motifType)}
                  </div>

                  {/* Bottom Personalisation Info */}
                  <div className="relative z-10 text-center pb-2">
                    <h3 className={`font-indie-display text-2xl font-bold tracking-wide ${selectedFoil.class}`}>
                      {customGreeting || selectedDesign.defaultTitle}
                    </h3>
                    <p className="font-indie-body text-sm italic text-neutral-300 mt-1 max-w-[240px] mx-auto line-clamp-2">
                      {selectedDesign.defaultSubtitle}
                    </p>
                    <div className="mt-4 pt-3 border-t border-amber-500/20">
                      <span className="font-indie-body text-[11px] tracking-widest uppercase text-amber-300/70 block">
                        WITH BLESSINGS FROM
                      </span>
                      <span className="font-indie-script text-2xl text-amber-200 block mt-0.5">
                        {senderName || 'Your Family'}
                      </span>
                    </div>
                  </div>

                  {/* Corner Rangoli Accents */}
                  <div className="absolute top-1 left-1 opacity-40 pointer-events-none">
                    <RangoliCorner className="w-10 h-10" />
                  </div>
                  <div className="absolute top-1 right-1 opacity-40 pointer-events-none">
                    <RangoliCorner className="w-10 h-10" flip={true} />
                  </div>
                </div>

                {/* ----------------- BACK SIDE (FLIPPED 180) ----------------- */}
                <div 
                  className={`absolute inset-0 rounded-2xl p-6 flex flex-col justify-between shadow-[0_25px_50px_rgba(0,0,0,0.8)] border border-amber-500/25 backface-hidden overflow-hidden ${selectedDesign.bgClass} texture-cotton-dark`}
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  {/* Dynamic Glare on Back */}
                  <div 
                    className="absolute inset-0 pointer-events-none z-30 mix-blend-overlay"
                    style={{ background: specularGleam, opacity: isHovered ? 0.7 : 0.3 }}
                  />

                  {/* Top Postmark & Vintage Seal */}
                  <div className="relative z-10 flex items-start justify-between border-b border-amber-500/20 pb-3">
                    <div className="text-left">
                      <span className="text-[9px] uppercase tracking-widest font-indie-body text-amber-400/80 block">
                        SACRED BLESSINGS
                      </span>
                      <span className="text-xs font-mono text-neutral-400">
                        A6 • 380 GSM FOIL
                      </span>
                    </div>

                    {/* Vintage Postage Stamp Replica */}
                    <div className="w-12 h-14 border border-dashed border-amber-400/50 rounded flex flex-col items-center justify-center p-1 bg-amber-500/5">
                      <Flame className="w-4 h-4 text-amber-400" />
                      <span className="text-[7px] font-mono text-amber-300 mt-0.5">₹ 2026</span>
                      <span className="text-[6px] tracking-tighter text-neutral-400">INDIA POST</span>
                    </div>
                  </div>

                  {/* Central Heartfelt Note */}
                  <div className="relative z-10 my-auto text-left px-2">
                    <p className="font-indie-body text-xs text-amber-200/95 whitespace-pre-line text-center italic leading-relaxed">
                      "{selectedDesign.shloka}"
                    </p>
                    <p className="text-[10px] text-neutral-400 text-center font-sans mt-1.5 leading-tight">
                      {selectedDesign.shlokaMeaning}
                    </p>
                    
                    <div className="mt-4 p-3 rounded-lg bg-black/30 border border-white/5">
                      <p className="font-indie-body text-xs text-neutral-200 leading-relaxed italic">
                        "{customMessage}"
                      </p>
                      <div className="mt-2 text-right">
                        <span className="font-indie-script text-xl text-amber-300 block">
                          — {senderName}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Wax Seal & Stamp */}
                  <div className="relative z-10 flex items-center justify-between pt-3 border-t border-amber-500/20">
                    <div className="text-[10px] text-neutral-400 font-indie-body">
                      Hand-Pressed in India
                    </div>
                    <WaxSealMotif className="w-11 h-11" />
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================
                CARD VIEW 2: A6 ONE-FOLD (BI-FOLD) GREETING CARD
               ======================================================== */}
            {cardType === 'bifold' && (
              <div 
                className="relative preserve-3d transition-transform duration-500 ease-out flex items-center justify-center"
                style={{
                  transform: `rotateX(${mousePos.x}deg) rotateY(${mousePos.y}deg)`,
                }}
              >
                {/* Book / Fold Stage Container */}
                <div 
                  className="relative preserve-3d flex items-center"
                  style={{
                    width: '310px',
                    height: '438px',
                  }}
                >
                  {/* ----------------------------------------------------
                      RIGHT WING: BASE / INTERIOR RIGHT (Message & Photo)
                      Stays grounded as the back / right half of the card
                     ---------------------------------------------------- */}
                  <div 
                    className={`absolute inset-0 rounded-r-2xl p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.85)] border-y border-r border-amber-500/25 overflow-hidden ${selectedDesign.bgClass} texture-linen`}
                    style={{
                      transformOrigin: 'left center',
                    }}
                  >
                    {/* Subtle Paper Specular */}
                    <div 
                      className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-40"
                      style={{ background: specularGleam }}
                    />

                    {/* Top inside right */}
                    <div className="relative z-10 text-right">
                      <span className="text-[10px] font-indie-body tracking-[0.2em] text-amber-400/80 uppercase">
                        GREETINGS OF DIWALI
                      </span>
                    </div>

                    {/* Main Personalised Letter Area */}
                    <div className="relative z-10 my-auto text-left">
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-amber-500/20 backdrop-blur-sm shadow-inner">
                        <div className="text-amber-400 text-xs font-indie-body italic mb-2">
                          Dear Loved Ones,
                        </div>
                        <p className="font-indie-body text-sm sm:text-base text-neutral-100 leading-relaxed">
                          {customMessage}
                        </p>
                        
                        <div className="mt-5 pt-3 border-t border-amber-500/20 flex items-center justify-between">
                          <span className="text-[11px] font-indie-body uppercase tracking-widest text-amber-400/70">
                            Warm Regards & Affection,
                          </span>
                          <span className="font-indie-script text-2xl sm:text-3xl text-amber-200">
                            {senderName || 'Your Family'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom inside signature */}
                    <div className="relative z-10 flex items-center justify-between text-[10px] text-neutral-400 font-indie-body pt-2 border-t border-amber-500/10">
                      <span>Diwali 2026 Edition</span>
                      <span className="text-amber-300">Shubh Labh ✦</span>
                    </div>
                  </div>

                  {/* ----------------------------------------------------
                      LEFT WING: INTERIOR LEFT (Sacred Shloka & Diya Watermark)
                      Only visible when card is opened!
                     ---------------------------------------------------- */}
                  <div 
                    className={`absolute inset-0 rounded-l-2xl p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.85)] border-y border-l border-amber-500/25 overflow-hidden ${selectedDesign.bgClass} texture-linen`}
                    style={{
                      transformOrigin: 'right center',
                      transform: 'translateX(-100%)',
                    }}
                  >
                    <div className="relative z-10 text-left">
                      <span className="text-[10px] font-indie-body tracking-[0.2em] text-amber-400/80 uppercase">
                        ANCIENT VEDIC INVOCATION
                      </span>
                    </div>

                    <div className="relative z-10 my-auto text-center px-2">
                      <div className="w-16 h-16 mx-auto mb-3 opacity-80">
                        <DiyaIllustration foilId={selectedFoil.id} className="w-full h-full" />
                      </div>
                      <p className="font-indie-body text-sm text-amber-200 leading-relaxed whitespace-pre-line font-medium">
                        {selectedDesign.shloka}
                      </p>
                      <div className="w-12 h-0.5 mx-auto bg-amber-400/40 my-3" />
                      <p className="text-[11px] text-neutral-300 font-indie-body leading-relaxed">
                        {selectedDesign.shlokaMeaning}
                      </p>
                    </div>

                    <div className="relative z-10 flex items-center justify-center text-[10px] text-neutral-400 font-indie-body">
                      <span>✦ May all your prayers be answered ✦</span>
                    </div>
                  </div>

                  {/* ----------------------------------------------------
                      FRONT COVER FLAP:
                      Folds open around the left spine!
                     ---------------------------------------------------- */}
                  <div 
                    className={`absolute inset-0 rounded-2xl p-6 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-amber-500/30 overflow-hidden ${selectedDesign.bgClass} texture-cotton-dark preserve-3d`}
                    style={{
                      transformOrigin: 'left center',
                      transform: `rotateY(-${foldAngle}deg)`,
                      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    {/* Dynamic Metallic Specular Glare */}
                    <div 
                      className="absolute inset-0 pointer-events-none z-30 mix-blend-overlay"
                      style={{ background: specularGleam, opacity: isHovered ? 0.95 : 0.4 }}
                    />

                    {/* Spine Shadow Crease Effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/60 to-transparent pointer-events-none z-20" />

                    {/* Top Cover Header */}
                    <div className="relative z-10 text-center pt-2">
                      <div className="font-indie-body text-xs tracking-[0.25em] text-amber-400/80 uppercase">
                        SHREE • DIWALI 2026
                      </div>
                      <div className="w-12 h-0.5 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent mt-1.5 opacity-60" />
                    </div>

                    {/* Central Motif */}
                    <div className="relative z-10 flex-1 flex flex-col items-center justify-center my-2">
                      {renderMotif(selectedDesign.motifType)}
                    </div>

                    {/* Bottom Title & Family */}
                    <div className="relative z-10 text-center pb-2">
                      <h3 className={`font-indie-display text-2xl font-bold tracking-wide ${selectedFoil.class}`}>
                        {customGreeting || selectedDesign.defaultTitle}
                      </h3>
                      <p className="font-indie-body text-sm italic text-neutral-300 mt-1 max-w-[240px] mx-auto line-clamp-2">
                        {selectedDesign.defaultSubtitle}
                      </p>
                      
                      <div className="mt-4 pt-3 border-t border-amber-500/20">
                        <span className="font-indie-body text-[11px] tracking-widest uppercase text-amber-300/70 block">
                          FROM
                        </span>
                        <span className="font-indie-script text-2xl sm:text-3xl text-amber-200 block mt-0.5">
                          {senderName || 'Your Family'}
                        </span>
                      </div>
                    </div>

                    {/* Corner Rangoli Accents */}
                    <div className="absolute top-1 left-1 opacity-40 pointer-events-none">
                      <RangoliCorner className="w-10 h-10" />
                    </div>
                    <div className="absolute top-1 right-1 opacity-40 pointer-events-none">
                      <RangoliCorner className="w-10 h-10" flip={true} />
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* Bottom Controls Overlay on Stage */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
              {cardType === 'flat' ? (
                <div className="flex items-center gap-3 w-full justify-between">
                  <div className="text-xs text-neutral-300 font-medium">
                    Showing: <span className="text-amber-300 font-semibold">{isFlipped ? 'Back (Postmark & Message)' : 'Front (Regal Foil Cover)'}</span>
                  </div>
                  <button
                    onClick={handleFlip}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 text-black text-xs font-semibold hover:bg-amber-400 transition-colors shadow-lg"
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                    Flip Card (180°)
                  </button>
                </div>
              ) : (
                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <Sliders className="w-3.5 h-3.5 text-amber-400" />
                    <span>Fold Angle: <strong className="text-amber-300">{foldAngle}°</strong></span>
                  </div>

                  {/* Preset fold angle buttons */}
                  <div className="flex items-center gap-1.5">
                    {[
                      { label: 'Closed (0°)', angle: 0 },
                      { label: 'Peek (45°)', angle: 45 },
                      { label: 'Mantle (90°)', angle: 90 },
                      { label: 'Open (180°)', angle: 180 },
                    ].map((preset) => (
                      <button
                        key={preset.angle}
                        onClick={() => handleFoldChange(preset.angle)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                          foldAngle === preset.angle
                            ? 'bg-amber-500 text-black font-semibold'
                            : 'bg-white/10 text-neutral-300 hover:bg-white/20'
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>

                  {/* Fold slider */}
                  <input
                    type="range"
                    min="0"
                    max="180"
                    value={foldAngle}
                    onChange={(e) => handleFoldChange(Number(e.target.value))}
                    className="w-full sm:w-28 accent-amber-500 cursor-pointer h-1.5 bg-white/20 rounded-lg"
                  />
                </div>
              )}
            </div>

          </div>

          {/* Quick specs badge below stage */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Standard A6 Portrait: 105 × 148 mm
            </span>
            <span>•</span>
            <span>Foil: {selectedFoil.name}</span>
            <span>•</span>
            <span>Stock: {selectedPaper.name}</span>
          </div>
        </div>

        {/* ==========================================================
            RIGHT COLUMN: PERSONALISATION CONTROLS (Live Customizer)
           ========================================================== */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          <div className="p-6 sm:p-7 rounded-3xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-indie-display font-bold text-white">
                  Customise & Proof
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5 font-indie-body">
                  Live real-time preview on your card
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-indie-body">
                Instant Proof
              </span>
            </div>

            {/* 1. Select Design Motif */}
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block mb-2.5">
                1. Select Diwali Card Design ({CARD_DESIGNS.length} Curated)
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {CARD_DESIGNS.map((design) => (
                  <button
                    key={design.id}
                    onClick={() => {
                      if (soundEnabled) playPaperSound('flip');
                      setSelectedDesign(design);
                    }}
                    className={`p-3 rounded-2xl text-left border transition-all duration-200 ${
                      selectedDesign.id === design.id
                        ? 'bg-amber-500/15 border-amber-500/60 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                        : 'bg-black/30 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs font-semibold text-white line-clamp-1">
                      {design.name}
                    </div>
                    <div className="text-[10px] text-neutral-400 line-clamp-1 mt-0.5">
                      {design.tagline}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Choose Hot Foil Stamping Color */}
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block mb-2.5">
                2. Foil Stamping Finish (Mirror Reflected)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {FOIL_FINISHES.map((foil) => (
                  <button
                    key={foil.id}
                    onClick={() => {
                      if (soundEnabled) playPaperSound('fold');
                      setSelectedFoil(foil);
                    }}
                    className={`flex flex-col items-center p-2.5 rounded-xl border transition-all ${
                      selectedFoil.id === foil.id
                        ? 'bg-white/15 border-amber-400 shadow-md scale-102'
                        : 'bg-black/20 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div
                      className="w-6 h-6 rounded-full mb-1.5 border border-white/20 shadow-inner"
                      style={{ backgroundColor: foil.color }}
                    />
                    <span className="text-[11px] font-medium text-neutral-200 text-center leading-tight">
                      {foil.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Paper Stock Option */}
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block mb-2.5">
                3. Premium Paper Stock
              </label>
              <div className="space-y-2">
                {PAPER_STOCKS.map((stock) => (
                  <button
                    key={stock.id}
                    onClick={() => {
                      if (soundEnabled) playPaperSound('fold');
                      setSelectedPaper(stock);
                    }}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-left transition-all ${
                      selectedPaper.id === stock.id
                        ? 'bg-amber-500/15 border-amber-500/50'
                        : 'bg-black/20 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-semibold text-white flex items-center gap-2">
                        {stock.name}
                        {stock.badge && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            {stock.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-neutral-400">
                        {stock.sub}
                      </div>
                    </div>
                    {selectedPaper.id === stock.id && (
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Sender / Family Name Input */}
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block mb-1.5">
                4. Your Family / Sender Name
              </label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="e.g. The Mehta Family, Aarav & Diya"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            {/* 5. Custom Heartfelt Message */}
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block mb-1.5">
                5. Heartfelt Diwali Blessing / Personal Words
              </label>
              <textarea
                rows={3}
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Write your custom festive message..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none leading-relaxed"
              />
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
              <button
                onClick={() => onOrderClick({
                  design: selectedDesign,
                  foil: selectedFoil,
                  paper: selectedPaper,
                  cardType,
                  senderName,
                  customGreeting,
                  customMessage,
                })}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-semibold text-sm hover:opacity-95 transition-all shadow-[0_10px_30px_rgba(245,158,11,0.3)] hover:scale-[1.01]"
              >
                <Sparkles className="w-4 h-4 text-black" />
                <span>Order Custom Prints in Keepsake Box</span>
                <ChevronRight className="w-4 h-4 text-black" />
              </button>

              <div className="flex items-center justify-between text-[11px] text-neutral-400 px-1">
                <span>Free WhatsApp Digital Proof</span>
                <span>•</span>
                <span>Includes Wax-Sealed Envelopes</span>
                <span>•</span>
                <span>Pan-India & Global Express</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
