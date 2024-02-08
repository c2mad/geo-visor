import React from "react";
import manualu from "../utils/MANUAL DE USUARIO PARA EL GEOVISOR.pdf";

export const ManualPage = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-[1100px] px-3 dark:text-white">
        <br />
        <h1 className="text-center text-3xl font-bold dark:text-white">
          Manual de usuario
        </h1>
        <br />
        <div>
          <h2 className="text-center font-sans text-2xl dark:text-white">
            En este apartado pueden encontrar un manual de usuario para poder
            resolver sus inquietudes referente al funcionamiento del aplicativo.
          </h2>
        </div>
        <div className="p-4">
          <a
            href={manualu}
            className="dark:hover:text-dark z-10 my-3 flex flex-shrink-0 items-center justify-center rounded-lg border border-gray-300 bg-red p-5 text-center text-lg font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-red dark:hover:bg-gray-100 dark:focus:ring-gray-700"
            type="button"
            target="_blank"
          >
            Manual de usuario Geovisor{" "}
            <svg
              className="ml-2.5 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
            </svg>
          </a>
          {/* Asegúrate de que el href apunte correctamente a la ubicación del archivo PDF para el segundo enlace, si es diferente al primero */}
          <a
            href={manualu} // Asegúrate de actualizar esta ruta si el segundo PDF es diferente
            className="dark:hover:text-dark z-10 my-3 flex flex-shrink-0 items-center justify-center rounded-lg border border-gray-300 bg-lime-400 p-4 text-center text-lg font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-red dark:hover:bg-gray-100 dark:focus:ring-gray-700"
            type="button"
            target="_blank"
          >
            Manual de usuario Geoservicios{" "}
            <svg
              className="ml-2.5 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};
