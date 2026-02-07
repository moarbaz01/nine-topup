import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-battambang)"],
      },
      animation: {
        gradient: "gradientBG 8s ease infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#D4AF37",
        "primary-light": "#FFD700",
        "primary-dark": "#B8860B",
        secondary: "#0a0e1a",
        "card-bg": "#1a1f2e",
        accent: "#D4AF37",
        navy: "#0f1419",
        darkBlue: "#1a1f2e",
        golden: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#D4AF37",
          600: "#B8860B",
          700: "#a67c00",
          800: "#854d0e",
          900: "#713f12",
        },
      },
      keyframes: {
        gradientBG: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
