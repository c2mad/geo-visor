import L from "leaflet";

import "leaflet-ruler";
import "leaflet-ruler/src/leaflet-ruler.css";

import {
  createElementHook,
  createControlHook,
  createLeafComponent,
} from "@react-leaflet/core";

const createRuler = (props, context) => {
  const options = {
    lengthUnit: {
      display: "km",
      decimal: 2,
      label: "Distancia:",
    },
    angleUnit: {
      display: "&deg;",
      decimal: 2,
      factor: null,
      label: "Angulo:",
    },
  };
  return { instance: new L.control.ruler({ ...options, ...props }), context };
};

const useRulerElement = createElementHook(createRuler);
const useRuler = createControlHook(useRulerElement);

export const RulerControl = createLeafComponent(useRuler);
