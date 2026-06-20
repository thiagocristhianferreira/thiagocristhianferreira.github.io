/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Acento principal — índigo suave
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f56e0",
          700: "#4338ca",
        },
        // Secundário para gradientes pontuais — violeta/sky
        accent: {
          400: "#38bdf8",
          500: "#0ea5e9",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        // Sombras suaves e difusas (em vez de shadow-2xl dura)
        soft: "0 10px 30px -12px rgba(79, 70, 229, 0.18), 0 4px 12px -6px rgba(15, 23, 42, 0.06)",
        "soft-lg": "0 24px 50px -20px rgba(79, 70, 229, 0.25), 0 8px 20px -8px rgba(15, 23, 42, 0.08)",
      },
      keyframes: {
        "blob-drift": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(20px, -30px) scale(1.05)" },
          "66%": { transform: "translate(-15px, 15px) scale(0.97)" },
        },
      },
      animation: {
        blob: "blob-drift 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
