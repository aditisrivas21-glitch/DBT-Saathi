/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1a4fa0",
          orange: "#f97316",
          light: "#eff6ff",
        },
      },
    },
  },
  plugins: [],
}