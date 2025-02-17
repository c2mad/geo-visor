import { useQuery } from "@tanstack/react-query";
import { getFuture, getLayer } from "api-geo/queries/map.query";

const key_0 = "info_geotecnica"; // X
const key_1 = "exploracion_calicatas";
const key_2 = "perfil_estratigrаfico"; // X
const key_3 = "iso_periodos";
const key_4 = "geo_local";
const key_5 = "geo_azuay";
const key_6 = "parroquias_azuay";

const key_7 = "Puntos";
const key_8 = "suceptibilidad";

const defaultParams = {
  outputFormat: "application/json",
  request: "GetFeature",
  service: "WFS",
  typeName: "jose:geo_azuay",
  version: "1.0.0",
};
const cediaParams = {
  outputFormat: "application/json",
  request: "GetFeature",
  service: "WFS",
  typeName: "cedia:Puntos",
  version: "1.0.0",
  // maxFeatures: 50,
};
export const cediaParamsRaster = {
  layers: "cedia:suceptibilidad",
  request: "GetMap",
  service: "WMS",
  version: "1.1.0",
  format: "image/png",
  transparent: true,
  width: 768,
  height: 611,
  styles: "line",
};
// const cediaParamsRaster = {
//   layers: "cedia:a_mdt",
//   request: "GetMap",
//   service: "WMS",
//   version: "1.1.0",
//   format: "application/openlayers",
//   // format: "application/vnd.google-earth.kml",
//   transparent: true,
//   width: 768,
//   height: 645,
//   bbox: "637401.5746999988,9598531.606600001,786631.5746999988,9723941.606600001",
//   // srs: "EPSG:32717",
// };
const defaultParamsDowloandWMS = {
  layers: "cedia:a_mdt",
  request: "GetMap",
  service: "WMS",
  version: "1.1.0",
  format: "application/vnd.google-earth.kml",
  transparent: true,
  width: 768,
  height: 645,
  bbox: "637401.5746999988,9598531.606600001,786631.5746999988,9723941.606600001",
  srs: "EPSG:32717",
};
export const useInfoGeotecnica = ({ enabled = true }) => {
  const params = {
    ...defaultParams,
    typeName: `jose:${key_0}`,
  };

  return useQuery([key_0, params], () => getFuture(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};

export const useExpCalicatas = ({ enabled = true }) => {
  const params = {
    ...defaultParams,
    typeName: `jose:${key_1}`,
  };

  return useQuery([key_1, params], () => getFuture(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};

export const usePerfilEstra = ({ enabled = true }) => {
  const params = {
    ...defaultParams,
    typeName: `jose:${key_2}`,
  };

  return useQuery([key_2, params], () => getFuture(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};

export const useIsoPeriodos = ({ enabled = true }) => {
  const params = {
    ...defaultParams,
    typeName: `jose:${key_3}`,
  };

  return useQuery([key_3, params], () => getFuture(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};

export const useGeoLocal = ({ enabled = true }) => {
  const params = {
    ...defaultParams,
    typeName: `jose:${key_4}`,
  };

  return useQuery([key_4, params], () => getFuture(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};

export const useGeoAzuay = ({ enabled = true }) => {
  const params = {
    ...defaultParams,
    typeName: `jose:${key_5}`,
  };

  return useQuery([key_5, params], () => getFuture(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};

export const useParrAzuay = ({ enabled = true }) => {
  const params = {
    ...defaultParams,
    typeName: `jose:${key_6}`,
  };

  return useQuery([key_6, params], () => getFuture(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};
export const useCedia = () => {
  const params = {
    ...cediaParams,
    typeName: `cedia:${key_7}`,
  };

  return useQuery([key_7, params], () => getFuture(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};

export const useSucep = () => {
  const params = {
    ...cediaParamsRaster,
    layers: `cedia:${key_8}`,
  };

  return useQuery([key_8, params], () => getLayer(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};

export const useWMSDowloand = ({ key }) => {
  const params = {
    ...defaultParamsDowloandWMS,
    layers: `cedia:${key}`,
  };

  return useQuery([key, params], () => getLayer(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};
