const ExtractTextPlugin = require('extract-text-webpack-plugin');

const IS_PRODUCTION = require('./env');
const paths = require('./paths');
const plugins = require('./plugins');
const loaders = require('./loaders');

const watchOptions = {
  poll: true,
  ignored: /node_modules/
};

const outputFilename = (path, ...trailers) => {
  const trail = [path];
  if (IS_PRODUCTION) trail.push('[chunkhash]');
  trail.push(...trailers);
  return trail.join('.');
};

module.exports = {

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
        exclude: /node_modules/,
        use: [
          loaders.babel,
          loaders.typescript
        ]
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: [
          'json-loader'
        ]
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
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
        exclude: /node_modules/,
        use: [
          'raw-loader',
          loaders.pug
        ]
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          loaders.vue
        ]
      }
    ]
  }

};
