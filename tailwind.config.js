/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#98e2a0',
        'primary-dark': '#214A2D',
        accent: '#f7fff5'
      }
    },
  },
  plugins: [],
}

