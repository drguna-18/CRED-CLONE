import React from 'react';
import { motion } from 'framer-motion';

const NeoPopButton = ({ 
  children, 
  onClick, 
  variant = 'mint', // 'mint' | 'pink' | 'white' | 'dark' | 'yellow'
  className = '', 
  fullWidth = false,
  shadowColor = null
}) => {
  
  const variantStyles = {
    mint: {
      bg: 'bg-brand-mint',
      text: 'text-black',
      border: 'border-black border-2',
      shadowColor: '#000000',
      shadowClass: 'shadow-neo-black'
    },
    pink: {
      bg: 'bg-brand-pink',
      text: 'text-white',
      border: 'border-black border-2',
      shadowColor: '#000000',
      shadowClass: 'shadow-neo-black'
    },
    white: {
      bg: 'bg-white',
      text: 'text-black',
      border: 'border-black border-2',
      shadowColor: '#000000',
      shadowClass: 'shadow-neo-black'
    },
    yellow: {
      bg: 'bg-brand-yellow',
      text: 'text-black',
      border: 'border-black border-2',
      shadowColor: '#000000',
      shadowClass: 'shadow-neo-black'
    },
    dark: {
      bg: 'bg-black',
      text: 'text-white',
      border: 'border-white border-2',
      shadowColor: '#FFFFFF',
      shadowClass: 'shadow-neo-white'
    },
  };

  const style = variantStyles[variant] || variantStyles.mint;
  const currentShadowColor = shadowColor || style.shadowColor;

  return (
    <motion.button
      onClick={onClick}
      className={`
        relative px-6 py-3 font-heading font-extrabold text-xs md:text-sm tracking-widest uppercase transition-all select-none
        ${style.bg} ${style.text} ${style.border} ${style.shadowClass}
        ${fullWidth ? 'w-full' : 'inline-block'}
        ${className}
      `}
      style={{
        boxShadow: `4px 4px 0px 0px ${currentShadowColor}`
      }}
      whileHover={{ 
        x: -2, 
        y: -2,
        boxShadow: `6px 6px 0px 0px ${currentShadowColor}`
      }}
      whileTap={{ 
        x: 4, 
        y: 4, 
        boxShadow: `0px 0px 0px 0px ${currentShadowColor}`
      }}
    >
      {children}
    </motion.button>
  );
};

export default NeoPopButton;
