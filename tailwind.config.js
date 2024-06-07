/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily : {
        footerFont : 'Gill Sans', 
      }
    },
  },
  plugins: [],
}