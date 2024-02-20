import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black p-6 text-white">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {/* Laboratorios */}
        <div className="text-center">
          <strong className="text-xl">Laboratorios</strong>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="https://ciitt.ucacue.edu.ec/laboratorios/laboratorio-datachademics/"
                className="inline-block border-b-2 border-gray-200 py-2 transition-colors hover:border-rose-500 hover:text-rose-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                SIGDATA
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="text-center">
          <strong className="text-xl">Contacto</strong>
          <ul className="mt-4 space-y-2">
            <li>
              <strong>Dirección:</strong> "Vía a Biblín, Ricaurte, Cuenca,
              Ecuador"
            </li>
            <li>
              <strong>Email:</strong> sigdata@ucacue.edu.ec
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p>© 2023 | Universidad Católica de Cuenca</p>
      </div>

      <div className="mt-4 flex justify-center gap-4">
        {/* Íconos de Redes Sociales */}
        <a
          href="https://twitter.com/UCatolicaCuenca"
          className="hover:text-rose-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 50 50"
            className="fill-current"
          >
            <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
          </svg>
        </a>
        <a
          href="https://www.youtube.com/@UCatolicaCuenca1"
          className="hover:text-rose-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.230 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.600.245 11.626.246 15.230 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a
          href="https://www.facebook.com/universidadcatolicacuenca"
          className="hover:text-rose-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
