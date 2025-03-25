import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], 
      },
      colors: {
        background: "#f5f5f5", // Light gray background
        earth: "#4b5320", // Dark green text color
      },
    },
  },
  plugins: [],
}

export default config
