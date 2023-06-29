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
      "light-green": "#88B702",
      "hover-green": "#2A7CC7",
      "light-gray": "#DEDEDE",
      "semi-gray": "#737373",
      "background-black": "#050605",
      "dark-gray": "rgba(255, 255, 255, 0.10)",
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
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
        "first-flash": "url('/images/flash/flash1.png')",
        "second-flash": "url('/images/flash/flash2.png')",
      },
      height: {
        128: "120%",
      },
    },
  },
  plugins: [],
};
