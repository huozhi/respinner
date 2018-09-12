const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  context: path.join(__dirname, '../src'),
  entry: {
    index: './index',
  },
  output: {
    path: path.join(__dirname, '../lib'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    react: 'react',
  },
}
