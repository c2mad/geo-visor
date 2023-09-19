export const ContactPage = () => {
  return (
    <>
      <div className="container">
        <h1>Contact</h1>
        <br />
      </div>
      {/* Columna del formulario debajo de la imagen */}
      <div className="justify-center p-12">
        <div className="w-full md:w-auto">
          <div className="items-end rounded-lg bg-inherit p-12 shadow-lg">
            <form className="">
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
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  placeholder="Tu nombre"
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
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  placeholder="Tu correo electrónico"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium text-white">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  placeholder="Escribe tu mensaje aquí"
                ></textarea>
              </div>
              {/* Botón de envío */}
              <button
                type="submit"
                className="w-full rounded-lg bg-red px-4 py-2 font-semibold text-white transition duration-300 hover:bg-blue-600"
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
