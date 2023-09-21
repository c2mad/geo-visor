import React from "react";

const Post = ({ proyects, categories }) => {
  return (
    <>
      {proyects.map((proyect) => (
        <div className="mb-5  w-full " key={proyect.id}>
          <a
            href={proyect.to}
            className="flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:flex-row"
          >
            <img
              className="lg:96 h-48 w-full rounded-t-lg object-cover md:h-52 md:w-48 md:rounded-none md:rounded-l-lg  xl:h-auto"
              src={proyect.imageUrl}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {proyect.title}
              </h5>
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-200">
                {proyect.description}
              </p>
              <p className="mb-1 mt-2 text-[14px] font-normal text-gray-400 dark:text-gray-400">
                <span>
                  {"Publicado: "}
                  {proyect.publication}
                </span>
                {" | "}
                {"Fuente: "}
                <span>{proyect.fuente}</span>
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
                  <span>
                    {autor.name}{" "}
                    {proyect.autores.length > 1 &&
                    proyect.autores.indexOf(autor) + 1 < proyect.autores.length
                      ? ", "
                      : ""}
                  </span>
                ))}
              </p>
              <p className="text-rose-600 hover:text-rose-800">Ver mapa →</p>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default Post;
