/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        candy: "#FBC7C0",
        cookie: "#9B6761",
        letter: {
          candy: "#FFF0EE",
          jelly: "#FFF6EE",
          mint: "#F9FFEE",
          bluelemon: "#EEFAFF",
          cotton: "#EEF1FF",
          taffy: "#FAEEFF",
          lollipop: "#FFEEF9",
          fudge: "#E8AFA8",
          mentos: "#E4DDFF",
        },
      },
    },
  },
  plugins: [],
};
