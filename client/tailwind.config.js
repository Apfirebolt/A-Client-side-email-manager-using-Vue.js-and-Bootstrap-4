/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#B8DBD9', 
        ghostGrey: '#F4F4F9', // for complete body
        cadetGrey: '#586F7C',
        darkSlateGrey: '#2F4550',
        jetBlack: '#333333',
      },
    },
  },
  plugins: [],
}