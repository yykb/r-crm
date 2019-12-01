const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Jarvis = require("webpack-jarvis");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    // externals: {
    //     react: 'React',
    //     'react-dom': 'ReactDOM',
    //     'react-router-dom': 'ReactRouterDOM'
    // },
    output: {
        filename: 'assets/scripts/[name].[contenthash:5].bundle.js',
    },
    optimization: {
        minimize: true,
        runtimeChunk: {
            name: 'manifest'
        },
        splitChunk: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            masAsyncRequests: 5
        }
    },
    plugins: [

        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash:5].css',
            chunkFilename: 'styles/[name].[contenthash:5].css'
        }),
        new BundleAnalyzerPlugin({ analyzerPort: 3011 })
    ]
}