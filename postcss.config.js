const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const px2rem = require('postcss-pxtorem');
module.exports = {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    px2rem({
      rootValue: 75,
      unitPrecision: 5,
      propList: ['*'],
      // exclude: /node_modules/,
    }),
  ],
};