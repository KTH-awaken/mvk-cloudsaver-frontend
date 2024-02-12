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
        'primary-dark': 'var(--primary-dark)',
        accent: '#f7fff5'
      }
    },
  },
  plugins: [],
}

