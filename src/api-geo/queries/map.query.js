import geoApi from "api-geo";

export const getFuture = async (params) => {
  const { data } = await geoApi.get("/geoserver/wfs", { params });
  return data;
};
export const getLayer = async (params) => {
  const result = await geoApi.get("/geoserver/wms", { params });
  return result.request.responseURL;
};
export const getLayerCedia = async (params) => {
  const { data } = await geoApi.get("/geoserver/cedia/wms/kml", {
    params,
    responseType: "blob",
  });
  return data;
};
