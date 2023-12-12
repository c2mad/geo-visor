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
        console.log("Correo enviado con éxito");
      } else {
        // Hubo un error al enviar el correo
        console.error("Error al enviar el correo");
      }
    } catch (error) {
      console.error("Error al enviar el correo", error);
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
            <div className="mb-4">
              <label className="block font-medium text-white ">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-red focus:outline-none"
                placeholder="Tu nombre"
                aria-required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-white">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-red focus:outline-none"
                placeholder="Tu correo electrónico"
                aria-required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-white">
                Institución
              </label>
              <input
                type="text"
                id="institucion"
                name="institucion"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-red focus:outline-none"
                placeholder="Institución a la que pertenece"
                aria-required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-white">Asunto</label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-red focus:outline-none"
                placeholder="Asunto"
                aria-required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-white">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="4"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-red focus:outline-none"
                placeholder="Escribe tu mensaje aquí"
                aria-required
              ></textarea>
            </div>
            {/* Botón de envío */}
            <button
              type="submit"
              className="w-full rounded-lg bg-red px-4 py-2 font-semibold text-white transition duration-300 hover:bg-gray-400"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
