import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-500": "#E4252C",
        "primary-700": "#7E1418",
        "primary-300": "#FFE0E1",
        secondary: "#B10134",
        "neutral-200": "#858585",
        "neutral-300": "#F3F3F3",
        // "neutral-400": "#F6F6F6",
        "neutral-500": "#F8F8F8",
        "neutral-400": "#F9F9F9",
        "neutral-600": "#858585",
        tertiary: "#F6F1F3",
      },
      dropShadow: {
        glow: [
          "0 0px 10px rgba(228, 37, 44, 0.35)",
          "0 0px 22px rgba(228, 37, 44, 0.2)",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
