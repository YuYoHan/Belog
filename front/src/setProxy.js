const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
   app.use(
       "/*",
       createProxyMiddleware({
           target: "http://3.37.89.59:8080/",
           changeOrigin: true,
       })
   );
};