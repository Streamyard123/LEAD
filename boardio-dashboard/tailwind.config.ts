import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1c1917",
        cream: "#f9f8f6",
        accent: "#c9a87c",
        "accent-dark": "#b08d5f",
        muted: "#78716c",
        surface: "#ffffff",
        "surface-alt": "#f5f4f2",
        border: "#e7e5e4",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      borderRadius: {
        sm: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
