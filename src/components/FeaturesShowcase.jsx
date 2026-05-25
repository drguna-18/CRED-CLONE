import React from 'react';
import { motion } from 'framer-motion';
import { Gift, ShieldAlert, Zap, Crown, CheckCircle2, ArrowRight } from 'lucide-react';
import NeoPopButton from './NeoPopButton';

const FEATURE_CARDS = [
  {
    id: 'rewards',
    icon: Gift,
    badge: 'LUXURY REWARDS',
    title: 'liquid reward arrays',
    desc: 'Amass exclusive CRED coins with every single credit card settlement. Melt them down into bespoke brand goods, hand-crafted resort bookings, and absolute cashbacks.',
    accent: 'mint',
    accentColor: '#00E5A3',
    shadowClass: 'hover:shadow-neo-mint',
    borderColor: 'group-hover:border-brand-mint/50',
    bullets: ['Bespoke travel options', 'Direct cashback settlements', 'Ultra-exclusive brand vouchers']
  },
  {
    id: 'security',
    icon: ShieldAlert,
    badge: 'STATEMENT SECURITY',
    title: 'ironclad shield audits',
    desc: 'Our deep machine-learning statement scanner instantly audits your accounts. Uncover hidden merchant surcharges, duplicate subscriptions, and suspicious billing anomalies.',
    accent: 'pink',
    accentColor: '#FF007A',
    shadowClass: 'hover:shadow-neo-pink',
    borderColor: 'group-hover:border-brand-pink/50',
    bullets: ['Instant alerts on surcharges', 'Smart fee trackers', 'Zero-leak data encryption']
  },
  {
    id: 'routing',
    icon: Zap,
    badge: 'PAYMENT INTEGRITY',
    title: 'frictionless bill engine',
    desc: 'Route payments through custom high-speed liquidity rails. Clear your credit balances in 1.5 seconds flat, backed by instant double-entry receipts and direct bank confirmations.',
    accent: 'blue',
    accentColor: '#00D2FF',
    shadowClass: 'hover:shadow-neo-blue',
    borderColor: 'group-hover:border-brand-blue/50',
    bullets: ['1.5-second clearing speeds', 'Smart multi-card dashboard', 'Auto-payment scheduling']
  },
  {
    id: 'club',
    icon: Crown,
    badge: 'MEMBER PRIVILEGES',
    title: 'members-only concierge',
    desc: 'Tap into elite lifestyle managers ready to book boutique reservations, custom-curate itineraries, coordinate premium airport transfers, and grant access to exclusive VIP lounge suites.',
    accent: 'yellow',
    accentColor: '#FEEA00',
    shadowClass: 'hover:shadow-neo-yellow',
    borderColor: 'group-hover:border-brand-yellow/50',
    bullets: ['24/7 dedicated support desk', 'VIP seating at premium events', 'Exclusive luxury partner access']
  }
];

const FeaturesShowcase = () => {
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  
  const cardSlideUp = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="privileges" className="relative w-full py-24 px-4 md:px-8 bg-deep-dark border-b border-white/5 overflow-hidden">
      
    
      <div className="absolute top-[40%] right-[-15%] w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 text-left">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-heading font-extrabold text-white/50 block">
              PRIVILEGE HIERARCHY
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white leading-none">
              exclusive <br />
              <span className="text-stroke-white select-none">club attributes</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-white/50 font-sans max-w-md leading-relaxed">
            As a credentialed member of CRED, your financial profile is backed by precision digital tools, luxury reward matrices, and complete privacy frameworks.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {FEATURE_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                variants={cardSlideUp}
                whileHover={{ 
                  x: -4, 
                  y: -4,
                  boxShadow: `8px 8px 0px 0px ${card.accentColor}`,
                }}
                className={`
                  group relative p-8 md:p-10 bg-black border border-white/5 hover:border-white transition-all duration-300 flex flex-col justify-between text-left select-none
                `}
                style={{
                  boxShadow: '0px 0px 0px 0px transparent'
                }}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
                      <Icon className={`w-6 h-6 text-white`} style={{ color: card.accentColor }} />
                    </div>
                    <span className="text-[9px] font-heading font-extrabold tracking-widest text-white/40 group-hover:text-white/80 transition-colors">
                      {card.badge}
                    </span>
                  </div>

                  
                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-heading font-black tracking-tight text-white uppercase leading-none">
                      {card.title}
                    </h3>
                    <p className="text-xs md:text-sm text-white/50 leading-relaxed font-sans font-light">
                      {card.desc}
                    </p>
                  </div>
                </div>

                
                <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    {card.bullets.map((bullet, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white/30 flex-shrink-0" style={{ color: card.accentColor }} />
                        <span className="text-[11px] text-white/70 font-sans">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  
                  <div className="flex items-center gap-2 text-[10px] font-heading font-extrabold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors pt-2 cursor-pointer">
                    <span>operational parameters</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" style={{ color: card.accentColor }} />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

        
        <div className="pt-8 flex flex-col items-center justify-center space-y-4">
          <p className="text-xs text-white/40 uppercase font-heading font-bold tracking-widest text-center">
            ★ standard data encryption protocols: AES-GCM 256-bit bank-grade integrations
          </p>
          <NeoPopButton 
            variant="pink" 
            onClick={() => alert('Accessing secure onboarding servers... Please prepare your credentials.')}
            className="px-10 py-4"
          >
            begin application audit
          </NeoPopButton>
        </div>

      </div>
    </section>
  );
};

export default FeaturesShowcase;
