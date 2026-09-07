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
        background: "#F6F5F1",
        foreground: "#14232D",
        page: "#F6F5F1",
        surface: "#FFFFFF",
        "surface-soft": "#EEF1EF",
        "surface-teal": "#EDF4F3",
        "surface-warm": "#F3EEE4",
        ink: "#14232D",
        text: "#46545D",
        muted: "#6D7880",
        border: "#D9DEDB",
        accent: "#276B6D",
        "accent-dark": "#1E5558",
        gold: "#A27C42",
        "gold-soft": "#E9DFCD",
        footer: "#14232D",
        brand: {
          dark: "#14232D",
          surface: "#FFFFFF",
          surfaceLight: "#EDF4F3",
          border: "#D9DEDB",
          borderGlow: "rgba(39, 107, 109, 0.20)",
          gold: "#A27C42",
          goldLight: "#E9DFCD",
          cyan: "#276B6D",
          cyanLight: "#EDF4F3",
          emerald: "#276B6D",
          emeraldLight: "#78A5A3",
        },
      },
      fontFamily: {
        sans: ["Geist", "Arial", "sans-serif"],
        display: ["Instrument Serif", "Georgia", "serif"],
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))",
        "gold-gradient": "linear-gradient(135deg, #E9DFCD 0%, #A27C42 100%)",
        "cyan-gradient": "linear-gradient(135deg, #78A5A3 0%, #276B6D 100%)",
        "brand-mesh":
          "radial-gradient(at 0% 0%, rgba(39, 107, 109, 0.07) 0px, transparent 48%), radial-gradient(at 100% 0%, rgba(162, 124, 66, 0.06) 0px, transparent 48%)",
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
        "glow-cyan": "0 12px 35px rgba(20, 35, 45, 0.06)",
        "glow-gold": "0 12px 35px rgba(20, 35, 45, 0.06)",
        glass: "0 12px 35px rgba(20, 35, 45, 0.06)",
        "glass-elevated": "0 18px 50px rgba(20, 35, 45, 0.08)",
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
