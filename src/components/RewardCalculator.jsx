import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coins, Sparkles, AlertCircle, ArrowUpRight, HelpCircle, ShieldCheck } from 'lucide-react';
import NeoPopButton from './NeoPopButton';

const RewardCalculator = () => {
  const [spend, setSpend] = useState(50000); // Default spend: ₹50,000
  const [showJackpot, setShowJackpot] = useState(false);
  const [jackpotRunning, setJackpotRunning] = useState(false);
  const [jackpotResult, setJackpotResult] = useState('');

  
  const coinsEarned = Math.floor(spend * 12);
  const cashSaved = Math.floor(spend * 0.03 * 12);
  const luxurySavings = Math.floor(spend * 0.05 * 12);
  const totalValue = cashSaved + luxurySavings;

  const handleJackpot = () => {
    setJackpotRunning(true);
    setShowJackpot(true);
    setJackpotResult('');
    
    
    setTimeout(() => {
      setJackpotRunning(false);
      setJackpotResult('₹5,000 CASH BACK');
    }, 2500);
  };

  return (
    <section id="rewards" className="relative w-full py-24 px-4 md:px-8 border-b border-white/5 overflow-hidden">
      
      
      <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-heading font-extrabold text-white/50 block">
              privilege compound calculator
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white leading-none">
              quantify your <br />
              <span className="text-stroke-white select-none">luxurious yields</span>
            </h2>
            <p className="text-xs md:text-sm text-white/60 font-sans leading-relaxed max-w-xl">
              Drag the custom slider to represent your total monthly expenditure on credit cards and view your projected high-yield dividends over a 12-month settlement window.
            </p>
          </div>

          
          <div className="p-6 md:p-8 border border-white/5 bg-black/60 backdrop-blur-md relative">
            <div className="space-y-6">
              
              
              <div className="flex justify-between items-center">
                <span className="text-xs font-heading font-extrabold uppercase text-white/40 tracking-wider">
                  ESTIMATED MONTHLY CARD SPEND
                </span>
                <span className="text-xl md:text-2xl font-heading font-black text-brand-yellow">
                  ₹{spend.toLocaleString('en-IN')}
                </span>
              </div>

              
              <div className="relative pt-2">
                <input 
                  type="range" 
                  min="5000" 
                  max="300000" 
                  step="5000" 
                  value={spend}
                  onChange={(e) => setSpend(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 appearance-none cursor-pointer accent-brand-yellow focus:outline-none transition-colors"
                  style={{
                    background: `linear-gradient(to right, #FEEA00 0%, #FEEA00 ${((spend - 5000) / (300000 - 5000)) * 100}%, rgba(255, 255, 255, 0.1) ${((spend - 5000) / (300000 - 5000)) * 100}%, rgba(255, 255, 255, 0.1) 100%)`
                  }}
                />
                
                
                <div className="flex justify-between text-[10px] text-white/40 font-heading font-bold mt-2 uppercase tracking-widest">
                  <span>₹5,000</span>
                  <span>₹1.5L</span>
                  <span>₹3,00,000+</span>
                </div>
              </div>

              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5">
                
                {/* Coins */}
                <div className="p-4 bg-white/5 border border-white/5 text-left">
                  <div className="flex items-center gap-1.5">
                    <Coins className="w-3.5 h-3.5 text-brand-yellow" />
                    <span className="text-[9px] font-heading font-bold text-white/50 uppercase tracking-wider">
                      CRED Coins Earned
                    </span>
                  </div>
                  <div className="text-lg md:text-xl font-heading font-black text-white mt-1">
                    {coinsEarned.toLocaleString('en-IN')}
                  </div>
                  <p className="text-[9px] text-white/30 font-sans mt-0.5">At 12x multiplier</p>
                </div>

                
                <div className="p-4 bg-white/5 border border-white/5 text-left">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-mint" />
                    <span className="text-[9px] font-heading font-bold text-white/50 uppercase tracking-wider">
                      Direct Cash Back
                    </span>
                  </div>
                  <div className="text-lg md:text-xl font-heading font-black text-white mt-1">
                    ₹{cashSaved.toLocaleString('en-IN')}
                  </div>
                  <p className="text-[9px] text-white/30 font-sans mt-0.5">3% direct cash refunds</p>
                </div>

                
                <div className="p-4 bg-white/5 border border-white/5 text-left">
                  <div className="flex items-center gap-1.5">
                    <Coins className="w-3.5 h-3.5 text-brand-pink" />
                    <span className="text-[9px] font-heading font-bold text-white/50 uppercase tracking-wider">
                      Bespoke Club Value
                    </span>
                  </div>
                  <div className="text-lg md:text-xl font-heading font-black text-white mt-1">
                    ₹{luxurySavings.toLocaleString('en-IN')}
                  </div>
                  <p className="text-[9px] text-white/30 font-sans mt-0.5">Travel & dining savings</p>
                </div>

              </div>

            </div>
          </div>
        </div>

        
        <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6">
          <div className="border border-white/5 bg-gradient-to-br from-zinc-950 to-black p-6 md:p-8 w-full max-w-sm relative overflow-hidden text-left shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-[35px] pointer-events-none" />
            
            <span className="text-[10px] font-heading font-extrabold uppercase text-white/50 tracking-widest block">
              TOTAL ANNUAL PRIVILEGE dividend
            </span>
            <div className="text-4xl md:text-5xl font-heading font-black text-brand-yellow tracking-tighter mt-2">
              ₹{totalValue.toLocaleString('en-IN')}
            </div>
            
            <p className="text-xs text-white/40 leading-relaxed font-sans mt-4">
              Dividends compound automatically based on CRED core liquidity pools and premium partnership voucher rebates. Enjoy direct cash-deposits with complete payment transparency.
            </p>

            <div className="mt-6 pt-6 border-t border-white/5 flex flex-col space-y-3">
              <div className="flex items-center gap-2 text-xs text-white/70">
                <ShieldCheck className="w-4 h-4 text-brand-mint" />
                <span>Verified by Mint-Fi Security Matrix</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/70">
                <AlertCircle className="w-4 h-4 text-brand-pink" />
                <span>Requires active billing registration</span>
              </div>
            </div>
          </div>

          
          <div className="w-full flex justify-center lg:justify-start">
            <NeoPopButton 
              variant="yellow" 
              onClick={handleJackpot}
              className="px-10 py-4 flex items-center justify-center gap-2"
              shadowColor="#FEEA00"
            >
              SPIN FOR JACKPOT BONUS
            </NeoPopButton>
          </div>
        </div>

      </div>

      
      <AnimatePresence>
        {showJackpot && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black border border-white max-w-md w-full p-8 text-center relative shadow-neo-white"
              style={{
                boxShadow: '8px 8px 0px 0px #FFFFFF'
              }}
            >
              
              <button 
                onClick={() => setShowJackpot(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white font-heading font-black uppercase text-[10px] tracking-widest border border-white/10 px-2.5 py-1"
              >
                close
              </button>

              <div className="space-y-6 pt-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 border border-brand-yellow/30 bg-brand-yellow/5 rounded-full flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-brand-yellow animate-pulse" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-heading font-black text-white uppercase tracking-tight">
                    CRED core jackpot
                  </h3>
                  <p className="text-xs text-white/50 max-w-xs mx-auto">
                    Computing members-only billing multipliers from recent liquidity payouts...
                  </p>
                </div>

                
                <div className="py-6 border-y border-white/5 bg-zinc-950 overflow-hidden relative">
                  {jackpotRunning ? (
                    <motion.div 
                      animate={{ y: [-100, 100] }}
                      transition={{ repeat: Infinity, duration: 0.15, ease: "linear" }}
                      className="text-3xl font-heading font-black text-brand-yellow flex flex-col space-y-4 items-center"
                    >
                      <span>₹2,500 MULTIPLIER</span>
                      <span>₹5,000 CASH BACK</span>
                      <span>₹10,000 RESORT VOUCHER</span>
                    </motion.div>
                  ) : (
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-2xl md:text-3xl font-heading font-black text-brand-mint uppercase tracking-widest animate-bounce"
                    >
                      {jackpotResult}
                    </motion.div>
                  )}
                </div>

              
                {!jackpotRunning && (
                  <div className="space-y-4">
                    <p className="text-xs text-white/70 leading-relaxed max-w-xs mx-auto">
                      Congratulations! You unlocked ₹5,000 cash back. This multiplier has been locked to your financial profile ID.
                    </p>
                    <NeoPopButton 
                      variant="mint" 
                      onClick={() => {
                        setShowJackpot(false);
                        alert('Your reward jackpot has been queued! Complete your first credit card billing audit to withdraw.');
                      }}
                      className="px-8 py-3 w-full"
                    >
                      redeem to my profile
                    </NeoPopButton>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default RewardCalculator;
