const {createProxyMiddleware: proxy} = require('http-proxy-middleware')

// 这种配置代理可以配置多个，配置一个代理可以直接在package.json中追加配置"proxy":"http://192.168.3.70:8080"
module.exports = function(app){
  app.use(proxy('/api',{
    target: 'http://192.168.3.70:49998',
    changeOrigin: true,
    pathRewrite: {
      "^/api": ''
    }
  }),
  // proxy()
  )
}



