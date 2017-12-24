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
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ],
  }
}
