import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "tailwindcss/tailwind.css";
import Search from "../components/ui/Search";
import categories from "../utils/categories";
import proyects from "../utils/proyects";
import DateRangePicker from "flowbite-datepicker/DateRangePicker";
import Post from "../components/ui/post";
import SearchAutoComplete from "../components/ui/SearchAutoComplete";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ProyectPage() {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(null);
  // Inicializa selectedCategory con el valor de la categoría desde la URL
  const [projectsRelatedToCategory, setProjectsRelatedToCategory] = useState(
    []
  );

  // Filtra los proyectos relacionados con la categoría seleccionada
  useEffect(() => {
    // Filtra los proyectos relacionados con la categoría seleccionada
    const filteredProjects = proyects.filter(
      (project) => project.category === selectedCategory
    );

    // Imprimir los proyectos filtrados en la consola
    console.log("Proyectos relacionados a la categoría:", filteredProjects);

    setProjectsRelatedToCategory(filteredProjects);
  }, [selectedCategory]);
  // Luego, puedes usar projectsRelatedToCategory para mostrar los proyectos
  // relacionados con la categoría en tu componente.

  return (
    <>
      <div className="mx-auto w-full max-w-[1500px] px-3">
        <div className="col-span-2">
          <div className="mx-auto grid max-w-[1400px] grid-flow-col rounded-lg border border-solid">
            <div id="lista_categorias" className="my-5 px-5">
              <section className="mb-16">
                <div id="map_cat" className="gap-6 xl:gap-x-12">
                  <Post
                    proyects={proyects}
                    categories={categories}
                    selectedCategory={selectedCategory}
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
