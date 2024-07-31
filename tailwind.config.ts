import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "4rem",
        lg: "6rem",
        xl: "8rem",
        "2xl": "10rem",
      },
    },
    extend: {
      colors: {
        background: "#fffffe",
        "background-foreground": "#272343",
        paragraph: "#2d334a",
        headline: "#272343",
        "accent-primary": "#ffd803",
        "accent-secondary": "#bae8e8",
        muted: "#2d334a",
        "muted-foreground": "#fffffe",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
