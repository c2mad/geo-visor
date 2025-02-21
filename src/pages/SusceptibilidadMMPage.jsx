import { useCallback, useState } from "react";
import proyects from "utils/proyects";
import { useCedia, useParrAzuay, useSucep } from "hooks/useMap";
import GeoViewerSusceptibilidad from "components/maps/GeoViewerSusceptibilidad";
import { MapSidebar } from "components/ui/proyects/MapSidebar";

export default function SusceptibilidadMM() {
  const [proyect] = useState(proyects[1]);
  const [key1, setKey1] = useState(false);
  const [key2, setKey2] = useState(false);
  const [key3, setKey3] = useState(false);
  const { data: infoCedia, isLoading: isLoadingKey1 } = useCedia({
    enabled: key1,
  });

  const { data: info_sucep, isLoading: isLoadingKey2 } = useSucep({
    enabled: key2,
  });
  const { data: parrAzuay, isLoading: isLoadingKey3 } = useParrAzuay({
    enabled: key3,
  });

  const layers = [
    {
      title: "Exploraciones Geologicas",
      enabled: key1,
      setEnabled: useCallback(() => setKey1((prev) => !prev), []),
      isLoading: isLoadingKey1,
    },
    {
      title: "Suceptibilidad del azuay",
      enabled: key2,
      setEnabled: useCallback(() => setKey2((prev) => !prev), []),
      isLoading: isLoadingKey2,
    },
    {
      title: "Parroquias del Azuay",
      enabled: key3,
      setEnabled: useCallback(() => setKey3((prev) => !prev), []),
      isLoading: isLoadingKey3,
    },
  ];

  return (
    <MapSidebar
      proyect={proyect}
      layers={layers}
      GeoViewerComponent={() => (
        <GeoViewerSusceptibilidad
          key1={key1}
          key2={key2}
          key3={key3}
          cedia={infoCedia}
          sucep={info_sucep}
          parroquias={parrAzuay}
        />
      )}
    />
  );
}
