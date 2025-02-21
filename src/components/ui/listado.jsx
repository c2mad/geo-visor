import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "tailwindcss/tailwind.css";
import Search from "./Search";
import categories from "../../utils/categories";
import projects from "../../utils/proyects";
import Post from "../../components/ui/post";
import SearchAutoComplete from "../../components/ui/SearchAutoComplete";

export default function Listado() {
  //const [filteredItems, setFilteredItems] = useState(projects);

  const [items, setItems] = useState(projects); // Lista original de proyectos
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9; // item por página
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const [selectedOption, setSelectedOption] = useState(""); // Filtro de fuente
  const [selectedAutor, setAutor] = useState(""); // Filtro de autor
  const [filtros, setFiltros] = useState([]); // Lista de filtros seleccionados

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = items.slice(startIndex, endIndex);

  //Busqueda de proyectos
  const search2 = (searchQuery, categorie) => {
    // Filtra los elementos que coinciden con la consulta de búsqueda en el título
    const filteredItems = projects.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    // Actualiza la lista de elementos y restablece la página actual
    setItems(filteredItems);
    setCurrentPage(0);
  };

  const applyFilters = (value, type) => {
    let filteredItems = projects; // Inicialmente, los proyectos sin filtrar
    if (type === "fuente") {
      if (value !== "Seleccione la fuente") {
        filteredItems = filteredItems.filter((item) =>
          item.fuente.some((fuente) => {
            return fuente.name.toLowerCase() === value.toLowerCase();
          }),
        );
      }
    }

    if (type === "autor") {
      // Continúa con el resto de tu lógica y uso de filteredItems

      // Filtra por autor
      if (value) {
        filteredItems = filteredItems.filter((item) =>
          item.autores.some((autor) => {
            return autor.name.toLowerCase() === value.toLowerCase();
          }),
        );
      }
    }

    // Filtra por fecha
    // if (startDate && endDate) {
    //   filteredItems = filteredItems.filter((item) => {
    //     const projectDate = new Date(item.fechaPublicacion);
    //     const start = new Date(startDate);
    //     const end = new Date(endDate);

    //     return projectDate >= start && projectDate <= end;
    //   });
    // }

    // Actualiza la lista de proyectos con los filtros aplicados
    const uniqueItems = filteredItems.filter((item, index, self) => {
      return index === self.findIndex((t) => t.id === item.id);
    });
    setItems(uniqueItems);
  };
  const handleOptionChange = (selectedValue) => {
    setSelectedOption(selectedValue);

    //Aquí puedes ejecutar diferentes funciones según la opción seleccionada
    if (selectedValue !== "Seleccione la fuente") {
      filtros.push({
        id: 1,
        content: (
          <>
            <span className="mr-2 text-[12px]">
              <strong>Fuente:</strong> {selectedValue}
            </span>
          </>
        ),
        description: selectedValue,
      });
    } else {
      //Busca el índice del elemento a eliminar por su id
      const indexToDelete = filtros.findIndex((item) => item.id === 1);

      //Si el índice es encontrado, elimina el elemento con splice
      if (indexToDelete !== -1) {
        filtros.splice(indexToDelete, 1);
      }
    }
    setFiltros(filtros);
    applyFilters(selectedValue, "fuente");
  };

  const obtenerValorAutor = (valor) => {
    const existe = filtros.find((item) => item.id === 3);
    if (existe === null || existe === undefined) {
      filtros.push({
        id: 3,
        content: (
          <>
            <span className="mr-2 text-[12px]">
              <strong>Autor:</strong> {valor.name}
            </span>
          </>
        ),
        description: valor.name,
      });
    } else {
      existe.content = (
        <>
          <span className="mr-2 text-[12px]">
            <strong>Autor:</strong> {valor.name}
          </span>
        </>
      );
      existe.description = valor.name;
    }
    setFiltros(filtros);
    applyFilters(valor.name, "autor");
    // Haz lo que quieras con el valor aquí
  };
  const handleDeleteFiltro = (id) => {
    const updatedFiltros = filtros.filter((item, index) => index !== id);
    // Actualiza el arreglo filtros con el nuevo arreglo sin el elemento eliminado
    setFiltros(updatedFiltros);
    //actualizamos el filtro a valores por defecto
    switch (id) {
      case 1:
        setSelectedOption("Seleccione la fuente");
        break;
      case 2:
        break;
      case 3:
        setAutor("");
        break;
      default:
        break;
    }
    if (updatedFiltros.length === 0) {
      setItems(projects);
    }
  };

  const listado_fuente = projects.reduce((accumulator, project) => {
    project.fuente.forEach((source) => {
      // Comprobamos si la fuente ya existe en el acumulador
      const existingSource = accumulator.find((item) => item.id === source.id);
      if (!existingSource) {
        accumulator.push(source);
      }
    });
    return accumulator;
  }, []);
  return (
    <>
      <div className="mx-auto w-full max-w-[1500px] px-3">
        <div
          id="tittle"
          className="text-center font-sans text-2xl dark:text-white"
        >
          <br />
        </div>
        <div className="py-10">
          <Search onSearch={search2} />
          {""}
        </div>

        <div className="w-full px-3">
          <div className="grid-cols-1 gap-4 sm:grid sm:px-0 md:grid-cols-3 md:px-3">
            <div className="row-span-3 mb-5">
              <div
                id="filter"
                className="mb-5 rounded-lg border border-solid p-5"
              >
                <p className="font-semibold dark:text-white">
                  Filtros de busqueda
                </p>
                <div className="mt-5">
                  {filtros.map((fil, index) => (
                    <div
                      key={index}
                      className="dark:rose:ring-rose-800 mr-2 mt-2 inline-flex items-center rounded border border-rose-700 p-1.5 text-center text-sm font-medium text-rose-700 hover:bg-rose-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-rose-300 dark:border-rose-500 dark:text-rose-500 dark:hover:bg-rose-500 dark:hover:text-white"
                    >
                      {fil.content}
                      <button onClick={() => handleDeleteFiltro(index)}>
                        <svg
                          className="h-2 w-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div
                id="filter"
                className="mb-5 rounded-lg border border-solid p-5"
              >
                <div className="container mx-auto p-2">
                  <label className="mb-5 block text-sm font-medium text-gray-900 dark:text-white">
                    Fuente
                  </label>
                  <select
                    id="fuente"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-rose-500 focus:ring-rose-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-rose-500 dark:focus:ring-rose-500"
                    value={selectedOption}
                    onChange={(e) => handleOptionChange(e.target.value)}
                  >
                    <option value={"Seleccione la fuente"}>
                      {"Seleccione la fuente"}
                    </option>
                    {listado_fuente.map((fuent) => (
                      <option key={fuent.id} value={fuent.name}>
                        {fuent.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div
                id="filter"
                className="mb-5 rounded-lg border border-solid p-5"
              >
                <div className="container mx-auto p-2">
                  <label className="mb-5 block text-sm font-medium text-gray-900 dark:text-white">
                    Autor
                  </label>
                  <SearchAutoComplete
                    onClick={obtenerValorAutor}
                    value={selectedAutor}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="mx-auto grid max-w-[1400px] grid-flow-col rounded-lg border border-solid">
                <div id="lista_categorias" className="my-5 px-5">
                  <section className="mb-16">
                    <div id="map_cat" className="gap-6 xl:gap-x-12">
                      <Post
                        proyects={itemsToDisplay}
                        categories={categories}
                      ></Post>
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
                    pageClassName={"mr-2 p-3 border rounded dark:text-white"}
                    previousClassName={"mr-2 p-3 rounded-full"}
                    nextClassName={"mr-2 p-3  rounded-full "}
                    activeClassName={"text-white rounded-full bg-black "}
                    previousLinkClassName={"text-black dark:text-white"}
                    nextLinkClassName={"text-black dark:text-white "}
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
