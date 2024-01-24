import React from "react";
import firstProjects from "utils/proyects";

const ProjectDetails = () => {
  // Obtén el primer proyecto de la matriz
  const firstProject = firstProjects[0];

  if (!firstProject) {
    return (
      <p className="text-red-500 dark:text-white">Proyecto no encontrado</p>
    );
  }

  // Muestra los detalles del primer proyecto
  return (
    <div className="mx-auto w-full max-w-[1500px] px-4 py-8">
      <h2 className="mb-6 text-center text-3xl font-bold">
        {firstProject.title}
      </h2>

      <div className="flex flex-col items-center md:flex-row">
        {/* Imagen en la columna izquierda con borde */}
        <div className="mb-4 md:mb-0 md:mr-6 md:w-1/2">
          <img
            src={firstProject.imageUrl}
            alt={firstProject.title}
            className="h-auto w-full rounded-lg border border-gray-300"
          />
        </div>

        {/* Descripción en la columna derecha con borde */}
        <div className="rounded-lg border border-gray-300 p-4 md:w-1/2">
          <p className="text-lg text-gray-700">{firstProject.description}</p>
        </div>
      </div>

      <div className="mt-8 text-xl text-neutral-500 dark:text-neutral-300">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="pr-2 font-semibold">Publicado:</td>
              <td>{firstProject.publication}</td>
            </tr>
            <tr>
              <td className="pr-2 font-semibold">Fuente:</td>
              <td>
                {firstProject.fuente.map((f, index) => (
                  <span key={f.id}>
                    {f.name}
                    {index < firstProject.fuente.length - 1 && ", "}
                  </span>
                ))}
              </td>
            </tr>
            <tr>
              <td className="pr-2 font-semibold">
                {firstProject.autores.length > 1 ? "Autores:" : "Autor:"}
              </td>
              <td>
                {firstProject.autores.map((autor, index) => (
                  <span key={autor.id}>
                    {autor.name}
                    {index < firstProject.autores.length - 1 && ", "}
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
