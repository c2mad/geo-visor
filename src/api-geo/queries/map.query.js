import geoApi from "api-geo";

export const getFuture = async (params) => {
  const { data } = await geoApi.get("/geoserver/wfs", {
    params,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });

  return data;
};

export const getLayer = async (params) => {
  const result = await geoApi.get("/geoserver/wms", { params });
  return result.request.responseURL;
};
// export const getLayer = async (params) => {
//   const result = await geoApi.get("/geoserver/wms", { params });
//   return result;
// };
export const getLayerCedia = async (params) => {
  const { data } = await geoApi.get("/geoserver/cedia/wms/kml", {
    params,
    responseType: "blob",
  });
  return data;
};
