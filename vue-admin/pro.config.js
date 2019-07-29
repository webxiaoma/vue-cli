module.exports = {
    // 开发环境下
    dev: {
        hot: true,
        proxyTable: {// 配置代理
           
        }, 
    },

    // 生产环境
    build: {
        baseUrl:"/",
    },
    public:{
        externals: {// 排除打包库
            // "vue":["Vue"],
        },
        webpackConfig(config) {
            // config webpack的配置
        }
    }

  
};