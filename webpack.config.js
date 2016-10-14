const path = require('path')
const webpack = require('webpack')
const joinPath = path.join.bind(null, __dirname)

module.exports = {
  entry: {
    index: [joinPath('src/index.js')],
  },
  output: {
    publicPath: '/',
    path: joinPath('lib'),
    filename: 'index.js',
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
    resolve: {
      alias: {
        'react': path.resolve(__dirname, 'node_modules/react'),
      }
    }
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    }
  },
  postcss: webpack => [
    require('postcss-import')({addDependencyTo: webpack}),
    require('postcss-nested'),
  ],
}
