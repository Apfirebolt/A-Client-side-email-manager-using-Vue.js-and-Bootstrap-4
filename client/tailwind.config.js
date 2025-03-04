/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F0F0D7",
          200: "#D0DDD0",
          300: "#AAB99A",
        },
        secondary: {
          100: "#727D73",
          200: "#e0f2fe",
          300: "#bae6fd",
      },
    },
  },
  plugins: [],
  }
}