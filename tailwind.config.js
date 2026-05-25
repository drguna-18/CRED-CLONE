/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pitch-black': '#0A0A0A',
        'deep-dark': '#020202',
        'brand-mint': '#00E5A3',
        'brand-pink': '#FF007A',
        'brand-blue': '#00D2FF',
        'brand-purple': '#7000FF',
        'brand-yellow': '#FEEA00',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'neo-white': '4px 4px 0px 0px #FFFFFF',
        'neo-black': '4px 4px 0px 0px #000000',
        'neo-mint': '4px 4px 0px 0px #00E5A3',
        'neo-pink': '4px 4px 0px 0px #FF007A',
        'neo-blue': '4px 4px 0px 0px #00D2FF',
        'neo-purple': '4px 4px 0px 0px #7000FF',
        'neo-yellow': '4px 4px 0px 0px #FEEA00',
        'neo-white-lg': '8px 8px 0px 0px #FFFFFF',
        'neo-mint-lg': '8px 8px 0px 0px #00E5A3',
        'neo-pink-lg': '8px 8px 0px 0px #FF007A',
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}
