import { MapSwitcher } from "./MapSwitcher";
import { Minimap } from "./Minimap";
import { RulerControl } from "./RulerControl";

export const PluginWrapper = () => {
  return (
    <>
      <MapSwitcher />
      <RulerControl />
      <Minimap />
    </>
  );
};
