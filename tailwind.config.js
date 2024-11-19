/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        'container': "1440px"
      },
      fontFamily: {
        'DM': ['DM Sans', 'sans-serif'],  
      },
      backgroundImage: {
        'back-img': "url('./assets/headphone-img.png')",
        
      }
    },
  },
  plugins: [],
}
