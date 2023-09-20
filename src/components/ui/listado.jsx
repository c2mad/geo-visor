import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "tailwindcss/tailwind.css";
import Search from "./Search";
import categories from "../../utils/categories";
import proyects from "../../utils/proyects";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Importa los estilos CSS de react-datepicker

export default function Listado() {
  // Define tu lista de elementos

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleEndDateChange = (date) => {
    if (startDate && date < startDate) {
      // Si la fecha de final es menor que la fecha de inicio, actualiza la fecha de inicio
      setStartDate(date);
    }
    setEndDate(date);
  };

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

        <div className="mx-auto grid max-w-[1400px] grid-flow-col border border-solid">
          <div id="filter" className="border border-solid">
            <h1>Filtros de busqueda</h1>
            <div class="container mx-auto p-4">
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
            <div className="container mx-auto p-4">
              <label
                alt=""
                class="mb-2 block text-sm font-semibold text-gray-600"
              >
                Fechas:
              </label>
              <div>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  placeholderText="Fecha de inicio"
                  className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
                />
                <span> hasta </span>
                <DatePicker
                  selected={endDate}
                  onChange={handleEndDateChange}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  //minDate={startDate}
                  placeholderText="Fecha de fin"
                  className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div id="lista_categorias" className="my-5 px-5">
            <section class="mb-32">
              <div id="map_cat" className="gap-6 xl:gap-x-12">
                {itemsToDisplay.map((item) => (
                  <div key={item.id} className="mb-6 lg:mb-0">
                    <div
                      className="mb-6 grid grid-flow-col overflow-hidden rounded-lg border border-gray-500 bg-no-repeat object-cover shadow-lg dark:shadow-black/20"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <a href="/mapas/jose" className="object-cover p-4">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="divide h-32 w-auto rounded-lg"
                        />
                      </a>
                      <div className=" p-4 text-left">
                        <h5 className="mb-3 text-left text-lg font-bold text-black">
                          {item.title}
                        </h5>
                        <p className="mb-6 text-neutral-500 dark:text-black">
                          <small>
                            <label className="font-bold">Publicación: </label>
                            {item.publication}{" "}
                            <label className="font-bold">Fuente: </label>
                            <a href="https://ciitt.ucacue.edu.ec/laboratorios/laboratorio-datachademics/">
                              {item.fuente}
                            </a>
                            <br />
                            <label className="font-bold">Autores: </label>
                            {item.autores.map((autor) => (
                              <a>{autor.name}</a>
                            ))}
                            <a>
                              {" "}
                              <label className="font-bold">Categoría: </label>
                              {
                                categories.find(
                                  (category) => category.id === item.category
                                ).name
                              }
                            </a>
                          </small>
                          <p className="text-left text-base">
                            {item.description}
                          </p>
                        </p>
                      </div>
                      <a
                        href="/mapas/jose"
                        className="flex h-full items-center justify-center bg-red text-center text-white hover:bg-slate-600"
                      >
                        {item.layeritem}
                      </a>
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
      </div>
    </>
  );
}
