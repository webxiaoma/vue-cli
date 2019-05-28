'use strict'

const path = require("path")
const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseWebpackConfig = require("./base.js")

const proWebpackConfig = merge(baseWebpackConfig,{
    mode: "production",
    plugins:[
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name]-[hash:7].css',
            chunkFilename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            //使用自带模板时，设置为false,使用自己的html模板是设置为true
            inject: true,
            // 模板路径'node_modules/html-webpack-template/index.ejs'
            // template: require('html-webpack-template'),
            template: path.resolve(__dirname, '../index.html'), 
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../public'),
                to: "static",
                ignore: ['.*']
            }
        ]),
    ]
})







module.exports = proWebpackConfig;