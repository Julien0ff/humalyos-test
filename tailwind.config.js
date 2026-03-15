/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A3A6C", // Bleu Marine (Officiel)
        secondary: "#0D2244", // Bleu Nuit (Officiel)
        accent: "#F5A623", // Or / Doré (Officiel)
        sky: "#4A7FC0", // Bleu Ciel
        "gray-light": "#F2F4F8",
        "gray-medium": "#9AA3B2",
        background: "#F8FAFC",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        arial: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}
