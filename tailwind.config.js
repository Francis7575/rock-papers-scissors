/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#3B4262',
        'medium-gray': 'rgba(255, 255, 255, 0.29)',
        'blue': '#2A45C2',
        'dark': '#565468'
      },
      backgroundImage: {
        'score-card': 'linear-gradient(0deg, #F3F3F3 0%, #FFF 100%)',
        'play-again': 'linear-gradient(0deg, #F3F3F3 0%, #FFF 100%)'
      },
      boxShadow: {
        'gray': '0px 3px 3px 0px rgba(0, 0, 0, 0.20)',
        'winner-ring': '50px 50px 40px 40px rgba(245, 245, 244, 0.6)'
      }
    },
  },
  plugins: [],
}