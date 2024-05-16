/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    fontFamily: {
      "font-rubik": ["Rubik"],
    },

    extend: {
      colors: {
        "soft-blue": "hsl(231, 69%, 60%)",
        "soft-Red": "hsl(0, 94%, 66%)",
        "grayish-Blue": "hsl(229, 8%, 60%)",
        "Very-Dark-Blue": "hsl(229, 31%, 21%)",
      },
    },
  },
  plugins: [],
};
