/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      animation: ['responsive', 'customBounce 1s ease out infinite'],
      fontFamily: {
        Syne: ['Syne', 'sans-serif'],
      },
      keyframes : {
        customBounce : {
          '0%, 100%': { transform : 'translateY(-50px)' },
          '50%' : {transform: 'translateY(0)'}
        },
      },
      width : {
        '300' : '300px',
        '400' : '400px'
      }
     
    },
  },
  plugins: ["daisyui"],
}

