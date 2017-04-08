const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const joinPath = path.join.bind(null, __dirname)
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    app: [joinPath('app.js')],
  },
  output: {
    publicPath: isProduction ? '/respinner' : '/',
    path: joinPath('dist'),
    filename: isProduction ? 'app.[hash].js' : 'app.js',
  },
  devtool: !isProduction && 'cheap-eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      'respinner': joinPath('../src'),
    },
  },
  plugins: ([
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('postcss-import')({addDependencyTo: webpack}),
          require('postcss-nested'),
        ],
      }
    })
  ]).concat(isProduction ? [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {warnings: false},
      output: {comments: false},
    }),
    new HtmlWebpackPlugin({
      template: joinPath('index-tpl.html'),
      minify: false,
    }),
  ] : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
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
