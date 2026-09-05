import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#F3EFE5",
        background: "#07111F",
        foreground: "#F3EFE5",
        brand: {
          dark: "#07111F",
          surface: "#0B1726",
          surfaceLight: "#122133",
          border: "rgba(222, 230, 236, 0.12)",
          borderGlow: "rgba(120, 157, 181, 0.28)",
          gold: "#C5A96A",
          goldLight: "#E2D3AC",
          cyan: "#89AFC6",
          cyanLight: "#B7CFDC",
          emerald: "#6F9B87",
          emeraldLight: "#A9C2B5",
        },
      },
      fontFamily: {
        sans: ["Geist", "Arial", "sans-serif"],
        display: ["Instrument Serif", "Georgia", "serif"],
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))",
        "gold-gradient": "linear-gradient(135deg, #E2D3AC 0%, #C5A96A 100%)",
        "cyan-gradient": "linear-gradient(135deg, #B7CFDC 0%, #789DB5 100%)",
        "brand-mesh":
          "radial-gradient(at 0% 0%, rgba(120, 157, 181, 0.07) 0px, transparent 48%), radial-gradient(at 100% 0%, rgba(197, 169, 106, 0.05) 0px, transparent 48%)",
      },
      animation: {
        "pulse-slow": "pulse 12s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 10s ease-in-out infinite",
        "float-slow": "floatSlow 12s ease-in-out infinite",
        shimmer: "shimmer 4s infinite linear",
        "spin-slow": "spin 36s linear infinite",
        "ping-slow": "ping 4s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-7px) rotate(1deg)" },
          "66%": { transform: "translateY(-4px) rotate(-0.5deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "glow-cyan": "0 10px 30px -18px rgba(120, 157, 181, 0.28)",
        "glow-gold": "0 10px 30px -18px rgba(197, 169, 106, 0.3)",
        glass: "0 14px 34px -24px rgba(0, 0, 0, 0.55)",
        "glass-elevated": "0 24px 54px -34px rgba(0, 0, 0, 0.72)",
      },
      borderRadius: {
        xl: "0.375rem",
        "2xl": "0.5rem",
        "3xl": "0.5rem",
      },
      transitionDuration: {
        "350": "350ms",
        "400": "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
