/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F172A',
          50: '#EEF1F7',
          100: '#DCE2EE',
          200: '#B4C0D9',
          300: '#8C9FC3',
          400: '#4C5E82',
          500: '#243352',
          600: '#1A2740',
          700: '#141D31',
          800: '#0F172A',
          900: '#080D18',
        },
        gold: {
          DEFAULT: '#C9A24B',
          50: '#FBF6EB',
          100: '#F4E7C7',
          200: '#E9D096',
          300: '#DEBE7E',
          400: '#D5B364',
          500: '#C9A24B',
          600: '#A9833A',
          700: '#87652C',
          800: '#644B21',
          900: '#3E2E14',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
