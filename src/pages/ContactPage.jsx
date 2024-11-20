import "../assets/css/home.css";

export const ContactPage = () => {
  return (
    <div className="background-contact flex justify-center p-4 pt-10 pb-10">
      <div className="w-full md:w-auto">
        <div className="rounded-lg bg-white shadow-lg sm:max-w-lg sm:pl-4 md:w-[700px] ">
          <form className="p-6">
            {/* Título */}
            <h2 className="mb-6 text-4xl font-semibold text-gray-800">
              Contáctanos
            </h2>
            {/* Campos de formulario */}
            <div className="mb-4">
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
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-rose-500 focus:ring-rose-500 focus:outline-none"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="mb-4">
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
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-rose-500 focus:ring-rose-500 focus:outline-none"
                placeholder="Tu correo electrónico"
                required
              />
            </div>
            <div className="mb-4">
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
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-rose-500 focus:ring-rose-500 focus:outline-none"
                placeholder="Institución a la que pertenece"
                required
              />
            </div>
            <div className="mb-4">
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
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-rose-500 focus:ring-rose-500 focus:outline-none"
                placeholder="Asunto"
                required
              />
            </div>
            <div className="mb-4">
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
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-rose-500 focus:ring-rose-500 focus:outline-none"
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
