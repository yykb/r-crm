const { join } = require("path")

module.exports = {
    output: {
        filename: 'assets/scripts/[name].bundle.js',
    },
    devServer: {
        contentBase: join(__dirname, '../dist'),
        compress: true,
        port: 9000,
        open: 'chrome',
        hot: true,
        overlay: {
            errors: true,
            warnings: true
        },
        disableHostCheck: true,
        publicPath: '/',
        historyApiFallback: true
    }
}