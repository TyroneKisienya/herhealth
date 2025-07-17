// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        pink: '#ff69b4',
        lightpink: '#ffe0ef',
        softpurple: '#d8b4f8',
        purple: '#8a2be2',
      },
    }
  },
  plugins: [],
}
