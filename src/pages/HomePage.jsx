import Footer from "components/ui/footer";
import imgriesgos from "assets/images/mapa-riesgos.jpg";
import imgturismo from "assets/images/mapas-turismo.jpg";
import "../assets/css/home.css";

import ReactPlayer from "react-player";

export const HomePage = () => {
  return (
    <>
      <div className="my-10 bg-inherit">
        <div id="tittle and description">
          <section className="my-2">
            <ReactPlayer
              url="https://www.pexels.com/es-es/video/proyeccion-digital-de-un-planeta-de-simetria-geometrica-con-relacion-al-espacio-exterior-3141208/"
              className="react-player"
              playing
              width="100%"
              height="100%"
            />
            <div className="grid grid-cols-2">
              <div className="container px-6 py-20 text-center text-gray-400">
                <h3 className="display-5 font-semibold sm:text-4xl">
                  Infraestructura de Datos Espaciales de la Universidad Católica
                  de Cuenca
                </h3>
                <div className="mx-auto w-full max-w-7xl px-1">
                  <div className="container py-14 text-gray-400">
                    <p className="lead text-justify font-sans sm:text-2xl">
                      Una Infraestructura de Datos Espaciales (IDE) es el
                      conjunto de políticas, leyes, normas, estándares,
                      organizaciones, planes, programas, proyectos, recursos
                      humanos, tecnológicos y financieros, integrados
                      adecuadamente para facilitar la producción, el acceso y
                      uso de la geo-información regional, nacional o local, para
                      el apoyo al desarrollo social, económico y ambiental de
                      los pueblos. Se forma de servicios que permiten compartir,
                      intercambiar, combinar, analizar y acceder a la
                      Información Geográfica (IG).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <br />
        <div id="categorias" className="mx-auto w-full max-w-[1100px] px-3">
          <div className="mt-1  ">
            <section>
              <h3 className="mb-6 text-center text-4xl font-semibold uppercase text-black">
                Categorias
              </h3>

              <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
                <div className="relative mx-3 mt-6 flex flex-col bg-inherit">
                  <a
                    href="/lista/cat"
                    className="relative block overflow-hidden rounded-lg"
                  >
                    <img
                      className="h-auto w-full rounded-lg"
                      src={imgriesgos}
                      alt="Imagen de Mapa de Riesgos"
                    />
                    <h5 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center text-xl font-medium text-white">
                      Mapas de Riesgos
                    </h5>
                  </a>
                </div>

                <div className="relative mx-3 mt-6 flex flex-col bg-inherit">
                  <a
                    href="/lista/cat"
                    className="relative block overflow-hidden rounded-lg"
                  >
                    <img
                      className="h-auto w-full"
                      src={imgturismo}
                      alt="Imagen de mapas turisticos"
                    />
                    <h5 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center text-xl font-medium leading-tight text-white">
                      Mapas Turísticos
                    </h5>
                  </a>
                </div>

                <div className="relative mx-3 mt-6 flex flex-col bg-inherit">
                  <a
                    href="/lista/cat"
                    className="relative block overflow-hidden rounded-lg"
                  >
                    <img
                      className="h-auto w-full"
                      src={imgturismo}
                      alt="Imagen de mapas turisticos"
                    />
                    <h5 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center text-xl font-medium leading-tight text-white">
                      Mapas Viabilidad
                    </h5>
                  </a>
                </div>

                <div className="relative mx-3 mt-6 flex flex-col bg-inherit">
                  <a
                    href="/lista/cat"
                    className="relative block overflow-hidden rounded-lg"
                  >
                    <img
                      className="h-auto w-full"
                      src={imgturismo}
                      alt="Imagen de mapas turisticos"
                    />
                    <h5 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center text-xl font-medium leading-tight text-white">
                      Mapas Medio Ambientales
                    </h5>
                  </a>
                </div>

                <div className="relative mx-3 mt-6 flex flex-col bg-inherit">
                  <a
                    href="/lista/cat"
                    className="relative block overflow-hidden rounded-lg"
                  >
                    <img
                      className="h-auto w-full"
                      src={imgturismo}
                      alt="Imagen de mapas turisticos"
                    />
                    <h5 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center text-xl font-medium leading-tight text-white">
                      Mapas de Suelo
                    </h5>
                  </a>
                </div>

                <div className="relative mx-3 mt-6 flex flex-col bg-inherit">
                  <a
                    href="/lista/cat"
                    className="relative block overflow-hidden rounded-lg"
                  >
                    <img
                      className="h-auto w-full"
                      src={imgturismo}
                      alt="Imagen de mapas turisticos"
                    />
                    <h5 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center text-xl font-medium leading-tight text-white">
                      Mapas de Infraestructura
                    </h5>
                  </a>
                </div>
              </div>
            </section>
            <section className="h-32"></section>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};
