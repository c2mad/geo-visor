import L from "leaflet";

import {
  createElementHook,
  createControlHook,
  createLeafComponent,
} from "@react-leaflet/core";

import "leaflet-minimap/src/Control.MiniMap";
import "leaflet-minimap/src/Control.MiniMap.css";

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const osmUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const osm2 = new L.TileLayer(osmUrl, {
  minZoom: 0,
  maxZoom: 13,
  attribution,
});

function createControl(props, context) {
  const options = {
    toggleDisplay: true,
    strings: {
      hideText: "Ocultar minimapa",
      showText: "Mostrar minimapa",
    },
  };
  const instance = new L.Control.MiniMap(osm2, { ...options, ...props });

  return { instance, context };
}

const useControlElement = createElementHook(createControl);
const useControl = createControlHook(useControlElement);

export const Minimap = createLeafComponent(useControl);
