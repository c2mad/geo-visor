import Footer from "components/ui/footer";
// import imgriesgos from "assets/images/mapa-riesgos.jpg";
// import imgturismo from "assets/images/mapas-turismo.jpg";
import "../assets/css/home.css";
import categoties from "../utils/categories";
export const HomePage = () => {
  return (
    <>
      <div className="bg-inherit">
        <div id="tittle and description" className="w-full">
          <section className="background-home py-20">
            <div className="grid content-center items-stretch gap-4 py-20  pt-10 text-white sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2">
              <div className="px-10 sm:px-10 md:px-20 lg:px-40">
                <div className="bt-6 pb-6  text-white">
                  <h3 className="display-5 text-[38px]">
                    <span className="font-bold"> GEOPORTAL</span>{" "}
                    <span className="font-semibold text-rose-600"> UCACUE</span>
                  </h3>
                </div>
                <div className="mx-auto">
                  <div className="text-white">
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
              <div className="flex h-full items-center justify-center ">
                <div
                  data-element="fields"
                  data-stacked="false"
                  className="seva-fields formkit-fields mb-3 flex  w-full max-w-md items-center px-10"
                >
                  <div className="formkit-field mr-3 ">
                    <label className="mb-2  hidden text-sm font-medium text-gray-900 dark:text-gray-300">
                      Buscar
                    </label>
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
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
                      className="formkit-input block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-rose-500 focus:ring-rose-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-rose-500 dark:focus:ring-rose-500"
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
              <h3 className="mb-6 text-center text-4xl font-semibold text-black">
                Categorias de Datos
              </h3>
              <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
                {categoties.map((item) => {
                  return (
                    <div
                      className="relative mx-3 mt-6 flex flex-col bg-inherit"
                      key={item.id}
                    >
                      <a
                        href={item.to}
                        className=" block overflow-hidden rounded-lg"
                      >
                        <img
                          className="h-auto w-full rounded-lg"
                          src={item.image}
                          alt={item.name}
                        />
                        <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center  font-medium text-white">
                          {item.name}
                          <p className="text-[14px]">{item.description}</p>
                        </p>
                      </a>
                    </div>
                  );
                })}
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
