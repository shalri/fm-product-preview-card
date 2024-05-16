/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        "ppc-dark-cyan": "hsl(158, 36%, 37%)",
        "ppc-cream": "hsl(30, 38%, 92%)",
        // Neutral
        "ppc-very-dark-blue": "hsl(212, 21%, 14%)",
        "ppc-dark-grayish-blue": "hsl(228, 12%, 48%)",
        "ppc-white": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        fraunces: ["Fraunces"],
      },
      fontWeight: {
        regular: 500,
        bold: 700,
      },
      fontSize: {
        body: "14px",
      },
    },
  },
  plugins: [],
};
