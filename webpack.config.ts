// const path = require('path');
// const webpack = require('webpack');

// module.exports = {
//   entry: ['./src/index'],
//   output: {
//     path: path.join(__dirname, 'build'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: [{ loader: 'ts-loader', options: { transpileOnly: true } }],
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.ts', '.tsx', '.js', '.jsx'],
//     alias: {
//       'react-dom': 'react-hot-loader',
//       styled: path.resolve(__dirname, 'src/styled/'),
//       stores: path.resolve(__dirname, 'src/stores/'),
//       ui: path.resolve(__dirname, 'src/ui/'),
//     },
//   },
//   plugins: [new webpack.HotModuleReplacementPlugin()],
//   devServer: {
//     contentBase: path.join(__dirname, 'build'),
//     historyApiFallback: true, // need this for our clientside routing
//     publicPath: '/',
//     port: 9000,
//   },
// };
