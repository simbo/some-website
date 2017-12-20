const stylus = require('stylus');

const globals = require('./../globals');
const paths = require('./../paths');

module.exports = {
  loader: 'stylus-loader',
  options: {
    ...globals,
    paths: [
      paths.src('styles', 'imports'),
      paths.root('node_modules')
    ],
    'include css': true,
    'inline-url': stylus.url({
      path: paths.src,
      limit: false
    })
  }
};
