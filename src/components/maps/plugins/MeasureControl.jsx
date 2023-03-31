import L from "leaflet";

import {
  createElementHook,
  createControlHook,
  createLeafComponent,
} from "@react-leaflet/core";

import "leaflet.locatecontrol/dist/L.Control.Locate.min.js";
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css";

function createControl(props, context) {
  const options = {
    primaryLengthUnit: "kilometers",
    secondaryLengthUnit: "meters",
    primaryAreaUnit: "hectares",
  };
  const instance = L.control.measure({ ...options, ...props });

  return { instance, context };
}

const useControlElement = createElementHook(createControl);
const useControl = createControlHook(useControlElement);

export const MeasureControl = createLeafComponent(useControl);
