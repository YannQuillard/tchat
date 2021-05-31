const {resolve} = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../../webpack.config');

const compiler = webpack(webpackConfig);

module.exports = function setup(app) {
    app.use(
        webpackDevMiddleware(compiler, {
            publicPath: webpackConfig.output.publicPath,
            stats: {
                colors: true
            }
        })
    );

    app.use(webpackHotMiddleware(compiler));

    app.get('*', (req, res) => res.sendFile(resolve(__dirname, '..', '..', '..', 'build-dev', 'client', 'index.html')));
};