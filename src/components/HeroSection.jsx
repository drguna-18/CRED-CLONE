import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Trophy, ArrowRight } from 'lucide-react';
import NeoPopButton from './NeoPopButton';

const HeroSection = () => {
  // Anim container variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      }
    }
  };

  // Line mask slide variants
  const lineSlideUp = {
    hidden: { y: '120%', rotate: 2 },
    visible: {
      y: 0,
      rotate: 0,
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-28 pb-16 px-4 md:px-8 overflow-hidden grid-overlay border-b border-white/5">
      
      {/* Background Glowing Ambient Blobs */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-brand-pink/15 rounded-full blur-[130px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-brand-mint/15 rounded-full blur-[130px] animate-pulse-slow pointer-events-none" />

      {/* Main Grid Content */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Typography Slide Reveals */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col space-y-8 text-left"
        >
          {/* Micro-badge */}
          <motion.div 
            variants={fadeUp}
            className="inline-flex items-center gap-2 border border-white/10 px-3.5 py-1.5 backdrop-blur bg-white/5 w-fit"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-mint animate-pulse" />
            <span className="text-[10px] md:text-xs font-heading font-black tracking-[0.2em] text-white/80 uppercase">
              CRED PRESTIGE CLUB 2026
            </span>
          </motion.div>

          {/* Heading with elegant mask overflow reveal */}
          <div className="space-y-1">
            <div className="overflow-hidden py-1">
              <motion.h1 
                variants={lineSlideUp} 
                className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter text-white leading-[0.9]"
              >
                members only.
              </motion.h1>
            </div>
            <div className="overflow-hidden py-1">
              <motion.h1 
                variants={lineSlideUp} 
                className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter text-stroke-white select-none leading-[0.9]"
              >
                reward yourself.
              </motion.h1>
            </div>
          </div>

          {/* Premium Sub-text */}
          <motion.p 
            variants={fadeUp}
            className="text-white/60 text-sm md:text-base lg:text-lg max-w-xl font-sans font-light leading-relaxed"
          >
            Join over 15 million+ high-trust individuals who pay credit bills, compound absolute cashbacks, and unlock unprecedented luxury reward ecosystems every single day.
          </motion.p>

          {/* Quick Metrics Tag */}
          <motion.div 
            variants={fadeUp}
            className="grid grid-cols-3 gap-4 border-y border-white/5 py-4 max-w-lg"
          >
            <div>
              <span className="text-xl md:text-2xl font-heading font-black text-brand-mint">15M+</span>
              <p className="text-[10px] text-white/40 uppercase font-heading font-bold mt-1">TRUSTED MEMBERS</p>
            </div>
            <div>
              <span className="text-xl md:text-2xl font-heading font-black text-brand-pink">₹25B+</span>
              <p className="text-[10px] text-white/40 uppercase font-heading font-bold mt-1">CASHBACK CLAIMED</p>
            </div>
            <div>
              <span className="text-xl md:text-2xl font-heading font-black text-brand-blue">99.8%</span>
              <p className="text-[10px] text-white/40 uppercase font-heading font-bold mt-1">ON-TIME PAYOUTS</p>
            </div>
          </motion.div>

          {/* Twin NeoPOP Call to Actions */}
          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <NeoPopButton 
              variant="mint" 
              onClick={() => {
                const el = document.getElementById('simulator');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 sm:w-auto"
            >
              build your card
            </NeoPopButton>
            
            <NeoPopButton 
              variant="dark" 
              onClick={() => {
                const el = document.getElementById('privileges');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 sm:w-auto"
            >
              explore privileges
            </NeoPopButton>
          </motion.div>
        </motion.div>

        {/* Right Column: Floating 3D layered metallic cards mockup */}
        <div className="lg:col-span-5 flex justify-center items-center relative h-[380px] md:h-[480px]">
          {/* Drifting Card 1: Rose Gold */}
          <motion.div
            initial={{ opacity: 0, x: 80, y: 40, rotate: 12 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              y: 0, 
              rotate: 15,
              transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }
            }}
            whileHover={{ y: -10, rotate: 18 }}
            className="absolute w-[230px] md:w-[280px] aspect-[1.586/1] bg-gradient-to-br from-rose-950 via-purple-950 to-zinc-950 border border-brand-pink/30 rounded-2xl p-5 shadow-2xl flex flex-col justify-between"
            style={{ zIndex: 10 }}
          >
            <div className="flex justify-between items-start">
              <span className="text-[8px] font-heading font-black tracking-widest text-brand-pink">CRED ELITE</span>
              <Sparkles className="w-4 h-4 text-brand-pink" />
            </div>
            <div className="font-heading font-extrabold text-sm tracking-widest text-white/90">CRED SELECT</div>
          </motion.div>

          {/* Drifting Card 2: Obsidian Gold */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: -40, rotate: -8 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              y: -30, 
              rotate: -5,
              transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }
            }}
            whileHover={{ y: -45, rotate: -2 }}
            className="absolute w-[230px] md:w-[280px] aspect-[1.586/1] bg-gradient-to-br from-zinc-900 via-stone-950 to-black border border-yellow-500/30 rounded-2xl p-5 shadow-2xl flex flex-col justify-between"
            style={{ zIndex: 20 }}
          >
            <div className="flex justify-between items-start">
              <span className="text-[8px] font-heading font-black tracking-widest text-brand-yellow">CRED OBSIDIAN</span>
              <Trophy className="w-4 h-4 text-brand-yellow" />
            </div>
            <div className="font-heading font-extrabold text-sm tracking-widest text-white/90">MEMBER RESERVE</div>
          </motion.div>

          {/* Drifting Card 3: Emerald Mint */}
          <motion.div
            initial={{ opacity: 0, y: 120, rotate: -20 }}
            animate={{ 
              opacity: 1, 
              y: 50, 
              rotate: -15,
              transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }
            }}
            whileHover={{ y: 35, rotate: -18 }}
            className="absolute w-[230px] md:w-[280px] aspect-[1.586/1] bg-gradient-to-br from-emerald-950 via-teal-950 to-zinc-950 border border-brand-mint/30 rounded-2xl p-5 shadow-2xl flex flex-col justify-between"
            style={{ zIndex: 30 }}
          >
            <div className="flex justify-between items-start">
              <span className="text-[8px] font-heading font-black tracking-widest text-brand-mint">CRED MINT</span>
              <ShieldCheck className="w-4 h-4 text-brand-mint" />
            </div>
            <div className="font-heading font-extrabold text-sm tracking-widest text-white/90">CRED MINT PREFERRED</div>
          </motion.div>
        </div>

      </div>

      {/* Floating visual footer marker */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          const el = document.getElementById('privileges');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[8px] tracking-[0.3em] font-heading uppercase text-white">SCROLL TO UNLOCK</span>
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-1 h-3 bg-white rounded-full"
        />
      </motion.div>

    </section>
  );
};

export default HeroSection;
