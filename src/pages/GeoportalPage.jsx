import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../assets/css/home.css";
import categorias from "../utils/categories";
import proyectos from "../utils/proyects";
import Post from "components/ui/post";
import Search from "components/ui/Search";

export const GeoportalPage = () => {
  const [proyects, setProyects] = useState(proyectos);
  const [categories] = useState(categorias);
  const [items, setItems] = useState(proyects);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const popularProjects = [...proyects].sort((a, b) => b.visitas - a.visitas);
  const topThreeProjects = popularProjects.slice(0, 3);

  //Busqueda de proyectos
  const search2 = (searchQuery) => {
    filterItems(searchQuery, selectedCategory);
    navigate({
      pathname: "/proyects",
      search: `?search=${searchQuery}&category=${selectedCategory}`,
    });
  };

  const handleProjectView = (projectId) => {
    const updatedProyectos = proyects.map((project) =>
      project.id === projectId
        ? { ...project, visitas: project.visitas + 1 }
        : project
    );

    setProyects(updatedProyectos);

    // Si estás utilizando una base de datos, aquí deberías actualizar los datos en la base de datos también
  };

  const handleCategoryClick = (categoryId) => {
    navigate(`/proyects/category/${categoryId}`);
  };

  // Función para filtrar proyectos basados en la categoría y la búsqueda
  const filterItems = (searchQuery, category) => {
    const filteredItems = proyectos.filter((item) => {
      const includesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      const includesCategory =
        !category ||
        item.categoryId === category ||
        category === "All categories";

      return includesSearch && includesCategory;
    });

    setItems(filteredItems);
    setCurrentPage(0);
  };

  return (
    <>
      <div className="bg-inherit">
        <div id="tittle and description" className="w-full">
          <section className="background-home py-20">
            <div className="grid content-center items-stretch gap-4 py-20  pt-10 text-white sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2">
              <div className="px-10 sm:px-10 md:px-20 lg:px-40">
                <div className="bt-6 pb-6  text-white">
                  <h3 className="display-5 text-[38px]">
                    <span className="font-bold"> Catálogo de proyectos</span>{" "}
                    <span className="font-semibold text-rose-600"> UCACUE</span>
                  </h3>
                </div>
                <div className="mx-auto">
                  <div className="text-white">
                    <p className="lead font-sans ">
                      La Universidad Cátolica de Cuenca, pone a disposición de
                      la ciudadanía en general, una herramienta que permite a
                      los usuarios el acceso a una serie de recursos y servicios
                      basados en información geográfica dentro del area de sus
                      competencias. La misma está diseñada para explorar y
                      descargar una variedad de datos que son de utilidad para
                      un mayor conocimiento del territorio.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex h-full items-center justify-center ">
                <div className="flex sm:px-0 md:px-10">
                  <div className="flex">
                    <Search onSearch={search2} />
                    {""}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <br />
        <div
          id="categorias"
          className="mx-auto w-full max-w-[1100px] px-3 dark:text-white"
        >
          <div className="mt-1  ">
            <section>
              <h3 className="mb-6 text-center text-4xl font-semibold text-black dark:text-white">
                Categorias de Datos
              </h3>
              {/* <p className="lead pb-5 pt-5 font-sans ">
                Explore nuestro catálogo de datos geoespaciales para descubrir
                una amplia gama de información relacionada con ubicaciones
                geográficas. Desde mapas detallados hasta imágenes satelitales
                de alta resolución, aquí encontrará recursos esenciales para la
                navegación, planificación urbana, investigaciones científicas y
                mucho más.
              </p> */}
              <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
                {categories.map((item) => {
                  return (
                    <div
                      className="relative mx-3 mt-6 flex flex-col bg-inherit"
                      key={item.id}
                      onClick={handleCategoryClick(categories.id)}
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
                          {/* <p className="text-[14px]">{item.description}</p> */}
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
          <h3 className="mb-6 text-center text-4xl font-semibold text-black dark:text-white">
            Publicaciones destacadas
          </h3>
          <p className="lead pb-10 pt-5 font-sans dark:text-white">
            En esta sección, le ofrecemos un vistazo a las publicaciones
            destacadas de datos geoespaciales derivados de investigaciones
            recientes que están transformando nuestra comprensión del mundo que
            habitamos. Desde estudios de cambio climático hasta investigaciones
            en biodiversidad y urbanismo sostenible. Estas publicaciones
            representan la vanguardia del conocimiento geoespacial.
          </p>
          <Post proyects={topThreeProjects} categories={categories}></Post>
        </div>
      </div>
    </>
  );
};
