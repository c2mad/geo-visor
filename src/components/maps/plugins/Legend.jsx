import { useState } from "react";
import Control from "react-leaflet-custom-control";
// import isoPeriodo from "../../../assets/images/isoperiodo.jpg";
// import geoLocal from "../../../assets/images/geolocal.jpg";
// import geoGlobal from "../../../assets/images/geoglobal.jpg";
import { TableIcon } from "components/icons/TableIcon";
export const Legend = ({ key3, key4, key5 }) => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <Control prepend position="bottomleft">
      {(key3 || key4 || key5) && (
        <div
          className={`overflow-hidden rounded-lg bg-white p-2 text-slate-700${
            toggle ? "h-[220px]" : ""
          }`}
          onClick={handleClick}
        >
          {toggle ? (
            <>
              {/* <LazyLoadImage
                src={
                  key3 ? isoPeriodo : key4 ? geoLocal : key5 ? geoGlobal : ""
                }
                alt="geoglobal"
                loading="lazy"
                className="h-full w-full object-cover"
              /> */}
            </>
          ) : (
            <TableIcon />
          )}
        </div>
      )}
    </Control>
  );
};
