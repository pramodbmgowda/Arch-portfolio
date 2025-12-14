import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: { 950: '#1e1b4b' },
        teal: { 300: '#5eead4' },
        rose: { 300: '#fda4af' },
      },
    },
  },
  plugins: [],
};
export default config;