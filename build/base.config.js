'use strict'

const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./config.js');


module.exports = {
  context: path.resolve(__dirname, "../"),
  entry: {
    app: "./src/main.js"
  },
  output: {
    filename: "[name]-[contenthash:7].js",
    path: path.resolve(__dirname, '../dist'),
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
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
            process.env.NODE_ENV !== 'production'
            ?'style-loader' 
            :MiniCssExtractPlugin.loader,
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
            name: '/static/media/[name].[hash:7]].[ext]',
            limit: 10000, // 1kb
          }
        },{
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            name: '/static/fonts/[name].[hash:7]].[ext]',
            limit: 10000, // 1kb
          }
        }
    ],
   
  },
  plugins: [
    new HtmlWebpackPlugin({
        //使用自带模板时，设置为false,使用自己的html模板是设置为true
        inject: true,
        template: config.public.templateIndexHtml,
        minify: config.build.compress?{
          removeComments: true,        //去注释
          collapseWhitespace: true,    //压缩空格
          removeAttributeQuotes: true  //去除属性引用
        }:false,
    }),
  ]
}; 