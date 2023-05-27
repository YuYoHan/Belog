const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
   app.use(
       "/*",
       createProxyMiddleware({
           target: "http://15.164.220.47:8080/",
           changeOrigin: true,
       })
   );
};