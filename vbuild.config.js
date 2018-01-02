let webpack = require('webpack');
require('jquery');

module.exports = {
  entry: 'src/index.js',
  moduleName: 'VueRichEditor',
  html: false,
  minimize: false,
  sourceMap: false,
  extract: false,
  filename: {
    js: 'index.js'
  },
  copy: true,
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  }
}