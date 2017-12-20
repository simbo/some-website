const Path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OccurrenceOrderPlugin = require('webpack/lib/optimize/OccurrenceOrderPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const NamedChunksPlugin = require('webpack/lib/NamedChunksPlugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const WebpackMd5Hash = require('webpack-md5-hash');

const globals = require('./globals');
const IS_PRODUCTION = require('./env').IS_PRODUCTION;
const paths = require('./paths');

module.exports = [

  // define global constants
  new DefinePlugin(globals),

  // shimmed global-scope libs
  new ProvidePlugin({
  }),

  // separate chunk for polyfills
  new CommonsChunkPlugin({
    name: 'polyfills',
    chunks: ['polyfills']
  }),

  // separate chunk for vendor modules
  new CommonsChunkPlugin({
    name: 'vendor',
    chunks: ['main'],
    minChunks: (module) => /node_modules/.test(module.resource)
  }),

  // extract webpack runtime code to in extra chunk
  new CommonsChunkPlugin({
    name: 'manifest',
    minChunks: Infinity
  }),

  // chunk occurence count optimization
  new OccurrenceOrderPlugin(),

  // extract global-scoped css
  new ExtractTextPlugin({
    filename: `styles/[name]${ IS_PRODUCTION? '.[contenthash]' : '' }.css`,
    allChunks: true
  }),

  // extract index.html
  new HtmlWebpackPlugin({
    template: paths.src('index.pug'),
    chunksSortMode: 'dependency',
    inject: 'body'
  }),

  // copy static assets
  new CopyWebpackPlugin([
    paths.src('assets', '**', '*'),
    paths.src('favicon.ico')
  ].map((glob) => ({
    from: {
      glob,
      dot: false
    },
    to: paths.dist(),
    context: paths.src()
  })), {
    ignore: [
      '**/fonts/*/*.json'
    ]
  }),


/**
 * Production-only plugins
 */

].concat(IS_PRODUCTION ? [

  // delete generated files before build
  new CleanWebpackPlugin([
    Path.relative(paths.root(), paths.dist())
  ], {
    root: paths.root(),
    exclude: []
  }),

  // use consistent named chunks
  new NamedChunksPlugin(),

  // use consistent named modules
  new NamedModulesPlugin(),

  // generate deterministic hashes for chunks
  new WebpackMd5Hash(),

  // uglify
  new UglifyJsPlugin({
    sourceMap: true
  }),

  // new BundleAnalyzerPlugin()

] : []);
