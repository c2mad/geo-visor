import "../assets/css/home.css";
export const ContactPage = () => {
  return (
    <>
      <div className="background-contact justify-center p-4 ">
        <div className="w-full md:w-auto">
          <div className="rounded-lg bg-inherit shadow-lg sm:max-w-lg sm:pl-4 md:w-[700px] md:pl-20">
            <form className="p-4">
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
    </>
  );
};
