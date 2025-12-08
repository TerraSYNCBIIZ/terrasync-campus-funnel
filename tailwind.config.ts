import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terra: {
          green: "#c5ff00",
          "green-dark": "#9fcc00",
          "green-glow": "#d4ff00",
          black: "#0a0a0a",
          "black-light": "#111111",
          "black-card": "#1a1a1a",
          gray: "#9ca3af",
          "gray-dark": "#4b5563",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.8) 50%, rgba(10,10,10,1) 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(197,255,0,0.1) 0%, rgba(10,10,10,0.5) 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(197,255,0,0.3)",
        "glow-sm": "0 0 20px rgba(197,255,0,0.2)",
        "glow-lg": "0 0 60px rgba(197,255,0,0.4)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

