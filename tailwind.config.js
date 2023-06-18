/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      blue: "#2091F9",
      "dark-blue": "#252B42",
      "hover-blue": "#2A7CC7",
      "light-gray": "#DEDEDE",
      "semi-gray": "#737373",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1035px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        "first-block": "url('/images/First-block.png')",
      },
      height: {
        128: "120%",
      },
    },
  },
  plugins: [],
};
