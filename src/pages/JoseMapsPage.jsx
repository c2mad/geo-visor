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
import host_api from "utils/host_api";
import proyects from "utils/proyects";

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
    <div className="flex space-x-0 p-3 md:space-x-3 lg:space-x-3">
      <div className="hidden h-[calc(100vh_-_80px)] w-[400px] overflow-hidden overflow-y-auto rounded-lg bg-white p-3 shadow-md md:lg:block lg:block">
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
          {proyects.map((proyect) => (
            <div
              key={proyect.id}
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
                  <button
                    type="button"
                    className="mr-2 inline-flex items-center rounded-lg bg-rose-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-rose-800 focus:outline-none focus:ring-4 focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
                    onClick={() =>
                      window.open(
                        host_api +
                          "/geoserver/jose/ows?service=WMS&request=GetCapabilities",
                        "_blank",
                      )
                    }
                  >
                    <svg
                      className="mr-2 h-3.5 w-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 19"
                    >
                      <path
                        stroke="currentColor"
                        d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3M9.5 1v10.93m4-3.93-4 4-4-4"
                      />
                    </svg>
                    WMS
                  </button>
                  <button
                    type="button"
                    className="mr-2 inline-flex items-center rounded-lg bg-rose-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-rose-800 focus:outline-none focus:ring-4 focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
                    onClick={() =>
                      window.open(
                        host_api +
                          "/geoserver/jose/ows?service=WFS&request=GetCapabilities",
                        "_blank",
                      )
                    }
                  >
                    <svg
                      className="mr-2 h-3.5 w-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 19"
                    >
                      <path
                        stroke="currentColor"
                        d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3M9.5 1v10.93m4-3.93-4 4-4-4"
                      />
                    </svg>
                    WFS
                  </button>
                  <button
                    type="button"
                    className="mr-2 inline-flex items-center rounded-lg bg-rose-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-rose-800 focus:outline-none focus:ring-4 focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
                    onClick={() =>
                      window.open(
                        host_api +
                          "/geoserver/jose/ows?service=WCS&request=GetCapabilities",
                        "_blank",
                      )
                    }
                  >
                    <svg
                      className="mr-2 h-3.5 w-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 19"
                    >
                      <path
                        stroke="currentColor"
                        d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3M9.5 1v10.93m4-3.93-4 4-4-4"
                      />
                    </svg>
                    WCS
                  </button>
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
