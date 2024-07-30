/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      Cyan: "hsl(180, 66%, 49%)",
      "Dark-Violet": "hsl(257, 27%, 26%)",
      Red: "hsl(0, 87%, 67%)",
      Gray: "hsl(0, 0%, 75%)",
      "Grayish-Violet": "hsl(257, 7%, 63%)",
      "Very-Dark-Blue": "hsl(255, 11%, 22%)",
      "Very-Dark-Violet": "hsl(260, 8%, 14%)",
      white: "#fff",
      lightgray: "hsl(0, 0%, 95%)",
    },
    extend: {
      backgroundImage: {
        "bg-boost-mobile": "url('/images/bg-boost-mobile.svg')",
        "bg-boost-desktop": "url('/images/bg-boost-desktop.svg')",
        "bg-shorten-mobile": "url('/images/bg-shorten-mobile.svg')",
        "bg-shorten-desktop": "url('/images/bg-shorten-desktop.svg')",
      },
    },
    plugins: [],
  },
};
