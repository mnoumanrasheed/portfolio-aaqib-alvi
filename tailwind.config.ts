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
        white: "#FFFFFF",
        background: "#080C14",
        foreground: "#F8FAFC",
        page: "#080C14",
        surface: "#0E131F",
        "surface-soft": "#121826",
        "surface-teal": "#0D1522",
        "surface-warm": "#131926",
        ink: "#F8FAFC",
        text: "#94A3B8",
        muted: "#64748B",
        border: "rgba(255, 255, 255, 0.08)",
        accent: "#C5A059",
        "accent-dark": "#DFB76C",
        gold: "#C5A059",
        "gold-soft": "rgba(197, 160, 89, 0.15)",
        footer: "#05080D",
        brand: {
          dark: "#080C14",
          surface: "#0E131F",
          surfaceLight: "#161F32",
          border: "rgba(255, 255, 255, 0.08)",
          borderGlow: "rgba(197, 160, 89, 0.28)",
          gold: "#C5A059",
          goldLight: "#DFB76C",
          cyan: "#C5A059",
          cyanLight: "#DFB76C",
          emerald: "#C5A059",
          emeraldLight: "#E5C378",
        },
      },
      fontFamily: {
        sans: ["Geist", "Arial", "sans-serif"],
        display: ["Instrument Serif", "Georgia", "serif"],
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))",
        "gold-gradient": "linear-gradient(135deg, #F5E6C8 0%, #D4AF37 50%, #9A7B38 100%)",
        "cyan-gradient": "linear-gradient(135deg, #DFB76C 0%, #C5A059 100%)",
        "brand-mesh":
          "radial-gradient(at 0% 0%, rgba(197, 160, 89, 0.08) 0px, transparent 48%), radial-gradient(at 100% 0%, rgba(212, 175, 55, 0.05) 0px, transparent 48%)",
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
        "glow-cyan": "0 12px 35px rgba(197, 160, 89, 0.15)",
        "glow-gold": "0 12px 35px rgba(197, 160, 89, 0.20)",
        glass: "0 16px 40px -10px rgba(0, 0, 0, 0.6)",
        "glass-elevated": "0 24px 60px -12px rgba(0, 0, 0, 0.8)",
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
