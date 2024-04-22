const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
      '/geoserver/wfs',
      createProxyMiddleware({
        target: host_api, // Reemplaza con tu URL de API
        changeOrigin: false,
        secure: true,
      })
    );
  }
  // Otras importaciones...
const apiProxy = require('./setupProxy');
const { default: host_api } = require('utils/host_api');

module.exports = function(app) {
  // Configuración del proxy inverso para la API
  apiProxy(app);

  // Otras configuraciones o middleware adicionales...
};