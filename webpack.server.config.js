const argv = require('yargs-parser')(process.argv.slice(2))
const _mode = argv.mode || 'development'
const _modeFlag = _mode == 'development'
// const mergeConfig = require(`./config/webpack.${_mode}.js`)

const { join, resolve } = require('path')
// const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// const baseCssLoaders = _modeFlag ? ['style-loader'] : [MiniCssExtractPlugin.loader]
const webpackConfig = {
  mode: "development",
  target: "node",
  entry: {
    app: join(__dirname, './src/web/index-server.tsx')
  },
  output: {
    filename: "assets/server-entry.js",
    path: resolve(__dirname, './dist'),
    libraryTarget: "commonjs2"
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
    alias: {
      "@assets": resolve("src/web/assets"),
      "@components": resolve("src/web/components"),
      "@models": resolve("src/web/models"),
      "@pages": resolve("src/web/pages"),
      "@utils": resolve("src/web/utils")
    },
    modules: ["node_modules", resolve("src")],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
  ]
}

// module.exports = merge(webpackConfig, mergeConfig)
module.exports = webpackConfig