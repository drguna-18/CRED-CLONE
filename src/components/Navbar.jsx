import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import NeoPopButton from './NeoPopButton';

const NAV_LINKS = [
  { label: 'privileges', href: '#privileges' },
  { label: 'simulator', href: '#simulator' },
  { label: 'rewards', href: '#rewards' },
  { label: 'security', href: '#security' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 bg-black/40 backdrop-blur-xl border-b border-white/5 flex items-center justify-between"
      >
        
        <div className="flex items-center space-x-2">
          <a href="#" className="font-heading font-black text-2xl md:text-3xl tracking-tighter text-white">
            My Cred<span className="text-brand-mint text-sm">.</span>
          </a>
        </div>

        
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="relative text-xs font-heading font-extrabold uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        
        <div className="hidden md:block">
          <NeoPopButton 
            variant="mint" 
            onClick={() => alert('Welcome to the Club. Premium access awaits.')}
            className="py-2.5 px-5"
          >
            join club
          </NeoPopButton>
        </div>

      
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white border border-white/5 bg-white/5 rounded-none"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.nav>

    
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl pt-24 px-6 md:hidden flex flex-col justify-between pb-12"
          >
            
            <div className="flex flex-col space-y-6 text-left">
              <span className="text-[10px] uppercase font-heading font-bold tracking-[0.25em] text-white/30">
                NAVIGATION MATRIX
              </span>
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-heading font-black tracking-tight text-white uppercase flex items-center justify-between border-b border-white/5 pb-3 hover:text-brand-mint transition-colors"
                >
                  {link.label}
                  <ArrowUpRight className="w-5 h-5 text-white/30" />
                </motion.a>
              ))}
            </div>

            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <NeoPopButton 
                variant="mint" 
                fullWidth 
                onClick={() => {
                  setIsOpen(false);
                  alert('Welcome to the Club. Premium access awaits.');
                }}
                className="py-4"
              >
                join exclusive club
              </NeoPopButton>
              <p className="text-[10px] text-white/40 text-center font-heading uppercase tracking-widest">
                ★ 800+ credit score required
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
