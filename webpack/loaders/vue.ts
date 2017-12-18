import * as Webpack from 'webpack';

import { postcssLoader } from './postcss';
import { stylusLoader } from './stylus';
import { pugLoader } from './pug';
import { typescriptLoader } from './typescript';

export const vueLoader: Webpack.Loader = {
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
        typescriptLoader
      ]
    }
  }
};
