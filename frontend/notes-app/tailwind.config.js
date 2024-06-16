/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      // colors
      colors: {
        primary: "#fcb800",
        secondary: "#EF863E",
      }
    },
  },
  plugins: [],
};

