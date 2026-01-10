import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Organic/Natural Design System
        background: '#FDFCF8',      // Off-white, Rice Paper
        foreground: '#2C2C24',      // Deep Loam / Charcoal
        primary: {
          DEFAULT: '#5D7052',       // Moss Green
          foreground: '#F3F4F1',    // Pale Mist
        },
        secondary: {
          DEFAULT: '#C18C5D',       // Terracotta / Clay
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#E6DCCD',       // Sand / Beige
          foreground: '#4A4A40',    // Bark
        },
        muted: {
          DEFAULT: '#F0EBE5',       // Stone
          foreground: '#78786C',    // Dried Grass
        },
        border: '#DED8CF',          // Raw Timber
        destructive: '#A85448',     // Burnt Sienna
        card: '#FEFEFA',            // Very light beige
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        'blob': '60% 40% 30% 70% / 60% 30% 70% 40%',
        'blob-2': '30% 70% 70% 30% / 30% 30% 70% 70%',
        'blob-3': '70% 30% 50% 50% / 50% 50% 30% 70%',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(93, 112, 82, 0.15)',
        'soft-lg': '0 10px 40px -10px rgba(93, 112, 82, 0.2)',
        'float': '0 10px 40px -10px rgba(193, 140, 93, 0.2)',
        'lift': '0 20px 40px -10px rgba(93, 112, 82, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
