const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './ex-018/index.ts',
  devtool: 'inline-source-map',
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
  plugins: [
    new CleanWebpackPlugin(),
  ],
};