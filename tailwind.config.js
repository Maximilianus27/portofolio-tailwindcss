/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        primary:  '#14b8a6',
        secondary : '#64748b',
        dark : '#0f172a'
      },
      screens:{
        'tablet' : '640px'
      },
    container:{
      center: true,
      padding: '16px'
    }
    },
  },
  plugins: [],
}
