import React from 'react';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

const FOOTER_LINKS = {
  products: [
    { label: 'CRED Pay', href: '#' },
    { label: 'CRED Mint', href: '#' },
    { label: 'CRED Store', href: '#' },
    { label: 'CRED Travel', href: '#' },
  ],
  security: [
    { label: 'Privacy Core', href: '#' },
    { label: 'Surcharge Scan', href: '#' },
    { label: 'Security Audits', href: '#' },
    { label: 'GDPR Compliance', href: '#' },
  ],
  company: [
    { label: 'About Club', href: '#' },
    { label: 'Press Kit', href: '#' },
    { label: 'Financial Logs', href: '#' },
    { label: 'Careers', href: '#' },
  ],
};

const Footer = () => {
  return (
    <footer className="relative w-full bg-black pt-20 pb-12 px-4 md:px-8 border-t border-white/5 overflow-hidden">
      
      {/* Background soft lighting */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-pink/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10 text-left">
        
        {/* Top Section: Brand + Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-heading font-black text-3xl tracking-tighter text-white">
              cred<span className="text-brand-pink text-sm">.</span>
            </h3>
            <p className="text-xs text-white/40 leading-relaxed font-sans max-w-xs">
              CRED is an elite members-only society that unlocks luxurious cashback privileges, intelligent statement audits, and high-speed credit settlements.
            </p>
            
            {/* Live System Status */}
            <div className="inline-flex items-center gap-2 border border-white/5 bg-white/5 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-mint opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-mint"></span>
              </span>
              <span className="text-[9px] font-heading font-extrabold uppercase tracking-widest text-white/80">
                CRED network online
              </span>
            </div>
          </div>

          {/* Links Directory */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Products Column */}
            <div className="space-y-4">
              <span className="text-[9px] font-heading font-extrabold uppercase tracking-widest text-white/40 block">
                Privilege Suites
              </span>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.products.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-xs text-white/60 hover:text-white transition-colors flex items-center gap-1 group font-sans">
                      {link.label}
                      <ArrowUpRight className="w-2.5 h-2.5 text-white/0 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Security Column */}
            <div className="space-y-4">
              <span className="text-[9px] font-heading font-extrabold uppercase tracking-widest text-white/40 block">
                Integrity Matrix
              </span>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.security.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-xs text-white/60 hover:text-white transition-colors flex items-center gap-1 group font-sans">
                      {link.label}
                      <ArrowUpRight className="w-2.5 h-2.5 text-white/0 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <span className="text-[9px] font-heading font-extrabold uppercase tracking-widest text-white/40 block">
                Society Log
              </span>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-xs text-white/60 hover:text-white transition-colors flex items-center gap-1 group font-sans">
                      {link.label}
                      <ArrowUpRight className="w-2.5 h-2.5 text-white/0 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Section: Security compliance statement, socials, and copyright */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          
          {/* Security stamp */}
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-mint" />
            <span className="text-[10px] text-white/40 font-heading uppercase tracking-wider">
              100% PCI-DSS compliant financial platform
            </span>
          </div>

          {/* Social Links via optimized SVGs */}
          <div className="flex items-center space-x-6">
            {/* Twitter SVG */}
            <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* LinkedIn SVG */}
            <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
              </svg>
            </a>
            {/* GitHub SVG */}
            <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="GitHub">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
          </div>

          {/* Copyright text */}
          <span className="text-[10px] text-white/30 font-sans">
            © 2026 MINT-FI TECHNOLOGIES INC. ALL CORE PRIVILEGES RECORDED.
          </span>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
