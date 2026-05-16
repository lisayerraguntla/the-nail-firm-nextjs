/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#100c0f',
        blush: '#f5d9d6',
        rose: '#b86c72',
        champagne: '#f2dfc7',
        cocoa: '#4d3031',
      },
      boxShadow: {
        glow: '0 0 70px rgba(245, 217, 214, 0.18)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
