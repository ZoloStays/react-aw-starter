var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

var env = 'production';

module.exports = {
  mode: env,
  entry: path.join(__dirname, '../../client/index.js'),
  output: {
    filename: '[name].bundle.[hash].js',
    chunkFilename: '[name].bundle.[hash].js',
    path: path.join(__dirname, '../../build')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loaders: 'babel-loader',
        options: {
          plugins: [
            [
              'styled-components',
              {
                ssr: true
              }
            ]
          ]
        }
      },
      {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin({
      path: path.join(__dirname, '../../build')
    }),
    new HtmlWebpackPlugin({
      title: 'Adaptive Web Starter Kit',
      template: 'client/public/main.html',
      filename: 'main.html',
      minify: {
        collapseWhitespace: false,
        removeComments: true,
        useShortDoctype: false
      }
    })
  ]
};