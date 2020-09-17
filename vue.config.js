const path = require('path')
const px2rem = require('postcss-px2rem')

module.exports = {

  // runtimeComplier: true,
  // lintOnSave: false, /// 关闭Eslint的规则
  css: { // 添加postcss
    loaderOptions: {
      postcs: {
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

  deServer: {

  }
}