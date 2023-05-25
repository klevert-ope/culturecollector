/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        ClashGrotesk: ["ClashGrotesk", "sans-serif"],
        Technor: ["Technor", "sans-serif"],
      },
      maxWidth: {
        xxs: "190px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
