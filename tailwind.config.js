/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        red: "#E20613",
      },
      backgroundImage: {
        "home-background": "url('assets/images/fondo-home.jpg')",
      },
    },
  },

  plugins: [require("@tailwindcss/line-clamp")],
};
