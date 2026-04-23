import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#000000',
        blue: '#00080e',
        cyan: '#00d5ff',
        green: '#69f11f',
        yellow: '#EDEC3A',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        khmer: ['Hanuman', 'sans-serif'],
      },
      animation: {
        'fade-slide-down': 'fadeSlideDown 0.8s ease both',
        'fade-slide-up': 'fadeSlideUp 0.9s ease both',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'count-up': 'countUp 1s ease both',
        'scan-line': 'scanLine 8s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'galaxy-pulse': 'galaxyPulse 20s ease-in-out infinite',
        'shooting-stars': 'shootingStars 15s linear infinite',
      },
      keyframes: {
        fadeSlideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%) skewX(-15deg)' },
          '100%': { transform: 'translateX(300%) skewX(-15deg)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scanLine: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '25%': { opacity: '0.7', transform: 'scale(0.95)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
          '75%': { opacity: '0.8', transform: 'scale(0.98)' },
        },
        galaxyPulse: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', filter: 'brightness(1)' },
          '25%': { transform: 'scale(1.05) rotate(1deg)', filter: 'brightness(1.1)' },
          '50%': { transform: 'scale(1.02) rotate(-0.5deg)', filter: 'brightness(1.05)' },
          '75%': { transform: 'scale(1.03) rotate(0.5deg)', filter: 'brightness(1.08)' },
        },
        shootingStars: {
          '0%': { transform: 'translateX(-100%) translateY(0) rotate(-45deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '20%': { opacity: '0', transform: 'translateX(100%) translateY(50px) rotate(-45deg)' },
          '100%': { opacity: '0', transform: 'translateX(100%) translateY(50px) rotate(-45deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.1) inset, 0 -1px 0 rgba(0, 0, 0, 0.2) inset',
        'glass-bright': '0 20px 60px rgba(0, 0, 0, 0.4), 0 2px 0 rgba(255, 255, 255, 0.15) inset, 0 0 40px rgba(10, 186, 223, 0.08)',
        'glass-card': '0 4px 24px rgba(0, 0, 0, 0.25), 0 1px 0 rgba(255, 255, 255, 0.12) inset',
        'glass-card-hover': '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 186, 223, 0.15), 0 1px 0 rgba(255, 255, 255, 0.2) inset',
        'cta-glass': '0 30px 80px rgba(0, 0, 0, 0.4), 0 0 60px rgba(10, 186, 223, 0.12), 0 2px 0 rgba(255, 255, 255, 0.12) inset',
        'nav': '0 4px 30px rgba(0, 0, 0, 0.3)',
        'btn-primary': '0 8px 30px rgba(10, 186, 223, 0.4), 0 2px 0 rgba(255, 255, 255, 0.2) inset',
        'btn-primary-hover': '0 16px 40px rgba(10, 186, 223, 0.55)',
        'btn-nav-cta': '0 4px 20px rgba(10, 186, 223, 0.35)',
        'btn-nav-cta-hover': '0 8px 30px rgba(10, 186, 223, 0.5)',
      },
      backgroundImage: {
        'gradient-cyan': 'linear-gradient(90deg, #00d5ff, #7AEEFF)',
        'gradient-yellow': 'linear-gradient(90deg, #EDEC3A, #fff 80%)',
        'gradient-green': 'linear-gradient(90deg, #69f11f, #00d5ff)',
        'gradient-primary': 'linear-gradient(135deg, #00d5ff, #00080e)',
        'gradient-navy-blue': 'linear-gradient(135deg, #000428 0%, #004e92 50%, #000000 100%)',
        'starfield': 'radial-gradient(ellipse at 20% 50%, rgba(10, 186, 223, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(14, 98, 162, 0.12) 0%, transparent 60%), radial-gradient(ellipse at 50% 80%, rgba(81, 180, 28, 0.06) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
}

export default config
