const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/index',
    BeatLoader: './src/components/BeatLoader',
    BounceLoader: './src/components/BounceLoader',
    CircularLoader: './src/components/CircularLoader',
    ClockLoader: './src/components/ClockLoader',
    RotateLoader: './src/components/RotateLoader',
    SpinLoader: './src/components/SpinLoader',
    WaveLoader: './src/components/WaveLoader',
  },
  output: {
    path: './lib',
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
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
