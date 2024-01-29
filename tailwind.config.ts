import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'tea-green': '#cae7b9',
        'flax': '#f3de8a',
        'coral-pink': '#eb9486',
        'cool-gray': '#7E7F9A',
        'cadet-gray': '#97A7B3'
      },
    },
  },
  plugins: [],
};
export default config;
