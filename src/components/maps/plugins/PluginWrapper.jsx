import { useMap } from "react-leaflet";
import { Legend } from "./Legend";
import { MapSwitcher } from "./MapSwitcher";
import { Minimap } from "./Minimap";
import { RulerControl } from "./RulerControl";

export const PluginWrapper = ({
  key3,
  key4,
  key5,
  activeBaseLayer,
  setActiveBaseLayer,
}) => {
  const map = useMap();
  return (
    <>
      <MapSwitcher
        map={map}
        activeBaseLayer={activeBaseLayer}
        setActiveBaseLayer={setActiveBaseLayer}
      />
      <RulerControl />
      <Minimap />
      <Legend key3={key3} key4={key4} key5={key5} />
    </>
  );
};
