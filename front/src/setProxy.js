const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
   app.use(
       "/*",
       createProxyMiddleware({
           target: "http://3.34.52.123:8080/",
           changeOrigin: true,
       })
   );
};