'use strict'
process.env.NODE_ENV = "production"

const path = require("path")
const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const baseWebpackConfig = require("./base.config.js")
const config = require("./config.js")

const proWebpackConfig = merge(baseWebpackConfig,{
    mode: "production",
    output: {
        filename: `${config.build.assetsDir}/js/[name]-[contenthash:7].js`,
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
        // new webpack.optimize.UglifyJsPlugin({
        //     //删除注释
        //     output: {
        //         comments: !config.build.delDubgger
        //     },
        //     //删除console 和 debugger  删除警告
        //     compress: {
        //         warnings: !config.build.delDubgger,
        //         drop_debugger: config.build.delDubgger,
        //         drop_console: config.build.delDubgger
        //     }
        // })
    ],
    optimization: {
        noEmitOnErrors: true, //跳过生成阶段(emitting phase)
        minimizer: [],
    }
})



/**
 * 是否进行普通压缩
 */

if (config.build.compress){
    proWebpackConfig.plugins.push(
        new OptimizeCss({ // css代码压缩
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
        })
    )

    proWebpackConfig.optimization.minimizer.push(
        new TerserPlugin({ //js代码压缩
            test: /\.js(\?.*)?$/i,
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
            threshold: 10240, // 10240b
            minRatio: 0.8 //压缩率达到0.8
        })
    )
}




module.exports = proWebpackConfig;