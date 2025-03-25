<<<<<<< HEAD
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50", // Green
        secondary: "#2196F3", // Blue
        background: "#F5F5F5", // Light gray
        accent: "#8BC34A", // Light green
        earth: "#795548", // Brown
        natural: "#A5D6A7", // Soft green
        modern: "#E0F7FA", // Light blue
      },
    },
  },
  plugins: [],
} satisfies Config;
=======
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
        sans: ['var(--font-inter)', 'sans-serif'], // Matches Next.js font setup
      },
      colors: {
        // Add your custom colors here if needed
        // Example:
        // 'econ-primary': '#7ED957',
      },
    },
  },
  plugins: [
    // Add any Tailwind plugins here
    // require('@tailwindcss/forms'),
  ],
}

export default config
>>>>>>> d117898 (Initial commit)
