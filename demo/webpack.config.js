const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const joinPath = path.join.bind(null, __dirname)
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    app: [joinPath('index.js')],
  },
  output: {
    publicPath: isProduction ? '/respinner' : '/',
    path: joinPath('dist'),
    filename: isProduction ? 'app.[hash].js' : 'app.js',
  },
  devtool: !isProduction && 'cheap-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss',
      }
    ],
  },
  postcss: webpack => [
    require('postcss-import')({addDependencyTo: webpack}),
    require('postcss-nested'),
  ],
  plugins: ([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ]).concat(isProduction ? [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {warnings: false},
      output: {comments: false},
    }),
    new HtmlWebpackPlugin({
      template: joinPath('index.html'),
      minify: false,
    }),
  ] : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]),
  devServer: {
    hot: true,
    inline: true,
    stats: {
      colors: true,
      chunks: false,
      chunkModules: false,
    },
  },
}
