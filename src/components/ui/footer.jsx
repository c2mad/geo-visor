import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer footer-center bg-black p-10 text-white">
        <div className="grid grid-cols-3 gap-4 divide-x">
          <div className="flex justify-center">
            <section className="text-center">
              <strong className="h-16 text-2xl">Laboratorios</strong>
              <br />
              <br />
              <div className="text-justify-center grid grid-flow-col gap-2">
                <div>
                  <ul id="laboratorios">
                    <li className="h-12">
                      <a
                        href="https://ciitt.ucacue.edu.ec/laboratorios/laboratorio-de-calculo-computacional-modelado-y-analitica-de-datos-c2mad/"
                        className="block border-b-2 border-gray-200 pb-4  transition-colors hover:text-rose-500 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        C2MAD
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ciitt.ucacue.edu.ec/laboratorios/laboratorio-datachademics/"
                        className="block border-b-2 border-gray-200 pb-4 transition-colors hover:text-rose-500 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        DatAchademics
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div className="flex justify-center">
            <section className="text-center">
              <strong className="text-2xl">Contacto</strong>
              <br />
              <br />
              <div className="grid grid-flow-col gap-4 text-justify">
                <div className="text-center">
                  <ul id="Contactos">
                    <li>
                      <strong>Matriz Cuenca:</strong>
                      <br />
                      "Av. de las Américas y Humboldt"
                    </li>
                    <li>
                      <strong>Telefono:</strong>
                      <br />
                      593 (07)
                      <br />
                      2-830-751
                      <br />
                      2-830-877
                      <br />
                      2-824-365
                    </li>
                    <li>
                      <strong>Email: </strong>
                      info@ucacue.edu.ec
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div className="flex justify-end">
            <section className="text-center">
              <strong className="text-2xl">Ubicación</strong>
              <br />
              <br />
              <div className="grid grid-flow-col gap-4">
                <div>
                  <ul id="laboratorios">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7969.724696605074!2d-78.9656163!3d-2.8560806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd1733f70eca17%3A0xbe544f95d8070fc6!2sCIITT%20-%20Universidad%20Cat%C3%B3lica%20de%20Cuenca!5e0!3m2!1ses!2sec!4v1693337053326!5m2!1ses!2sec"
                      width="400"
                      height="230"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      title="maps"
                    ></iframe>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
        <br />
        <div className="grid grid-cols-2">
          <div className="flex justify-start">
            <p>© 2023 | Universidad Católica de Cuenca</p>
          </div>
          <div className="flex justify-end">
            <div className="grid grid-flow-col gap-4">
              <a href="https://twitter.com/UCatolicaCuenca">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="https://www.youtube.com/@UCatolicaCuenca1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="https://www.facebook.com/universidadcatolicacuenca">
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
        </div>
      </footer>
    </>
  );
};

export default Footer;
