/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          50:  '#FFF4F2',
          100: '#FFE3DE',
          200: '#FFC4BB',
          400: '#F76F5E',
          500: '#E54B3C',
          600: '#C9362A',
          700: '#A32A20',
          800: '#7A1F18',
        },
        ocean: {
          50:  '#F1F7FB',
          100: '#DDEBF5',
          200: '#B8D4E8',
          400: '#4F90BD',
          500: '#2E6FA0',
          600: '#235680',
          700: '#1B4264',
          800: '#14304A',
        },
        ink: {
          200: '#E8EAF0',
          300: '#CBD0DB',
          400: '#96A0B5',
          500: '#6B7594',
          700: '#2F3850',
          900: '#1A1F2B',
        },
        paper:      '#FDFCF8',
        background: '#FDFCF8',
        surface:    '#FFFFFF',
      },
      fontFamily: {
        sans:  ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Source Serif 4', 'ui-serif', 'Georgia', 'serif'],
        mono:  ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
