import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "tailwindcss/tailwind.css";
import Search from "./Search";
import categories from "../../utils/categories";
import proyects from "../../utils/proyects";
export default function Listado() {
  // Define tu lista de elementos

  const [items, setItems] = useState(proyects);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9; // item por página
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = items.slice(startIndex, endIndex);

  const search2 = (searchQuery) => {
    // Filtra los elementos que coinciden con la consulta de búsqueda en el título
    const filteredItems = proyects.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Actualiza la lista de elementos y restablece la página actual
    setItems(filteredItems);
    setCurrentPage(0);
  };
  return (
    <>
      <div className="mx-auto w-full max-w-[1500px] px-3">
        <div id="tittle" className="text-center font-sans text-2xl">
          <br />
          {/* <h1>Listado de proyectos en Mapas de riesgos</h1> */}
        </div>
        <div className="py-10">
          <Search onSearch={search2} />
          {""}
        </div>
        {/* grid-cols-1 sm:grid md:grid-cols-3  */}
        <div className="w-full px-3">
          <div className="grid-cols-1 gap-4 sm:grid sm:px-0 md:grid-cols-3 md:px-3">
            <div className="row-span-3">
              {" "}
              <div id="filter" className="border border-solid">
                <p className="pl-4 pt-10 font-semibold">Filtros de busqueda</p>
                <div class="container mx-auto  p-4">
                  <label
                    for="filtro"
                    class="mb-2 block text-sm font-semibold text-gray-600"
                  >
                    Filtrar por:
                  </label>
                  <select
                    id="filtro"
                    class="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
                  >
                    <option value="opcion1">Autor</option>
                    <option value="opcion2">Laboratorio</option>
                    <option value="opcion3">Fecha de publicación</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              {" "}
              <div className="mx-auto grid max-w-[1400px] grid-flow-col border border-solid">
                <div id="lista_categorias" className="my-5 px-5">
                  <section class="mb-32">
                    <div id="map_cat" className="gap-6 xl:gap-x-12">
                      {itemsToDisplay.map((proyect) => (
                        <div className="mb-5  w-full" key={proyect.id}>
                          <a
                            href={proyect.to}
                            className="flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:flex-row"
                          >
                            <img
                              className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg  xl:h-auto"
                              src={proyect.imageUrl}
                              alt=""
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {proyect.title}
                              </h5>
                              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                                {proyect.description}
                              </p>
                              <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">
                                <span>
                                  {"Publicado: "}
                                  {proyect.publication}
                                </span>
                                {" | "}
                                {"Fuente: "}
                                <span>{proyect.fuente}</span>
                                {" | "}
                                {"Categoría: "}
                                {
                                  categories.find(
                                    (category) =>
                                      category.id === proyect.category
                                  ).name
                                }
                              </p>
                              <p className="text-rose-600 hover:text-rose-800">
                                Ver mapa →
                              </p>
                            </div>
                            {/* <a
                              href={proyect.to}
                              className="h-full flex-auto items-center justify-center rounded-lg  bg-red text-center text-white hover:bg-slate-600"
                            >
                              {proyect.layeritem}
                            </a> */}
                          </a>
                        </div>
                      ))}
                    </div>
                  </section>

                  <ReactPaginate
                    previousLabel={"«"}
                    nextLabel={"»"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination flex mt-4 justify-center"}
                    pageClassName={"mr-2 p-3 border rounded-full"}
                    previousClassName={"mr-2 p-3 bg-red border rounded-full"}
                    nextClassName={"mr-2 p-3 bg-red border rounded-full"}
                    activeClassName={"bg-red text-black rounded-full"}
                    previousLinkClassName={"text-black"}
                    nextLinkClassName={"text-black"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
