const Chalk = require('chalk');

const config = require('./webpack');
const env = require('./webpack/env');
const NODE_ENV = require('./webpack/env').NODE_ENV;
const IS_PRODUCTION = require('./webpack/env').IS_PRODUCTION;

console.log([
  Chalk.dim('NODE_ENV'),
  IS_PRODUCTION ? '👔 ' : '👷 ',
  Chalk[IS_PRODUCTION ? 'cyan' : 'yellow'](NODE_ENV)
].join(' '));

module.exports = config;
