import { useState } from "react";
import proyects from "utils/proyects";
import {
  useExpCalicatas,
  useGeoAzuay,
  useGeoLocal,
  useInfoGeotecnica,
  useIsoPeriodos,
  useParrAzuay,
  usePerfilEstra,
} from "hooks/useMap";
import { GeoViewerJose } from "components/maps/GeoViewerJose";
import { MapSidebar } from "components/ui/proyects/MapSidebar";

export const JoseMapsPage = () => {
  const [proyect] = useState(proyects[0]);
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

  const layers = [
    {
      title: "Propiedades geodinámicas de suelos",
      enabled: key0,
      setEnabled: () => setKey0((prev) => !prev),
      isLoading: isLoadingKey0,
    },
    {
      title:
        "Perfiles de suelo profundidad < 5m (calicatas), SPT's y perforaciones",
      enabled: key1,
      setEnabled: () => setKey1((prev) => !prev),
      isLoading: isLoadingKey1,
    },
    {
      title: "Perfiles estratigráficos profundidad > 30m",
      enabled: key2,
      setEnabled: () => setKey2((prev) => !prev),
      isLoading: isLoadingKey2,
    },
    {
      title: "Isoperiodos parroquia urbana Cuenca",
      enabled: key3,
      setEnabled: () => setKey3((prev) => !prev),
      isLoading: isLoadingKey3,
    },
    {
      title: "Geología proyecto PRECUPA escala 1:25000",
      enabled: key4,
      setEnabled: () => setKey4((prev) => !prev),
      isLoading: isLoadingKey4,
    },
    {
      title: "Geología del Azuay escala 1:200000",
      enabled: key5,
      setEnabled: () => setKey5((prev) => !prev),
      isLoading: isLoadingKey5,
    },
    {
      title: "Parroquias del Azuay",
      enabled: key6,
      setEnabled: () => setKey6((prev) => !prev),
      isLoading: isLoadingKey6,
    },
  ];

  return (
    <MapSidebar
      proyect={proyect}
      layers={layers}
      GeoViewerComponent={() => (
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
      )}
    />
  );
};
