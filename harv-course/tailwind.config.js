/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontSize: {
      xs: ".75rem", // Extra Small
      sm: ".875rem", // Small
      base: "1rem", // Base
      lg: "1.125rem", // Large
      xl: "1.25rem", // Extra Large
      "2xl": "1.5rem", // 2X Large
      "3xl": "1.875rem", // 3X Large
      "4xl": "2.25rem", // 4X Large
      "5xl": "3rem", // 5X Large
      "6xl": "4rem", // 6X Large
      display: "6rem",
    },
  },
  plugins: [],
};
