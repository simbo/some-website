import * as Path from 'path';
import * as CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin';
import * as ContextReplacementPlugin from 'webpack/lib/ContextReplacementPlugin';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as OccurrenceOrderPlugin from 'webpack/lib/optimize/OccurrenceOrderPlugin';
import * as UglifyJsPlugin from 'webpack/lib/optimize/UglifyJsPlugin';
import { DefinePlugin, ProvidePlugin, NamedChunksPlugin, NamedModulesPlugin } from 'webpack';
import * as Webpack from 'webpack';
import * as WebpackMd5Hash from 'webpack-md5-hash';

import { globals } from './globals';
import { IS_PRODUCTION } from './env';
import { paths } from './paths';

export const plugins: Webpack.Plugin[] = [

  // delete generated files before build
  new CleanWebpackPlugin([
    Path.relative(paths.root(), paths.dist())
  ], {
    root: paths.root(),
    exclude: [],
    verbose: true,
    dry: true
  }),

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

  // use consistent named chunks
  new NamedChunksPlugin(),

  // use consistent named modules
  new NamedModulesPlugin(),

  // generate deterministic hashes for chunks
  new WebpackMd5Hash(),

  // uglify
  new UglifyJsPlugin({
    sourceMap: true,
    beautify: false,
    output: {
      comments: false
    },
    mangle: {
      screw_ie8: true
    },
    compress: {
      screw_ie8: true,
      warnings: false,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true,
      negate_iife: false
    }
  })

] : []);
