/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        primary: "#287cd0",
        secondary: "#d05a28",
      },
    },
  },
  plugins: [],
}

