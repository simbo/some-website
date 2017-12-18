import * as Webpack from 'webpack';

export const typescriptLoader: Webpack.Loader = {
  loader: 'ts-loader',
  options: {
    appendTsSuffixTo: [/\.vue$/]
  }
};
