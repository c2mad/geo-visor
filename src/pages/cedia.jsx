import { GeoViewerCedia } from "../components/maps/GeoViewerCedia";
import proyects from "utils/proyects";
import {
  useCedia,
  useAmdt,
  useWMSDowloand,
  useBpen,
  useCperfil,
  useSfallas,
  useDfallas,
  useDplano,
  useSpi,
  useHTwi,
  useIDvias,
  useSVias,
  useNDvi,
  useNDwi,
  usePC1,
  usePC2,
  usePGEO,
  useQCover,
} from "hooks/useMap";
import { useState } from "react";
import { ChoseLayerItem } from "components/maps/ChoseLayerItem";
import host_api from "utils/host_api";
//EXPLORACIONES GEOLOGICAS
//

export default function Cedia() {
  const [key1, setKey1] = useState(false);
  const [key2, setKey2] = useState(false);
  const [key3, setKey3] = useState(false);
  const [key4, setKey4] = useState(false);
  const [key5, setKey5] = useState(false);
  const [key6, setKey6] = useState(false);
  const [key7, setKey7] = useState(false);
  const [key8, setKey8] = useState(false);
  const [key9, setKey9] = useState(false);
  const [key10, setKey10] = useState(false);
  const [key11, setKey11] = useState(false);
  const [key12, setKey12] = useState(false);
  const [key13, setKey13] = useState(false);
  const [key14, setKey14] = useState(false);
  const [key15, setKey15] = useState(false);
  const [key16, setKey16] = useState(false);
  const [key17, setKey17] = useState(false);

  const { data: infoCedia, isLoading: isLoadingKey1 } = useCedia({
    enabled: key1,
  });

  const { data: infomdt, isLoading: isLoadingKey2 } = useAmdt({
    enabled: key2,
  });

  const { data: infobpen, isLoading: isLoadingKey3 } = useBpen({
    enabled: key3,
  });
  const { data: infocperfil, isLoading: isLoadingKey4 } = useCperfil({
    enabled: key4,
  });
  const { data: infodplano, isLoading: isLoadingKey5 } = useDplano({
    enabled: key5,
  });
  const { data: infodfallas, isLoading: isLoadingKey6 } = useDfallas({
    enabled: key6,
  });
  const { data: infosfallas, isLoading: isLoadingKey7 } = useSfallas({
    enabled: key7,
  });
  const { data: infoSpi, isLoading: isLoadingKey8 } = useSpi({ enabled: key8 });

  const { data: infoTwi, isLoading: isLoadingKey9 } = useHTwi({
    enabled: key9,
  });

  const { data: infoIDvias, isLoading: isLoadingKey10 } = useIDvias({
    enabled: key10,
  });

  const { data: infoJSvias, isLoading: isLoadingKey11 } = useSVias({
    enabled: key11,
  });
  const { data: infoNDvi, isLoading: isLoadingKey12 } = useNDvi({
    enabled: key12,
  });

  const { data: infoNDwi, isLoading: isLoadingKey13 } = useNDwi({
    enabled: key13,
  });

  const { data: infoPC1, isLoading: isLoadingKey14 } = usePC1({
    enabled: key14,
  });

  const { data: infoPC2, isLoading: isLoadingKey15 } = usePC2({
    enabled: key15,
  });

  const { data: infoPGEO, isLoading: isLoadingKey16 } = usePGEO({
    enabled: key16,
  });

  const { data: infoQCover, isLoading: isLoadingKey17 } = useQCover({
    enabled: key17,
  });

  const { data: infomdt_download } = useWMSDowloand({
    enabled: key2,
    key: "a_mdt",
  });
  const { data: infobpen_download } = useWMSDowloand({
    enabled: key3,
    key: "b_pen",
  });
  const { data: infocperfil_download } = useWMSDowloand({
    enabled: key4,
    key: "c_perfil",
  });
  const { data: infodplano_download } = useWMSDowloand({
    enabled: key5,
    key: "d_plano",
  });
  const { data: infodfallas_download } = useWMSDowloand({
    enabled: key6,
    key: "d_fallas",
  });
  const { data: infosfallas_download } = useWMSDowloand({
    enabled: key7,
    key: "s_fallas",
  });
  const { data: infoSpi_download } = useWMSDowloand({
    enabled: key8,
    key: "spi",
  });
  const { data: infoHtwi_download } = useWMSDowloand({
    enabled: key9,
    key: "twi",
  });

  const { data: infoIDvias_download } = useWMSDowloand({
    enabled: key10,
    key: "i_dvias",
  });

  const { data: infoJSvias_download } = useWMSDowloand({
    enabled: key11,
    key: "j_svias",
  });
  const { data: infoNDvi_download } = useWMSDowloand({
    enabled: key12,
    key: "k_ndvi",
  });

  const { data: infoNDwi_download } = useWMSDowloand({
    enabled: key13,
    key: "l_ndwi",
  });

  const { data: infoPC1_download } = useWMSDowloand({
    enabled: key14,
    key: "n_pc1",
  });

  const { data: infoPC2_download } = useWMSDowloand({
    enabled: key15,
    key: "o_pc2",
  });

  const { data: infoPGEO_download } = useWMSDowloand({
    enabled: key16,
    key: "p_geo",
  });

  const { data: infoQCover_download } = useWMSDowloand({
    enabled: key17,
    key: "q_cover",
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
                          "/cedia/ows?service=WMS&request=GetCapabilities",
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
                          "/cedia/ows?service=WFS&request=GetCapabilities",
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
                    title="Exploraciones Geologicas"
                    enabled={key1}
                    setEnabled={setKey1}
                    isLoading={isLoadingKey1}
                  />
                  {/* listo */}
                  <ChoseLayerItem
                    title="Índice de Agua de Diferencia Normalizada (NDWI)"
                    enabled={key13}
                    setEnabled={setKey13}
                    isLoading={isLoadingKey13}
                    to={infoNDwi_download}
                  />
                  {/* listo */}
                  <ChoseLayerItem
                    title="Índice de Vegetación de Diferencia Normalizada (NDVI)"
                    enabled={key12}
                    setEnabled={setKey12}
                    isLoading={isLoadingKey12}
                    to={infoNDvi_download}
                  />
                  {/* listo */}
                  <ChoseLayerItem
                    title="Altitud"
                    enabled={key2}
                    setEnabled={setKey2}
                    isLoading={isLoadingKey2}
                    to={infomdt_download}
                  />
                  {/* listo */}
                  <ChoseLayerItem
                    title="Pendiente"
                    enabled={key3}
                    setEnabled={setKey3}
                    isLoading={isLoadingKey3}
                    to={infobpen_download}
                  />
                  <ChoseLayerItem
                    title="Uso de suelo"
                    enabled={key2}
                    setEnabled={setKey2}
                    isLoading={isLoadingKey2}
                    to={infomdt_download}
                  />
                  {/* listo */}
                  <ChoseLayerItem
                    title="Geología"
                    enabled={key16}
                    setEnabled={setKey16}
                    isLoading={isLoadingKey16}
                    to={infoPGEO_download}
                  />
                  {/* listo */}
                  <ChoseLayerItem
                    title="Curvatura en el plano"
                    enabled={key5}
                    setEnabled={setKey5}
                    isLoading={isLoadingKey5}
                    to={infodplano_download}
                  />
                  {/* listo */}
                  <ChoseLayerItem
                    title="Curvatura en el perfil"
                    enabled={key4}
                    setEnabled={setKey4}
                    isLoading={isLoadingKey4}
                    to={infocperfil_download}
                  />
                  {/* listo */}
                  <ChoseLayerItem
                    title="Precipitación"
                    enabled={key8}
                    setEnabled={setKey8}
                    isLoading={isLoadingKey8}
                    to={infoSpi_download}
                  />
                  {/* listo */}
                  <ChoseLayerItem
                    title="Distancia a vías"
                    enabled={key10}
                    setEnabled={setKey10}
                    isLoading={isLoadingKey10}
                    to={infoIDvias_download}
                  />
                  {/* listo */}
                  <ChoseLayerItem
                    title="Distancias a fallas"
                    enabled={key6}
                    setEnabled={setKey6}
                    isLoading={isLoadingKey6}
                    to={infodfallas_download}
                  />
                  {/* listo */}
                  <ChoseLayerItem
                    title="Densidad de fallas"
                    enabled={key7}
                    setEnabled={setKey7}
                    isLoading={isLoadingKey7}
                    to={infosfallas_download}
                  />
                  {/* listo */}
                  <ChoseLayerItem
                    title="Índice de Humedad Topográfica (TWI)"
                    enabled={key9}
                    setEnabled={setKey9}
                    isLoading={isLoadingKey9}
                    to={infoHtwi_download}
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
          key3={key3}
          key4={key4}
          key5={key5}
          key6={key6}
          key7={key7}
          key8={key8}
          key9={key9}
          key10={key10}
          key11={key11}
          key12={key12}
          key13={key13}
          key14={key14}
          key15={key15}
          key16={key16}
          key17={key17}
          cedia={infoCedia}
          amdt={infomdt}
          bpen={infobpen}
          cperfil={infocperfil}
          dplano={infodplano}
          sfallas={infosfallas}
          dfallas={infodfallas}
          spi={infoSpi}
          infoTwi={infoTwi}
          infoIDvias={infoIDvias}
          infoJSvias={infoJSvias}
          infoNDvi={infoNDvi}
          infoNDwi={infoNDwi}
          infoPC1={infoPC1}
          infoPC2={infoPC2}
          infoPGEO={infoPGEO}
          infoQCover={infoQCover}
        />
      </div>
    </div>
  );
}
