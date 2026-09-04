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
        background: "#030712",
        foreground: "#F8FAFC",
        brand: {
          dark: "#030712",
          surface: "#080F1E",
          surfaceLight: "#0F1A30",
          border: "rgba(255, 255, 255, 0.08)",
          borderGlow: "rgba(0, 210, 255, 0.3)",
          gold: "#D4AF37",
          goldLight: "#F5E7A3",
          cyan: "#00D2FF",
          cyanLight: "#7EE7FC",
          emerald: "#10B981",
          emeraldLight: "#6EE7B7",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Outfit", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))",
        "gold-gradient": "linear-gradient(135deg, #F5E7A3 0%, #D4AF37 50%, #AA8010 100%)",
        "cyan-gradient": "linear-gradient(135deg, #A5F3FC 0%, #00D2FF 50%, #0284C7 100%)",
        "brand-mesh":
          "radial-gradient(at 0% 0%, rgba(0, 210, 255, 0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(212, 175, 55, 0.12) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(16, 185, 129, 0.1) 0px, transparent 50%)",
      },
      animation: {
        "pulse-slow": "pulse 7s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "floatSlow 7s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite linear",
        "spin-slow": "spin 22s linear infinite",
        "ping-slow": "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
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
        "glow-cyan": "0 0 40px -5px rgba(0, 210, 255, 0.4)",
        "glow-gold": "0 0 40px -5px rgba(212, 175, 55, 0.4)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.4)",
        "glass-elevated": "0 24px 60px 0 rgba(0, 0, 0, 0.65)",
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
