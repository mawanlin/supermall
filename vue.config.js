
module.exports={
  configureWebpack:{
    resolve:{
      // extensions:[] 配置后缀名
      alias:{
        // 配置别名
        // '@':'src' 默认是有的
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  }
}