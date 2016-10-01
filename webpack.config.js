const path = require('path')
const webpack = require('webpack')
const joinPath = path.join.bind(null, __dirname)
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    index: [joinPath('src/index.js')],
  },
  output: {
    publicPath: '/',
    path: joinPath('lib'),
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss',
      },
    ],
  },
  postcss: webpack => [
    require('postcss-import')({addDependencyTo: webpack}),
    require('postcss-nested'),
  ],
  plugins: isProduction && [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {warnings: false},
      output: {comments: false},
    }),
  ],
}
