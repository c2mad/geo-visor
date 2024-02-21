import "../assets/css/home.css";
import React, { useState } from "react";

export const ContactPage = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [consultadescarga, setConsultadescarga] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [institucion, setInstitucion] = useState("");
  const [sectorpertenece, setSectorpertenece] = useState("");
  const [nuevaInstitucion, setNuevaInstitucion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !nombre.trim() ||
      !apellido.trim() ||
      !consultadescarga.trim() ||
      !email.trim() ||
      !telefono.trim() ||
      !institucion.trim() ||
      !sectorpertenece.trim()
    ) {
      alert("Todos los campos son obligatorios.");
      return; // Detener la ejecución si algún campo está vacío
    }

    // Construir el objeto con los datos del formulario
    const formData = {
      nombre,
      apellido,
      consultadescarga,
      email,
      telefono,
      institucion,
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
        setApellido("");
        setConsultadescarga("");
        setEmail("");
        setTelefono("");
        setInstitucion("");
        setSectorpertenece("");
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
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="mb-4 w-full px-4 lg:w-1/2">
          <div className="rounded-lg bg-inherit p-6 shadow-lg">
            <form method="POST" className="space-y-6" onSubmit={handleSubmit}>
              <h2 className="text-2xl font-semibold text-white">Contáctanos</h2>
              {/* Campos del formulario */}
              <div className="-mx-3 mb-6 flex flex-wrap">
                <div className="w-full px-3 md:w-1/2">
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-white"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label
                    htmlFor="apellido"
                    className="block text-sm font-medium text-white"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="apellido"
                    id="apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="Consultadescarga"
                  className="block text-sm font-medium text-white"
                >
                  Consulta
                </label>
                <textarea
                  type="textarea"
                  name="consulta"
                  id="consulta"
                  value={consultadescarga}
                  onChange={(e) => setConsultadescarga(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-white"
                >
                  Correo
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="Telefono"
                  className="block text-sm font-medium text-white"
                >
                  Teléfono
                </label>
                <input
                  type="number"
                  name="telefono"
                  id="telefono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="institucion"
                  className="block text-sm font-medium text-white"
                >
                  Institución a la que pertenece
                </label>
                <select
                  name="institucion"
                  id="institucion"
                  value={institucion}
                  onChange={(e) => setInstitucion(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm transition duration-150 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                  required
                >
                  <option value="">Seleccione una opción</option>
                  <option value="institucion1">Universidad de Cuenca</option>
                  <option value="institucion2">
                    Universidad Politecnica Salesiana
                  </option>
                  <option value="institucion3">Universidad del Azuay</option>
                  <option value="institucion4">Gad Municipal de Cuenca</option>
                  <option value="otra">Otra...</option>
                </select>
                {institucion === "otra" && (
                  <input
                    type="text"
                    name="nuevaInstitucion"
                    id="nuevaInstitucion"
                    value={nuevaInstitucion}
                    onChange={(e) => setNuevaInstitucion(e.target.value)}
                    className="mt-3 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    placeholder="Escriba el nombre de la institución"
                  />
                )}
              </div>

              <button
                type="submit"
                className="hover:bg-red-700 focus:ring-red-500 inline-flex w-full items-center justify-center rounded-lg bg-red px-5 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring-4 focus:ring-opacity-50"
              >
                Enviar correo
              </button>
            </form>
          </div>
        </div>

        <div className="w-full px-4 lg:w-1/2">
          <div className="rounded-lg bg-inherit p-6 shadow-lg">
            <h2 className="mb-6 text-2xl font-semibold text-white">Ubícanos</h2>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7969.724696605074!2d-78.9656163!3d-2.8560806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd1733f70eca17%3A0xbe544f95d8070fc6!2sCIITT%20-%20Universidad%20Cat%C3%B3lica%20de%20Cuenca!5e0!3m2!1ses!2sec!4v1693337053326!5m2!1ses!2sec"
                width="100%"
                height="400"
                loading="lazy"
                title="maps"
                className="shadow-sm" // Puedes aplicar sombras directamente al iframe si lo deseas
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
