const typescriptLoader = require('./typescript');
const babelLoader = require('./babel');
const postcssLoader = require('./postcss');
const stylusLoader = require('./stylus');
const pugLoader = require('./pug');
const vueLoader = require('./vue');

module.exports = {
  typescript: typescriptLoader,
  babel: babelLoader,
  postcss: postcssLoader,
  stylus: stylusLoader,
  pug: pugLoader,
  vue: vueLoader
};
