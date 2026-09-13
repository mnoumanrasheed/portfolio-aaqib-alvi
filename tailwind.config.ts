import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        background: "var(--page)",
        foreground: "var(--text-primary)",
        page: "var(--page)",
        surface: "var(--surface)",
        "surface-soft": "var(--surface-soft)",
        "surface-elevated": "var(--surface-elevated)",
        "surface-teal": "var(--surface-soft)",
        "surface-warm": "var(--surface-elevated)",
        ink: "var(--text-primary)",
        text: "var(--text-secondary)",
        muted: "var(--text-muted)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        accent: "var(--accent-text)",
        "accent-dark": "var(--accent-decorative)",
        gold: "var(--accent-text)",
        "gold-decor": "var(--accent-decorative)",
          "warmWhite": "#FAF9F5",
          "charcoal": "#1A1A2E",
        "gold-soft": "var(--gold-soft)",
        footer: "var(--footer)",
        brand: {
          dark: "var(--page)",
          surface: "var(--surface)",
          surfaceLight: "var(--surface-elevated)",
          border: "var(--border)",
          borderGlow: "var(--gold-soft)",
          gold: "var(--accent-text)",
          goldLight: "var(--accent-decorative)",
          cyan: "var(--accent-text)",
          cyanLight: "var(--accent-decorative)",
          emerald: "var(--accent-text)",
          emeraldLight: "var(--accent-decorative)",
        },
      },
      fontFamily: {
        sans: ["Geist", "Arial", "sans-serif"],
        display: ["Instrument Serif", "Georgia", "serif"],
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "glow-gold": "0 12px 35px var(--gold-soft)",
        glass: "var(--card-shadow)",
        "glass-elevated": "var(--card-hover-shadow)",
      },
      borderRadius: {
        xl: "0.5rem",
        "2xl": "0.75rem",
        "3xl": "1rem",
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
