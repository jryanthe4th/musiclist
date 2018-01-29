const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: [
        'react-hot-loader/patch',
        'react-hot-loader/babel',
        'webpack-hot-middleware/client',
        './index.jsx',
    ],
    output: {
        filename: 'javascripts/build.js',
        path: '/',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin('stylesheets/style.css'),
    ],
    module: {
        rules: [
            {
                test: /.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components|public\/)/,
                loader: 'babel-loader',
            },
        ],
    },
};
