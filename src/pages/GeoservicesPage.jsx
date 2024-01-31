import React, { useState } from "react";

const GeoservicesPage = () => {
  // Estado para mantener la pestaña activa
  const [activeTab, setActiveTab] = useState("profile");

  // Función para cambiar la pestaña activa
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="mx-auto w-full max-w-[1400px] px-3">
        <h3 className="p-8 text-base font-bold dark:text-white">
          GEOSERVICIOS
        </h3>
        <span className="dark:text-white">
          Es un sistema compuesto por hardware, software y procedimientos
          diseñados para facilitar la captura, gestión, análisis y visualización
          de IG para resolver problemas de la planificación y gestión.
        </span>

        {/* Código de las pestañas */}
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            className="-mb-px flex flex-wrap text-center text-sm font-medium dark:text-gray-50"
            id="default-tab"
            role="tablist"
          >
            {/* Pestañas */}
            <li className="me-2" role="presentation">
              <button
                className={`inline-block rounded-t-lg border-b-2 p-4 ${
                  activeTab === "profile"
                    ? "border-gray-700"
                    : "border-transparent"
                }`}
                onClick={() => handleTabChange("profile")}
              >
                Servicios WMS
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`inline-block rounded-t-lg border-b-2 p-4 ${
                  activeTab === "dashboard"
                    ? "border-gray-700"
                    : "border-transparent"
                }`}
                onClick={() => handleTabChange("dashboard")}
              >
                Servicios WFS
              </button>
            </li>
          </ul>
        </div>
        <div id="default-tab-content">
          {/* Contenido de las pestañas */}
          {activeTab === "profile" && (
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              {/* Contenido para la pestaña Profile */}
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong className="font-bold text-gray-800 dark:text-white">
                  ¿Qué es WMS?
                </strong>
              </p>
              <p>
                <strong className="font-normal text-gray-800 dark:text-white">
                  Un servicio de mapas web (WMS, por sus siglas en inglés Web
                  Map Service) es un estándar que proporciona una interfaz de
                  protocolo HTTP para solicitar imágenes de mapas
                  georreferenciados de uno o varios servidores. Este estándar
                  fue desarrollado por el Open Geospatial Consortium (OGC) y es
                  ampliamente utilizado en la comunidad de información
                  geográfica.{" "}
                </strong>
              </p>
              <p></p>
              <div className="rounded-lg border-solid p-4">
                <div className="overflow-x-auto">
                  <table className="w-full rounded-lg border border-solid text-left text-sm text-gray-500 dark:text-gray-400">
                    <thead className="bg-slate-400 text-xs uppercase text-white dark:bg-gray-700 dark:text-gray-200">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          AUTOR
                        </th>
                        <th scope="col" className="px-6 py-3">
                          PROYECTO
                        </th>
                        <th scope="col" className="px-6 py-3">
                          URL
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-200">
                      <tr className="border-b dark:border-gray-700 dark:bg-gray-800">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                        >
                          José Guaman
                        </th>
                        <td className="px-6 py-4">
                          {" "}
                          Implementación de un geovisor para la visualización de
                          las propiedades geodinámicas y geomorfológicas del
                          subsuelo: caso de estudio Cuenca, Azuay, Ecuador
                        </td>
                        <th>
                          http://192.168.10.4:8085/geoserver/jose/ows?service=WMS&request=GetCapabilities
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          {activeTab === "dashboard" && (
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              {/* Contenido para la pestaña Dashboard */}
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong className="font-bold text-gray-800 dark:text-white">
                  ¿Qué es WFS?
                </strong>
              </p>
              <p>
                <strong className="font-normal text-gray-800 dark:text-white">
                  Un servicio geográfico de objetos (WFS, por sus siglas en
                  inglés Web Feature Service) es un estándar desarrollado por el
                  Open Geospatial Consortium (OGC) que proporciona una interfaz
                  que permite solicitar y modificar datos geoespaciales a través
                  de la web.{" "}
                </strong>
              </p>
              <p></p>
              <div className="rounded-lg border-solid p-4">
                <div className="overflow-x-auto">
                  <table className="w-full rounded-lg border border-solid text-left text-sm text-gray-500 dark:text-gray-400">
                    <thead className="bg-slate-400 text-xs uppercase text-white dark:bg-gray-700 dark:text-gray-200">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          AUTOR
                        </th>
                        <th scope="col" className="px-6 py-3">
                          PROYECTO
                        </th>
                        <th scope="col" className="px-6 py-3">
                          URL
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-200">
                      <tr className="border-b dark:border-gray-700 dark:bg-gray-800">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                        >
                          Jose Guaman
                        </th>
                        <td className="px-6 py-4">
                          Implementación de un geovisor para la visualización de
                          las propiedades geodinámicas y geomorfológicas del
                          subsuelo: caso de estudio Cuenca, Azuay, Ecuador
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href="http://192.168.10.4:8085/geoserver/jose/ows?service=WFS&request=GetCapabilities"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Link
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GeoservicesPage;
