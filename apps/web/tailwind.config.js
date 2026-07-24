/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fef1f6',
          100: '#fde6f0',
          200: '#fccde3',
          300: '#ffa3cc',
          400: '#ff6b9d',
          500: '#ff3d7f',
          600: '#ed1165',
          700: '#cf0852',
          800: '#ab0a45',
          900: '#8f0d3c',
        },
        gold: {
          50: '#fdf9ef',
          100: '#f9efd1',
          200: '#f2dca0',
          300: '#eac56b',
          400: '#e4b04a',
          500: '#d4af37',
          600: '#b8892a',
          700: '#996824',
          800: '#7d5323',
          900: '#67451f',
        },
        cream: '#FFF8F0',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      animation: {
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
