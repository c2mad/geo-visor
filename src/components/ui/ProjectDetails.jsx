import React from "react";
import firstProjects from "utils/proyects";

const ProjectDetails = () => {
  const firstProject = firstProjects[0];

  if (!firstProject) {
    return (
      <div className="text-center">
        <p className="text-red-500 dark:text-red-400 text-lg font-semibold">
          Proyecto no encontrado
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-5xl p-6">
      <div className="rounded-lg bg-gradient-to-r from-black to-red p-1">
        <div className="rounded-lg bg-white p-5 shadow-lg dark:bg-gray-800">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-800 dark:text-white">
            {firstProject.title}
          </h2>

          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex-1">
              <img
                src={firstProject.imageUrl}
                alt={firstProject.title}
                className="transform rounded-lg shadow-lg transition duration-500 hover:scale-105"
              />
            </div>

            <div className="flex-1 space-y-4">
              <div className="rounded-lg border border-gray-300 p-4 shadow-md dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300">
                  {firstProject.description}
                </p>
              </div>

              <div className="rounded-lg border border-gray-300 p-4 shadow-md dark:border-gray-700">
                <dl>
                  <div className="pb-2">
                    <dt className="font-semibold">Publicado:</dt>
                    <dd>{firstProject.publication}</dd>
                  </div>
                  <div className="pb-2">
                    <dt className="font-semibold">Fuente:</dt>
                    <dd>
                      {firstProject.fuente.map((f, index) => (
                        <span key={f.id}>
                          {f.name}
                          {index < firstProject.fuente.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold">
                      {firstProject.autores.length > 1 ? "Autores:" : "Autor:"}
                    </dt>
                    <dd>
                      {firstProject.autores.map((autor, index) => (
                        <span key={autor.id}>
                          {autor.name}
                          {index < firstProject.autores.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
