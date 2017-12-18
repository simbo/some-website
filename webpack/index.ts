import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as Webpack from 'webpack';

import { IS_PRODUCTION } from './env';
import { paths } from './paths';
import { plugins } from './plugins';
import { loaders } from './loaders';

const watchOptions: Webpack.Options.WatchOptions = {
  poll: true,
  ignored: /node_modules/
};

const outputFilename = (path: string, ...trailers: string[]): string => {
  const trail = [path];
  if (IS_PRODUCTION) trail.push('[chunkhash]');
  trail.push(...trailers);
  return trail.join('.');
};

export const config: Webpack.Configuration = {

  context: paths.root(),

  entry: {
    polyfills: paths.src('scripts', 'polyfills.ts'),
    main: paths.src('scripts', 'main.ts')
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.ts', '.js', '.vue'],
    modules: [
      paths.root('node_modules')
    ]
  },

  output: {
    path: paths.dist(),
    filename: outputFilename('scripts/[name]', 'js'),
    sourceMapFilename: outputFilename('scripts/[name]', 'js.map'),
    chunkFilename: outputFilename('scripts/[id]', 'chunk.js')
  },

  devtool: IS_PRODUCTION ? 'source-map' : 'cheap-module-eval-source-map',

  plugins,

  watchOptions,

  devServer: {
    host: '0.0.0.0',
    port: 9000,
    contentBase: paths.dist(),
    clientLogLevel: 'warning',
    compress: true,
    watchOptions
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          loaders.typescript
        ]
      },
      {
        test: /\.json$/,
        use: [
          'json-loader'
        ]
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader?sourceMap',
            loaders.postcss,
            loaders.stylus
          ]
        })
      },
      {
        test: /\.pug$/,
        use: [
          'raw-loader',
          loaders.pug
        ]
      },
      {
        test: /\.vue$/,
        use: [
          loaders.vue
        ]
      }
    ]
  }

};
