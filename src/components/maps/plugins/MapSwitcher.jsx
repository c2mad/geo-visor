import React, { useEffect } from "react";
import { LayersControl, TileLayer, useMap } from "react-leaflet";

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

// Definir capas base
const layers = [
  {
    name: "Mapa base",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
  {
    name: "Mapa de vias",
    url: "https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png",
  },
  {
    name: "Mapa satelital",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  },
  {
    name: "Mapa topográfico",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
  },
];

export const MapSwitcher = ({ activeBaseLayer, setActiveBaseLayer }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // Manejar cambios en la capa base
    const handleLayerChange = (e) => {
      setActiveBaseLayer(e.name);
    };

    map.on("baselayerchange", handleLayerChange);
    return () => {
      map.off("baselayerchange", handleLayerChange);
    };
  }, [map, setActiveBaseLayer]);

  return (
    <LayersControl position="topright">
      {layers.map((layer, index) => (
        <LayersControl.BaseLayer
          key={layer.name}
          name={layer.name}
          checked={activeBaseLayer === layer.name}
        >
          <TileLayer attribution={attribution} url={layer.url} />
        </LayersControl.BaseLayer>
      ))}
    </LayersControl>
  );
};
