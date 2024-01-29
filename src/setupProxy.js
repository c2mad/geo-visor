const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
      '/geoserver/wfs',
      createProxyMiddleware({
        //target: 'http://192.168.10.4:8085', // Reemplaza con tu URL de API
        target: 'https://ec1c-190-15-134-178.ngrok-free.app', // Reemplaza con tu URL de API
        changeOrigin: true,
        secure: false,
      })
    );
  }
  // Otras importaciones...
const apiProxy = require('./setupProxy');

module.exports = function(app) {
  // Configuración del proxy inverso para la API
  apiProxy(app);

  // Otras configuraciones o middleware adicionales...
};