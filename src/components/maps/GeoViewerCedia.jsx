import { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import L from "leaflet";
import redMarker from "../../images/red-marker.png";
import * as ReactDOMServer from "react-dom/server";
import host_api from "utils/host_api";
import { PluginWrapper } from "./plugins/PluginWrapper";
const centerPoint = [-2.8573835, -78.9633863];
const parkIcon = new L.Icon({
  iconUrl: redMarker,
  iconSize: [40, 40],
  popupAnchor: [0, -15],
  shadowAnchor: [13, 28],
});

export const GeoViewerCedia = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const REQUEST_PARAMS = {
    outputFormat: "application/json",
    request: "GetFeature",
    service: "WFS",
    typeName: "cedia:Puntos",
    //typeName: "jose:geo_azuay",
    version: "1.0.0",
  };
  const GEOSERVER = `${host_api}/geoserver/wfs`;
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios(GEOSERVER, { params: REQUEST_PARAMS });
      setData(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return loading ? (
    <div>Cargando el mapa.</div>
  ) : (
    <>
      <MapContainer
        style={{
          height: "100%",
          width: "100%",
        }}
        center={centerPoint}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <SetViewOnClick animateRef={animateRef} /> */}
        <PluginWrapper key3={false} key4={false} key5={false} />
        <GeoJSON
          key={0}
          data={data}
          pointToLayer={(feature, latlng) => {
            return L.marker(latlng, {
              icon: parkIcon,
            });
          }}
          style={() => ({
            color: "#4a83ec",
            weight: 2,
            fillColor: "#1a1d62",
            fillOpacity: 1,
          })}
          onEachFeature={({ properties }, layer) => {
            console.log(properties);
            const {
              CASO,
              CÓDIGO_MU,
              ZONA_CRÍT,
              DESCRIPCI,
              MOVIMIENTO,
              MOVIMIEN_1,
              NIVEL_DE_H,
              FACTOR_CON,
              FACTOR_DES,
              COBERTURA_,
              DAÑOS,
              UTM_X,
              UTM_Y,
              FECHA_DE_L,
              FECHA_DE_O,
              ALTURA__ms,
            } = properties;
            // const propertiesArray = Object.entries(properties).map(
            //   ([key, value]) => `${key}: ${value}`,
            // );
            layer.bindPopup(
              ReactDOMServer.renderToString(
                <div>
                  <h2 className="text-center text-sm font-medium text-slate-700">
                    {ZONA_CRÍT}
                  </h2>
                  <div className="mt-3 divide-y rounded-lg border border-gray-300">
                    <PopupItemTable label="CASO" value={CASO} />
                    <PopupItemTable
                      label="CÓDIGO MUESTRA DE ROCA"
                      value={CÓDIGO_MU}
                    />
                    <PopupItemTable
                      label="DESCRIPCIÓN LITOLÓGICA"
                      value={DESCRIPCI}
                    />
                    <PopupItemTable
                      label="MOVIMIENTO PRINCIPAL"
                      value={MOVIMIENTO}
                    />
                    <PopupItemTable
                      label="MOVIMIENTO SECUNDARIO"
                      value={MOVIMIEN_1}
                    />
                    <PopupItemTable
                      label="NIVEL DE HUMEDAD"
                      value={NIVEL_DE_H}
                    />
                    <PopupItemTable
                      label="FACTOR CONDICIONANTE"
                      value={FACTOR_CON}
                    />
                    <PopupItemTable
                      label="FACTOR DESENCADENANTE"
                      value={FACTOR_DES}
                    />
                    <PopupItemTable
                      label="COBERTURA VEGETAL Y USO DEL SUELO"
                      value={COBERTURA_}
                    />
                    <PopupItemTable label="DAÑOS" value={DAÑOS} />
                    <PopupItemTable label="UTM X" value={UTM_X} />
                    <PopupItemTable label="UTM Y" value={UTM_Y} />
                    <PopupItemTable
                      label="FECHA DE LEVANTAMIENTO DATOS GEOLÓGICOS"
                      value={FECHA_DE_L}
                    />
                    <PopupItemTable
                      label="FECHA DE OCURRENCIA"
                      value={FECHA_DE_O}
                    />
                    <PopupItemTable label="ALTURA (msnm)" value={ALTURA__ms} />
                  </div>
                </div>,
                // <h1 className="text-lg text-slate-700">{CASO}</h1>,
              ),
            );
            //Add text html in layer
            //console.log(layer);
          }}
        />
        {/* <Marker position={[-2.8573835, -78.9633863]}></Marker> */}
      </MapContainer>
    </>
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
