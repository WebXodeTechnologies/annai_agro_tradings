/** @type {import('tailwindcss').Config} */
module.exports = {
  // Use 'class' for Aceternity/NextThemes support if needed
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Good practice to include src if you ever move files
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "shine": "shine 2s linear infinite", // Adjusted for a smoother B2B feel
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        shine: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
      },
      // Essential for Aceternity UI dynamic shadows and borders
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: {
          DEFAULT: "#67944e",
          dark: "#4a6d36",
        }
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Add this specifically for Aceternity UI dynamic utilities
    function ({ addBase, theme }) {
      let allVars = require("tailwindcss/lib/util/flattenColorPalette")(
        theme("colors")
      );
      let newVars = Object.fromEntries(
        Object.entries(allVars).map(([key, val]) => [`--${key}`, val])
      );
      addBase({
        ":root": newVars,
      });
    },
  ],
};