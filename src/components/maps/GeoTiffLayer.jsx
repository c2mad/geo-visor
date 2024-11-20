import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

const GeoTiffLayer = ({ data, active }) => {
  const map = useMap();

  useEffect(() => {
    const addKmlOverlay = async () => {
      if (data && map && active) {
        console.log("Agregando KML al mapa:", data);
        try {
          const response = await fetch(data); // data es la URL del KML
          const kmlText = await response.text();

          // Crear un DOMParser para procesar el XML del KML
          const parser = new DOMParser();
          const kmlDoc = parser.parseFromString(kmlText, "application/xml");

          // Extraer la información de GroundOverlay
          const groundOverlay = kmlDoc.querySelector("GroundOverlay");

          if (groundOverlay) {
            const href = groundOverlay.querySelector("Icon href").textContent;
            const latLonBox = groundOverlay.querySelector("LatLonBox");
            const north = parseFloat(
              latLonBox.querySelector("north").textContent,
            );
            const south = parseFloat(
              latLonBox.querySelector("south").textContent,
            );
            const east = parseFloat(
              latLonBox.querySelector("east").textContent,
            );
            const west = parseFloat(
              latLonBox.querySelector("west").textContent,
            );

            // Crear una capa de imagen con las coordenadas extraídas
            const imageBounds = [
              [south, west],
              [north, east],
            ];
            const overlay = L.imageOverlay(href, imageBounds);

            // Agregar la imagen al mapa
            map.addLayer(overlay);
            map.fitBounds(imageBounds);

            console.log("KML con GroundOverlay agregado al mapa.");
          } else {
            console.error("No se encontró el GroundOverlay en el KML.");
          }
        } catch (error) {
          console.error("Error al procesar el KML:", error);
        }
      } else {
        // Eliminar la capa del mapa si no está activa
        map.eachLayer((layer) => {
          if (layer instanceof L.ImageOverlay) {
            map.removeLayer(layer);
          }
        });
      }
    };

    addKmlOverlay();
  }, [data, map, active]);

  return null;
};

export default GeoTiffLayer;
