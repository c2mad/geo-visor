import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "tailwindcss/tailwind.css";
import Search from "./Search";
import categories from "../../utils/categories";
import proyects from "../../utils/proyects";
import DateRangePicker from "flowbite-datepicker/DateRangePicker";
import Post from "../../components/ui/post";
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
  // const dateRangePickerEl = document.getElementById("dateRangePickerId");
  // new DateRangePicker(dateRangePickerEl, {
  //   // options
  // });
  useEffect(() => {
    const dateRangePickerEl = document.getElementById("dateRangePickerId");
    new DateRangePicker(dateRangePickerEl, {
      // options
    });
  }, []);
  // useEffect(() => {
  //   const datepickerEl = document?.getElementById("datepickerId");
  //   // console.log(datepickerEl);
  //   new Datepicker(datepickerEl, {});
  // }, []);
  const [selectedOption, setSelectedOption] = useState("");
  const [datestart, setDateStart] = useState("");
  const [filtros, setFiltros] = useState([]);
  const handleOptionChange = (selectedValue) => {
    setSelectedOption(selectedValue);
    // Aquí puedes ejecutar diferentes funciones según la opción seleccionada
    if (selectedValue != "Seleccione la fuente") {
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
      // Busca el índice del elemento a eliminar por su id
      const indexToDelete = filtros.findIndex((item) => item.id === 1);

      // Si el índice es encontrado, elimina el elemento con splice
      if (indexToDelete !== -1) {
        filtros.splice(indexToDelete, 1);
      }
    }
  };
  const handleDeleteFiltro = (id) => {
    const updatedFiltros = filtros.filter((item) => item.id !== id);
    // Actualiza el arreglo filtros con el nuevo arreglo sin el elemento eliminado
    setFiltros(updatedFiltros);
    //actualizamos el filtro a valores por defecto
    switch (id) {
      case 1:
        setSelectedOption("Seleccione la fuente");
        break;
    }
  };

  const handleDateChange = (start, date) => {
    console.log(existe);
    if (start) setStartDate(date);
    else setEndDate(date);
    // Aquí puedes ejecutar diferentes funciones según la opción seleccionada
    const existe = filtros.find((item) => item.id === 2);
    if (existe == null) {
      filtros.push({
        id: 2,
        content: (
          <>
            <span className="mr-2 text-[12px]">
              <strong>Publicados:</strong> {datestart} <strong>to</strong>{" "}
              {endDate}
            </span>
          </>
        ),
        description: startDate + " to " + endDate,
      });
    } else {
      existe.content = (
        <>
          <span className="mr-2 text-[12px]">
            <strong>Publicados:</strong> {datestart} <strong>to</strong>{" "}
            {endDate}
          </span>
        </>
      );
      existe.description = startDate + " to " + endDate;
    }
  };

  const uniqueSources = proyects.reduce((accumulator, project) => {
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
          {/*<h1>Listado de proyectos en Mapas de riesgos</h1>*/}
        </div>
        <div className="py-10">
          <Search onSearch={search2} />
          {""}
        </div>
        {/* grid-cols-1 sm:grid md:grid-cols-3  */}
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
                  {filtros.map((fil) => (
                    <div
                      key={fil.id}
                      className="dark:rose:ring-rose-800 mr-2 mt-2 inline-flex items-center rounded border border-rose-700 p-1.5 text-center text-sm font-medium text-rose-700 hover:bg-rose-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-rose-300 dark:border-rose-500 dark:text-rose-500 dark:hover:bg-rose-500 dark:hover:text-white"
                    >
                      {fil.content}
                      <button onClick={() => handleDeleteFiltro(fil.id)}>
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
                  {/* <button
                    type="button"
                    className="dark:rose:ring-rose-800 mr-2 mt-2 inline-flex items-center rounded border border-rose-700 p-1.5 text-center text-sm font-medium text-rose-700 hover:bg-rose-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-rose-300 dark:border-rose-500 dark:text-rose-500 dark:hover:bg-rose-500 dark:hover:text-white"
                  >
                    <span className="mr-2 text-[12px]">
                      <strong>Publicados:</strong> {datestart}{" "}
                      <strong>to</strong> 01/09/2023
                    </span>
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
                  </button> */}
                  {/* <button
                    type="button"
                    className="dark:rose:ring-rose-800 mr-2 mt-2 inline-flex items-center rounded border border-rose-700 p-1.5 text-center text-sm font-medium text-rose-700 hover:bg-rose-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-rose-300 dark:border-rose-500 dark:text-rose-500 dark:hover:bg-rose-500 dark:hover:text-white"
                  >
                    <span className="mr-2 text-[12px]">
                      <strong>Fuente:</strong> {selectedOption}
                    </span>
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
                  </button> */}
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
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    value={selectedOption}
                    onChange={(e) => handleOptionChange(e.target.value)}
                  >
                    <option value={"Seleccione la fuente"}>
                      {"Seleccione la fuente"}
                    </option>
                    {uniqueSources.map((fuent) => (
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
                </div>
              </div>
              <div
                id="filter"
                className="mb-5 rounded-lg border border-solid p-5"
              >
                <div className="container mx-auto p-2">
                  <label className="mb-5 block text-sm font-semibold text-gray-600 dark:text-white">
                    Fecha de publicación:
                  </label>
                  <div
                    date-rangepicker="true"
                    className="flex items-center"
                    id="dateRangePickerId"
                  >
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                          className="h-4 w-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                      </div>
                      <input
                        readOnly={true}
                        name="start"
                        type="text"
                        // value={startDate}
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="Select date start"
                        onChange={(e) => handleDateChange(true, e.target.value)}
                      />
                    </div>
                    <span className="mx-4 text-gray-500">to</span>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                          className="h-4 w-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                      </div>
                      <input
                        readOnly={true}
                        name="end"
                        type="text"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="Select date end"
                        // value={endDate}
                        onChange={(e) =>
                          handleDateChange(false, e.target.value)
                        }
                      />
                    </div>
                  </div>
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
