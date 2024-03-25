import { ChoseLayerItem } from "components/maps/ChoseLayerItem";
import { GeoViewerJose } from "components/maps/GeoViewerJose";
import { Link } from "react-router-dom";
//Shapefiles
import shgeotecnica from "../utils/Shapefile/info_geotecnica.zip";
import shgeoazuay from "../utils/Shapefile/geo_azuay.zip";
import shgeolocal from "../utils/Shapefile/geo_local.zip";
import shcalicatas from "../utils/Shapefile/exploracion_calicatas.zip";
import shiso from "../utils/Shapefile/iso_periodos.zip";
import shazuay from "../utils/Shapefile/parroquias_azuay.zip";
import shperfil from "../utils/Shapefile/perfil_estratigrаfico.zip";
//Tifs
import tiffpgs from "../utils/jose-info_geotecnica.tif";
import tiffgeoazuay from "../utils/jose-geo_azuay.tif";
import tiffgeolocal from "../utils/jose-geo_local.tif";
import tiffcalicatas from "../utils/jose-exploracion_calicatas.tif";
import tiffiso from "../utils/jose-iso_periodos.tif";
import tiffazuay from "../utils/jose-parroquias_azuay.tif";
import tiffperfil from "../utils/jose-perfil_estratigrafico.tif";

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
import proyects from "utils/proyects";

export const JoseMapsPage = () => {
  const [key0, setKey0] = useState(false);
  const [key1, setKey1] = useState(false);
  const [key2, setKey2] = useState(false);
  const [key3, setKey3] = useState(false);
  const [key4, setKey4] = useState(false);
  const [key5, setKey5] = useState(false);
  const [key6, setKey6] = useState(false);

  // Estado para controlar la visibilidad del submenú
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  // Función para alternar la visibilidad del submenú
  const toggleSubmenu = () => {
    setIsSubmenuVisible(!isSubmenuVisible);
  };

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
    <div className="flex space-x-0 p-3 md:space-x-3 lg:space-x-3">
      <div className="hidden h-[calc(100vh_-_80px)] w-[400px] overflow-hidden overflow-y-auto rounded-lg bg-inherit p-3 text-white shadow-md md:lg:block lg:block">
        <div
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          data-inactive-classes="text-gray-500 dark:text-gray-400"
        >
          <h2 id="accordion-flush-heading-1">
            <button
              type="button"
              className="flex w-full items-center justify-between border-b border-gray-200 py-5 text-left font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400"
              data-accordion-target="#accordion-flush-body-1"
              aria-expanded="true"
              aria-controls="accordion-flush-body-1"
            >
              <span>Información</span>
              <svg
                data-accordion-icon
                className="h-3 w-3 shrink-0 rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path stroke="currentColor" d="M9 5 5 1 1 5" />
              </svg>
            </button>
          </h2>
          {proyects.map((proyect, index) => (
            <div
              key={index}
              id="accordion-flush-body-1"
              className="hidden"
              aria-labelledby="accordion-flush-heading-1"
            >
              <div className="border-b border-gray-200 py-5 dark:border-gray-700">
                <p className="text-lg font-semibold text-gray-500">Titulo</p>
                <p className="text-base font-normal text-gray-500">
                  {proyect.title}
                </p>
                <p className="text-lg font-semibold text-gray-500">
                  Publicación
                </p>
                <p className="text-base font-normal text-gray-500">
                  {proyect.publication}
                </p>
                <div className="mt-5 inline-flex items-center">
                  <Link to="/moreinfo">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-lg bg-red px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red focus:outline-none focus:ring-4 focus:ring-red dark:bg-red dark:hover:bg-red dark:focus:ring-red"
                    >
                      Ver más
                      <svg
                        className="ml-2 h-3.5 w-3.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <h2 id="accordion-flush-heading-2">
            <button
              type="button"
              className="flex w-full items-center justify-between border-b border-gray-200 py-5 text-left font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400"
              data-accordion-target="#accordion-flush-body-2"
              aria-expanded="false"
              aria-controls="accordion-flush-body-2"
            >
              <span>Capa de Datos</span>
              <svg
                data-accordion-icon
                className="h-3 w-3 shrink-0 rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path stroke="currentColor" d="M9 5 5 1 1 5" />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-2"
            className="hidden"
            aria-labelledby="accordion-flush-heading-2"
          >
            <div className="border-b border-gray-200 py-5 dark:border-gray-700">
              <div className="mt-2">
                <ul className="space-y-3">
                  <ChoseLayerItem
                    title="Propiedades geodinámicas de suelos"
                    enabled={key0}
                    setEnabled={setKey0}
                    isLoading={isLoadingKey0}
                  />
                  {key0 && ( // Aquí se hace la comprobación: Si key0 es true, muestra el siguiente elemento
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="multiLevelDropdownButton"
                    >
                      <li>
                        <button
                          id="doubleDropdownButton"
                          type="button"
                          className="w-68 flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={toggleSubmenu} // Llamada a la función para cambiar la visibilidad del submenú
                        >
                          Propiedades geodinámicas de suelos
                        </button>
                        <div
                          id="doubleDropdown"
                          className={`relative top-2 z-0 ${
                            isSubmenuVisible ? "" : "hidden"
                          } w-96 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700`}
                          style={{ left: 0 }} // Asegura que el submenú se alinee a la izquierda del botón
                        >
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="doubleDropdownButton"
                          >
                            <li>
                              <a
                                href={tiffpgs}
                                download="jose-info_geotecnica.tif"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                GeoTTIFF
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://192.168.10.4:8085/geoserver/jose/wms?service=WMS&version=1.1.0&request=GetMap&layers=jose%3Ainfo_geotecnica&bbox=-79.08186507463374%2C-2.936608594157815%2C-78.56400620045021%2C-2.593689219220091&width=768&height=508&srs=EPSG%3A4326&styles=&format=image%2Fjpeg"
                                target="_blank"
                                rel="noreferrer"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                JPEG
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://192.168.10.4:8085/geoserver/jose/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=jose%3Ainfo_geotecnica&maxFeatures=50&outputFormat=application%2Fjson"
                                target="_blank"
                                rel="noreferrer"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                GeoJson
                              </a>
                            </li>
                            <li>
                              <a
                                href={shgeotecnica}
                                download="info_geotecnica.zip"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Shapefile
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  )}

                  <ChoseLayerItem
                    title="Perfiles de suelo profundidad < 5m (calicatas), SPT's y perforaciones"
                    enabled={key1}
                    setEnabled={setKey1}
                    isLoading={isLoadingKey1}
                  />
                  {key1 && ( // Aquí se hace la comprobación: Si key0 es true, muestra el siguiente elemento
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="multiLevelDropdownButton"
                    >
                      <li>
                        <button
                          id="doubleDropdownButton"
                          type="button"
                          className="w-68 flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={toggleSubmenu} // Llamada a la función para cambiar la visibilidad del submenú
                        >
                          Perfiles de suelo profundidad {"<"} 5m (calicatas),
                          SPT's y perforaciones
                        </button>
                        <div
                          id="doubleDropdown"
                          className={`relative top-2 z-0 ${
                            isSubmenuVisible ? "" : "hidden"
                          } w-96 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700`}
                          style={{ left: 0 }} // Asegura que el submenú se alinee a la izquierda del botón
                        >
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="secondDropdownButton"
                          >
                            <li>
                              <a
                                href={tiffcalicatas}
                                download="jose-exploracion_calicatas.tif"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                GeoTTIFF
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://192.168.10.4:8085/geoserver/jose/wms?service=WMS&version=1.1.0&request=GetMap&layers=jose%3Aexploracion_calicatas&bbox=-79.43316580591853%2C-2.9374101096155982%2C-78.88548486427072%2C-2.808654672390265&width=768&height=330&srs=EPSG%3A4326&styles=&format=image%2Fjpeg"
                                target="_blank"
                                rel="noreferrer"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                JPEG
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://192.168.10.4:8085/geoserver/jose/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=jose%3Aexploracion_calicatas&maxFeatures=50&outputFormat=application%2Fjson
                        "
                                target="_blank"
                                rel="noreferrer"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                GeoJson
                              </a>
                            </li>
                            <li>
                              <a
                                href={shcalicatas}
                                download="exploracion_calicatas.zip"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Shapefile
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  )}

                  <ChoseLayerItem
                    title="Perfiles estratigráficos profundidad > 30m"
                    enabled={key2}
                    setEnabled={setKey2}
                    isLoading={isLoadingKey2}
                  />
                  {key2 && ( // Aquí se hace la comprobación: Si key0 es true, muestra el siguiente elemento
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="multiLevelDropdownButton"
                    >
                      <li>
                        <button
                          id="doubleDropdownButton"
                          type="button"
                          className="w-68 flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={toggleSubmenu} // Llamada a la función para cambiar la visibilidad del submenú
                        >
                          Perfiles estratigráficos profundidad {">"} 30m
                        </button>
                        <div
                          id="doubleDropdown"
                          className={`relative top-2 z-0 ${
                            isSubmenuVisible ? "" : "hidden"
                          } w-96 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700`}
                          style={{ left: 0 }} // Asegura que el submenú se alinee a la izquierda del botón
                        >
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="secondDropdownButton"
                          >
                            <li>
                              <a
                                href={tiffperfil}
                                download="jose-perfil_estratigrafico.tif"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                GeoTTIFF
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://192.168.10.4:8085/geoserver/jose/wms?service=WMS&version=1.1.0&request=GetMap&layers=jose%3Aperfil_estratigr%D0%B0fico&bbox=-79.43308576247448%2C-2.9379616623886466%2C-78.88366814357599%2C-2.807871298781192&width=768&height=330&srs=EPSG%3A4326&styles=&format=image%2Fjpeg"
                                target="_blank"
                                rel="noreferrer"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                JPEG
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://192.168.10.4:8085/geoserver/jose/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=jose%3Aperfil_estratigr%D0%B0fico&maxFeatures=50&outputFormat=application%2Fjson"
                                target="_blank"
                                rel="noreferrer"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                GeoJson
                              </a>
                            </li>
                            <li>
                              <a
                                href={shperfil}
                                download="perfil_estratigrаfico.zip"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Shapefile
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  )}

                  <ChoseLayerItem
                    title="Isoperiodos parroquia urbana Cuenca"
                    enabled={key3}
                    setEnabled={setKey3}
                    isLoading={isLoadingKey3}
                  />
                  {key3 && ( // Aquí se hace la comprobación: Si key0 es true, muestra el siguiente elemento
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="multiLevelDropdownButton"
                    >
                      <li>
                        <button
                          id="doubleDropdownButton"
                          type="button"
                          className="w-68 flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={toggleSubmenu} // Llamada a la función para cambiar la visibilidad del submenú
                        >
                          Isoperiodos parroquia urbana Cuenca
                        </button>
                        <div
                          id="doubleDropdown"
                          className={`relative top-2 z-0 ${
                            isSubmenuVisible ? "" : "hidden"
                          } w-96 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700`}
                          style={{ left: 0 }} // Asegura que el submenú se alinee a la izquierda del botón
                        >
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="secondDropdownButton"
                          >
                            <li>
                              <a
                                href={tiffiso}
                                download="jose-iso_periodos.tif"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                GeoTTIFF
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://192.168.10.4:8085/geoserver/jose/wms?service=WMS&version=1.1.0&request=GetMap&layers=jose%3Aiso_periodos&bbox=-79.07460816750624%2C-2.940493029405997%2C-78.89328271364667%2C-2.8212720558657822&width=768&height=504&srs=EPSG%3A4326&styles=&format=image%2Fjpeg"
                                target="_blank"
                                rel="noreferrer"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                JPEG
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://192.168.10.4:8085/geoserver/jose/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=jose%3Aiso_periodos&maxFeatures=50&outputFormat=application%2Fjson"
                                target="_blank"
                                rel="noreferrer"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                GeoJson
                              </a>
                            </li>
                            <li>
                              <a
                                href={shiso}
                                download="iso_periodos.zip"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Shapefile
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  )}

                  <ChoseLayerItem
                    title="Geología proyecto PRECUPA escala 1:25000"
                    enabled={key4}
                    setEnabled={setKey4}
                    isLoading={isLoadingKey4}
                  />
                  {key4 && ( // Aquí se hace la comprobación: Si key0 es true, muestra el siguiente elemento
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="multiLevelDropdownButton"
                    >
                      <li>
                        <button
                          id="doubleDropdownButton"
                          type="button"
                          className="w-68 flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={toggleSubmenu} // Llamada a la función para cambiar la visibilidad del submenú
                        >
                          Geología proyecto PRECUPA escala 1:25000
                        </button>
                        <div
                          id="doubleDropdown"
                          className={`relative top-2 z-0 ${
                            isSubmenuVisible ? "" : "hidden"
                          } w-96 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700`}
                          style={{ left: 0 }} // Asegura que el submenú se alinee a la izquierda del botón
                        >
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="secondDropdownButton"
                          >
                            <li>
                              <a
                                href={tiffgeolocal}
                                download="jose-geo_local.tif"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                GeoTTIFF
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://192.168.10.4:8085/geoserver/jose/wms?service=WMS&version=1.1.0&request=GetMap&layers=jose%3Ageo_local&bbox=-79.12537433293012%2C-2.917443762773028%2C-78.74937282626924%2C-2.6726709114152247&width=768&height=499&srs=EPSG%3A4326&styles=&format=image%2Fjpeg"
                                target="_blank"
                                rel="noreferrer"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                JPEG
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://192.168.10.4:8085/geoserver/jose/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=jose%3Ageo_local&maxFeatures=50&outputFormat=application%2Fjson"
                                target="_blank"
                                rel="noreferrer"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                GeoJson
                              </a>
                            </li>
                            <li>
                              <a
                                href={shgeolocal}
                                download="geo_local.zip"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Shapefile
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  )}

                  <ChoseLayerItem
                    title="Geología del Azuay escala 1:200000"
                    enabled={key5}
                    setEnabled={setKey5}
                    isLoading={isLoadingKey5}
                  />
                  {key5 && ( // Aquí se hace la comprobación: Si key0 es true, muestra el siguiente elemento
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="multiLevelDropdownButton"
                    >
                      <li>
                        <button
                          id="doubleDropdownButton"
                          type="button"
                          className="w-68 flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={toggleSubmenu} // Llamada a la función para cambiar la visibilidad del submenú
                        >
                          Geología del Azuay escala 1:200000
                        </button>
                        <div
                          id="doubleDropdown"
                          className={`relative top-2 z-0 ${
                            isSubmenuVisible ? "" : "hidden"
                          } w-96 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700`}
                          style={{ left: 0 }} // Asegura que el submenú se alinee a la izquierda del botón
                        >
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="secondDropdownButton"
                          >
                            <li>
                              <a
                                href={tiffgeoazuay}
                                download="jose-geo_azuay.tif"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                GeoTTIFF
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://192.168.10.4:8085/geoserver/jose/wms?service=WMS&version=1.1.0&request=GetMap&layers=jose%3Ageo_azuay&bbox=-79.7641371114835%2C-3.63131157466202%2C-78.41983190729567%2C-2.495085062454964&width=768&height=649&srs=EPSG%3A4326&styles=&format=image%2Fjpeg"
                                target="_blank"
                                rel="noreferrer"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                JPEG
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://192.168.10.4:8085/geoserver/jose/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=jose%3Ageo_azuay&maxFeatures=50&outputFormat=application%2Fjson"
                                target="_blank"
                                rel="noreferrer"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                GeoJson
                              </a>
                            </li>
                            <li>
                              <a
                                href={shgeoazuay}
                                download="geo_azuay.zip"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Shapefile
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  )}

                  <ChoseLayerItem
                    title="Parroquias del Azuay"
                    enabled={key6}
                    setEnabled={setKey6}
                    isLoading={isLoadingKey6}
                  />
                  {key6 && ( // Aquí se hace la comprobación: Si key0 es true, muestra el siguiente elemento
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="multiLevelDropdownButton"
                    >
                      <li>
                        <button
                          id="doubleDropdownButton"
                          type="button"
                          className="w-68 flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={toggleSubmenu} // Llamada a la función para cambiar la visibilidad del submenú
                        >
                          Parroquias del Azuay
                        </button>
                        <div
                          id="doubleDropdown"
                          className={`relative top-2 z-0 ${
                            isSubmenuVisible ? "" : "hidden"
                          } w-96 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700`}
                          style={{ left: 0 }} // Asegura que el submenú se alinee a la izquierda del botón
                        >
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="secondDropdownButton"
                          >
                            <li>
                              <a
                                href={tiffazuay}
                                download="jose-parroquias_azuay.tif"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                GeoTTIFF
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://192.168.10.4:8085/geoserver/jose/wms?service=WMS&version=1.1.0&request=GetMap&layers=jose%3Aparroquias_azuay&bbox=-79.7641372084136%2C-3.6313115746855256%2C-78.41983190729566%2C-2.494999689288688&width=768&height=649&srs=EPSG%3A4326&styles=&format=image%2Fjpeg"
                                target="_blank"
                                rel="noreferrer"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                JPEG
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://192.168.10.4:8085/geoserver/jose/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=jose%3Aparroquias_azuay&maxFeatures=50&outputFormat=application%2Fjsonn"
                                target="_blank"
                                rel="noreferrer"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                GeoJson
                              </a>
                            </li>
                            <li>
                              <a
                                href={shazuay}
                                download="parroquias_azuay.zip"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Shapefile
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[calc(100vh_-_80px)] w-full overflow-hidden rounded-lg bg-white shadow-md">
        <div className="bottom-10 inline-flex items-center p-2 font-medium md:inline-flex lg:hidden">
          <button className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor" // Cambia "currentColor" al color que desees, por ejemplo, "red"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="h-8 w-6"
            >
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          {"CAPA DE DATOS"}
        </div>
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
