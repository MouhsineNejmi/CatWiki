/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern-sm': "url('./src/images/HeroImagesm.png')",
        'hero-pattern-md': "url('./src/images/HeroImagemd.png')",
        'hero-pattern-lg': "url('./src/images/HeroImagelg.png')"
      }
    }
  },
  plugins: [],
}
