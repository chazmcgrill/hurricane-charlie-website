const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const dotenvPlugin = new Dotenv({
  path: __dirname + '/.env'
});

const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html'
});

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
      },
      {
        test: /\.(sass|css)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=1000',
          'img-loader'
        ]
      }
    ]
  },
  plugins: [
    htmlPlugin,
    dotenvPlugin
  ]
}
