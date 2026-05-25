import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ShieldCheck, Sparkles, Plane, Crown, Coins } from 'lucide-react';
import NeoPopButton from './NeoPopButton';

const CARD_FINISHES = {
  obsidian: {
    id: 'obsidian',
    name: 'Obsidian Black',
    gradient: 'from-zinc-900 via-stone-950 to-black',
    borderColor: 'border-yellow-500/30',
    glowColor: 'rgba(254, 234, 0, 0.15)',
    textColor: 'text-brand-yellow',
    accentColor: '#FEEA00',
    highlightGradient: 'linear-gradient(135deg, #FFFFFF 30%, #FEEA00 100%)',
    badgeText: 'CRED OBSIDIAN MEMBER',
    chipColor: 'bg-gradient-to-br from-yellow-400 to-amber-600',
  },
  mint: {
    id: 'mint',
    name: 'Emerald Mint',
    gradient: 'from-emerald-950 via-teal-950 to-zinc-950',
    borderColor: 'border-brand-mint/30',
    glowColor: 'rgba(0, 229, 163, 0.2)',
    textColor: 'text-brand-mint',
    accentColor: '#00E5A3',
    highlightGradient: 'linear-gradient(135deg, #FFFFFF 30%, #00E5A3 100%)',
    badgeText: 'CRED MINT PREFERRED',
    chipColor: 'bg-gradient-to-br from-teal-400 to-emerald-600',
  },
  rose: {
    id: 'rose',
    name: 'Neon Rose',
    gradient: 'from-rose-950 via-purple-950 to-zinc-950',
    borderColor: 'border-brand-pink/30',
    glowColor: 'rgba(255, 0, 122, 0.2)',
    textColor: 'text-brand-pink',
    accentColor: '#FF007A',
    highlightGradient: 'linear-gradient(135deg, #FFFFFF 30%, #FF007A 100%)',
    badgeText: 'CRED NEON ROSE ELITE',
    chipColor: 'bg-gradient-to-br from-rose-400 to-pink-600',
  }
};

const BENEFITS = [
  {
    id: 'cashback',
    icon: Coins,
    title: '3% Hard Cashback',
    desc: 'Instant, real money deposited into your bank account. No confusing point conversions.',
    stat: '₹45,000 avg. saved/yr'
  },
  {
    id: 'lounge',
    icon: Plane,
    title: 'Infinity Lounges',
    desc: 'Unlimited global airport lounge access for you and a guest, zero spend thresholds.',
    stat: '1,200+ Lounges'
  },
  {
    id: 'concierge',
    icon: Crown,
    title: 'Black-Tier Concierge',
    desc: '24/7 priority human assistance for elite travel, fine dining, and exclusive event bookings.',
    stat: '90s response time'
  }
];

const InteractiveCardSimulator = () => {
  const [selectedFinish, setSelectedFinish] = useState('obsidian');
  const [activeBenefit, setActiveBenefit] = useState('cashback');
  const [tiltStyle, setTiltStyle] = useState({ transform: 'rotateX(0deg) rotateY(0deg)' });
  const [sheenStyle, setSheenStyle] = useState({ opacity: 0 });
  const cardRef = useRef(null);

  const activeFinish = CARD_FINISHES[selectedFinish];

  // Capture mouse move to generate 3D tilt and sheen reflection
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Degrees of rotation (max 18 degrees)
    const rotateY = (mouseX / (width / 2)) * 18;
    const rotateX = -(mouseY / (height / 2)) * 18;

    // Calculate light source (sheen position)
    const sheenX = ((e.clientX - rect.left) / width) * 100;
    const sheenY = ((e.clientY - rect.top) / height) * 100;

    setTiltStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.05s ease-out'
    });

    setSheenStyle({
      opacity: 0.65,
      background: `radial-gradient(circle at ${sheenX}% ${sheenY}%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)`,
      mixBlendMode: 'overlay',
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.5s ease'
    });
    setSheenStyle({
      opacity: 0,
      transition: 'opacity 0.5s ease'
    });
  };

  return (
    <section className="relative w-full py-20 px-4 md:px-8 border-b border-white/5 flex flex-col items-center justify-center overflow-hidden">
      {/* Dynamic Background Glow matching current card finish */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[160px] opacity-20 pointer-events-none transition-all duration-700 ease-in-out"
        style={{
          background: activeFinish.glowColor,
          top: '10%',
        }}
      />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* LEFT COLUMN: Texts and Controls */}
        <div className="lg:col-span-6 flex flex-col space-y-8 order-2 lg:order-1 text-left">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-heading font-extrabold text-white/50">
              EXPERIENCE PRECEDENT-SETTING DESIGN
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white leading-none">
              interactive <br />
              <span className="text-stroke-white select-none">3D customizer</span>
            </h2>
            <p className="text-sm md:text-base text-white/60 font-sans max-w-xl">
              Construct your exclusive physical CRED card. Toggle metal alloy finishes, custom glowing shadow matrices, and premium VIP utility arrays.
            </p>
          </div>

          {/* Finish Selectors */}
          <div className="space-y-3">
            <span className="text-xs font-heading font-bold text-white/40 tracking-wider block uppercase">
              1. Select Alloy Finish
            </span>
            <div className="flex flex-wrap gap-3">
              {Object.values(CARD_FINISHES).map((finish) => {
                const isSelected = selectedFinish === finish.id;
                return (
                  <button
                    key={finish.id}
                    onClick={() => setSelectedFinish(finish.id)}
                    className={`
                      px-4 py-2 border font-heading font-bold text-xs uppercase tracking-widest transition-all duration-300
                      ${isSelected 
                        ? `bg-white text-black border-white shadow-neo-black` 
                        : 'bg-black text-white/60 border-white/10 hover:border-white/40'
                      }
                    `}
                    style={{
                      boxShadow: isSelected ? `3px 3px 0px 0px ${finish.accentColor}` : 'none',
                      transform: isSelected ? 'translate(-2px, -2px)' : 'none'
                    }}
                  >
                    {finish.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Benefit Toggles */}
          <div className="space-y-3">
            <span className="text-xs font-heading font-bold text-white/40 tracking-wider block uppercase">
              2. Explore Privilege Modules
            </span>
            <div className="flex flex-col space-y-3">
              {BENEFITS.map((benefit) => {
                const Icon = benefit.icon;
                const isSelected = activeBenefit === benefit.id;
                return (
                  <div
                    key={benefit.id}
                    onClick={() => setActiveBenefit(benefit.id)}
                    className={`
                      p-4 border transition-all duration-300 cursor-pointer flex items-start gap-4 select-none
                      ${isSelected 
                        ? `border-white bg-white/5` 
                        : 'border-white/5 bg-transparent hover:border-white/20'
                      }
                    `}
                    style={{
                      boxShadow: isSelected ? `4px 4px 0px 0px ${activeFinish.accentColor}` : 'none',
                      transform: isSelected ? 'translate(-3px, -3px)' : 'none'
                    }}
                  >
                    <div className={`p-2 border border-white/10 rounded-none bg-black transition-colors ${isSelected ? 'text-white' : 'text-white/40'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-heading font-extrabold text-sm uppercase tracking-wider text-white">
                          {benefit.title}
                        </h4>
                        <span className={`text-[10px] font-heading font-bold uppercase tracking-widest px-2 py-0.5 border ${isSelected ? activeFinish.textColor + ' border-white/20' : 'text-white/30 border-white/5'}`}>
                          {benefit.stat}
                        </span>
                      </div>
                      <p className="text-xs text-white/50 leading-relaxed font-sans">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D Credit Card */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2">
          {/* Card Wrapper for Perspective */}
          <div 
            className="w-full max-w-[420px] aspect-[1.586/1] cursor-pointer"
            style={{ perspective: 1200 }}
          >
            {/* The Actual Credit Card */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className={`
                relative w-full h-full border ${activeFinish.borderColor} rounded-[20px] 
                bg-gradient-to-br ${activeFinish.gradient} p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-2xl
              `}
              style={{
                ...tiltStyle,
                transformStyle: 'preserve-3d',
                boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px ${activeFinish.glowColor}`,
              }}
            >
              {/* Card Holographic Sheen Layer */}
              <div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-150 rounded-[20px]"
                style={sheenStyle}
              />

              {/* Glowing Aura Blob inside Card */}
              <div 
                className="absolute -right-20 -bottom-20 w-60 h-60 rounded-full blur-[60px] opacity-40 transition-all duration-700 pointer-events-none"
                style={{ background: activeFinish.glowColor }}
              />

              {/* CARD HEADER */}
              <div className="flex justify-between items-start z-10" style={{ transform: 'translateZ(30px)' }}>
                <div className="space-y-1">
                  <span className="text-[9px] md:text-[10px] font-heading font-extrabold tracking-[0.2em] text-white/70 block">
                    {activeFinish.badgeText}
                  </span>
                  <div className="flex items-center gap-1 mt-1">
                    <Sparkles className={`w-3.5 h-3.5 ${activeFinish.textColor}`} />
                    <span className="text-[10px] md:text-xs font-heading font-bold text-white tracking-widest uppercase">
                      CRED SELECT
                    </span>
                  </div>
                </div>
                {/* Micro-Contactless/NFC Indicator */}
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-black/40 backdrop-blur-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                </div>
              </div>

              {/* CARD MIDDLE: Chip & Privilege Feature */}
              <div className="flex justify-between items-end z-10" style={{ transform: 'translateZ(45px)' }}>
                {/* Plastic Metallic Chip */}
                <div className={`w-12 h-9 rounded-md ${activeFinish.chipColor} relative overflow-hidden border border-black/20 shadow-inner flex items-center justify-center`}>
                  <Cpu className="w-7 h-7 text-black/40" />
                  {/* Holographic Chip Lines */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                </div>

                {/* Animated active benefit state on card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeBenefit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col items-end text-right"
                  >
                    <span className="text-[8px] tracking-widest text-white/40 uppercase font-heading font-bold">
                      ACTIVE SYSTEM
                    </span>
                    <span className={`text-[11px] font-heading font-black tracking-widest uppercase mt-0.5 ${activeFinish.textColor}`}>
                      {activeBenefit} module
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* CARD FOOTER: Member Name and Brand */}
              <div className="flex justify-between items-end z-10" style={{ transform: 'translateZ(35px)' }}>
                <div className="space-y-1">
                  <div className="font-heading text-xs md:text-sm tracking-[0.18em] uppercase text-white font-extrabold">
                    MEMBER 0891 0023
                  </div>
                  <div className="font-sans text-[8px] tracking-wider text-white/40 uppercase">
                    SINCE 2026
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-lg md:text-xl font-heading font-black tracking-tighter text-white">
                    cred
                  </span>
                  <span className="text-[6px] tracking-widest text-white/30 font-heading">
                    BY MINT-FI
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Apply CTA */}
          <div className="mt-8 flex flex-col items-center space-y-2">
            <NeoPopButton 
              variant={selectedFinish === 'obsidian' ? 'yellow' : selectedFinish === 'mint' ? 'mint' : 'pink'}
              onClick={() => alert(`Applied for ${activeFinish.name}! Enjoy premium perks.`)}
              className="px-10 py-4"
              shadowColor={activeFinish.accentColor}
            >
              claim this alloy card
            </NeoPopButton>
            <span className="text-[10px] text-white/40 font-heading uppercase tracking-widest mt-2 block">
              ★ requires trust score &gt; 800
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InteractiveCardSimulator;
