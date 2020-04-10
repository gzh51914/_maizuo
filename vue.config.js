module.exports = {
    devServer: {
        // open:true,//默认开启浏览器
        port:8000,//更改默认端口号为8000
        // overlay: { // 遮罩层
        //   warnings: false,
        //   errors: false
        // },
        proxy:{ //代理
          "/info":{
            target:"http://139.196.84.106:3000",
            changeOrigin:true,
            pathRewrite:{
              "^/info":""
            },
          }
        }
    },
    lintOnSave:false, //直接关闭eslint检查
    configureWebpack: {
      resolve: {
        alias: {
          'assets': '@/assets',
          'con': '@/components',
          'views': '@/views',
        }
      }
    },
    chainWebpack: config => {
      // 移除 prefetch 插件
      config.plugins.delete('prefetch')
  
      // 或者
      // 修改它的选项：
      // config.plugin('prefetch').tap(options => {
      //   options[0].fileBlacklist = options[0].fileBlacklist || []
      //   options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
      //   return options
      // })
    }
}