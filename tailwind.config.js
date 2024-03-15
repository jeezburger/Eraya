/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#193A6F",
          200: "#3373D7",
          300: "#251436"
        },
        orange: {
          300: "#EC8B44",
          400: "#D7002E"
        },
        purple: {
          100: "#33173d",
          200: "#391f44"
        }
      }

    },
  },
  plugins: [],
}

