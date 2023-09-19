import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "tailwindcss/tailwind.css";
import Search from "./Search";
import categories from "../../utils/categories";
export default function Listado() {
  // Define tu lista de elementos
  const initialItems = [
    {
      id: 1,
      title: "Estructura Vial de la Ciudad de Cuenca",
      imageUrl:
        "https://img.freepik.com/vector-gratis/concepto-cartografia-mapa-mundial-vintage_52683-26377.jpg?w=996&t=st=1694624780~exp=1694625380~hmac=c88ea11eeddf234ce3e67a26054e6ffd998268aa8e8731a310d34cef3166d448",
      publication: "12 de Agosto 2023",
      description:
        "It is difficult to believe that we have become so used to having instant access to information at.",
      fuente: "DatAchademics",
      layeritem: "Leer más",
      category: 6,
      autores: [
        { id: 1, name: "Sandra Cobos" },
        { id: 2, name: "Setefano Torrachi" },
      ],
    },
    {
      id: 2,
      title: "Suelo",
      imageUrl:
        "https://img.freepik.com/vector-gratis/dibujo-tema-vintage-mapa-mundial_52683-26577.jpg?w=996&t=st=1694466163~exp=1694466763~hmac=772fae750ab1eda669bf83604d7bb8d8ce7de80a4f228dbd9a9e72f2d9a71c71",
      publication: "12 de Agosto 2023",
      description:
        "It is difficult to believe that we have become so used to having instant access to information at.",
      fuente: "C2MAD",
      layeritem: "Leer más",
      category: 2,
      autores: [
        { id: 1, name: "Sandra Cobos" },
        { id: 2, name: "Setefano Torrachi" },
      ],
    },
    {
      id: 3,
      title: "Turístico",
      imageUrl:
        "https://img.freepik.com/vector-gratis/mapa-mundo-tecnologia-global-o-red-conexion-social-nodos-enlaces-ilustracion-vectorial_1284-1968.jpg?w=996&t=st=1694467334~exp=1694467934~hmac=52dde44b546abe97fe3fe6c7971ec29c83f514494102398ec6b30b30249731ae",
      publication: "12 de Agosto 2023",
      description:
        "It is difficult to believe that we have become so used to having instant access to information at.",
      fuente: "DatAchademics",
      layeritem: "Leer más",
      category: 5,
      autores: [
        { id: 1, name: "Sandra Cobos" },
        { id: 2, name: "Setefano Torrachi" },
      ],
    },
    {
      id: 4,
      title: "Infraestructura",
      imageUrl:
        "https://us.123rf.com/450wm/bsd555/bsd5552102/bsd555210201744/163486742-icono-de-color-rgb-de-ingenier%C3%ADa-de-infraestructura-municipal-construcci%C3%B3n-urbana-negocio.jpg",
      publication: "12 de Agosto 2023",
      description:
        "It is difficult to believe that we have become so used to having instant access to information at.",
      fuente: "RIOUC",
      layeritem: "Leer más",
      category: 1,
      autores: [
        { id: 1, name: "Sandra Cobos" },
        { id: 2, name: "Setefano Torrachi" },
      ],
    },
    {
      id: 5,
      title: "Infraestructura",
      imageUrl:
        "https://us.123rf.com/450wm/bsd555/bsd5552102/bsd555210201744/163486742-icono-de-color-rgb-de-ingenier%C3%ADa-de-infraestructura-municipal-construcci%C3%B3n-urbana-negocio.jpg",
      publication: "12 de Agosto 2023",
      description:
        "It is difficult to believe that we have become so used to having instant access to information at.",
      fuente: "RIOUC",
      layeritem: "Leer más",
      category: 1,
      autores: [
        { id: 1, name: "Sandra Cobos" },
        { id: 2, name: "Setefano Torrachi" },
      ],
    },
    {
      id: 6,
      title: "Turístico",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/008/201/844/non_2x/travel-agency-tourism-app-and-trips-logo-outdoor-adventure-emblems-emblem-design-on-white-background-vector.jpg",
      publication: "12 de Agosto 2023",
      description:
        "It is difficult to believe that we have become so used to having instant access to information at.",
      fuente: "DatAchademics",
      layeritem: "Leer más",
      category: 1,
      autores: [
        { id: 1, name: "Sandra Cobos" },
        { id: 2, name: "Setefano Torrachi" },
      ],
    },
    {
      id: 7,
      title: "Suelo",
      imageUrl:
        "https://i.pinimg.com/originals/e2/54/f1/e254f165f0c63e235aa9ecb49ea489a2.jpg",
      publication: "12 de Agosto 2023",
      description:
        "It is difficult to believe that we have become so used to having instant access to information at.",
      fuente: "DatAchademics",
      layeritem: "Leer más",
      category: 1,
      autores: [
        { id: 1, name: "Sandra Cobos" },
        { id: 2, name: "Setefano Torrachi" },
      ],
    },
    {
      id: 8,
      title: "Vial",
      imageUrl:
        "https://us.123rf.com/450wm/bsd555/bsd5552003/bsd555200304114/143535533-conjunto-de-iconos-de-color-rgb-de-obras-viales-cono-de-tr%C3%A1fico-barrera-vial-carro-de-rodillos.jpg?ver=6",
      publication: "12 de Agosto 2023",
      description:
        "It is difficult to believe that we have become so used to having instant access to information at.",
      fuente: "C2MAD",
      layeritem: "Leer más",
      category: 1,
      autores: [
        { id: 1, name: "Sandra Cobos" },
        { id: 2, name: "Setefano Torrachi" },
      ],
    },
    {
      id: 9,
      title: "Vial",
      imageUrl:
        "https://us.123rf.com/450wm/bsd555/bsd5552003/bsd555200304114/143535533-conjunto-de-iconos-de-color-rgb-de-obras-viales-cono-de-tr%C3%A1fico-barrera-vial-carro-de-rodillos.jpg?ver=6",
      publication: "12 de Agosto 2023",
      description:
        "It is difficult to believe that we have become so used to having instant access to information at.",
      fuente: "DatAchademics",
      layeritem: "Leer más",
      category: 1,
      autores: [
        { id: 1, name: "Sandra Cobos" },
        { id: 2, name: "Setefano Torrachi" },
      ],
    },
    {
      id: 10,
      title: "Suelo",
      imageUrl:
        "https://i.pinimg.com/originals/e2/54/f1/e254f165f0c63e235aa9ecb49ea489a2.jpg",
      publication: "12 de Agosto de 2023",
      description:
        "It is difficult to believe that we have become so used to having instant access to information at",
      fuente: "DatAchademics",
      layeritem: "Leer más",
      category: 1,
      autores: [
        { id: 1, name: "Sandra Cobos" },
        { id: 2, name: "Setefano Torrachi" },
      ],
    },
    {
      id: 11,
      title: "Turístico",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/008/201/844/non_2x/travel-agency-tourism-app-and-trips-logo-outdoor-adventure-emblems-emblem-design-on-white-background-vector.jpg",
      publication: "12 de Agosto de 2023",
      description:
        "It is difficult to believe that we have become so used to having instant access to information at",
      fuente: "C2MAD",
      layeritem: "Leer más",
      category: 6,
      autores: [
        { id: 1, name: "Sandra Cobos" },
        { id: 2, name: "Setefano Torrachi" },
      ],
    },
    {
      id: 12,
      title: "Infraestructura",
      imageUrl:
        "https://us.123rf.com/450wm/bsd555/bsd5552102/bsd555210201744/163486742-icono-de-color-rgb-de-ingenier%C3%ADa-de-infraestructura-municipal-construcci%C3%B3n-urbana-negocio.jpg",
      publication: "12 de Agosto de 2023",
      description:
        "It is difficult to believe that we have become so used to having instant access to information at",
      fuente: "RIOUC",
      layeritem: "Leer más",
      category: 3,
      autores: [
        { id: 1, name: "Sandra Cobos" },
        { id: 2, name: "Setefano Torrachi" },
      ],
    },
    // ... (tus elementos)
  ];

  const [items, setItems] = useState(initialItems);
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
    const filteredItems = initialItems.filter((item) =>
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
