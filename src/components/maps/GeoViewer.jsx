import { MapContainer, GeoJSON } from "react-leaflet";
import { PluginWrapper } from "./plugins/PluginWrapper";
import * as ReactDOMServer from "react-dom/server";
import L from "leaflet";
import pinMarker from "../../images/pin-marker.png";
import redMarker from "../../images/red-marker.png";

const centerPoint = [-2.8573835, -78.9633863];

const parkIcon = new L.Icon({
  iconUrl: redMarker,
  iconSize: [40, 40],
  popupAnchor: [0, -15],
  shadowAnchor: [13, 28],
});

const pinIcon = new L.Icon({
  iconUrl: pinMarker,
  iconSize: [34, 34],
  popupAnchor: [0, -15],
  shadowAnchor: [13, 28],
});

export const GeoViewer = ({
  infoGeotecnica,
  expCalicatas,
  perfilEstra,
  isoPeriodos,
  geoLocal,
  geoAzuay,
  parrAzuay,
  key0,
  key1,
  key2,
  key3,
  key4,
  key5,
  key6,
}) => {
  return (
    <MapContainer
      style={{
        height: "100%",
        width: "100%",
      }}
      center={centerPoint}
      zoom={11}
    >
      <PluginWrapper key3={key3} key4={key4} key5={key5} />
      {key0 && infoGeotecnica && (
        <GeoJSON
          key={0}
          data={infoGeotecnica}
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
            layer.bindPopup(
              ReactDOMServer.renderToString(
                <PopupKey0 properties={properties} />
              ),
              {
                className: "info-geotecnica",
              }
            );
          }}
        />
      )}

      {key1 && expCalicatas && (
        <GeoJSON
          key={1}
          data={expCalicatas}
          pointToLayer={(feature, latlng) => {
            return L.marker(latlng, {
              icon: pinIcon,
            });
          }}
          style={() => ({
            color: "#991b1b",
            weight: 2,
            fillColor: "#991b1b",
            fillOpacity: 1,
          })}
          onEachFeature={({ properties }, layer) => {
            layer.bindPopup(
              ReactDOMServer.renderToString(
                <PopupKey1 properties={properties} />
              )
            );
          }}
        />
      )}

      {key2 && perfilEstra && (
        <GeoJSON
          key={2}
          data={perfilEstra}
          style={() => ({
            color: "#4C3222",
            weight: 4,
            fillColor: "#ef4444",
            fillOpacity: 1,
          })}
          onEachFeature={({ properties }, layer) => {
            layer.bindPopup(
              ReactDOMServer.renderToString(
                <PopupKey2 properties={properties} />
              )
            );
          }}
        />
      )}

      {key3 && isoPeriodos && (
        <GeoJSON
          key={3}
          data={isoPeriodos}
          style={() => ({
            weight: 3,
            fillColor: "#84cc16",
            fillOpacity: 1,
          })}
          onEachFeature={({ properties }, layer) => {
            layer.setStyle({
              color: properties.color,
            });

            layer.bindPopup(
              ReactDOMServer.renderToString(
                <PopupKey3 properties={properties} />
              )
            );
          }}
        />
      )}

      {key4 && geoLocal && (
        <GeoJSON
          key={4}
          data={geoLocal}
          style={() => ({
            color: "#57534e",
            weight: 1,
            fillOpacity: 1,
          })}
          onEachFeature={({ properties }, layer) => {
            const { Color = "" } = properties;

            layer.bindPopup(
              ReactDOMServer.renderToString(
                <PopupKey4 properties={properties} />
              )
            );

            layer.setStyle({
              fillColor: Color,
            });
          }}
        />
      )}

      {key5 && geoAzuay && (
        <GeoJSON
          key={5}
          data={geoAzuay}
          style={() => ({
            color: "#64748b",
            weight: 1,
            fillOpacity: 1,
          })}
          onEachFeature={({ properties }, layer) => {
            const { Color = "" } = properties;

            layer.bindPopup(
              ReactDOMServer.renderToString(
                <PopupKey5 properties={properties} />
              )
            );

            layer.setStyle({
              fillColor: Color,
            });
          }}
        />
      )}

      {key6 && parrAzuay && (
        <GeoJSON
          key={6}
          data={parrAzuay}
          style={() => ({
            color: "#f97316",
            weight: 2,
            fillColor: "#ca8a04",
            fillOpacity: 0,
          })}
          onEachFeature={({ properties }, layer) => {
            const { Color = "", DPA_DESPAR, DPA_DESCAN } = properties;

            layer.setStyle({
              fillColor: Color,
            });

            layer.bindTooltip(DPA_DESPAR, {
              permanent: true,
              direction: "center",
              className: "tooltip-parroquia",
            });

            layer.bindPopup(DPA_DESCAN, {
              className: "popup-parroquia",
            });
          }}
        />
      )}
    </MapContainer>
  );
};

export const Tooltip = () => {
  return <div>GeoViewerJose</div>;
};

const PopupKey0 = ({ properties }) => {
  const {
    Fuente,
    Documento,
    Xo,
    Yo,
    Vp_m_s,
    Vp_m_s_1,
    Vp_m_s_2,
    Vp_m_s_3,
    Vp_m_s_4,
    Vp_m_s_5,
    Vp_m_s_6,
    Vp_Deph,
    Vp_Deph_1,
    Vp_Deph_2,
    Vp_Deph_3,
    Vp_Deph_4,
    Vp_Deph_5,
    Vp_Deph_6,
    Vs_m_s_,
    Vs_m_s_1,
    Vs_m_s_2,
    Vs_m_s_3,
    Vs_m_s_4,
    Vs_m_s_5,
    Vs_m_s_6,
    Vs_Deph,
    Vs_Deph_1,
    Vs_Deph_2,
    Vs_Deph_3,
    Vs_Deph_4,
    Vs_Deph_5,
    Vs_Deph_6,
    NEC,
    NEC_1,
    NEC_2,
    NEC_3,
    NEC_4,
    NEC_5,
    NEC_6,
    SUCS,
    SUCS_1,
    SUCS_2,
    SUCS_3,
    SUCS_4,
    SUCS_5,
    SUCS_6,
    NEC_,
    SUCS_,
    Vs30,
  } = properties;

  return (
    <div>
      <h2 className="text-center text-sm font-medium text-slate-700">
        {Fuente}
      </h2>

      <div className="mt-3 divide-y rounded-lg border border-gray-300">
        <PopupItemTable label="Documento" value={Documento} />
        <PopupItemTable
          label="Coordenada UTM WGS84 este (latitud)"
          value={Xo}
        />
        <PopupItemTable
          label="Coordenada UTM WGS84 norte (longitud)"
          value={Yo}
        />
        <PopupItemTable label="NEC_" value={NEC_} />
        <PopupItemTable label="SUCS_" value={SUCS_} />
        <PopupItemTable label="Vs30" value={Vs30} />
      </div>
      <div className="mt-2 overflow-hidden">
        <table className="table-fixed border-collapse rounded-lg border border-gray-300 text-slate-700">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Vp(m/s)</th>
              <th className="border border-gray-300 p-2">
                Profundidad de estrato de Vp(m)
              </th>
              <th className="border border-gray-300 p-2">Vs(m/s)</th>
              <th className="border border-gray-300 p-2">
                Profundidad de estrato de Vs(m)
              </th>
              <th className="border border-gray-300 p-2">
                Tipo de suelo de acorde a NEC
              </th>
              <th className="border border-gray-300 p-2">
                Tipo de suelo de acorde a SUCS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 text-center">
                {Vp_m_s}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {Vp_Deph}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {Vs_m_s_}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {Vs_Deph}
              </td>
              <td className="border border-gray-300 p-2 text-center">{NEC}</td>
              <td className="border border-gray-300 p-2 text-center">{SUCS}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">
                {Vp_m_s_1}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {Vp_Deph_1}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {Vs_m_s_1}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {Vs_Deph_1}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {NEC_1}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {SUCS_1}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">
                {Vp_m_s_2}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {Vp_Deph_2}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {Vs_m_s_2}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {Vs_Deph_2}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {NEC_2}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {SUCS_2}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">
                {Vp_m_s_3}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {Vp_Deph_3}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {Vs_m_s_3}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {Vs_Deph_3}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {NEC_3}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {SUCS_3}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">
                {Vp_m_s_4}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {Vp_Deph_4}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {Vs_m_s_4}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {Vs_Deph_4}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {NEC_4}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {SUCS_4}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">
                {Vp_m_s_5}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {Vp_Deph_5}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {Vs_m_s_5}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {Vs_Deph_5}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {NEC_5}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {SUCS_5}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">
                {Vp_m_s_6}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {Vp_Deph_6}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {Vs_m_s_6}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {Vs_Deph_6}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {NEC_6}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {SUCS_6}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const PopupKey1 = ({ properties }) => {
  const { Fuente, Documento, Coord_X, Coord_Y, img_origin, img_resize } =
    properties;
  return (
    <div>
      <h2 className="text-center text-sm font-medium text-slate-700">
        {Fuente}
      </h2>

      <div className="mt-3 divide-y rounded-lg border border-gray-300">
        <PopupItemTable label="Documento" value={Documento} />
        <PopupItemTable
          label="Coordenada UTM WGS84 este (latitud)"
          value={Coord_X}
        />
        <PopupItemTable
          label="Coordenada UTM WGS84 norte (longitud)"
          value={Coord_Y}
        />
      </div>

      <div className="mt-2 flex justify-center">
        <a href={img_origin} target="_blank" className="h-36" rel="noreferrer">
          <img
            src={img_resize}
            alt={Fuente}
            className="h-full w-full object-cover"
          />
        </a>
      </div>
    </div>
  );
};

const PopupKey2 = ({ properties }) => {
  const { Fuente, Documento, img_origin, img_resize } = properties;

  return (
    <div>
      <h2 className="text-center text-sm font-medium text-slate-700">
        {Fuente}
      </h2>

      <div className="mt-3 divide-y rounded-lg border border-gray-300">
        <PopupItemTable label="Documento" value={Documento} />
      </div>

      <div className="mt-2">
        <a
          href={img_origin}
          target="_blank"
          className="w-full"
          rel="noreferrer"
        >
          <img
            src={img_resize}
            alt={Fuente}
            className="h-full w-full object-cover"
          />
        </a>
      </div>
    </div>
  );
};

const PopupKey3 = ({ properties }) => {
  const { Fuente, isoperiodo, Documento } = properties;

  return (
    <div>
      <h2 className="text-center text-sm font-medium text-slate-700">
        {Fuente}
      </h2>

      <div className="mt-3 divide-y rounded-lg border border-gray-300">
        <PopupItemTable label="Isoperiodo" value={isoperiodo} />
        <PopupItemTable label="Documento" value={Documento} />
      </div>
    </div>
  );
};

const PopupKey4 = ({ properties }) => {
  const {
    Fuente,
    Geotecnia,
    un_geolog,
    simbolo,
    Materiales,
    Comportami,
    susceptibi,
  } = properties;
  return (
    <div>
      <h2 className="text-sm font-medium text-slate-700">{Fuente}</h2>

      <div className="mt-3 divide-y rounded-lg border border-gray-300">
        <PopupItemTable label="Geología" value={Geotecnia} />
        <PopupItemTable
          label="Formación geológica"
          value={`${un_geolog} (${simbolo})`}
        />
        <PopupItemTable label="Litología" value={Materiales} />
        <PopupItemTable label="Comportamiento geológico" value={Comportami} />
        <PopupItemTable
          label="Susceptibilidad a deslizamientos"
          value={susceptibi}
        />
      </div>
    </div>
  );
};

const PopupKey5 = ({ properties }) => {
  const { CATEGORIAS, FORMACION, Fuente, LITOLOGIA, SIMBOLO } = properties;

  return (
    <div>
      <h2 className="text-sm font-medium text-slate-700">{Fuente}</h2>

      <div className="mt-3 divide-y rounded-lg border border-gray-300">
        <PopupItemTable label="Geología" value={CATEGORIAS} />
        <PopupItemTable
          label="Formación geológica"
          value={`${FORMACION} (${SIMBOLO})`}
        />

        <PopupItemTable label="Litología" value={LITOLOGIA} />
      </div>
    </div>
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
