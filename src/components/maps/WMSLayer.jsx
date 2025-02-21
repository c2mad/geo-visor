import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.wms";
import PropTypes from "prop-types";

const WMSLayer = ({ url, params, activeBaseLayer }) => {
  const map = useMap();
  const wmsLayerRef = useRef(null);

  useEffect(() => {
    if (!map) return;

    // Si ya existe una capa WMS, la removemos antes de añadir la nueva
    if (wmsLayerRef.current) {
      map.removeLayer(wmsLayerRef.current);
    }

    // Crear la nueva capa WMS y añadirla sobre la base
    wmsLayerRef.current = L.tileLayer.wms(url, params);
    map.addLayer(wmsLayerRef.current);
    wmsLayerRef.current.bringToFront();
    return () => {
      if (wmsLayerRef.current) {
        map.removeLayer(wmsLayerRef.current);
      }
    };
  }, [map, url, params, activeBaseLayer]); // Se ejecuta cuando cambia la capa base

  return null;
};

WMSLayer.propTypes = {
  url: PropTypes.string.isRequired,
  params: PropTypes.object.isRequired,
  activeBaseLayer: PropTypes.string, // Agregamos la capa activa como dependencia
};

export default WMSLayer;
