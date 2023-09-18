import Footer from "components/ui/footer";
import imgriesgos from "assets/images/mapa-riesgos.jpg";
import imgturismo from "assets/images/mapas-turismo.jpg";
import "../assets/css/home.css";
export const HomePage = () => {
  return (
    <>
      <div className="my-10 bg-inherit">
        <div id="tittle and description">
          <section className="background-home my-2">
            <div className="container py-10 text-center text-gray-400">
              <h3 className="display-5 text-6xl font-semibold">
                Infraestructura de Datos Espaciales de la Universidad Católica
                de Cuenca
              </h3>
            </div>
            <div className="mx-auto w-full max-w-7xl px-1">
              <div _ngcontent-ffa-c440 className="container text-white">
                <p
                  _ngcontent-ffa-c440
                  className="lead text-justify font-sans text-3xl"
                >
                  Una Infraestructura de Datos Espaciales (IDE) es el conjunto
                  de políticas, leyes, normas, estándares, organizaciones,
                  planes, programas, proyectos, recursos humanos, tecnológicos y
                  financieros, integrados adecuadamente para facilitar la
                  producción, el acceso y uso de la geo-información regional,
                  nacional o local, para el apoyo al desarrollo social,
                  económico y ambiental de los pueblos. Se forma de servicios
                  que permiten compartir, intercambiar, combinar, analizar y
                  acceder a la Información Geográfica (IG).
                </p>
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
                    <h5 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center text-xl font-medium text-black">
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
                    <h5 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center text-xl font-medium leading-tight text-black">
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
                      src="https://img.freepik.com/foto-gratis/carretera-n-3-sobre-cima-montanas-selva-verde-provincia-nan-tailandia_335224-1081.jpg?w=1060&t=st=1694206311~exp=1694206911~hmac=65dafecd29d76c001addf4b4dd3f51700cf1112328b139ccdc12bdaf41fa20c2"
                      alt="Los Angeles Skyscrapers"
                    />
                    <h5 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Mapas de Vialidad
                    </h5>
                  </a>
                </div>

                <div className="mx-3 mt-6 flex flex-col bg-inherit shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
                  <a href="/lista/cat">
                    <img
                      className="rounded-lg"
                      src="https://img.freepik.com/foto-gratis/disparo-enfoque-selectivo-mano-masculina-sosteniendo-hoja-otono-contra-sol_181624-36497.jpg?w=996&t=st=1694205539~exp=1694206139~hmac=38edb126659ae7e3c93496dda45b98591ec446a3352383a0999b6768161ca40d "
                      alt="Los Angeles Skyscrapers"
                    />
                  </a>
                  <div className="p-6">
                    <h5 className="mb-2 text-center text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Mapas Medio Ambientales
                    </h5>
                  </div>
                </div>
                <div className="mx-3 mt-6 flex flex-col bg-inherit shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
                  <a href="/lista/cat">
                    <img
                      className="rounded-lg"
                      src="https://img.freepik.com/foto-gratis/medio-ambiente-dia-tierra-espacio-concepto-ecologico-texto_185193-108901.jpg?w=996&t=st=1694205601~exp=1694206201~hmac=5128f19c903b22deaf8b9d8ce6721a91ee1ab629fae332e15dba878fcb4f6c61 "
                      alt="Los Angeles Skyscrapers"
                    />
                  </a>
                  <div className="p-6">
                    <h5 className="mb-2 text-center text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Mapas de Suelo
                    </h5>
                  </div>
                </div>
                <div className="mx-3 mt-6 flex flex-col bg-inherit shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
                  <a href="/lista/cat">
                    <img
                      className="rounded-lg"
                      alt="Los Angeles Skyscrapers"
                      src="https://img.freepik.com/foto-gratis/silueta-construccion_1150-8336.jpg?w=996&t=st=1694205438~exp=1694206038~hmac=209a59f08dbc5d2adeffc529c724807ba71360cd136e80228e2a8e4a403c9a0d "
                    />
                  </a>
                  <div className="p-6">
                    <h5 className="mb-2 text-center text-xl font-medium leading-tight text-black">
                      Mapas de Infraestructura
                    </h5>
                  </div>
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
