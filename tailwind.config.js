module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      mono: ["Major Mono Display", "ui-monospace"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
