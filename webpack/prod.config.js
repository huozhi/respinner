const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: path.join(__dirname, '../src'),
  entry: {
    index: './index',
    beat: './components/beat',
    bounce: './components/bounce',
    circular: './components/circular',
    clock: './components/clock',
    rotate: './components/rotate',
    spin: './components/spin',
    wave: './components/wave',
    linear: './components/linear',
    sugarcube: './components/sugarcube',
  },
  output: {
    path: path.join(__dirname, '../lib'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
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
  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules/react'),
    }
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    }
  },
}
