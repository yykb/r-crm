const argv = require('yargs-parser')(process.argv.slice(2))
const _mode = argv.mode || 'development'
const _modeFlag = _mode == 'development'
const mergeConfig = require(`./config/webpack.${_mode}.js`)

const { join, resolve } = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const baseCssLoaders = _modeFlag ? ['style-loader'] : [MiniCssExtractPlugin.loader]

const Jarvis = require("webpack-jarvis");
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

const webpackConfig = {
  entry: {
    app: join(__dirname, './src/web/index.tsx')
  },
  output: {
    path: resolve(__dirname, './dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [resolve("src")],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: _modeFlag ? ['dynamic-import-node'] : []
          }
        }
      },
      {
        test: /\.(c|sc|sa)ss$/,
        use: [
          ...baseCssLoaders,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|woff|woff2|ttf|svg|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: _modeFlag ? 'images/[name].[ext]' : 'images/[name].[hash:5].[ext]',
              publicPath: _modeFlag ? '/' : '/public/'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      "@components": resolve(__dirname, './src/web/components'),
      "@pages": resolve(__dirname, './src/web/pages')
    }
  },
  plugins: [
    new ProgressBarPlugin(),
    new Jarvis({ port: 1337 }),
    new HtmlWebpackPlugin({
      title: 'CRM系统',
      template: join(__dirname, 'src/web/index.html'),
      filename: 'views/index.html'
    })
  ]
}

module.exports = merge(webpackConfig, mergeConfig)