import React from "react";
import firstProjects from "utils/proyects";

const ProjectDetails = () => {
  const firstProject = firstProjects[0];

  if (!firstProject) {
    return (
      <p className="text-red-500 text-center text-lg font-semibold dark:text-white">
        Proyecto no encontrado
      </p>
    );
  }

  return (
    <div className="mx-auto w-full max-w-4xl p-5">
      <h2 className="mb-5 text-center text-4xl font-bold text-gray-800 dark:text-white">
        {firstProject.title}
      </h2>

      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <div className="w-full flex-shrink-0 md:w-1/2">
          <img
            src={firstProject.imageUrl}
            alt={firstProject.title}
            className="mx-auto h-auto w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full rounded-lg border border-gray-300 p-4 shadow-md md:w-1/2 dark:border-gray-700 dark:text-white">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {firstProject.description}
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <table className="w-full text-xl text-gray-700 dark:text-gray-300">
          <tbody>
            <tr className="border-b">
              <td className="py-2 font-semibold">Publicado:</td>
              <td>{firstProject.publication}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-semibold">Fuente:</td>
              <td>
                {firstProject.fuente.map((f, index) => (
                  <span key={f.id}>
                    {f.name}
                    {index < firstProject.fuente.length - 1 ? ", " : ""}
                  </span>
                ))}
              </td>
            </tr>
            <tr>
              <td className="py-2 font-semibold">
                {firstProject.autores.length > 1 ? "Autores:" : "Autor:"}
              </td>
              <td>
                {firstProject.autores.map((autor, index) => (
                  <span key={autor.id}>
                    {autor.name}
                    {index < firstProject.autores.length - 1 ? ", " : ""}
                  </span>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectDetails;
