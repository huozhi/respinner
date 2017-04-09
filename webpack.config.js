const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/index',
    beat: './src/components/beat',
    bounce: './src/components/bounce',
    circular: './src/components/circular',
    clock: './src/components/clock',
    rotate: './src/components/rotate',
    spin: './src/components/spin',
    wave: './src/components/wave',
  },
  output: {
    path: path.join(__dirname, 'lib'),
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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
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
