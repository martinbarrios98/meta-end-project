/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F4CE14',
        'primary-dark': '#DBB914',
        'secondary': '#495E57',
        'tertiary': '#EDEFEE',
        'dark': '#333333',
        'light': '#FFFFFF',
        'accent': {
          'primary': '#EE9972',
          'secondary': '#FBDABB',
        }
        }
      },
      fontFamily: {
        body: ["Karla", "sans-serif"],
        heading: ["Markazi Text", "sans-serif"],
    },
  },
  plugins: [],
}