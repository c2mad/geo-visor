import { LayersControl, TileLayer } from "react-leaflet";

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
export const MapSwitcher = () => {
  return (
    <LayersControl position="topright">
      <LayersControl.BaseLayer checked name="Mapa base">
        <TileLayer
          attribution={attribution}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Mapa de vias">
        <TileLayer
          attribution={attribution}
          url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=E0FAfE58p65fqwIEHhfd"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Mapa satelital">
        <TileLayer
          attribution={attribution}
          url="https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=E0FAfE58p65fqwIEHhfd"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Mapa topográfico">
        <TileLayer
          attribution={attribution}
          url="https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=E0FAfE58p65fqwIEHhfd"
        />
      </LayersControl.BaseLayer>
    </LayersControl>
  );
};
