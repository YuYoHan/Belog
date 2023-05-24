const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
   app.use(
       "/*",
       createProxyMiddleware({
           target: "http://43.200.8.104:8080/",
           changeOrigin: true,
       })
   );
};