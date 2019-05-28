'use strict'

const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// build
module.exports = {
  context: path.resolve(__dirname, "../"),
  entry: {
    app: "./src/main.js"
  },
  output: {
    filename: "static/js/[name]-[hash:7].js",
    path: path.resolve(__dirname, "../dist"),
    // publicPath:"/"
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          use: ["babel-loader"],
          include: [path.resolve(__dirname, "../src")],
        },{
          test: /\.css$/,
          use: [
            'style-loader',
            // MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },{
          test: /\.(png|jpe?g|gif)$/,
          loader: 'url-loader',
          options: {
            name: '/static/img/[name]-[hash:7].[ext]',
            limit: 1024, // 1kb
          }
        },{
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            name: '/static/media/[name].[hash:7].[ext]',
            limit: 10000, // 1kb
          }
        },{
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            name: '/static/fonts/[name].[hash:7].[ext]',
            limit: 10000, // 1kb
          }
        }
    ]
  },
}; 