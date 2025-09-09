/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      xs: '320px',
      sm: '375px',
      md: '768px',
      lg: '1200px',
      xl: '1440px',
    },
  },
  plugins: [],
};
