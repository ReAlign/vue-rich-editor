let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: 'example/index.js',
  dist: 'dist-example',
  webpack: {
    output: {
      path: path.resolve(__dirname, 'dist-example/'),
      publicPath: ''
    }
  },
  filename: {
    js: '[name].js',
    css: '[name].css'
  },
  html: {
    title: 'VueRichEditor'
  },
  copy: true,
  minimize: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules(?!\/quill-image-drop-module|quill-image-resize-module)/,
        loader: 'babel-loader',
        query: {}
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'window.Quill': 'quill'
    })
  ]
}
