/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "bg-gradient-1": "rgba(135, 0, 255, 0.26)",
      "bg-gradient-2": "rgba(135, 0, 255, 0)",
      "bg-gradient-3": "rgba(0, 138, 238, 0.33)",
      "background-1": "#ffffff",
      primary: "#6A67FF",
      text1: "#595974",
    },
  },
  plugins: [],
};
