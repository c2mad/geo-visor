import proyects from "utils/proyects";
import { useCedia, useSucep } from "hooks/useMap";
import { useCallback, useState } from "react";
import { ChoseLayerItem } from "components/maps/ChoseLayerItem";
import host_api from "utils/host_api";
import GeoViewerCedia from "components/maps/GeoViewerCedia";

export default function Cedia() {
  const [key1, setKey1] = useState(false);
  const [key2, setKey2] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: infoCedia, isLoading: isLoadingKey1 } = useCedia({
    enabled: key1,
  });

  const { data: info_sucep, isLoading: isLoadingKey2 } = useSucep({
    enabled: key2,
  });

  const handleSetKey1 = useCallback(() => setKey1((prev) => !prev), []);
  const handleSetKey2 = useCallback(() => setKey2((prev) => !prev), []);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="flex space-x-0 p-3 md:space-x-3 lg:space-x-3">
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed inset-0 z-50 h-full w-full bg-black bg-opacity-50 md:hidden`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 transform overflow-hidden overflow-y-auto rounded-lg bg-white p-3 shadow-md transition-transform duration-300 md:relative md:translate-x-0 md:w-[400px]`}
      >
        <div
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classes="bg-white text-gray-900"
          data-inactive-classes="text-gray-500"
        >
          <h2 id="accordion-flush-heading-1">
            <button
              type="button"
              className="flex w-full items-center justify-between border-b border-gray-200 py-5 text-left font-medium text-gray-500"
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
              <div className="border-b border-gray-200 py-5">
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
                <div className="mt-5 flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="flex items-center rounded-lg bg-rose-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-rose-800 focus:outline-none focus:ring-4 focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
                    onClick={() =>
                      window.open(
                        host_api +
                          "/geoserver/cedia/ows?service=WMS&request=GetCapabilities",
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
                    className="flex items-center rounded-lg bg-rose-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-rose-800 focus:outline-none focus:ring-4 focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
                    onClick={() =>
                      window.open(
                        host_api +
                          "/geoserver/cedia/ows?service=WFS&request=GetCapabilities",
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
                    className="flex items-center rounded-lg bg-rose-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-rose-800 focus:outline-none focus:ring-4 focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
                    onClick={() =>
                      window.open(
                        host_api +
                          "/geoserver/cedia/ows?service=WCS&request=GetCapabilities",
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
              className="flex w-full items-center justify-between border-b border-gray-200 py-5 text-left font-medium text-gray-500 "
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
            <div className="border-b border-gray-200 py-5">
              <div className="mt-2">
                <ul className="space-y-3">
                  <ChoseLayerItem
                    title="Exploraciones Geologicas"
                    enabled={key1}
                    setEnabled={handleSetKey1}
                    isLoading={isLoadingKey1}
                  />
                  <ChoseLayerItem
                    title="Suceptibilidad del azuay"
                    enabled={key2}
                    setEnabled={handleSetKey2}
                    isLoading={isLoadingKey2}
                    to={info_sucep}
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[calc(100vh_-_80px)] w-full overflow-hidden rounded-lg bg-white shadow-md">
        <div className="bottom-10 inline-flex items-center p-2 font-medium md:inline-flex lg:hidden">
          <button className="mr-2" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
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
        <GeoViewerCedia
          key1={key1}
          key2={key2}
          cedia={infoCedia}
          sucep={info_sucep}
        />
      </div>
    </div>
  );
}
