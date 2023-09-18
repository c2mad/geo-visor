import { ChoseLayerItem } from "components/maps/ChoseLayerItem";
import { GeoViewerJose } from "components/maps/GeoViewerJose";

import {
  useExpCalicatas,
  useGeoAzuay,
  useGeoLocal,
  useInfoGeotecnica,
  useIsoPeriodos,
  useParrAzuay,
  usePerfilEstra,
} from "hooks/useMap";
import { useState } from "react";

export const JoseMapsPage = () => {
  const [key0, setKey0] = useState(false);
  const [key1, setKey1] = useState(false);
  const [key2, setKey2] = useState(false);
  const [key3, setKey3] = useState(false);
  const [key4, setKey4] = useState(false);
  const [key5, setKey5] = useState(false);
  const [key6, setKey6] = useState(false);

  const { data: infoGeotecnica, isLoading: isLoadingKey0 } = useInfoGeotecnica({
    enabled: key0,
  });

  const { data: expCalicatas, isLoading: isLoadingKey1 } = useExpCalicatas({
    enabled: key1,
  });

  const { data: perfilEstra, isLoading: isLoadingKey2 } = usePerfilEstra({
    enabled: key2,
  });

  const { data: isoPeriodos, isLoading: isLoadingKey3 } = useIsoPeriodos({
    enabled: key3,
  });

  const { data: geoLocal, isLoading: isLoadingKey4 } = useGeoLocal({
    enabled: key4,
  });

  const { data: geoAzuay, isLoading: isLoadingKey5 } = useGeoAzuay({
    enabled: key5,
  });

  const { data: parrAzuay, isLoading: isLoadingKey6 } = useParrAzuay({
    enabled: key6,
  });

  return (
    <div className="flex space-x-3 p-3">
      <div className="h-[calc(100vh_-_80px)] w-[400px] overflow-hidden overflow-y-auto rounded-lg bg-white p-3 shadow-md">
        <div className="border-b border-gray-300 pb-1">
          <h3 className="text-xl font-semibold text-slate-700">Capas</h3>
        </div>
        <div className="mt-6">
          <ul className="space-y-3">
            <ChoseLayerItem
              title="Propiedades geodinámicas de suelos"
              enabled={key0}
              setEnabled={setKey0}
              isLoading={isLoadingKey0}
            />

            <ChoseLayerItem
              title="Perfiles de suelo profundidad < 5m (calicatas), SPT's y perforaciones"
              enabled={key1}
              setEnabled={setKey1}
              isLoading={isLoadingKey1}
            />

            <ChoseLayerItem
              title="Perfiles estratigráficos profundidad > 30m"
              enabled={key2}
              setEnabled={setKey2}
              isLoading={isLoadingKey2}
            />

            <ChoseLayerItem
              title="Isoperiodos parroquia urbana Cuenca"
              enabled={key3}
              setEnabled={setKey3}
              isLoading={isLoadingKey3}
            />

            <ChoseLayerItem
              title="Geología proyecto PRECUPA escala 1:25000"
              enabled={key4}
              setEnabled={setKey4}
              isLoading={isLoadingKey4}
            />

            <ChoseLayerItem
              title="Geología del Azuay escala 1:200000"
              enabled={key5}
              setEnabled={setKey5}
              isLoading={isLoadingKey5}
            />

            <ChoseLayerItem
              title="Parroquias del Azuay"
              enabled={key6}
              setEnabled={setKey6}
              isLoading={isLoadingKey6}
            />
          </ul>
        </div>
      </div>
      <div className="h-[calc(100vh_-_80px)] w-full overflow-hidden rounded-lg bg-white shadow-md">
        <GeoViewerJose
          key0={key0}
          key1={key1}
          key2={key2}
          key3={key3}
          key4={key4}
          key5={key5}
          key6={key6}
          infoGeotecnica={infoGeotecnica}
          expCalicatas={expCalicatas}
          perfilEstra={perfilEstra}
          isoPeriodos={isoPeriodos}
          geoLocal={geoLocal}
          geoAzuay={geoAzuay}
          parrAzuay={parrAzuay}
        />
      </div>
    </div>
  );
};
