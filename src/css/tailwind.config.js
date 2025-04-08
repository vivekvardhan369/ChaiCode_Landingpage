module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#EBF1F5',
          200: '#D9E3EA',
          300: '#C5D2DC',
          400: '#9BA9B4',
          500: '#707D86',
          600: '#55595F',
          700: '#33363A',
          800: '#25282C',
          900: '#151719',
        },
        purple: {
          100: '#F4F4FF',
          200: '#E2E1FF',
          300: '#CBCCFF',
          400: '#ABABFF',
          500: '#8D8DFF',
          600: '#5D5DFF',
          700: '#4B4ACF',
          800: '#38379C',
          900: '#262668',
        },
        'custom-black': 'rgba(9, 11, 30, 0.75)',
        'custom-border': 'rgba(20, 24, 53, 1)',
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Updated to use Roboto
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
      backdropFilter: {
        'blur-15': 'blur(15px)',
      },
      keyframes: {
        smoothScroll: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        starMovementBottom: {
          '0%': { transform: 'translateX(250%)' },
          '100%': { transform: 'translateX(-250%)' }
        },
        starMovementTop: {
          '0%': { transform: 'translateX(-250%)' },
          '100%': { transform: 'translateX(250%)' }
        },
      },
      animation: {
        'smoothScroll': 'smoothScroll 0.3s forwards',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 4s infinite',
        'shimmer-slide': 'shimmer 2s linear infinite',
        'spin': 'spin 4s linear infinite',
        'star-movement-bottom': 'starMovementBottom 6s linear infinite',
        'star-movement-top': 'starMovementTop 6s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
  

};
