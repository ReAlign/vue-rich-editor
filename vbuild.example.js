const path = require('path');
const webpack = require('webpack');

const resolve = dir => path.join(__dirname, '..', dir);

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
        rules: [{
            test: /\.js$/,
            exclude: /node_modules(?!\/quill-image-drop-module|quill-image-resize-module)/,
            loader: 'babel-loader',
            include: [resolve('src')],
            options: {
                presets: ['es2015', 'stage-2'],
                plugins: ['transform-runtime']
            },
            query: {}
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            'window.Quill': 'quill'
        })
    ]
};
