/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d9488', // Teal-600
          dark: '#0f766e',   // Teal-700
          light: '#14b8a6',  // Teal-500
        },
        accent: {
          DEFAULT: '#d97706', // Amber-600
          dark: '#b45309',    // Amber-700
          light: '#f59e0b',   // Amber-500
        },
        dark: {
          DEFAULT: '#1f2937', // Gray-800
          lighter: '#374151', // Gray-700
          darker: '#111827',  // Gray-900
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(13,148,136,0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(13,148,136,0.7), 0 0 50px rgba(13,148,136,0.3)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
