import React from "react";

const GeoservicesPage = () => {
  return (
    <>
      <h1 className="bg-gray-200 p-4 text-center text-xl font-semibold dark:bg-gray-300">
        Geoservicios Web
      </h1>
      <div className="mx-auto w-full max-w-[1400px] bg-slate-50 px-3">
        <h3 className="p-4 text-base font-semibold dark:text-white">
          ¿Qué son los servicios web?
        </h3>
        <span className="dark:text-white">
          Es un sistema compuesto por hardware, software y procedimientos
          diseñados para facilitar la captura, gestión, análisis y visualización
          de IG para resolver problemas de la planificación y gestión.
        </span>
        <div class="rounded-lg border-solid p-4">
          <div class="overflow-x-auto">
            <table class="w-full rounded-lg border border-solid text-left text-sm text-gray-500 dark:text-gray-400">
              <thead class="bg-slate-400 text-xs uppercase text-white dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Tipo
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Definición
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody class="bg-gray-200">
                <tr class="border-b dark:border-gray-700 dark:bg-gray-800">
                  <th
                    scope="row"
                    class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    WMS (Web Map Service)
                  </th>
                  <td class="px-6 py-4">
                    Facilita la visualización de la IG, generando una
                    representación o una imagen del mundo real para una
                    determinada zona
                  </td>
                  <td class="px-6 py-4">
                    <a
                      href="http://192.168.10.4:8085/geoserver/jose/wms?service=WMS&version=1.1.0&request=GetMap&layers=jose%3Ageo_azuay&bbox=-79.7641371114835%2C-3.63131157466202%2C-78.41983190729567%2C-2.495085062454964&width=768&height=649&srs=EPSG%3A4326&styles=&format=image%2Fpng"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                  </td>
                </tr>
                <tr class="border-b dark:border-gray-700 dark:bg-gray-800">
                  <th
                    scope="row"
                    class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    WFS (Web Feature Service):
                  </th>
                  <td class="px-6 py-4">
                    Es un servicio estándar que permite interactuar con los
                    mapas servidos por el WMS.
                  </td>
                  <td class="px-6 py-4">-</td>
                </tr>
                <tr class="dark:bg-gray-800">
                  <th
                    scope="row"
                    class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    WCS (Web Coverage Service):
                  </th>
                  <td class="px-6 py-4">
                    Este permite la obtención y el intercambio de información
                    geoespacial, coincide con objetos de tipo vectorial, ráster,
                    modelos digitales o cualquier conjunto de datos que contenga
                    esa estructura de datos
                  </td>
                  <td class="px-6 py-4">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeoservicesPage;
