import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer footer-between bg-black p-6 text-white">
        <div className="divide grid grid-cols-1 gap-4 sm:grid-flow-col sm:grid-cols-2 lg:grid-cols-3">
          {/* Laboratorios */}
          <div className="flex justify-center">
            <section className="text-center">
              <strong className="text-2xl">Laboratorios</strong>
              <br />
              <br />
              <div className="text-justify-center grid grid-flow-col gap-2">
                <div>
                  <ul id="laboratorios">
                    {/* <li className="h-12">
                      <a
                        href="https://ciitt.ucacue.edu.ec/laboratorios/laboratorio-de-calculo-computacional-modelado-y-analitica-de-datos-c2mad/"
                        className="block border-b-2 border-gray-200 pb-4  transition-colors hover:text-rose-500 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        C2MAD
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://ciitt.ucacue.edu.ec/laboratorios/laboratorio-datachademics/"
                        className="block border-b-2 border-t-2 border-gray-200 pb-4 pt-4 transition-colors hover:text-rose-500 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        SIGDATA
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Contacto */}
          <div className="mt-6 flex justify-center sm:mt-0">
            <section className="text-center">
              <strong className="text-2xl">Contacto</strong>
              <br />
              <br />
              <div className="grid grid-flow-col gap-4 text-justify">
                <div className="text-center">
                  <ul id="Contactos">
                    <li>
                      <strong>Dirección:</strong>
                      <br />
                      "Vía a Biblín, Ricaurte, Cuenca, Ecuador"
                    </li>
                    <li>
                      <strong>Teléfono:</strong>
                      <br />
                      593 (07) 2-834-037
                      <br />
                      Ext 155, 156
                    </li>
                    <li>
                      <strong>Email: </strong>
                      ciitt@ucacue.edu.ec
                      <br />
                      sigdata@ucacue.edu.ec
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Ubicación */}
          <div className="mt-6 flex justify-center sm:mt-0">
            <section className="text-center">
              <strong className="text-2xl">Ubicación</strong>
              <br />
              <br />
              <div className="grid grid-flow-col gap-4">
                <div>
                  <ul id="laboratorios">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7969.724696605074!2d-78.9656163!3d-2.8560806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd1733f70eca17%3A0xbe544f95d8070fc6!2sCIITT%20-%20Universidad%20Cat%C3%B3lica%20de%20Cuenca!5e0!3m2!1ses!2sec!4v1693337053326!5m2!1ses!2sec"
                      width="100%"
                      height="230"
                      loading="lazy"
                      title="maps"
                    ></iframe>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
        <br />
        <div className="text-center">
          <p>© 2023 | Universidad Católica de Cuenca</p>
        </div>
        <div className="mt-4 text-center">
          <div className="grid grid-flow-col justify-center gap-4">
            <a
              href="https://twitter.com/UCatolicaCuenca"
              target="_blank"
              rel="noreferrer"
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
              target="_blank"
              rel="noreferrer"
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
              href="https://www.facebook.com/Investigacion.UCatolicaCuenca"
              target="_blank"
              rel="noreferrer"
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
        </div>
      </footer>
    </>
  );
};

export default Footer;
