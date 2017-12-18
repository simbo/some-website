import * as Webpack from 'webpack';

import { typescriptLoader } from './typescript';
import { postcssLoader } from './postcss';
import { stylusLoader } from './stylus';
import { pugLoader } from './pug';
import { vueLoader } from './vue';

export const loaders: {[key: string]: Webpack.Loader} = {
  typescript: typescriptLoader,
  postcss: postcssLoader,
  stylus: stylusLoader,
  pug: pugLoader,
  vue: vueLoader
};
