/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scaleUp: "scaleUp 0.4s ease-in-out",
        scaleDown: "scaleDown 0.5s ease-in-out",
        fadeIn: "fadeIn 0.5s ease-in-out",
        heightOpen: "heightOpen 0.5s ease-in-out",
      },
      keyframes: {
        scaleUp: {
          "0%": { transform: "translate(-50%, -50%) scale(0.8)", opacity: 0.5 },
          "100%": { transform: "translate(-50%, -50%) scale(1)", opacity: 1 },
        },
        scaleDown: {
          "0%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: 0.8 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        heightOpen: {
          "0%": { maxHeight: "0" },
          "100%": { maxHeight: "3000px" },
        },
      },
    },
  },
  plugins: [],
};
