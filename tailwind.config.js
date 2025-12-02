/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: "#011c75",
        accent: "#e2102d",
        textgray: "#7e7e7e",
        sidebar: "#1D3B9E",
        logoarea: "#001455",
        navbar: "#011C75",
      }
    },
  },
  plugins: [],
}

