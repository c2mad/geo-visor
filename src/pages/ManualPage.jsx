import React from "react";
import manualu from "../utils/MANUAL DE USUARIO PARA EL GEOVISOR.pdf";

export const ManualPage = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 dark:text-white">
      <h1 className="mb-8 text-center text-4xl font-bold dark:text-white">
        Manual de Usuario
      </h1>
      <p className="mb-8 text-center text-xl">
        En este apartado pueden encontrar un manual de usuario para poder
        resolver sus inquietudes referente al funcionamiento del aplicativo.
      </p>
      <div className="flex justify-center">
        <a
          href={manualu}
          className="bg-red-600 hover:bg-red-700 focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600 inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-lg font-medium text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Manual de Usuario
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ManualPage;
