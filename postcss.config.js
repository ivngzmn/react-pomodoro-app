const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [tailwindcss("./styles/index.css"), require("autoprefixer")],
};
