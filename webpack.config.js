const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

config = {
    entry: './src/client/js/index.js',
    output: {
        filename: 'main.js',
        path: resolve(__dirname, 'build', 'client')
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
        })
    ],
    stats: 'normal'
};
module.exports = config;
