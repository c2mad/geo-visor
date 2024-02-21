import React from "react";

const Post = ({ proyects, categories, selectedCategory }) => {
  const filteredProyects = selectedCategory
    ? proyects.filter((proyect) => proyect.category === selectedCategory)
    : proyects;

  return (
    <div className="space-y-6">
      {filteredProyects.map((proyect) => (
        <div
          className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-neutral-700"
          key={proyect.id}
        >
          <a href={proyect.to} className="flex flex-col md:flex-row">
            <img
              src={proyect.imageUrl}
              alt={proyect.title}
              className="h-48 w-full object-cover md:h-auto md:w-48"
            />
            <div className="flex flex-1 flex-col justify-between p-4">
              <div>
                <h5 className="mb-2 text-xl font-semibold text-neutral-800 dark:text-white">
                  {proyect.title}
                </h5>
                <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-300">
                  {proyect.description}
                </p>
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-300">
                <p className="mb-1 text-[14px] text-gray-500 dark:text-gray-400">
                  Publicado: {proyect.publication} | Categoría:{" "}
                  {
                    categories.find(
                      (category) => category.id === proyect.category
                    )?.name
                  }
                </p>
                <p className="mb-3 text-[14px] text-gray-500 dark:text-gray-400">
                  {proyect.fuente.map((f, index) => (
                    <span key={f.id}>
                      {f.name}
                      {index < proyect.fuente.length - 1 ? ", " : ""}
                    </span>
                  ))}
                  <br />
                  {proyect.autores.length > 1 ? "Autores: " : "Autor: "}
                  {proyect.autores.map((autor, index) => (
                    <span key={autor.id}>
                      {autor.name}
                      {index < proyect.autores.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                <p className="text-rose-600 transition-colors duration-300 hover:text-rose-800">
                  Ver mapa →
                </p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Post;
