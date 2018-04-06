const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  devtool: 'inline-source-map',
  module: {    
    rules: [ 
      {
        test: /\.ts(x?)$/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'ts-loader' }
        ]
      },

      // {
      //   test: /\.tsx?$/,
      //   use: [
      //     'ts-loader', // (or awesome-typescript-loader)
      //     {
      //       loader: 'babel-loader',
      //       options: {
      //         plugins: [
      //           '@babel/plugin-syntax-typescript',
      //           '@babel/plugin-syntax-decorators',
      //           '@babel/plugin-syntax-jsx',
      //           'react-hot-loader/babel',
      //         ],
      //       },
      //     }
      //   ],
      // }

      {
        test: /\.js(x?)$/,
        use: [
          { loader: 'babel-loader' }
        ]
      }
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    publicPath: '/',
    hot: true,
    watchOptions: { aggregateTimeout: 300, poll: true },
    port: 9000
  }
};