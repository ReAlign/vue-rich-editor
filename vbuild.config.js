const webpack = require('webpack');
const path = require('path');
require('jquery');

const resolve = dir => path.join(__dirname, '..', dir);

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
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')],
                options: {
                    presets: ['es2015', 'stage-2'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    }
};