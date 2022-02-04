const px2rem = require('postcss-pxtorem');
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    px2rem({
      rootValue: 75,
      unitPrecision: 5,
      propList: ['*'],
      exclude: /node_modules/,
    }),
  ],
};