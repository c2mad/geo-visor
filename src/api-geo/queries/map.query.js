import geoApi from "api-geo";

export const getLayer = async (params) => {
  const { data } = await geoApi.get("/geoserver/wfs", { params });
  return data;
};
