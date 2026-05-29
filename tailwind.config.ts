import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "2.5rem",
        xl: "3rem",
        "2xl": "4rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        background: "#07111F",
        surface: "#0F1D30",
        surface2: "#132641",
        accent: "#D8D2C7",
        ink: "#FFFFFF",
        fog: "#A9B2C3",
        hairline: "rgba(255,255,255,0.08)",
        "hairline-strong": "rgba(255,255,255,0.14)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-3xl": [
          "clamp(3.75rem, 8vw, 8rem)",
          { lineHeight: "0.95", letterSpacing: "-0.035em" },
        ],
        "display-2xl": [
          "clamp(3.25rem, 6.5vw, 6.25rem)",
          { lineHeight: "0.98", letterSpacing: "-0.03em" },
        ],
        "display-xl": [
          "clamp(2.75rem, 5vw, 4.75rem)",
          { lineHeight: "1.02", letterSpacing: "-0.025em" },
        ],
        "display-lg": [
          "clamp(2.25rem, 4vw, 3.5rem)",
          { lineHeight: "1.06", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "clamp(1.75rem, 2.5vw, 2.25rem)",
          { lineHeight: "1.15", letterSpacing: "-0.015em" },
        ],
        eyebrow: [
          "0.7rem",
          { lineHeight: "1.2", letterSpacing: "0.28em" },
        ],
      },
      letterSpacing: {
        tightest: "-0.035em",
        editorial: "-0.02em",
      },
      maxWidth: {
        prose: "62ch",
        editorial: "72ch",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        700: "700ms",
        900: "900ms",
        1200: "1200ms",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 90% 70% at 50% 0%, rgba(216,210,199,0.10), transparent 60%), linear-gradient(180deg, #07111F 0%, #07111F 60%, #0a1727 100%)",
        "section-fade":
          "linear-gradient(180deg, transparent 0%, rgba(15,29,48,0.4) 100%)",
        "card-sheen":
          "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 30%)",
        "accent-fade":
          "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(216,210,199,0.08), transparent 70%)",
        "image-vignette":
          "linear-gradient(180deg, rgba(7,17,31,0) 0%, rgba(7,17,31,0.15) 60%, rgba(7,17,31,0.65) 100%)",
      },
      boxShadow: {
        premium:
          "inset 0 1px 0 0 rgba(255,255,255,0.06), 0 1px 2px 0 rgba(0,0,0,0.4), 0 24px 60px -24px rgba(0,0,0,0.7)",
        "premium-hover":
          "inset 0 1px 0 0 rgba(255,255,255,0.10), 0 2px 4px 0 rgba(0,0,0,0.5), 0 50px 110px -30px rgba(0,0,0,0.85)",
        "image-frame":
          "0 1px 0 0 rgba(255,255,255,0.06), 0 60px 120px -40px rgba(0,0,0,0.7)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out both",
      },
      borderRadius: {
        sharp: "2px",
      },
    },
  },
  plugins: [],
}

export default config
