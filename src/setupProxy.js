const { createProxyMiddleware } = require('http-proxy-middleware');
const host_api = require('./utils/host_api');

module.exports = function (app) {
  app.use(
    "/geoserver/wfs",
    createProxyMiddleware({
      target: host_api,
      changeOrigin: true,
      secure: false,
    })
  );
};