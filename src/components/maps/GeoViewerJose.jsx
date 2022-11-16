import { MapContainer, GeoJSON } from "react-leaflet";
import { PluginWrapper } from "./plugins/PluginWrapper";
import L from "leaflet";
// import markerShadow from "../../images/marker-shadow.png";
import redMarker from "../../images/red-marker.png";
import pinMarker from "../../images/pin-marker.png";
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

export const GeoViewerJose = ({
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
      <PluginWrapper />
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
        />
      )}

      {key3 && isoPeriodos && (
        <GeoJSON
          key={3}
          data={isoPeriodos}
          style={() => ({
            color: "#059669",
            weight: 2,
            fillColor: "#84cc16",
            fillOpacity: 1,
          })}
        />
      )}

      {key4 && geoLocal && (
        <GeoJSON
          key={4}
          data={geoLocal}
          style={() => ({
            color: "#57534e",
            weight: 1,
            // fillColor: "#8b5cf6",
            fillOpacity: 1,
          })}
          onEachFeature={({ properties }, layer) => {
            const { Color = "" } = properties;
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
            // fillColor: "#22d3ee",
            fillOpacity: 1,
          })}
          onEachFeature={({ properties }, layer) => {
            const { Color = "" } = properties;
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
            color: "#e11d48",
            weight: 2,
            fillColor: "#fb7185",
            fillOpacity: 0,
          })}
        />
      )}
    </MapContainer>
  );
};
