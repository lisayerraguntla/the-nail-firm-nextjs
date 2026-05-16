/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#050403',
        blush: '#d7a64d',
        rose: '#b37a2f',
        champagne: '#f8e7bd',
        cocoa: '#24170a',
      },
      boxShadow: {
        glow: '0 0 70px rgba(215, 166, 77, 0.3)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
