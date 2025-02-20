import React, { useEffect, useRef, useMemo, useState } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import L from "leaflet";
import "leaflet-kml"; // Importar el plugin de leaflet-kml
import redMarker from "../../images/icon.png";
import * as ReactDOMServer from "react-dom/server";
import { PluginWrapper } from "./plugins/PluginWrapper";
import WMSLayer from "./WMSLayer";

const centerPoint = [-2.8573835, -78.9633863];

const parkIcon = new L.Icon({
  iconUrl: redMarker,
  iconSize: [40, 40],
  popupAnchor: [0, -15],
  shadowAnchor: [13, 28],
});

const GeoViewerSusceptibilidad = ({ key1, key2, cedia, sucep }) => {
  // Se mantiene la referencia al mapa
  const mapRef = useRef(null);
  // Estado de la capa base seleccionada
  const [activeBaseLayer, setActiveBaseLayer] = useState(
    localStorage.getItem("activeBaseLayer") || "Mapa base",
  );

  // Guardar en localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem("activeBaseLayer", activeBaseLayer);
  }, [activeBaseLayer]);
  // Memoriza los parámetros WMS para evitar recreaciones
  const wmsParams = useMemo(
    () => ({
      layers: "cedia:deslizamiento",
      format: "image/png",
      transparent: true,
      attribution: "© OpenStreetMap contributors",
      version: "1.1.0",
      request: "GetMap",
    }),
    [],
  );

  const wmsUrl = `${process.env.REACT_APP_HOST_API}/geoserver/wms`;

  return (
    <MapContainer
      style={{
        height: "100%",
        width: "100%",
      }}
      center={centerPoint}
      zoom={10}
      crs={L.CRS.EPSG3857}
      whenCreated={(map) => {
        mapRef.current = map;
        console.log("Mapa creado:", map);
      }}
    >
      <PluginWrapper
        key3={false}
        key4={false}
        key5={false}
        activeBaseLayer={activeBaseLayer}
        setActiveBaseLayer={setActiveBaseLayer}
      />
      {key1 && cedia && cedia.type === "FeatureCollection" && (
        <GeoJSON
          data={cedia}
          pointToLayer={(feature, latlng) =>
            L.marker(latlng, { icon: parkIcon }).bindTooltip(
              feature.properties.ZONA_CRÍT.toUpperCase(),
              {
                permanent: false,
                direction: "center",
              },
            )
          }
          style={() => ({
            color: "#4a83ec",
            weight: 2,
            fillColor: "#1a1d62",
            fillOpacity: 1,
          })}
          onEachFeature={({ properties }, layer) => {
            console.log("Propiedades de la capa:", properties);
            layer.bindPopup(
              ReactDOMServer.renderToString(
                <div>
                  <h2 className="text-center text-sm font-medium text-slate-700">
                    {properties.No_},{properties.ZONA_CRÍT.toUpperCase()}
                  </h2>
                  <div className="mt-3 divide-y rounded-lg border border-gray-300">
                    <PopupItemTable label="CASO" value={properties.CASO} />
                    <PopupItemTable
                      label="CÓDIGO MUESTRA DE ROCA"
                      value={properties.CÓDIGO_MU}
                    />
                    <PopupItemTable
                      label="DESCRIPCIÓN LITOLÓGICA"
                      value={properties.DESCRIPCI}
                    />
                    <PopupItemTable
                      label="MOVIMIENTO PRINCIPAL"
                      value={properties.MOVIMIENTO}
                    />
                    <PopupItemTable
                      label="MOVIMIENTO SECUNDARIO"
                      value={properties.MOVIMIEN_1}
                    />
                    <PopupItemTable
                      label="NIVEL DE HUMEDAD"
                      value={properties.NIVEL_DE_H}
                    />
                    <PopupItemTable
                      label="FACTOR CONDICIONANTE"
                      value={properties.FACTOR_CON}
                    />
                    <PopupItemTable
                      label="FACTOR DESENCADENANTE"
                      value={properties.FACTOR_DES}
                    />
                    <PopupItemTable
                      label="COBERTURA VEGETAL Y USO DEL SUELO"
                      value={properties.COBERTURA_}
                    />
                    <PopupItemTable label="DAÑOS" value={properties.DAÑOS} />
                    <PopupItemTable label="UTM X" value={properties.UTM_X} />
                    <PopupItemTable label="UTM Y" value={properties.UTM_Y} />
                    <PopupItemTable
                      label="FECHA DE LEVANTAMIENTO DATOS GEOLÓGICOS"
                      value={properties.FECHA_DE_L}
                    />
                    <PopupItemTable
                      label="FECHA DE OCURRENCIA"
                      value={properties.FECHA_DE_O}
                    />
                    <PopupItemTable
                      label="ALTURA (msnm)"
                      value={properties.ALTURA__ms}
                    />
                  </div>
                </div>,
              ),
            );
          }}
        />
      )}
      {/* Renderiza la capa WMS solo si key2 es verdadero */}
      {key2 && (
        <WMSLayer
          url={wmsUrl}
          params={wmsParams}
          activeBaseLayer={activeBaseLayer}
        />
      )}
    </MapContainer>
  );
};

const PopupItemTable = ({ label, value }) => {
  return (
    <div className="p-2">
      <p className="!my-0 text-sm font-medium text-slate-700">
        <span className="font-semibold text-slate-600">{label}:</span> {value}
      </p>
    </div>
  );
};

export default React.memo(GeoViewerSusceptibilidad);
