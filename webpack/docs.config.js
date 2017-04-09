const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const joinPath = path.join.bind(null, __dirname)
const isProduction = process.env.NODE_ENV === 'production'

console.log('isProduction', isProduction)

module.exports = {
  context: joinPath('../docs'),
  entry: {
    app: './app',
  },
  output: {
    publicPath: isProduction ? '/respinner' : '/',
    path: joinPath('../docs/dist'),
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
        use: isProduction ?
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader'],
          }) :
          ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      respinner: joinPath('../src'),
    },
  },
  plugins: ([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        postcss: [
          require('autoprefixer'),
          require('postcss-import')({addDependencyTo: webpack}),
          require('postcss-nested'),
        ],
      }
    })
  ]).concat(isProduction ? [
    new ExtractTextPlugin('app.css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {warnings: false},
      output: {comments: false},
    }),
    new HtmlWebpackPlugin({
      template: joinPath('../docs/index-tpl.html'),
      minify: false,
    }),
  ] : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]),
  devServer: {
    contentBase: joinPath('../docs'),
    hot: true,
    inline: true,
    stats: {
      colors: true,
      chunks: false,
      chunkModules: false,
    },
  },
}
