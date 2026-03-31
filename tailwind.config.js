/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD600',
        secondary: '#424242',
        accent: '#FFD600',
        background: '#FFFFFF',
        lightBackground: '#FFF3E0',
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        body: ['var(--font-roboto)', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}