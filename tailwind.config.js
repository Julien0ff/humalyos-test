/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#002B5B", // Bleu Marine Institutionnel
        secondary: "#D32F2F", // Rouge Signalisation
        accent: "#F2FF00", // Jaune Sécurité
        background: "#F8FAFC",
      },
    },
  },
  plugins: [],
}
