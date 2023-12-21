import Post from "components/ui/post";
import React, { useState, useEffect } from "react";
import categories from "utils/categories";
import proyects from "utils/proyects";

export const MoreInfoPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9; // item por página
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [items, setItems] = useState(proyects); // Lista original de proyectos
  const itemsToDisplay = items.slice(startIndex, endIndex);
  return (
    <>
      <div>
        <h1 className="text-center text-3xl font-bold dark:text-white">
          Proyecto
        </h1>
        <section className="mb-16">
          <div id="map_cat" className="gap-6 xl:gap-x-12">
            <Post proyects={itemsToDisplay} categories={categories}></Post>
          </div>
        </section>
      </div>
    </>
  );
};
