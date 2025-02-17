import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.wms";
import PropTypes from "prop-types";

const WMSLayer = ({ url, params }) => {
  const map = useMap();
  const wmsLayerRef = useRef(null);

  useEffect(() => {
    if (!wmsLayerRef.current) {
      console.log("Mapa en WMSLayer:", map);

      // Añadir la capa WMS directamente al mapa
      wmsLayerRef.current = L.tileLayer.wms(url, params);

      console.log("Añadiendo capa WMS en WMSLayer");
      map.addLayer(wmsLayerRef.current);
    }

    return () => {
      if (wmsLayerRef.current) {
        map.removeLayer(wmsLayerRef.current);
        wmsLayerRef.current = null;
      }
    };
  }, [map, url, params]);

  return null;
};

WMSLayer.propTypes = {
  url: PropTypes.string.isRequired,
  params: PropTypes.object.isRequired,
};

export default WMSLayer;
