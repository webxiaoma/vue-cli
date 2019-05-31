'use strict'
process.env.NODE_ENV = "production"

const path = require("path")
const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const baseWebpackConfig = require("./base.config.js")
const config = require("./config.js")

const proWebpackConfig = merge(baseWebpackConfig,{
    mode: "production",
    devtool: config.build.useCssMap && config.build.useJsMap?config.build.devtool:"",
    output: {
        filename: `${config.build.assetsDir}/js/[name]-[contenthash:7].js`,
        // 为生成的chunk其名字
        chunkFilename: `${config.build.assetsDir}/js/[name].js`,
        path: config.build.assetsRoot,
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `${config.build.assetsDir}/css/[name]-[contenthash:7].css`,
            chunkFilename: '[name].css'
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../public'),
                to: "static",
                ignore: ['.*']
            }
        ]),
    ],
    optimization: {
        noEmitOnErrors: true, //跳过生成阶段(emitting phase)
        minimizer: [], // 压缩配置
        splitChunks: { // 提取公共代码 查看 https://webpack.docschina.org/plugins/split-chunks-plugin/
            chunks: 'all',
            name:true,
            automaticNameDelimiter:"-",
            minSize: 200, //(默认是30000)：形成一个新代码块最小的体积
            minChunks: 1,
            maxInitialRequests: 3, //（默认是3）：一个入口最大的并行请求数
            maxAsyncRequests: 5, //（默认是5）：按需加载时候最大的并行请求数。
            cacheGroups: {
                // default: {   
                //     minChunks: 2,
                //     priority: -20,
                //     reuseExistingChunk: true,
                // },
                vendors: {
                    test: /[\\/]node_modules[\\/](jquery)[\\/]/,
                    priority: -10,
                    name:'public'
                },
                vue: {
                    test: /[\\/]node_modules[\\/](vue)[\\/]/,
                    priority: -10,
                    name: 'vue'
                }
            }
        },
        // runtimeChunk: {
        //     name: 'manifest'
        // }
    }
})


/**
 * 是否进行普通压缩
 */

if (config.build.compress){
    proWebpackConfig.optimization.minimizer.push(
        new OptimizeCssPlugin({ // css代码压缩
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            cssProcessorOptions:{
                map: config.build.useCssMap?{
                    // 不生成内联映射,这样配置就会生成一个source-map文件
                    inline: false,
                    // 向css文件添加source-map路径注释
                    // 如果没有此项压缩后的css会去除source-map路径注释
                    // annotation: true
                }:false
            },
            canPrint: true // 是否将消息打印到控制台
        })
    )

    proWebpackConfig.optimization.minimizer.push(
        new TerserPlugin({ //js代码压缩
            test: /\.js(\?.*)?$/i,
            parallel: true, // 启用多进程并行运行构建
            sourceMap: config.build.useJsMap,  //cheap-source-map 与改插件不加兼容 查看 https://github.com/webpack-contrib/terser-webpack-plugin#sourcemap
            terserOptions: {
                output: { //删除注释
                    comments: !config.build.delDubgger
                },
                compress: {//删除console 和 debugger  删除警告
                    warnings: !config.build.delDubgger,
                    drop_debugger: config.build.delDubgger,
                    drop_console: config.build.delDubgger
                }
            }

        })
    )
}

/**
 *  代码gzip压缩配置
 **/ 
if (config.build.isGzip){
    const CompressionWebpackPlugin = require('compression-webpack-plugin');
    proWebpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' +
                config.build.gzipType.join('|') +
                ')$'
            ),
            threshold: 10240, // 10千字节(kb)
            minRatio: 0.8 //压缩率达到0.8
        })
    )
}




module.exports = proWebpackConfig;