import Download from "pages/Download";
import React, { useState, useEffect } from "react";
import categories from "utils/categories";
import proyects from "../../utils/proyects";
import ReactPaginate from "react-paginate";

export default function Descargas() {
  const [items, setItems] = useState(proyects); // Lista original de proyectos
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9; // item por página
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = items.slice(startIndex, endIndex);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <div className="col-span-2">
        <div className="mx-auto grid max-w-[1400px] grid-flow-col rounded-lg border border-solid">
          <div id="lista_categorias" className="my-5 px-5">
            <section className="mb-16">
              <div id="map_cat" className="gap-6 xl:gap-x-12">
                <Download
                  proyects={itemsToDisplay}
                  categories={categories}
                ></Download>
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
    </>
  );
}
