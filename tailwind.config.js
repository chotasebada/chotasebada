/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A0A0A",
        secondary: "#111111",
        tertiary: "#1A1A1A",
        accent: "#FF4D00",
        gold: "#FFD700",
        navy: {
          800: "#1e293b",
          900: "#0f172a",
        },
        teal: {
          500: "#14b8a6",
          600: "#0d9488",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#A0A0A0",
        },
        border: {
          light: "#2A2A2A",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["DM Sans", "Outfit", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["5rem", { lineHeight: "1.1" }],
        "display-xl": ["4rem", { lineHeight: "1.1" }],
        "display-lg": ["3rem", { lineHeight: "1.2" }],
        "display-md": ["2.25rem", { lineHeight: "1.2" }],
        "heading-lg": ["2rem", { lineHeight: "1.3" }],
        "heading-md": ["1.5rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
      },
      spacing: {
        safe: "env(safe-area-inset-bottom)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backdropFilter: {
        "blur-xl": "blur(20px)",
      },
      boxShadow: {
        "glow-orange": "0 0 20px rgba(255, 77, 0, 0.3)",
        "glow-gold": "0 0 20px rgba(255, 215, 0, 0.2)",
      },
    },
  },
  plugins: [],
}
