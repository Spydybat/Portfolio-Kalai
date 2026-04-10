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
        background: "#050B14",
        foreground: "#F3F4F6",
        accent: "#FACC15", // yellow-400
        darkBase: "#0A0F1A",
      },
    },
  },
  plugins: [],
};
export default config;

