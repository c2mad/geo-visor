import "../assets/css/home.css";
// Importa las dependencias necesarias
import React, { useState } from "react";

export const ContactPage = () => {
  // Define estados para los campos del formulario
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
    <div className="background-contact justify-center p-4">
      <div className="w-full md:w-auto">
        <div className="rounded-lg bg-inherit shadow-lg sm:max-w-lg sm:pl-4 md:w-[700px] md:pl-20">
          <form method="POST" className="p-4" onSubmit={handleSubmit}>
            {/* Título */}
            <h2 className="mb-4 text-4xl font-semibold text-white">
              Contáctanos
            </h2>
            {/* Campos de formulario */}
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
            <br />
            {/* Botón de envío */}
            <button
              id="multiLevelDropdownButton"
              data-dropdown-toggle="multi-dropdown"
              className={`inline-flex w-full items-center rounded-lg bg-red px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red focus:outline-none focus:ring-4 focus:ring-red dark:bg-red dark:hover:bg-red dark:focus:ring-red ${
                !nombre ||
                !email ||
                !institucion ||
                !motivodescarga ||
                !sectorpertenece
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
              type="submit"
              disabled={
                !nombre ||
                !email ||
                !institucion ||
                !motivodescarga ||
                !sectorpertenece
              }
            >
              Enviar correo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
