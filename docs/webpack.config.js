const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pkg = require('../package.json')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: path.resolve(__dirname, './app'),
  output: {
    publicPath: `/${isProduction ? pkg.name : ''}`,
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js',
  },
  devtool: !isProduction && 'cheap-eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
    }),
    !isProduction && new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
  devServer: {
    contentBase: path.resolve('./dist'),
    hot: true,
    inline: true,
    stats: {
      colors: true,
      chunks: false,
      chunkModules: false,
    },
  },
}
