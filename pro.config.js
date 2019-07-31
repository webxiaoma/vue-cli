/**
 * 项目相关配置文件请访问：
 */

module.exports = {
    // 开发环境下
    dev: {
         /**
       * @msg 路径配置
       */
        baseUrl: "/", // 公共基础路径
        assetsDir: "static", // 指定静态资源目录
        staticDir: "./public", // 指定公共资源目录（默认public）
        // devServer
        devServer:{
          proxy: {}, // 代理
        }
    },

    // 生产环境
    build: {
        /**
       * @msg 路径配置
       */
      baseUrl: "./", // 公共基础路径
      outputDir: "./dist", // 指定输出目录
      assetsDir: "static", // 指定静态资源目录
      staticDir: "./public", // 指定公共资源目录（默认public）
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