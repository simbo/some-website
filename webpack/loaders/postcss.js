const autoprefixer = require('autoprefixer');
const cssMqpacker = require('css-mqpacker');
const cssnano = require('cssnano');

const IS_PRODUCTION = require('./../env').IS_PRODUCTION;
const browsers = require('./../browsers');

module.exports = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    plugins: [
      autoprefixer({
        browsers,
        remove: false
      }),
      cssMqpacker()
    ].concat(IS_PRODUCTION ? [
      cssnano({
        zindex: false
      })
    ] : [])
  }
};
