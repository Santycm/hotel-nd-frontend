import tailwindcssAnimated from "tailwindcss-animated";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mainColor": "#7728bb",
        "secondColor": "#005c28",
        "thirdColor": "#a8e6cf",
        "contentColor": "#0c202d",
        "contentColorv": "#20384C"
      },
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
      },
    },
  },
  plugins: [tailwindcssAnimated],
};

