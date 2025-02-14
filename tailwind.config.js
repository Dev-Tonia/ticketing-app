/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nanum: ["Nanum Myeongjo", "serif"],
        Roboto: ["Roboto", "serif"],
        RoadRage: ["Road Rage", "serif"],
      },
    },
  },
  plugins: [],
};
