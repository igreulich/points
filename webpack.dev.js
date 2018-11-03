const webpack = require('webpack'); // eslint-disable-line
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line

module.exports = {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  entry: {
    app: ['react-hot-loader/patch', './src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [{ test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  target: 'web',
  devServer: {
    port: 3000,
    contentBase: '/dist',
    publicPath: '/',
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './src/templates/index.html',
      title: 'Kahoot Game Dev',
    }),
  ],
};
