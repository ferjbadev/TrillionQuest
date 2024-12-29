/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '2',
      },
      keyframes: {
        glow: {
          '0%': {
            boxShadow: '0 0 15px 5px rgba(249, 212, 35, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 25px 10px rgba(249, 212, 35, 0.8)',
          },
          '100%': {
            boxShadow: '0 0 15px 5px rgba(249, 212, 35, 0.5)',
          },
        },
      },
      animation: {
        glow: 'glow 3s infinite', // Define la animación personalizada
      },
    },
  },
  plugins: [],
};
