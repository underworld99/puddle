/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        puddle: {
          DEFAULT: '#0F3A33',
          light: '#1C5A4F',
          dark: '#092420',
        },
      },
    },
  },
  plugins: [],
};