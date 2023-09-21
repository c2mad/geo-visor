import Footer from "components/ui/footer";
import React, { useState } from "react";
// import imgriesgos from "assets/images/mapa-riesgos.jpg";
// import imgturismo from "assets/images/mapas-turismo.jpg";
import "../assets/css/home.css";
import categorias from "../utils/categories";
import proyectos from "../utils/proyects";
import Post from "components/ui/post";
export const HomePage = () => {
  const [proyects, setProyects] = useState(proyectos);
  const [categories, setCategories] = useState(categorias);
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
                <form className="w-full px-10">
                  <div className="flex sm:px-0 md:px-10">
                    <button
                      id="dropdown-button"
                      data-dropdown-toggle="dropdown"
                      className="z-10 inline-flex flex-shrink-0 items-center rounded-l-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      type="button"
                    >
                      All categories{" "}
                      <svg
                        className="ml-2.5 h-2.5 w-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path stroke="currentColor" d="m1 1 4 4 4-4" />
                      </svg>
                    </button>
                    <div
                      id="dropdown"
                      className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdown-button"
                      >
                        {categories.map((category) => (
                          <li key={category.id}>
                            <button
                              type="button"
                              className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              {category.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative w-full">
                      <input
                        type="search"
                        id="search-dropdown"
                        className="z-20 block w-full rounded-r-lg border border-l-2 border-gray-300 border-l-gray-50 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-rose-500 focus:ring-rose-500 dark:border-gray-600 dark:border-l-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-rose-500"
                        placeholder="Buscar..."
                        required
                      />
                      <button
                        type="submit"
                        className="absolute right-0 top-0 h-full rounded-r-lg border border-rose-700 bg-rose-700 p-2.5 text-sm font-medium text-white hover:bg-rose-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
                      >
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                        <span className="sr-only">Search</span>
                      </button>
                    </div>
                  </div>
                </form>
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
              <p className="lead pb-5 pt-5 font-sans ">
                Explore nuestro catálogo de datos geoespaciales para descubrir
                una amplia gama de información relacionada con ubicaciones
                geográficas. Desde mapas detallados hasta imágenes satelitales
                de alta resolución, aquí encontrará recursos esenciales para la
                navegación, planificación urbana, investigaciones científicas y
                mucho más.
              </p>
              <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
                {categories.map((item) => {
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
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center  font-medium text-white">
                          <p>{item.name}</p>
                          <p className="text-[14px]">{item.description}</p>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
        <div className="mx-auto mt-20 w-full max-w-[1100px] px-3 pb-20">
          <h3 className="mb-6 text-center text-4xl font-semibold text-black">
            Publicaciones destacadas
          </h3>
          <p className="lead pb-10 pt-5 font-sans ">
            En esta sección, le ofrecemos un vistazo a las publicaciones
            destacadas de datos geoespaciales derivados de investigaciones
            recientes que están transformando nuestra comprensión del mundo que
            habitamos. Desde estudios de cambio climático hasta investigaciones
            en biodiversidad y urbanismo sostenible, estas publicaciones
            representan la vanguardia del conocimiento geoespacial.
          </p>
          <Post proyects={proyects.slice(0, 3)} categories={categories}></Post>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};
