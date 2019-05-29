'use strict'

process.env.NODE_ENV = "development"

const path = require('path')
const open = require('open')
const webpack = require('webpack')
const ProgressBar = require('single-line-log')
const merge = require('webpack-merge')
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
        host:'0.0.0.0', // ip 和localhost 都可以访问
        // quiet:true, // 是否禁止输出编译信息
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
       
    ]
})


// console.log(devWebpackConfig) 



module.exports = new Promise((resolve, reject) =>{
   
    resolve(devWebpackConfig)

});