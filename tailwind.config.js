/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login_bg: "url('/assets/img/bg.jpg')",
      },
      colors: {
        "text-highlight": "#071437",
        "text-secondary": "#99A1B7",
        accent: "#F57F20",
      },
    },
  },
  plugins: [],
};
