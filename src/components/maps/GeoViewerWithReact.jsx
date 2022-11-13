import axios from "axios";
import { useEffect, useState } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import L from "leaflet";

import { MapSwitcher } from "./plugins/MapSwitcher";
import { MeasureControl } from "./plugins/MeasureControl";
import { Minimap } from "./plugins/Minimap";
import { RulerControl } from "./plugins/RulerControl";

import treeMarker from "../../images/tree-marker.png";

import markerShadow from "../../images/marker-shadow.png";

export const GeoViewerWithReact = () => {
  const [data, setData] = useState(null);
  const [dataJose, setDataJose] = useState(null);
  const [dataCate, setDataCate] = useState(null);

  const [point, setPoint] = useState([-2.8573835, -78.9633863]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const ows = async () => {
      // const resp = await axios.get(
      //   "http://192.168.10.4:8085/geoserver/cate/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cate%3AExport_Output&maxFeatures=50&outputFormat=application%2Fjson"
      // );

      // console.log(resp);

      const GEOSERVER = "http://192.168.10.4:8085/geoserver/wfs";

      const REQUEST_PARAMS = {
        outputFormat: "application/json",
        request: "GetFeature",
        service: "WFS",
        typeName: "cate:Export_Output",
        version: "1.0.0",
      };
      setLoading(true);
      const respCate = await axios.get(GEOSERVER, { params: REQUEST_PARAMS });
      setData(respCate.data);

      const REQUEST_PARAMS_1 = {
        outputFormat: "application/json",
        request: "GetFeature",
        service: "WFS",
        typeName: "jose:Isoperiodos",
        version: "1.0.0",
      };

      const respJose = await axios.get(GEOSERVER, { params: REQUEST_PARAMS_1 });
      setDataJose(respJose.data);
      console.log(respJose.data);
      const REQUEST_PARAMS_2 = {
        outputFormat: "application/json",
        request: "GetFeature",
        service: "WFS",
        typeName: "cate:PERFIL-FINAL",
        version: "1.0.0",
      };

      const respCate2 = await axios.get(GEOSERVER, {
        params: REQUEST_PARAMS_2,
      });
      setDataCate(respCate2.data);

      setLoading(false);
    };
    ows();
  }, []);

  const parkIcon = new L.Icon({
    iconUrl: treeMarker,
    iconSize: [26, 26],
    popupAnchor: [0, -15],
    shadowUrl: markerShadow,
    shadowAnchor: [13, 28],
  });

  return loading ? (
    <div>Cargando el mapa.</div>
  ) : (
    <MapContainer
      style={{
        height: "100%",
        width: "100%",
      }}
      center={point}
      zoom={7}
    >
      <MapSwitcher />

      <RulerControl />
      <MeasureControl />
      <Minimap />

      <GeoJSON
        data={data}
        pointToLayer={(feature, latlng) => {
          return L.marker(latlng, {
            icon: parkIcon,
          });
        }}
        onEachFeature={(feature = {}, layer) => {
          const { properties = {} } = feature;

          const { Fuente, Vp_m_s_, SUCS, Periodo, Vs_m_s_ } = properties;
          layer.bindPopup(`<h1 className="text-lg text-slate-700">${Fuente}</h1>
          <div className="divide-y-2">
            <p className="p-2">Vp_m_s_: ${Vp_m_s_}</p>
            <p className="p-2">SUCS: ${SUCS}</p>
            <p className="p-2">Periodo: ${Periodo}</p>
            <p className="p-2">Vs_m_s_: ${Vs_m_s_}</p>
          </div>`);
        }}
      />
      <GeoJSON
        data={dataJose}
        style={() => ({
          color: "#4a83ec",
          weight: 5,
          fillColor: "#1a1d62",
          fillOpacity: 1,
        })}
      />

      <GeoJSON
        data={dataCate}
        style={() => ({
          color: "#9832cf",
          weight: 3,
          fillColor: "#9832cf",
          fillOpacity: 1,
        })}
      />

      {/* <Marker position={[-2.8573835, -78.9633863]}></Marker> */}

      {/* <WMSTileLayer
        zIndex={100}
        url="http://localhost:8080/geoserver/ciitt/wms"
        layers="ciitt:geologia_lit,ciitt:poblados"
        format="image/png"
        transparent
        version="1.1.0"
        attribution="myattribution"
      /> */}
    </MapContainer>
  );
};
