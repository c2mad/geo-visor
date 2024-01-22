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
            <li className="me-2" role="presentation">
              <button
                className={`inline-block rounded-t-lg border-b-2 p-4 ${
                  activeTab === "settings"
                    ? "border-gray-700"
                    : "border-transparent"
                }`}
                onClick={() => handleTabChange("settings")}
              >
                Sercicios WCS
              </button>
            </li>
            <li role="presentation">
              <button
                className={`inline-block rounded-t-lg border-b-2 p-4 ${
                  activeTab === "contacts"
                    ? "border-gray-700"
                    : "border-transparent"
                }`}
                onClick={() => handleTabChange("contacts")}
              >
                Servicios CSW
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
                  Un Web Map Service o servicio geográfico de mapas, es un
                  estándar abierto e interoperable definido por el OGC (Open
                  Geoespacial Consortium) para publicación y visualización de
                  datos geográficos referenciados espacialmente como imágenes
                  (JPG o PNG) a través del internet.{" "}
                </strong>
              </p>
              <p>
                <strong className="font-medium text-gray-800 dark:text-white">
                  Profile tab's associated content
                </strong>
                .
              </p>
              <div className="rounded-lg border-solid p-4">
                <div className="overflow-x-auto">
                  <table className="w-full rounded-lg border border-solid text-left text-sm text-gray-500 dark:text-gray-400">
                    <thead className="bg-slate-400 text-xs uppercase text-white dark:bg-gray-700 dark:text-gray-200">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Autor
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Proyecto
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
                          Propiedades geodinámicas de suelos
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href="http://192.168.10.4:8085/geoserver/jose/wms?service=WMS&version=1.1.0&request=GetMap&layers=jose%3Ageo_azuay&bbox=-79.7641371114835%2C-3.63131157466202%2C-78.41983190729567%2C-2.495085062454964&width=768&height=649&srs=EPSG%3A4326&styles=&format=image%2Fpng"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Link
                          </a>
                        </td>
                      </tr>
                      <tr className="border-b dark:border-gray-700 dark:bg-gray-800">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                        ></th>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4">-</td>
                      </tr>
                      <tr className="dark:bg-gray-800">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                        ></th>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4">-</td>
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
                  Un Web Feature Service o servicio geográfico de objetos, es un
                  estándar abierto e interoperable definido por el OGC (Open
                  Geoespacial Consortium) para publicación, visualización,
                  consulta y edición de datos geográficos referenciados
                  espacialmente como formato vectorial, es decir devuelve
                  entidades geográficas con su correspondiente geometría y
                  atributos para que el usuario lo utilice.{" "}
                </strong>
              </p>
              <p>
                <strong className="font-medium text-gray-800 dark:text-white">
                  Profile tab's associated content
                </strong>
                .
              </p>
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
                          Propiedades geodinámicas de suelos
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href="http://192.168.10.4:8085/geoserver/jose/wms?service=WMS&version=1.1.0&request=GetMap&layers=jose%3Ageo_azuay&bbox=-79.7641371114835%2C-3.63131157466202%2C-78.41983190729567%2C-2.495085062454964&width=768&height=649&srs=EPSG%3A4326&styles=&format=image%2Fpng"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Link
                          </a>
                        </td>
                      </tr>
                      <tr className="border-b dark:border-gray-700 dark:bg-gray-800">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                        ></th>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4">-</td>
                      </tr>
                      <tr className="dark:bg-gray-800">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                        ></th>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          {activeTab === "settings" && (
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              {/* Contenido para la pestaña Settings */}
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong className="font-bold text-gray-800 dark:text-white">
                  ¿Qué es WCS?
                </strong>
              </p>
              <p>
                <strong className="font-normal text-gray-800 dark:text-white">
                  Un Web Coverage Service o servicio de cobertura web, es un
                  estándar abierto e interoperable definido por el OGC (Open
                  Geoespacial Consortium) para publicación, se encarga al
                  intercambio de datos geográficos mediante coberturas
                  (coverage) bajo la posibilidad de ser recortadas. Los datos
                  obtenidos con este servicio web son una imagen ráster que
                  conserva los valores de cada celda o píxeles.{" "}
                </strong>
              </p>
              <p>
                <strong className="font-medium text-gray-800 dark:text-white">
                  Profile tab's associated content
                </strong>
                .
              </p>
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
                          Propiedades geodinámicas del suelo
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href="http://192.168.10.4:8085/geoserver/jose/wms?service=WMS&version=1.1.0&request=GetMap&layers=jose%3Ageo_azuay&bbox=-79.7641371114835%2C-3.63131157466202%2C-78.41983190729567%2C-2.495085062454964&width=768&height=649&srs=EPSG%3A4326&styles=&format=image%2Fpng"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Link
                          </a>
                        </td>
                      </tr>
                      <tr className="border-b dark:border-gray-700 dark:bg-gray-800">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                        ></th>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4">-</td>
                      </tr>
                      <tr className="dark:bg-gray-800">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                        ></th>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          {activeTab === "contacts" && (
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              {/* Contenido para la pestaña Contacts */}
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong className="font-bold text-gray-800 dark:text-white">
                  ¿Qué es CSW?
                </strong>
              </p>
              <p>
                <strong className="font-normal text-gray-800 dark:text-white">
                  Un Catalogue Web Service o servicio de catálogo, que tiene
                  como principal objetivo permitir que los usuarios puedan
                  localizar datos o servicios geográficos utilizando una de las
                  dos operaciones que definen su interfaz.{" "}
                </strong>
              </p>
              <p>
                <strong className="font-medium text-gray-800 dark:text-white">
                  Profile tab's associated content
                </strong>
                .
              </p>
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
                          Propiedades geodinámicas de suelos
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href="http://192.168.10.4:8085/geoserver/jose/wms?service=WMS&version=1.1.0&request=GetMap&layers=jose%3Ageo_azuay&bbox=-79.7641371114835%2C-3.63131157466202%2C-78.41983190729567%2C-2.495085062454964&width=768&height=649&srs=EPSG%3A4326&styles=&format=image%2Fpng"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Link
                          </a>
                        </td>
                      </tr>
                      <tr className="border-b dark:border-gray-700 dark:bg-gray-800">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                        ></th>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4">-</td>
                      </tr>
                      <tr className="dark:bg-gray-800">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                        ></th>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4">-</td>
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
