import React from "react";

const Download = ({ proyects, categories }) => {
  const handleDownload = (downloadUrl) => {
    window.location.href = downloadUrl; // Redirige a la URL para iniciar la descarga
  };
  return (
    <>
      <div className="mx-auto flex w-full max-w-none flex-wrap justify-center gap-5 bg-white p-5 px-3 dark:text-white">
        <span className="justify-center text-3xl">
          Componente que permite la descarga de archivos de información
          geográfica
        </span>
        <br />
        {proyects.map((proyect) => (
          <div className="mb-3 w-full max-w-sm" key={proyect.id}>
            <div className="rounded:bg-black flex border-separate flex-col rounded-lg border bg-white shadow-md dark:bg-neutral-700">
              <div className="flex h-full w-full items-center justify-center">
                <img
                  className=" h-48 max-h-full w-full max-w-full rounded-t-lg object-cover"
                  src={proyect.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex w-full flex-col justify-center p-4">
                <h5 className="mb-2 text-center text-lg font-medium text-neutral-800 dark:text-neutral-50">
                  {proyect.title}
                </h5>
                <p className="text-justify text-sm text-neutral-600 dark:text-neutral-200">
                  {proyect.description}
                </p>
                <div className="mt-2 text-xs text-neutral-500 dark:text-neutral-300">
                  <p className="mb-1 text-[12px] font-normal text-gray-400 dark:text-gray-400">
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
                  </p>
                  <p className="text-[12px] font-normal text-gray-400 dark:text-gray-400">
                    {proyect.autores.length > 1 ? "Autores: " : "Autor: "}
                    {proyect.autores.map((autor, index) => (
                      <span key={autor.id}>
                        {autor.name}
                        {index + 1 < proyect.autores.length ? ", " : ""}
                      </span>
                    ))}
                  </p>
                </div>
                <button
                  className="mt-3 rounded-lg bg-slate-500 p-2 text-sm text-white hover:bg-red"
                  onClick={() => handleDownload(proyect.shapefileUrl)} // Usa la URL del shapefile del proyecto
                >
                  Descargar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Download;
