import { useRef } from "react";
import { MapContainer, TileLayer, useMapEvent } from "react-leaflet";

function SetViewOnClick({ animateRef }) {
  const map = useMapEvent("click", (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: animateRef.current || false,
    });
  });

  return null;
}
export const GeoViewerTest = () => {
  const animateRef = useRef(false);
  return (
    <>
      <p>
        <label>
          <input
            type="checkbox"
            onChange={() => {
              animateRef.current = !animateRef.current;
            }}
          />
          Animate panning
        </label>
      </p>
      <MapContainer
        style={{
          height: "100%",
          width: "100%",
        }}
        center={[51.505, -0.09]}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SetViewOnClick animateRef={animateRef} />
      </MapContainer>
    </>
  );
};
