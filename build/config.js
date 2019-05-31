
const fs = require('fs');
const path = require("path")
const merge = require('webpack-merge')
const proConfig = {};

let existsConfig = fs.existsSync("../pro.config.js")

if (existsConfig){
    proConfig = require('../pro.config.js');
}

module.exports = merge({
    // 开发环境下
    dev:{
        assetsPublicPath:"", // 公共路径

        /**
         * devServe配置 webpack-dev-server
         **/
        autoOpenBower: false, // 自动打开浏览器
        host:'localhost',
        port:'8081',
        useOverlay:"",
        hot:true, // 模块热替换
        systemErrorNotifier:true, //是否开启系统错误通知

        /**
         * source-map
         */
        devtool:'inline-source-map'

    },

    // 生产环境
    build:{
        /**
         * 路径配置
         */
        assetsRoot: path.resolve(__dirname, '../dist'), //
        assetsDir:'static',
        assetsPublicPath:'https://webxiaoma.com',



        /**
         * source-map 配置
         */
        useCssMap:false, // 是否开启css source-map
        useJsMap: false, // 是否开启js source-map
        devtool: 'source-map', // source-map类型
        
        /**
         * 代码压缩
         * @http CompressionWebpackPlugin 启用gzip压缩 https://github.com/webpack-contrib/compression-webpack-plugin
         * @msg 普通压缩和gzip压缩互不影响
         */
            
        // 普通压缩(使用terser-webpack-plugin)
        compress:true, // 是否启用普通压缩
        delDubgger: true, // 打包时是否删除console 和 debugger  删除警告，注释

        //启用gzip压缩
        isGzip:false,
        gzipType:['js','css'],


    },
    public: { // 公共配置
        templateIndexHtml: path.resolve(__dirname, '../index.html'), // html模板
        addProcessEvn:{ // 加入系统环境变量,已添加的系统变量不会再次被添加
            
        }

    }
},proConfig)