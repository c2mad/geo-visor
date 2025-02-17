import "../assets/css/home.css";
// Importa las dependencias necesarias
import React, { useState } from "react";

export const ContactPage = () => {
  // Define estados para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [institucion, setInstitucion] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construir el objeto con los datos del formulario
    const formData = {
      nombre,
      email,
      institucion,
      asunto,
      mensaje,
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
        setAsunto("");
        setMensaje("");
      } else {
        // Hubo un error al enviar el correo
        alert(
          "Error al enviar el correo electrónico. Por favor, inténtalo de nuevo.",
        );
      }
    } catch (error) {
      console.error("Error al enviar el correo electrónico", error);
      alert("Error de red al intentar enviar el correo electrónico.");
    }
  };

  return (
    <div className="background-contact flex justify-center p-4 pt-10 pb-10">
      <div className="w-full max-w-2xl">
        <div className="rounded-lg bg-white shadow-lg p-6">
          <form method="POST" className="space-y-6" onSubmit={handleSubmit}>
            {/* Título */}
            <h2 className="text-4xl font-semibold text-gray-800 text-center">
              Contáctanos
            </h2>
            {/* Campos de formulario */}
            <div>
              <label
                htmlFor="nombre"
                className="block font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-rose-500 focus:ring-rose-500 focus:outline-none"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-medium text-gray-700"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-rose-500 focus:ring-rose-500 focus:outline-none"
                placeholder="Tu correo electrónico"
                required
              />
            </div>
            <div>
              <label
                htmlFor="institucion"
                className="block font-medium text-gray-700"
              >
                Institución
              </label>
              <input
                type="text"
                id="institucion"
                name="institucion"
                value={institucion}
                onChange={(e) => setInstitucion(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-rose-500 focus:ring-rose-500 focus:outline-none"
                placeholder="Institución a la que pertenece"
                required
              />
            </div>
            <div>
              <label
                htmlFor="asunto"
                className="block font-medium text-gray-700"
              >
                Asunto
              </label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-rose-500 focus:ring-rose-500 focus:outline-none"
                placeholder="Asunto"
                required
              />
            </div>
            <div>
              <label
                htmlFor="mensaje"
                className="block font-medium text-gray-700"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="4"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-rose-500 focus:ring-rose-500 focus:outline-none"
                placeholder="Escribe tu mensaje aquí"
                required
              ></textarea>
            </div>
            {/* Botón de envío */}
            <button
              type="submit"
              className="w-full rounded-lg bg-rose-600 px-4 py-2 font-semibold text-white transition duration-300 hover:bg-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-500"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
