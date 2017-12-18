import * as Webpack from 'webpack';

import { globals } from './../globals';

export const pugLoader: Webpack.Loader = {
  loader: 'pug-html-loader',
  options: {
    data: globals
  }
};
