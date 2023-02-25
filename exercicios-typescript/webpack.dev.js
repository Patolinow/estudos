// for Type Script

// import * as path from 'path';
// import * as webpack from 'webpack';
// // in case you run into any typescript error when configuring `devServer`
// import 'webpack-dev-server';

// const config: webpack.Configuration = {
//   mode: 'development',
//   entry: './ex-018/index.ts',
//   module: {
//     rules: [
//       {
//         test: /\.ts?$/,
//         use: 'ts-loader',
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   output: {
//     path: path.resolve(__dirname+"/ex-018", 'dist'),
//     filename: 'index.bundle.js',
//   },

// };

// export default config;

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './ex-018/index.ts',
  devtool:'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + "/ex-018", 'dist'),
    publicPath: "/dist",
  },
  devServer: {
    static: path.join(__dirname, "ex-018"),
    compress: true,
    port: 4000,
  },
};