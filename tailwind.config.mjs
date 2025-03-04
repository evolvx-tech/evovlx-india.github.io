/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Roboto",
          "Slab Grotesque",
          "Catamaran",
          "Helvetica",
          "Arial",
          "Lucida",
          "sans-serif",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans
        ]
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
