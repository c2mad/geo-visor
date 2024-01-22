import React from "react";

const MenuDescargas = () => {
  return (
    <>
      <div id="descargasxcapas">
        <div className="relative inline-block text-left">
          <button
            id="multiLevelDropdownButton"
            data-dropdown-toggle="multi-dropdown"
            className="inline-flex items-center rounded-lg bg-red px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red focus:outline-none focus:ring-4 focus:ring-red dark:bg-red dark:hover:bg-red dark:focus:ring-red"
            type="button"
          >
            Descargas
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
                        href="/src/utils/jose-info_geotecnica.tif"
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
                        href="/src/utils/shape/info_geotecnica.zip"
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
                  Perfiles de suelo profundidad {"<"} 5m (calicatas), SPT's y
                  perforaciones
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
                        href="/src/utils/jose-exploracion_calicatas.tif"
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
                        href="/src/utils/shape/exploracion_calicatas.zip"
                        download="info_geotecnica.zip"
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
                        href="/src/utils/jose-perfil_estratigr fico.tif"
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
                        href="/src/utils/shape/perfil_estratigrаfico.zip"
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
                        href="/src/utils/jose-iso_periodos.tif"
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
                        href="/src/utils/shape/iso_periodos.zip"
                        download="info_geotecnica.zip"
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
                        href="/src/utils/jose-geo_local.tif"
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
                        href="/src/utils/shape/geo_local.zip"
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
                        href="/src/utils/jose-geo_azuay.tif"
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
                        href="/src/utils/shape/geo_azuay.zip"
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
                        href="/src/utils/jose-parroquias_azuay.tif"
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
                        href="/src/utils/shape/parroquias_azuay.zip"
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
    </>
  );
};

export default MenuDescargas;
