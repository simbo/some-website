import * as autoprefixer from 'autoprefixer';
import * as cssMqpacker from 'css-mqpacker';
import * as cssnano from 'cssnano';
import * as Webpack from 'webpack';

import { IS_PRODUCTION } from './../env';

export const postcssLoader: Webpack.Loader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    plugins: [
      autoprefixer({
        browsers: [
          '> 0.25%',
          'ie >= 11'
        ],
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
