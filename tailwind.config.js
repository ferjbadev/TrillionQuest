/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 15px 5px rgba(249,212,35,0.5)',
          },
          '50%': {
            boxShadow: '0 0 25px 10px rgba(249,212,35,0.8)',
          },
        },
      },
      animation: {
        glow: 'glow 2s infinite',
      },
    },
  },
  plugins: [],
}

