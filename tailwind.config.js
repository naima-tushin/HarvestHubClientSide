/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#100f0e',
        'background': '#fbfaf9',
        'primary': '#9d886d',
        'secondary': '#c8b7a1',
        'accent': '#ba9e79',
      },

    },
  },
  plugins: [
    require('daisyui'),
  ],
  
}

