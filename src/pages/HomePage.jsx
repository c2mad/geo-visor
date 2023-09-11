import Footer from "components/ui/footer";
import Carousel from "../components/ui/Carousel";

export const HomePage = () => {
  return (
    <>
      <div className="bg-slate-300">
        <div>
          <div>
            <Carousel />
          </div>
        </div>
        <div id="categorias" className="mx-auto w-full max-w-[1100px] px-3">
          <div className="mt-1  ">
            <section>
              <h3 className="mb-6 text-center text-2xl font-semibold uppercase text-slate-700">
                Categorias
              </h3>
              <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
                <div class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                  <a href="/lista/cat">
                    <img
                      className="rounded-t-lg"
                      src="https://img.freepik.com/vector-gratis/fondo-pantalla-mapa-topografico_23-2148582394.jpg?w=1060&t=st=1694201893~exp=1694202493~hmac=e6e3d09989d81d5e0400f926bedd7b4090b88557d053762dfc8a62a6cd531c2b"
                      alt="Los Angeles Skyscrapers"
                    />
                  </a>
                  <div class="p-6">
                    <h5 class="mb-2 text-center text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Mapas de Riesgos y Desastres
                    </h5>
                    <p class="mb-4 text-justify text-base text-neutral-600 dark:text-neutral-200">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas euismod, nisi vel consectetur interdum, nisl
                      lectus aliquam nunc, euismod aliquam nunc nisl eget
                      consectetur.
                    </p>
                  </div>
                </div>
                <div class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                  <a href="/lista/cat">
                    <img
                      class="rounded-t-lg"
                      src="https://img.freepik.com/vector-gratis/conjunto-pegatinas-distintivos-viaje_53876-100734.jpg?w=1060&t=st=1694202582~exp=1694203182~hmac=577cec7b0c96e57616bf3163d037a41ea7625821617a3fe8b0280a6980f8dcc7"
                      alt="Los Angeles Skyscrapers"
                    />
                  </a>
                  <div class="p-6">
                    <h5 class="mb-2 text-center text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Mapas Turísticos
                    </h5>
                    <p class="mb-4 text-justify text-base text-neutral-600 dark:text-neutral-200">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas euismod, nisi vel consectetur interdum, nisl
                      lectus aliquam nunc, euismod aliquam nunc nisl eget
                      consectetur.
                    </p>
                  </div>
                </div>
                <div class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                  <a href="/lista/cat">
                    <img
                      class="h-full rounded-t-lg"
                      src="https://img.freepik.com/foto-gratis/carretera-n-3-sobre-cima-montanas-selva-verde-provincia-nan-tailandia_335224-1081.jpg?w=1060&t=st=1694206311~exp=1694206911~hmac=65dafecd29d76c001addf4b4dd3f51700cf1112328b139ccdc12bdaf41fa20c2 "
                      alt="Los Angeles Skyscrapers"
                    />
                  </a>
                  <div class="p-6">
                    <h5 class="mb-2 text-center text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Mapas de Vialidad
                    </h5>
                    <p class="mb-4 text-justify text-base text-neutral-600 dark:text-neutral-200">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas euismod, nisi vel consectetur interdum, nisl
                      lectus aliquam nunc, euismod aliquam nunc nisl eget
                      consectetur.
                    </p>
                  </div>
                </div>
                <div class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                  <a href="/lista/cat">
                    <img
                      className="rounded-t-lg"
                      src="https://img.freepik.com/foto-gratis/disparo-enfoque-selectivo-mano-masculina-sosteniendo-hoja-otono-contra-sol_181624-36497.jpg?w=996&t=st=1694205539~exp=1694206139~hmac=38edb126659ae7e3c93496dda45b98591ec446a3352383a0999b6768161ca40d "
                      alt="Los Angeles Skyscrapers"
                    />
                  </a>
                  <div class="p-6">
                    <h5 class="mb-2 text-center text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Mapas Medio Ambientales
                    </h5>
                    <p class="mb-4 text-justify text-base text-neutral-600 dark:text-neutral-200">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas euismod, nisi vel consectetur interdum, nisl
                      lectus aliquam nunc, euismod aliquam nunc nisl eget
                      consectetur.
                    </p>
                  </div>
                </div>
                <div class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                  <a href="/lista/cat">
                    <img
                      className="rounded-t-lg"
                      src="https://img.freepik.com/foto-gratis/medio-ambiente-dia-tierra-espacio-concepto-ecologico-texto_185193-108901.jpg?w=996&t=st=1694205601~exp=1694206201~hmac=5128f19c903b22deaf8b9d8ce6721a91ee1ab629fae332e15dba878fcb4f6c61 "
                      alt="Los Angeles Skyscrapers"
                    />
                  </a>
                  <div class="p-6">
                    <h5 class="mb-2 text-center text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Mapas de Suelo
                    </h5>
                    <p class="mb-4 text-justify text-base text-neutral-600 dark:text-neutral-200">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas euismod, nisi vel consectetur interdum, nisl
                      lectus aliquam nunc, euismod aliquam nunc nisl eget
                      consectetur.
                    </p>
                  </div>
                </div>
                <div class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                  <a href="/lista/cat">
                    <img
                      className="rounded-t-lg"
                      alt="Los Angeles Skyscrapers"
                      src="https://img.freepik.com/foto-gratis/silueta-construccion_1150-8336.jpg?w=996&t=st=1694205438~exp=1694206038~hmac=209a59f08dbc5d2adeffc529c724807ba71360cd136e80228e2a8e4a403c9a0d "
                    />
                  </a>
                  <div class="p-6">
                    <h5 class="mb-2 text-center text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Mapas de Infraestructura
                    </h5>
                    <p class="mb-4 text-justify text-base text-neutral-600 dark:text-neutral-200">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas euismod, nisi vel consectetur interdum, nisl
                      lectus aliquam nunc, euismod aliquam nunc nisl eget
                      consectetur.
                    </p>
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
