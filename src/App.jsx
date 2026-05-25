import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesShowcase from './components/FeaturesShowcase';
import InteractiveCardSimulator from './components/InteractiveCardSimulator';
import RewardCalculator from './components/RewardCalculator';
import Footer from './components/Footer';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Set up smooth spring physics for the cursor follower blob
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 100); // 100px offset for center of the 200px blob
      cursorY.set(e.clientY - 100);
    };

    if (window.innerWidth >= 768) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="bg-pitch-black text-white relative min-h-screen overflow-x-hidden font-sans select-none antialiased">
      
      
      {!isMobile && (
        <motion.div
          className="fixed w-[200px] h-[200px] rounded-full bg-brand-mint/5 pointer-events-none blur-[60px] z-30 mix-blend-screen"
          style={{
            x: smoothX,
            y: smoothY,
          }}
        />
      )}

      
      <Navbar />

      
      <main className="relative z-10 w-full flex flex-col items-center">
        
        
        <HeroSection />
        <FeaturesShowcase />

        
        <div id="simulator" className="w-full">
          <InteractiveCardSimulator />
        </div>

        
        <RewardCalculator />

      </main>

      
      <Footer />

    </div>
  );
}

export default App;
