import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "tailwindcss/tailwind.css";
import Search from "./Search";

export default function Listado() {
  // Define tu lista de elementos
  const initialItems = [
    {
      id: 1,
      title: "Vial",
      imageUrl:
        "https://us.123rf.com/450wm/bsd555/bsd5552003/bsd555200304114/143535533-conjunto-de-iconos-de-color-rgb-de-obras-viales-cono-de-tr%C3%A1fico-barrera-vial-carro-de-rodillos.jpg?ver=6",
    },
    {
      id: 2,
      title: "Suelo",
      imageUrl:
        "https://i.pinimg.com/originals/e2/54/f1/e254f165f0c63e235aa9ecb49ea489a2.jpg",
    },
    {
      id: 3,
      title: "Turístico",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/008/201/844/non_2x/travel-agency-tourism-app-and-trips-logo-outdoor-adventure-emblems-emblem-design-on-white-background-vector.jpg",
    },
    {
      id: 4,
      title: "Infraestructura",
      imageUrl:
        "https://us.123rf.com/450wm/bsd555/bsd5552102/bsd555210201744/163486742-icono-de-color-rgb-de-ingenier%C3%ADa-de-infraestructura-municipal-construcci%C3%B3n-urbana-negocio.jpg",
    },
    {
      id: 5,
      title: "Infraestructura",
      imageUrl:
        "https://us.123rf.com/450wm/bsd555/bsd5552102/bsd555210201744/163486742-icono-de-color-rgb-de-ingenier%C3%ADa-de-infraestructura-municipal-construcci%C3%B3n-urbana-negocio.jpg",
    },
    {
      id: 6,
      title: "Turístico",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/008/201/844/non_2x/travel-agency-tourism-app-and-trips-logo-outdoor-adventure-emblems-emblem-design-on-white-background-vector.jpg",
    },
    {
      id: 7,
      title: "Suelo",
      imageUrl:
        "https://i.pinimg.com/originals/e2/54/f1/e254f165f0c63e235aa9ecb49ea489a2.jpg",
    },
    {
      id: 8,
      title: "Vial",
      imageUrl:
        "https://us.123rf.com/450wm/bsd555/bsd5552003/bsd555200304114/143535533-conjunto-de-iconos-de-color-rgb-de-obras-viales-cono-de-tr%C3%A1fico-barrera-vial-carro-de-rodillos.jpg?ver=6",
    },
    {
      id: 9,
      title: "Vial",
      imageUrl:
        "https://us.123rf.com/450wm/bsd555/bsd5552003/bsd555200304114/143535533-conjunto-de-iconos-de-color-rgb-de-obras-viales-cono-de-tr%C3%A1fico-barrera-vial-carro-de-rodillos.jpg?ver=6",
    },
    {
      id: 10,
      title: "Suelo",
      imageUrl:
        "https://i.pinimg.com/originals/e2/54/f1/e254f165f0c63e235aa9ecb49ea489a2.jpg",
    },
    {
      id: 11,
      title: "Turístico",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/008/201/844/non_2x/travel-agency-tourism-app-and-trips-logo-outdoor-adventure-emblems-emblem-design-on-white-background-vector.jpg",
    },
    {
      id: 12,
      title: "Infraestructura",
      imageUrl:
        "https://us.123rf.com/450wm/bsd555/bsd5552102/bsd555210201744/163486742-icono-de-color-rgb-de-ingenier%C3%ADa-de-infraestructura-municipal-construcci%C3%B3n-urbana-negocio.jpg",
    },
    // ... (tus elementos)
  ];

  const [items, setItems] = useState(initialItems);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = items.slice(startIndex, endIndex);

  const search2 = (searchQuery) => {
    // Filtra los elementos que coinciden con la consulta de búsqueda en el título
    const filteredItems = initialItems.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Actualiza la lista de elementos y restablece la página actual
    setItems(filteredItems);
    setCurrentPage(0);
  };
  return (
    <>
      <div>
        <Search onSearch={search2} />
        {""}
      </div>

      <div id="lista_categorias">
        <div
          id="map_cat"
          className="grid w-full grid-cols-3 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4"
        >
          {itemsToDisplay.map((item) => (
            <div
              key={item.id}
              className="bg-base-100 relative flex h-64 w-full flex-col items-center justify-center overflow-hidden rounded-lg p-4 hover:shadow"
            >
              <div className="flex h-full w-full justify-center rounded-lg bg-gray-100">
                <a href="/mapas/jose">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="flex h-48 justify-center"
                  />
                </a>
              </div>
              <h2 className="mt-2 line-clamp-1 text-sm font-semibold text-black">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
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
          previousClassName={"mr-2 p-3 bg-rose-600 border rounded-full"}
          nextClassName={"mr-2 p-3 bg-rose-600 border rounded-full"}
          activeClassName={"bg-rose-600 text-white rounded-full"}
          previousLinkClassName={"text-white"}
          nextLinkClassName={"text-white"}
        />
      </div>
      <section className="h-20"></section>
    </>
  );
}
