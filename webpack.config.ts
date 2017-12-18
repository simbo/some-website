import * as Chalk from 'chalk';

import { config } from './webpack';
import { NODE_ENV, IS_PRODUCTION } from './webpack/env';

console.log([
  Chalk.dim('NODE_ENV'),
  IS_PRODUCTION ? '👔 ' : '👷 ',
  Chalk[IS_PRODUCTION ? 'cyan' : 'yellow'](NODE_ENV)
].join(' '));

export default config;
