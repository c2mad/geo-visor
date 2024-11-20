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
const key_8 = "a_mdt";
const key_9 = "b_pen";
const key_10 = "c_perfil";
const key_11 = "d_plano";
const key_12 = "e_dfallas";
const key_13 = "f_sfallas";
const key_14 = "g_spi";
const key_15 = "h_twi";
const key_16 = "i_dvias";
const key_17 = "j_svias";
const key_18 = "k_ndvi";
const key_19 = "l_ndwi";
const key_20 = "n_pc1";
const key_21 = "o_pc2";
const key_22 = "p_geo";
const key_23 = "q_cover";

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
};
const defaultParamsRaster = {
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

export const useAmdt = () => {
  const params = {
    ...defaultParamsRaster,
    layers: `cedia:${key_8}`,
  };

  return useQuery([key_8, params], () => getLayer(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};

export const useBpen = () => {
  const params = {
    ...defaultParamsRaster,
    layers: `cedia:${key_9}`,
  };

  return useQuery([key_9, params], () => getLayer(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};

export const useCperfil = () => {
  const params = {
    ...defaultParamsRaster,
    layers: `cedia:${key_10}`,
  };

  return useQuery([key_10, params], () => getLayer(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};

export const useDplano = () => {
  const params = {
    ...defaultParamsRaster,
    layers: `cedia:${key_11}`,
  };

  return useQuery([key_11, params], () => getLayer(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};
export const useDfallas = () => {
  const params = {
    ...defaultParamsRaster,
    layers: `cedia:${key_12}`,
  };

  return useQuery([key_12, params], () => getLayer(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};

export const useSfallas = () => {
  const params = {
    ...defaultParamsRaster,
    layers: `cedia:${key_13}`,
  };

  return useQuery([key_13, params], () => getLayer(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};

export const useSpi = () => {
  const params = {
    ...defaultParamsRaster,
    layers: `cedia:${key_14}`,
  };

  return useQuery([key_14, params], () => getLayer(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};

export const useHTwi = () => {
  const params = {
    ...defaultParamsRaster,
    layers: `cedia:${key_15}`,
  };

  return useQuery([key_15, params], () => getLayer(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};

export const useIDvias = () => {
  const params = {
    ...defaultParamsRaster,
    layers: `cedia:${key_16}`,
  };

  return useQuery([key_16, params], () => getLayer(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};
export const useSVias = () => {
  const params = {
    ...defaultParamsRaster,
    layers: `cedia:${key_17}`,
  };

  return useQuery([key_17, params], () => getLayer(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};
export const useNDvi = () => {
  const params = {
    ...defaultParamsRaster,
    layers: `cedia:${key_18}`,
  };

  return useQuery([key_18, params], () => getLayer(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};

export const useNDwi = () => {
  const params = {
    ...defaultParamsRaster,
    layers: `cedia:${key_19}`,
  };

  return useQuery([key_19, params], () => getLayer(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};
export const usePC1 = () => {
  const params = {
    ...defaultParamsRaster,
    layers: `cedia:${key_20}`,
  };

  return useQuery([key_20, params], () => getLayer(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};
export const usePC2 = () => {
  const params = {
    ...defaultParamsRaster,
    layers: `cedia:${key_21}`,
  };

  return useQuery([key_21, params], () => getLayer(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};
export const usePGEO = () => {
  const params = {
    ...defaultParamsRaster,
    layers: `cedia:${key_22}`,
  };

  return useQuery([key_22, params], () => getLayer(params), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
};
export const useQCover = () => {
  const params = {
    ...defaultParamsRaster,
    layers: `cedia:${key_23}`,
  };

  return useQuery([key_23, params], () => getLayer(params), {
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
