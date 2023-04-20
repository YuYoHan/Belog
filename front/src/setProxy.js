const { createProxyMiddleware } = require("http-proxy-middleware");


module.exports = function (app) {
   app.use(
       "/*",
       createProxyMiddleware({
           target: "http://43.201.113.140:8080",
           changeOrigin: true,
       })
   );
};