const browsers = require('./../browsers');

module.exports = {
  loader: 'babel-loader',
  options: {
    presets: [
      ['@babel/preset-env', {
        targets: {
          browsers
        }
      }]
    ],
    plugins: [
      '@babel/transform-runtime'
    ]
  }
};
