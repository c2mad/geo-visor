import { GeoViewerWithReact } from "components/maps/GeoViewerWithReact";

export const MapsPage = () => {
  return (
    <div className="flex space-x-3 p-3">
      {/* <div className="h-[calc(100vh_-_80px)] w-[340px] overflow-hidden overflow-y-auto rounded-lg bg-white p-3 shadow-md">
        <h3 className="text-xl font-semibold">Capas</h3>
      </div> */}
      <div className="h-[calc(100vh_-_80px)] w-full overflow-hidden rounded-lg bg-white shadow-md">
        <GeoViewerWithReact />
      </div>
    </div>
  );
};
