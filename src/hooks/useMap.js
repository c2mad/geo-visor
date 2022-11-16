import { useQuery } from "@tanstack/react-query";
import { getLayer } from "api-geo/queries/map.query";

const key_0 = "info_geotecnica";
const key_1 = "exploracion_calicatas";
const key_2 = "perfil_estratigrаfico";
const key_3 = "iso_periodos";
const key_4 = "geo_local";
const key_5 = "geo_azuay";
const key_6 = "parroquias_azuay";

const defaultParams = {
  outputFormat: "application/json",
  request: "GetFeature",
  service: "WFS",
  typeName: "jose:geo_azuay",
  version: "1.0.0",
};

export const useInfoGeotecnica = ({ enabled = true }) => {
  const params = {
    ...defaultParams,
    typeName: `jose:${key_0}`,
  };

  return useQuery([key_0, params], () => getLayer(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};

export const useExpCalicatas = ({ enabled = true }) => {
  const params = {
    ...defaultParams,
    typeName: `jose:${key_1}`,
  };

  return useQuery([key_1, params], () => getLayer(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};

export const usePerfilEstra = ({ enabled = true }) => {
  const params = {
    ...defaultParams,
    typeName: `jose:${key_2}`,
  };

  return useQuery([key_2, params], () => getLayer(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};

export const useIsoPeriodos = ({ enabled = true }) => {
  const params = {
    ...defaultParams,
    typeName: `jose:${key_3}`,
  };

  return useQuery([key_3, params], () => getLayer(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};

export const useGeoLocal = ({ enabled = true }) => {
  const params = {
    ...defaultParams,
    typeName: `jose:${key_4}`,
  };

  return useQuery([key_4, params], () => getLayer(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};

export const useGeoAzuay = ({ enabled = true }) => {
  const params = {
    ...defaultParams,
    typeName: `jose:${key_5}`,
  };

  return useQuery([key_5, params], () => getLayer(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};

export const useParrAzuay = ({ enabled = true }) => {
  const params = {
    ...defaultParams,
    typeName: `jose:${key_6}`,
  };

  return useQuery([key_6, params], () => getLayer(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};
