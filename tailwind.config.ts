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
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      colors: {
        background: "#07111F",
        surface: "#0F1D30",
        accent: "#D8D2C7",
        ink: "#FFFFFF",
        fog: "#A9B2C3",
        hairline: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem, 6vw, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-xl": ["clamp(2.5rem, 4.5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 3.5vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        eyebrow: ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.22em" }],
      },
      letterSpacing: {
        tightest: "-0.03em",
        editorial: "-0.015em",
      },
      maxWidth: {
        prose: "68ch",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(ellipse at top, rgba(216,210,199,0.08), transparent 60%)",
        "hero-grain":
          "linear-gradient(180deg, rgba(7,17,31,0) 0%, rgba(7,17,31,0.6) 60%, #07111F 100%)",
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
    },
  },
  plugins: [],
}

export default config
