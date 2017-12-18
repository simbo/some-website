import * as stylus from 'stylus';
import * as Webpack from 'webpack';

import { globals } from './../globals';
import { paths } from './../paths';

export const stylusLoader: Webpack.Loader = {
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
