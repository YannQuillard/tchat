const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack')

config = {
    entry: {
        main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/client/js/index.js']
    },
    output: {
        path: resolve(__dirname, 'build-dev'),
        publicPath: '/',
        filename: 'main.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.html/,
                loader: 'html-loader',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)$/,
                type: 'asset/resource'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'src', 'client', 'index.html'),
            filename: 'index.html'
        }),
        new ESLintPlugin({
            context: resolve(__dirname, 'src'),
            files: 'js/**/*.js',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    stats: 'normal'
};
module.exports = config;
