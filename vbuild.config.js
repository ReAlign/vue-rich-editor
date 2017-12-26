let webpack = require('webpack');
require('jquery');

module.exports = {
  entry: 'src/index.js',
  moduleName: 'VueRichEditor',
  html: false,
  minimize: true,
  sourceMap: false,
  extract: false,
  filename: {
    js: 'index.js'
  },
  copy: false,
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
