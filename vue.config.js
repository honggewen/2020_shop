const path = require('path')
const px2rem = require('postcss-px2rem')

module.exports = {

  // runtimeComplier: true,
  // lintOnSave: false, /// 关闭Eslint的规则
  css: { // 添加postcss
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            remUnit: 37.5  //设计稿等分后的rem值375/10
          })
        ]
      }
    }
  },

  configureWebpack: {  // 内部写webpack原生配置
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: { // 路径别名
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components')
      }
    }
  },

  devServer: {
    proxy: {
      // 处理以/api开头路径的请求
      '/api': {
        target: 'http://localhost:4000',
        pathRewrite: {
          '^/api' : '' // 转发请求时去除路径前面的api
        },
        changeOrigin: true, // 支持跨域, 如果协议/主机也不相同 必须加上
      }
    }
  }
}