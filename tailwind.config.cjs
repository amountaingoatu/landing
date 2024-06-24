/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        flamingo: {
          50: "#fef4ee",
          100: "#fde6d7",
          200: "#fbc9ad",
          300: "#f7a37a",
          400: "#f37344",
          500: "#f05123", // brand
          600: "#e13515",
          700: "#bb2513",
          800: "#942018",
          900: "#781d16",
          950: "#410b09",
        },
        "deep-teal": {
          50: "#f1fcf9",
          100: "#cff8ec",
          200: "#9ff0db",
          300: "#67e1c6",
          400: "#37caad",
          500: "#1eae95",
          600: "#158c79",
          700: "#157063",
          800: "#165951",
          900: "#174a44",
          950: "#083531", // brand
        },
        "mandys-pink": {
          50: "#fef5f2",
          100: "#fdeae3",
          200: "#fdd8cb",
          300: "#fbc7b4",
          400: "#f59774", // brand
          500: "#ec7347",
          600: "#d8592a",
          700: "#b6471f",
          800: "#973e1d",
          900: "#7d381f",
          950: "#441a0b",
        },
        java: {
          50: "#f2fbfa",
          100: "#d2f5f1",
          200: "#a4ebe3",
          300: "#6fd9d2",
          400: "#3fbfba", // brand
          500: "#27a5a2",
          600: "#1d8484",
          700: "#1b696a",
          800: "#1a5455",
          900: "#1a4647",
          950: "#09282a",
        },
        "selective-yellow": {
          50: "#fffbeb",
          100: "#fff3c6",
          200: "#ffe788",
          300: "#fed44b",
          400: "#febc12", // brand
          500: "#f89f08",
          600: "#dc7703",
          700: "#b65307",
          800: "#94400c",
          900: "#79350e",
          950: "#461a02",
        },
        amaranth: {
          50: "#fff1f4",
          100: "#ffe4ea",
          200: "#fecdd8",
          300: "#fda4b8",
          400: "#fc708f",
          500: "#f53e66",
          600: "#E01C47", // brand
          700: "#bf1137",
          800: "#a01130",
          900: "#88132d",
          950: "#4c0515",
        },
        amaranthbrand: "#E01C47",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
