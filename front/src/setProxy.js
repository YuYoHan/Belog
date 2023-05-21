const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
   app.use(
       "/*",
       createProxyMiddleware({
           target: "http://43.201.30.34:8080/",
           changeOrigin: true,
       })
   );
};