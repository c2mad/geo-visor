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
          <h1>Listado de proyectos en Mapas de riesgos</h1>
        </div>
        <div className="py-10">
          <Search onSearch={search2} />
          {""}
        </div>
        <div id="filter" className="col-span-1">
          <h1>Filtros de busqueda</h1>
        </div>
        <div
          id="lista_categorias"
          className="container col-span-2 mx-auto my-24 md:px-6"
        >
          <section className="mb-32 text-center">
            <div id="map_cat" className="gap-6 xl:gap-x-12">
              {itemsToDisplay.map((item) => (
                <div key={item.id} className="mb-6 lg:mb-0">
                  <div
                    className="mb-6 grid grid-flow-col overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <a href="/mapas/jose">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="relative w-48"
                      />
                    </a>
                    <div>
                      <h5 className="mb-3 text-lg font-bold text-black">
                        {item.title}
                      </h5>
                      <p className="mb-6 text-neutral-500 dark:text-black">
                        <small>
                          Publicado <u>{item.publication}</u> por{" "}
                          <a href="https://ciitt.ucacue.edu.ec/laboratorios/laboratorio-datachademics/">
                            {item.fuente}
                          </a>
                          {item.autores.map((autor) => (
                            <a>{autor.name}</a>
                          ))}
                          <a>
                            {" "}
                            {
                              categories.find(
                                (category) => category.id === item.category
                              ).name
                            }
                          </a>
                        </small>
                      </p>
                      <p className="text-justify text-neutral-500 dark:text-black">
                        {item.description}
                      </p>
                    </div>
                    <div>
                      <p>
                        <a
                          href="/mapas/jose"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          className="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 items-center rounded-full bg-white px-6 pb-2 pt-2.5 text-center text-xs font-medium text-black"
                        >
                          {item.layeritem}
                        </a>
                      </p>
                    </div>
                  </div>
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
    </>
  );
}
