import Footer from "components/ui/footer";
import imgriesgos from "assets/images/mapa-riesgos.jpg";
import imgturismo from "assets/images/mapas-turismo.jpg";
import video from "../assets/images/video.mp4";
import "../assets/css/home.css";

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
              <div className="flex h-full items-center justify-end px-40">
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
                        className="h-3.5 w-3.5 text-gray-500 dark:text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </div>
                    <input
                      id="member_email"
                      class="formkit-input block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-rose-500 focus:ring-rose-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-rose-500 dark:focus:ring-rose-500"
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
                    <span className="cursor-pointer rounded-lg bg-rose-600 px-5 py-3 text-center text-sm font-medium text-white hover:bg-rose-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
