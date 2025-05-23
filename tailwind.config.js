/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4B89DC',
          dark: '#3A6FB5',
          light: '#A5C2EF'
        }
      }
    }
  },
  plugins: [],
};
