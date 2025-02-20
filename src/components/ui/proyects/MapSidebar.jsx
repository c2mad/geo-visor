import { useState } from "react";
import InfoView from "components/ui/proyects/InfoView";
import { ChoseLayerItem } from "components/maps/ChoseLayerItem";

export const MapSidebar = ({ proyect, layers, GeoViewerComponent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccordion1Open, setIsAccordion1Open] = useState(true);
  const [isAccordion2Open, setIsAccordion2Open] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const toggleAccordion1 = () => {
    setIsAccordion2Open(false);
    setIsAccordion1Open((prev) => !prev);
  };

  const toggleAccordion2 = () => {
    setIsAccordion1Open(false);
    setIsAccordion2Open((prev) => !prev);
  };

  return (
    <div className="flex space-x-0 p-3 md:space-x-3 lg:space-x-3">
      {/* Menú lateral */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed inset-0 ${isMenuOpen ? "z-40" : "z-30"} h-full w-full bg-black bg-opacity-50 md:hidden`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 ${isMenuOpen ? "z-40" : "z-30"} w-64 transform overflow-hidden overflow-y-auto rounded-lg bg-white p-3 shadow-md transition-transform duration-300 md:relative md:translate-x-0 md:w-[400px]`}
      >
        <div
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classes="bg-white text-gray-900"
          data-inactive-classes="text-gray-500"
        >
          {/* Acordeón 1: Información del proyecto */}
          <h2 id="accordion-flush-heading-1">
            <button
              type="button"
              className="flex w-full items-center justify-between border-b border-gray-200 py-5 text-left font-medium text-gray-500"
              onClick={toggleAccordion1}
              aria-expanded={isAccordion1Open}
            >
              <span>Información</span>
              <svg
                data-accordion-icon
                className={`h-3 w-3 shrink-0 ${isAccordion1Open ? "rotate-0" : "rotate-180"}`}
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
            id="accordion-flush-body-1"
            className={`${isAccordion1Open ? "block" : "hidden"}`}
            aria-labelledby="accordion-flush-heading-1"
          >
            <InfoView proyect={proyect} />
          </div>

          {/* Acordeón 2: Capas de datos */}
          <h2 id="accordion-flush-heading-2">
            <button
              type="button"
              className="flex w-full items-center justify-between border-b border-gray-200 py-5 text-left font-medium text-gray-500"
              onClick={toggleAccordion2}
              aria-expanded={isAccordion2Open}
            >
              <span>Capa de Datos</span>
              <svg
                data-accordion-icon
                className={`h-3 w-3 shrink-0 ${isAccordion2Open ? "rotate-0" : "rotate-180"}`}
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
            className={`${isAccordion2Open ? "block" : "hidden"}`}
            aria-labelledby="accordion-flush-heading-2"
          >
            <div className="border-b border-gray-200 py-5">
              <div className="mt-2">
                <ul className="space-y-3">
                  {layers.map((layer, index) => (
                    <ChoseLayerItem
                      key={index}
                      title={layer.title}
                      enabled={layer.enabled}
                      setEnabled={layer.setEnabled}
                      isLoading={layer.isLoading}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenedor del GeoViewer */}
      <div className="h-[calc(100vh_-_80px)] w-full overflow-hidden rounded-lg bg-white shadow-md z-30">
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
        <GeoViewerComponent />
      </div>
    </div>
  );
};
