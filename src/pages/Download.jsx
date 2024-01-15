import Post from "components/ui/post";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import projects from "utils/proyects";
import categories from "utils/categories";
import Search from "components/ui/Search";

const Download = () => {
  //Busqueda de proyectos
  const search2 = (searchQuery) => {
    // Filtra los elementos que coinciden con la consulta de búsqueda en el título
    const filteredItems = projects.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // Actualiza la lista de elementos y restablece la página actual
    setItems(filteredItems);
    setCurrentPage(0);
  };
  const [items, setItems] = useState(projects); // Lista original de proyectos
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9; // item por página
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = items.slice(startIndex, endIndex);
  const pageCount = Math.ceil(items.length / itemsPerPage);
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

        <div className="col-span-2">
          <div className="mx-auto grid max-w-[1400px] grid-flow-col rounded-lg border border-solid">
            <div id="lista_categorias" className="my-5 px-5">
              <section className="mb-16">
                <div id="map_cat" className="gap-6 xl:gap-x-12">
                  <Post
                    proyects={itemsToDisplay}
                    categories={categories}
                  ></Post>
                  <button>Descargar</button>
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
    </>
  );
};

export default Download;
