import Footer from "components/ui/footer";
import imgriesgos from "assets/images/mapa-riesgos.jpg";
import imgturismo from "assets/images/mapas-turismo.jpg";
import video from "../assets/images/video.mp4";
import "../assets/css/home.css";

import ReactPlayer from "react-player";

export const HomePage = () => {
  return (
    <>
      <div className="my-10 bg-inherit">
        <div id="tittle and description">
          <section className="background-home video-wrapper py-20">
            <div className="header grid grid-cols-2 content-center items-stretch  gap-4 pt-10 text-white">
              <div className="mx-40 ">
                <div className="bt-6 container pb-6  text-white">
                  <h3 className="display-5 text-6xl">
                    <span className="font-bold"> GEOPORTAL</span>{" "}
                    <span className="font-semibold text-rose-600"> UCACUE</span>
                  </h3>
                </div>
                <div className="mx-auto w-full max-w-7xl px-1 py-20">
                  <div className="container text-white">
                    <p className="lead font-sans ">
                      La Universidad Cátolica de Cuenca, pone a disposición de
                      la ciudadanía en general, una herramienta que permite a
                      los usuarios el acceso a una serie de recursos y servicios
                      basados en información geográfica referenciada del Cantón
                      Cuenca. La misma está diseñada para explorar y descargar
                      una variedad de datos que son de utilidad para un mayor
                      conocimiento del territorio.
                    </p>
                  </div>
                </div>
              </div>
              <div className="place-items-center">
                <div
                  data-element="fields"
                  data-stacked="false"
                  class="seva-fields formkit-fields mb-3 flex w-full max-w-md items-center"
                >
                  <div class="formkit-field relative mr-3 w-full">
                    <label
                      for="member_email"
                      class="mb-2 block hidden text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Email address
                    </label>
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                      <svg
                        class="h-3.5 w-3.5 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                      >
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
                      </svg>
                    </div>
                    <input
                      id="member_email"
                      class="formkit-input block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:bg-red dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-red dark:focus:ring-red"
                      name="search"
                      aria-label="Buscar "
                      placeholder="Buscar..."
                      required=""
                      type="search"
                    />
                  </div>
                  <button data-element="submit" className="formkit-submit">
                    <div className="formkit-spinner">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <span className="cursor-pointer rounded-lg bg-red px-5 py-3 text-center text-sm font-medium text-white hover:bg-red focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Buscar
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <br />
        <div id="categorias" className="mx-auto w-full max-w-[1100px] px-3">
          <div className="mt-1  ">
            <section>
              <h3 className="mb-6 text-center text-4xl font-semibold uppercase text-black">
                Categorias
              </h3>

              <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
                <div className="relative mx-3 mt-6 flex flex-col bg-inherit">
                  <a
                    href="/lista/cat"
                    className="relative block overflow-hidden rounded-lg"
                  >
                    <img
                      className="h-auto w-full rounded-lg"
                      src={imgriesgos}
                      alt="Imagen de Mapa de Riesgos"
                    />
                    <h5 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center text-xl font-medium text-white">
                      Mapas de Riesgos
                    </h5>
                  </a>
                </div>

                <div className="relative mx-3 mt-6 flex flex-col bg-inherit">
                  <a
                    href="/lista/cat"
                    className="relative block overflow-hidden rounded-lg"
                  >
                    <img
                      className="h-auto w-full"
                      src={imgturismo}
                      alt="Imagen de mapas turisticos"
                    />
                    <h5 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center text-xl font-medium leading-tight text-white">
                      Mapas Turísticos
                    </h5>
                  </a>
                </div>

                <div className="relative mx-3 mt-6 flex flex-col bg-inherit">
                  <a
                    href="/lista/cat"
                    className="relative block overflow-hidden rounded-lg"
                  >
                    <img
                      className="h-auto w-full"
                      src={imgturismo}
                      alt="Imagen de mapas turisticos"
                    />
                    <h5 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center text-xl font-medium leading-tight text-white">
                      Mapas Viabilidad
                    </h5>
                  </a>
                </div>

                <div className="relative mx-3 mt-6 flex flex-col bg-inherit">
                  <a
                    href="/lista/cat"
                    className="relative block overflow-hidden rounded-lg"
                  >
                    <img
                      className="h-auto w-full"
                      src={imgturismo}
                      alt="Imagen de mapas turisticos"
                    />
                    <h5 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center text-xl font-medium leading-tight text-white">
                      Mapas Medio Ambientales
                    </h5>
                  </a>
                </div>

                <div className="relative mx-3 mt-6 flex flex-col bg-inherit">
                  <a
                    href="/lista/cat"
                    className="relative block overflow-hidden rounded-lg"
                  >
                    <img
                      className="h-auto w-full"
                      src={imgturismo}
                      alt="Imagen de mapas turisticos"
                    />
                    <h5 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center text-xl font-medium leading-tight text-white">
                      Mapas de Suelo
                    </h5>
                  </a>
                </div>

                <div className="relative mx-3 mt-6 flex flex-col bg-inherit">
                  <a
                    href="/lista/cat"
                    className="relative block overflow-hidden rounded-lg"
                  >
                    <img
                      className="h-auto w-full"
                      src={imgturismo}
                      alt="Imagen de mapas turisticos"
                    />
                    <h5 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center text-xl font-medium leading-tight text-white">
                      Mapas de Infraestructura
                    </h5>
                  </a>
                </div>
              </div>
            </section>
            <section className="h-32"></section>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};
