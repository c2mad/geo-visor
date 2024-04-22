import L from "leaflet";
import "leaflet-contextmenu";
import "leaflet-contextmenu/dist/leaflet.contextmenu.css";
import "leaflet-measure/dist/leaflet-measure.css";
import "leaflet-measure/dist/leaflet-measure.es";
import "leaflet-minimap/src/Control.MiniMap";
import "leaflet-minimap/src/Control.MiniMap.css";
import "leaflet-ruler";
import "leaflet-ruler/src/leaflet-ruler.css";
import "leaflet-switch-basemap/src/L.switchBasemap";
import "leaflet-switch-basemap/src/L.switchBasemap.css";
import "leaflet.fullscreen";
import "leaflet.fullscreen/Control.FullScreen.css";
import "leaflet.locatecontrol";
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css";
import { useEffect } from "react";
import host_api from "utils/host_api";

const position = [-2.855964, -78.965879];

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const osmUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

export const GeoViewer = () => {
  useEffect(() => {
    // create map
    const map = L.map("map", {
      fullscreenControl: true,
      fullscreenControlOptions: {
        position: "topleft",
      },
      contextmenu: true,
      contextmenuItems: [
        {
          text: "Zoom in",
          callback: () => {},
        },
        {
          text: "Zoom out",
          callback: () => {},
        },
      ],
      center: position,
      zoom: 6,
      layers: [
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution,
        }),
      ],
    });
    L.control.locate().addTo(map);
    L.control.ruler().addTo(map);
    L.control
      .measure({
        primaryLengthUnit: "kilometers",
        secondaryLengthUnit: "meters",
        primaryAreaUnit: "hectares",
      })
      .addTo(map);

    const osm2 = new L.TileLayer(osmUrl, {
      minZoom: 0,
      maxZoom: 13,
      attribution,
    });
    new L.Control.MiniMap(osm2).addTo(map);

    new L.basemapsSwitcher(
      [
        {
          layer: L.tileLayer(
            "https://tile.tracestrack.com/es-name/{z}/{x}/{y}.png?key=53d06df7c98ca08828dc0935570f65cc",
            {
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }
          ).addTo(map), //DEFAULT MAP
          icon: "./images/map.webp",
          name: "Base",
        },
        {
          layer: L.tileLayer(
            "https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=E0FAfE58p65fqwIEHhfd",
            {
              attribution: "Maptiler - OpenStreetMap, Open Database",
            }
          ),
          icon: "./images/map.webp",
          name: "Satelital",
        },
        {
          layer: L.tileLayer(
            "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=E0FAfE58p65fqwIEHhfd",
            {
              attribution: "Maptiler - OpenStreetMap, Open Database",
            }
          ),
          icon: "./images/map.webp",
          name: "Vias",
        },
        {
          layer: L.tileLayer(
            "https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=E0FAfE58p65fqwIEHhfd",
            {
              attribution: "Maptiler - OpenStreetMap, Open Database",
            }
          ),
          icon: "./images/map.webp",
          name: "Topográfico",
        },
      ],
      { position: "bottomleft" }
    ).addTo(map);

    L.tileLayer
      .wms(`${host_api}/geoserver/wms`, {
        layers: "cate:EXPORT-PERFIL,topp:states",
        format: "image/png",
        transparent: true,
        version: "1.1.0",
        attribution: "myattribution",
      })
      .addTo(map);

    return () => {
      map.remove();
    };
  }, []);
  return <div id="map" className="h-full w-full"></div>;
};
{
  /* <GeoJSON
        data={data}
        style={() => ({
          color: "#4a83ec",
          weight: 0.5,
          fillColor: "#1a1d62",
          fillOpacity: 1,
        })}
      /> */
}
