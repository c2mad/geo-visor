import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import L from "leaflet";
import "leaflet-kml"; // Importar el plugin de leaflet-kml
import redMarker from "../../images/red-marker.png";
import * as ReactDOMServer from "react-dom/server";
import { PluginWrapper } from "./plugins/PluginWrapper";
import GeoTiffLayer from "./GeoTiffLayer";
const centerPoint = [-2.8573835, -78.9633863];
const parkIcon = new L.Icon({
  iconUrl: redMarker,
  iconSize: [40, 40],
  popupAnchor: [0, -15],
  shadowAnchor: [13, 28],
});

export const GeoViewerCedia = ({
  key1,
  key2,
  key3,
  key4,
  key5,
  key6,
  key7,
  key8,
  key9,
  key10,
  key11,
  key12,
  key13,
  key14,
  key15,
  key16,
  key17,
  cedia,
  amdt,
  bpen,
  cperfil,
  dplano,
  sfallas,
  dfallas,
  spi,
  infoTwi,
  infoIDvias,
  infoJSvias,
  infoNDvi,
  infoNDwi,
  infoPC1,
  infoPC2,
  infoPGEO,
  infoQCover,
}) => {
  return (
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
      <PluginWrapper key3={false} key4={false} key5={false} />
      {key1 && cedia && (
        <GeoJSON
          key={0}
          data={cedia}
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
              ),
            );
          }}
        />
      )}
      {amdt && <GeoTiffLayer data={amdt} active={key2} />}
      {bpen && <GeoTiffLayer data={bpen} active={key3} />}
      {cperfil && <GeoTiffLayer data={cperfil} active={key4} />}
      {dplano && <GeoTiffLayer data={dplano} active={key5} />}
      {sfallas && <GeoTiffLayer data={sfallas} active={key6} />}
      {dfallas && <GeoTiffLayer data={dfallas} active={key7} />}
      {spi && <GeoTiffLayer data={spi} active={key8} />}
      {infoTwi && <GeoTiffLayer data={infoTwi} active={key9} />}
      {infoIDvias && <GeoTiffLayer data={infoIDvias} active={key10} />}
      {infoJSvias && <GeoTiffLayer data={infoJSvias} active={key11} />}
      {infoNDvi && <GeoTiffLayer data={infoNDvi} active={key12} />}
      {infoNDwi && <GeoTiffLayer data={infoNDwi} active={key13} />}
      {infoPC1 && <GeoTiffLayer data={infoPC1} active={key14} />}
      {infoPC2 && <GeoTiffLayer data={infoPC2} active={key15} />}
      {infoPGEO && <GeoTiffLayer data={infoPGEO} active={key16} />}
      {infoQCover && <GeoTiffLayer data={infoQCover} active={key17} />}
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
