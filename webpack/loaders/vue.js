const postcssLoader = require('./postcss');
const stylusLoader = require('./stylus');
const pugLoader = require('./pug');
const typescriptLoader = require('./typescript');
const babelLoader = require('./babel');

module.exports = {
  loader: 'vue-loader',
  options: {
    loaders: {
      styl: [
        'vue-style-loader',
        'css-loader?sourceMap',
        postcssLoader,
        stylusLoader
      ],
      pug: [
        pugLoader
      ],
      ts: [
        babelLoader,
        typescriptLoader
      ]
    }
  }
};
