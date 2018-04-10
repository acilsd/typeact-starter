const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'ts-loader', options: { transpileOnly: true } },
          'babel-loader',
        ],
      },
    ],
  },  
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [new webpack.NamedModulesPlugin()],
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    publicPath: '/',
    port: 9000
  }
}
