import { useState } from "react";
import React from "react";
import MenuDescargas from "./MenuDescargas";

export const Modalformulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [institucion, setInstitucion] = useState("");
  const [motivodescarga, setMotivo] = useState("");
  const [sectorpertenece, setSector] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construir el objeto con los datos del formulario
    const formData = {
      nombre,
      email,
      institucion,
      motivodescarga,
      sectorpertenece,
    };

    try {
      // Enviar los datos al servidor
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // El correo se envió con éxito
        alert("Correo electrónico enviado con éxito");

        // Limpiar el formulario restableciendo los estados a una cadena vacía
        setNombre("");
        setEmail("");
        setInstitucion("");
        setMotivo("");
        setSector("");
      } else {
        // Hubo un error al enviar el correo
        alert(
          "Error al enviar el correo electrónico. Por favor, inténtalo de nuevo."
        );
      }
    } catch (error) {
      console.error("Error al enviar el correo electrónico", error);
      alert("Error de red al intentar enviar el correo electrónico.");
    }
  };

  return (
    <>
      <button
        data-modal-target="form-modal"
        data-modal-toggle="form-modal"
        className="block rounded-lg bg-red px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red focus:bg-red focus:outline-none focus:ring-4 dark:bg-red dark:hover:bg-red dark:focus:bg-red"
        type="button"
      >
        Descarga
      </button>

      <div
        id="form-modal"
        tabindex="-1"
        aria-hidden="true"
        className="h-modal fixed inset-0 z-50 hidden items-center justify-center overflow-y-auto overflow-x-hidden md:h-full"
      >
        <div className="relative h-full w-full max-w-md p-4 md:h-auto">
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
            <div className="flex items-center justify-between rounded-t border-b p-5 dark:border-gray-600">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Formulario de registro de información
              </h3>
              <button
                type="button"
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-2.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7.707 7.707a1 1 0 00-1.414 0L6 7.293 7.293 6l1 1 5-5 1 1-6 6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <form
              method="POST"
              className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Escribe tu nombre"
                  required=""
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Correo
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="Escribe tu correo"
                    required=""
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Institución a la que pertenece
                  </label>
                  <input
                    type="text"
                    name="institucion"
                    id="institucion"
                    value={institucion}
                    onChange={(e) => setInstitucion(e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="Institución a la que pertenece"
                    required=""
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Motivo de la descarga
                </label>
                <input
                  type="text"
                  name="motivo"
                  id="motivo"
                  value={motivodescarga}
                  onChange={(e) => setMotivo(e.target.value)}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Motivo de la descarga"
                  required=""
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Sector al que pertenece
                </label>
                <input
                  type="text"
                  name="sector"
                  id="sector"
                  value={sectorpertenece}
                  onChange={(e) => setSector(e.target.value)}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Público o Privado"
                  required=""
                />
              </div>
              <MenuDescargas />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
