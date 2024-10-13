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
        primary: "#2B2D42", // Dark slate blue
        secondary: "#8D99AE", // Light grayish blue for contrast
        accent: "#EF233C", // Bright red for highlights and call-to-action
        background: "#1F1F2A", // Very dark gray for the background
      },
    },
  },
  plugins: [],
};

export default config;
