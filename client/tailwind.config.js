/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',  // Adjust these paths to your project structure
  ],
  theme: {
    extend: {
      animation: {
        shine: 'shine 1.5s infinite ease-in-out',
      },
      keyframes: {
        shine: {
          '0%': { left: '-75%' },
          '100%': { left: '125%' },
        }
      },
      fontFamily: {
        sans: ['Syne', 'Roboto', 'sans-serif'], // Default sans-serif font family
        // You can add other fonts if needed
      },
      width : {
        '300' : '300px',
        '400' : '400px'
      },
      
    },
  },
  plugins: [],
};
