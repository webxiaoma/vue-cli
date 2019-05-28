'use strict'

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require("./base.js")

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        openPage:"index.html",
        contentBase: path.join(__dirname, '../dist'),
        // publicPath:"/",
        open: false, // 启动后是否自动打开默认浏览器
        //当出现编译器错误或警告时，在浏览器中显示全屏覆盖层,默认false
        overlay: true,
        // quiet:true, // 是否禁止输出编译信息
    },
    plugins:[
        new HtmlWebpackPlugin({
            //使用自带模板时，设置为false,使用自己的html模板是设置为true
            inject: true,
            template: path.resolve(__dirname, '../index.html'),
        }),
    ]
})


// console.log(devWebpackConfig)



// module.exports = devWebpackConfig;
module.exports = new Promise((resolve, reject) =>{
   
    resolve(devWebpackConfig)

});