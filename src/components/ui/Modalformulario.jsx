import { useState } from "react";
import React from "react";
import MenuDescargas from "./MenuDescargas";
import shgeotecnica from "../../utils/Shapefile/info_geotecnica.zip";
import shgeoazuay from "../../utils/Shapefile/geo_azuay.zip";
import shgeolocal from "../../utils/Shapefile/geo_local.zip";
import shcalicatas from "../../utils/Shapefile/exploracion_calicatas.zip";
import shiso from "../../utils/Shapefile/iso_periodos.zip";
import shazuay from "../../utils/Shapefile/parroquias_azuay.zip";
import shperfil from "../../utils/Shapefile/perfil_estratigrаfico.zip";
import tiffpgs from "../../utils/jose-info_geotecnica.tif";
import tiffgeoazuay from "../../utils/Shapefile/geo_azuay.zip";
import tiffgeolocal from "../../utils/Shapefile/geo_local.zip";
import tiffcalicatas from "../../utils/Shapefile/exploracion_calicatas.zip";
import tiffiso from "../../utils/Shapefile/iso_periodos.zip";
import tiffazuay from "../../utils/Shapefile/parroquias_azuay.zip";
import tiffperfil from "../../utils/Shapefile/perfil_estratigrаfico.zip";

export const Modalformulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [institucion, setInstitucion] = useState("");
  const [motivodescarga, setMotivo] = useState("");
  const [sectorpertenece, setSector] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construir el objeto con los datos del formulario
    const formData = {
      nombre,
      email,
      institucion,
      motivodescarga,
      sectorpertenece,
    };

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Correo electrónico enviado con éxito");
        // Limpiar el formulario aquí
      } else {
        const errorData = await response.json(); // Suponiendo que el servidor devuelve un JSON con detalles del error
        alert(`Error al enviar: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error de red:", error);
      alert(
        "Error de red al intentar enviar el correo electrónico. Verifica tu conexión."
      );
    }
  };

  return (
    <>
      <button
        data-modal-target="form-modal"
        data-modal-toggle="form-modal"
        className="block rounded-lg bg-red px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red focus:bg-red focus:outline-none focus:ring-4 dark:bg-red dark:hover:bg-red dark:focus:bg-red"
        type="button"
      >
        Descarga
      </button>

      <div
        id="form-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="h-modal fixed inset-0 z-50 hidden items-center justify-center overflow-y-auto overflow-x-hidden md:h-full"
      >
        <div className="relative h-full w-full max-w-lg p-4 md:h-auto">
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
            <div className="flex items-center justify-between rounded-t border-b p-5 dark:border-gray-600">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Formulario de registro de información
              </h3>
              <button
                type="button"
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-2.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="form-modal"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7.707 7.707a1 1 0 00-1.414 0L6 7.293 7.293 6l1 1 5-5 1 1-6 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <form
              method="POST"
              className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Escribe tu nombre"
                  required=""
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Correo
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="Escribe tu correo"
                    required=""
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Institución a la que pertenece
                  </label>
                  <input
                    type="text"
                    name="institucion"
                    id="institucion"
                    value={institucion}
                    onChange={(e) => setInstitucion(e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="Institución a la que pertenece"
                    required=""
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Motivo de la descarga
                </label>
                <input
                  type="text"
                  name="motivo"
                  id="motivo"
                  value={motivodescarga}
                  onChange={(e) => setMotivo(e.target.value)}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Motivo de la descarga"
                  required=""
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Sector al que pertenece
                </label>
                <input
                  type="text"
                  name="sector"
                  id="sector"
                  value={sectorpertenece}
                  onChange={(e) => setSector(e.target.value)}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Público o Privado"
                  required=""
                />
              </div>
              <div id="descargasxcapas">
                <div className="relative items-center text-center">
                  <button
                    id="multiLevelDropdownButton"
                    data-dropdown-toggle="multi-dropdown"
                    className={`inline-flex items-center rounded-lg bg-red px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red focus:outline-none focus:ring-4 focus:ring-red dark:bg-red dark:hover:bg-red dark:focus:ring-red ${
                      !nombre ||
                      !email ||
                      !institucion ||
                      !motivodescarga ||
                      !sectorpertenece
                        ? "cursor-not-allowed opacity-50"
                        : ""
                    }`}
                    type="submit"
                    disabled={
                      !nombre ||
                      !email ||
                      !institucion ||
                      !motivodescarga ||
                      !sectorpertenece
                    }
                  >
                    Enviar y descargar
                  </button>

                  <div
                    id="multi-dropdown"
                    className="z-10 hidden w-96 divide-y divide-gray-100 rounded-lg bg-slate-300 shadow dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="multiLevelDropdownButton"
                    >
                      {/* Agregar primer submenú */}
                      <li>
                        <button
                          id="doubleDropdownButton"
                          data-dropdown-toggle="doubleDropdown"
                          type="button"
                          className="flex w-96 items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Propiedades geodinámicas de suelos
                        </button>
                        <div
                          id="doubleDropdown"
                          className="absolute top-14 z-10 hidden w-96 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
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
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                JPEG
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://192.168.10.4:8085/geoserver/jose/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=jose%3Ainfo_geotecnica&maxFeatures=50&outputFormat=application%2Fjson"
                                target="_blank"
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
                      {/* Agregar un segundo submenú */}
                      <li>
                        <button
                          id="secondDropdownButton"
                          data-dropdown-toggle="secondDropdown"
                          type="button"
                          className="flex w-72 items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Perfiles de suelo profundidad {"<"} 5m (calicatas),
                          SPT's y perforaciones
                        </button>
                        <div
                          id="secondDropdown"
                          className="absolute top-14 z-10 hidden w-96 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
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
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                GeoJson
                              </a>
                            </li>
                            <li>
                              <a
                                href={shcalicatas}
                                download="perfil_estratigrаfico.zip"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Shapefile
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      {/* Agregar un tercer submenú */}
                      <li>
                        <button
                          id="secondDropdownButton"
                          data-dropdown-toggle="secondDropdown"
                          type="button"
                          className="flex w-96 items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Perfiles estratigráficos profundidad {">"} 30m
                        </button>
                        <div
                          id="secondDropdown"
                          className="absolute top-14 z-10 hidden w-96 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                        >
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="secondDropdownButton"
                          >
                            <li>
                              <a
                                href={tiffperfil}
                                download="jose-perfil_estratigr fico.tif"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                GeoTTIFF
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://192.168.10.4:8085/geoserver/jose/wms?service=WMS&version=1.1.0&request=GetMap&layers=jose%3Aperfil_estratigr%D0%B0fico&bbox=-79.43308576247448%2C-2.9379616623886466%2C-78.88366814357599%2C-2.807871298781192&width=768&height=330&srs=EPSG%3A4326&styles=&format=image%2Fjpeg"
                                target="_blank"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                JPEG
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://192.168.10.4:8085/geoserver/jose/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=jose%3Aperfil_estratigr%D0%B0fico&maxFeatures=50&outputFormat=application%2Fjson"
                                target="_blank"
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
                      {/* Agregar un cuarto submenú */}
                      <li>
                        <button
                          id="secondDropdownButton"
                          data-dropdown-toggle="secondDropdown"
                          type="button"
                          className="flex w-96 items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Isoperiodos parroquia urbana Cuenca
                        </button>
                        <div
                          id="secondDropdown"
                          className="absolute top-14 z-10 hidden w-96 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
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
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                JPEG
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://192.168.10.4:8085/geoserver/jose/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=jose%3Aiso_periodos&maxFeatures=50&outputFormat=application%2Fjson"
                                target="_blank"
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
                      {/* Agregar un quinto submenú */}
                      <li>
                        <button
                          id="secondDropdownButton"
                          data-dropdown-toggle="secondDropdown"
                          type="button"
                          className="flex w-96 items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Geología proyecto PRECUPA escala 1:25000
                        </button>
                        <div
                          id="secondDropdown"
                          className="absolute top-14 z-10 hidden w-96 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
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
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                JPEG
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://192.168.10.4:8085/geoserver/jose/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=jose%3Ageo_local&maxFeatures=50&outputFormat=application%2Fjson"
                                target="_blank"
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
                      {/* Agregar un sexto submenú */}
                      <li>
                        <button
                          id="secondDropdownButton"
                          data-dropdown-toggle="secondDropdown"
                          type="button"
                          className="flex w-96 items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Geología del Azuay escala 1:200000
                        </button>
                        <div
                          id="secondDropdown"
                          className="absolute top-14 z-10 hidden w-96 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
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
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                JPEG
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://192.168.10.4:8085/geoserver/jose/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=jose%3Ageo_azuay&maxFeatures=50&outputFormat=application%2Fjson"
                                target="_blank"
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
                      {/* Agregar un septimo submenú */}
                      <li>
                        <button
                          id="secondDropdownButton"
                          data-dropdown-toggle="secondDropdown"
                          type="button"
                          className="flex w-96 items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Parroquias del Azuay
                        </button>
                        <div
                          id="secondDropdown"
                          className="absolute top-14 z-10 hidden w-96 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
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
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                JPEG
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://192.168.10.4:8085/geoserver/jose/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=jose%3Aparroquias_azuay&maxFeatures=50&outputFormat=application%2Fjsonn"
                                target="_blank"
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
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
