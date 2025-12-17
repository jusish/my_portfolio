import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        purple: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7c3aed",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(to bottom right, #0a0a0a, #1a0a2e, #0a0a0a)",
        "gradient-purple": "linear-gradient(135deg, #9333ea, #7c3aed, #a855f7)",
      },
      boxShadow: {
        "purple-glow": "0 0 20px rgba(147, 51, 234, 0.5)",
        "purple-glow-lg": "0 0 40px rgba(147, 51, 234, 0.7)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
