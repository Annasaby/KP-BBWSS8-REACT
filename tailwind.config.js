/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors:{
        'kuning': '#FFC928',
        'biru': '#364773',
        'biru-muda': '#E6F5FF',
      } 
    },
  },
  plugins: [],
}