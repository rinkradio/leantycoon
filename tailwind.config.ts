import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8E2DE2",
        success: "#2BB673",
        info: "#2D9CDB",
        dark: "#2C2C2C",
        lightBg: "#F5F7FA",
        borderGrey: "#E0E0E0",
      },
    },
  },
  plugins: [],
};

export default config;