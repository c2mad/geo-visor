import React from "react";

const Post = ({ proyects, categories }) => {
  return (
    <div>
      {proyects.map((proyect) => (
        <div className="mb-5  w-full " key={proyect.id}>
          <a
            href={proyect.to}
            className="flex w-full flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  md:flex-row"
          >
            <img
              className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-64 md:!rounded-none md:!rounded-l-lg"
              // src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
              src={proyect.imageUrl}
              alt=""
            />
            <div className="flex w-full flex-col justify-start p-6">
              <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                {proyect.title}
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                {proyect.description}
              </p>
              <div className="text-xs text-neutral-500 dark:text-neutral-300">
                <p className="mb-1 mt-2 text-[14px] font-normal text-gray-400 dark:text-gray-400">
                  <span>
                    {"Publicado: "}
                    {proyect.publication}
                  </span>
                  {" | "}
                  {"Fuente: "}
                  {proyect.fuente.map((f) => (
                    <span key={f.id}>
                      {f.name}{" "}
                      {proyect.fuente.length > 1 &&
                      proyect.fuente.indexOf(f) + 1 < proyect.fuente.length
                        ? ", "
                        : ""}
                    </span>
                  ))}
                  {" | "}
                  {"Categoría: "}
                  {
                    categories.find(
                      (category) => category.id === proyect.category
                    ).name
                  }
                </p>
                <p className="mb-3 text-[14px] font-normal text-gray-400 dark:text-gray-400">
                  {proyect.autores.length > 1 ? "Autores: " : "Autor: "}
                  {proyect.autores.map((autor) => (
                    <span key={autor.id}>
                      {autor.name}{" "}
                      {proyect.autores.length > 1 &&
                      proyect.autores.indexOf(autor) + 1 <
                        proyect.autores.length
                        ? ", "
                        : ""}
                    </span>
                  ))}
                </p>
                <p className="text-rose-600 hover:text-rose-800">Ver mapa →</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Post;
