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
  plugins: ([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     postcss: [
    //       require('postcss-import')({addDependencyTo: webpack}),
    //     ],
    //   }
    // })
  ]),
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    }
  },
}
