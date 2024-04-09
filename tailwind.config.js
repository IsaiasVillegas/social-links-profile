/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#141414",
        "dark-grey": "#1f1f1f",
        grey: "#333333",
        white: "#ffffff",
        "neon-green": "#c4f82a",
      },
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
