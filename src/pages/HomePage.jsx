import Footer from "components/ui/footer";

export const HomePage = () => {
  return (
    <>
      <div className="h-96 w-full">
        <img
          className="h-full w-full object-cover object-bottom"
          src="./images/banner.jpeg"
          alt="Banner"
        />
      </div>
      <div className="mx-auto w-full max-w-[1100px] px-3">
        <div className="mt-12 ">
          <section>
            <h3 className="mb-6 text-2xl font-semibold uppercase text-slate-700">
              Categorias
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="w-full rounded-xl bg-white p-3">
                <div className="h-64 w-full overflow-hidden rounded-xl">
                  <img
                    className="h-full w-full object-cover object-left"
                    src="https://img.freepik.com/vector-gratis/diseno-mapa-topografico-abstracto-superposicion-mapa-calor_1048-12391.jpg?t=st=1648157151~exp=1648157751~hmac=ad728dec515e397fbe9bfcb6845b09b062954a995a750eaeadc5f4fd6d38c6f9&w=1800"
                    alt="Visor"
                  />
                </div>
                <div className="mt-6">
                  <h4 className="text-xl font-semibold text-slate-700">
                    Visor: Mapas de riegos
                  </h4>
                  <p className="text-gray-60 mt-3 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas euismod, nisi vel consectetur interdum, nisl lectus
                    aliquam nunc, euismod aliquam nunc nisl eget consectetur.
                  </p>
                </div>
              </div>
              <div className="w-full rounded-xl bg-white p-3">
                <div className="h-64 w-full overflow-hidden rounded-xl">
                  <img
                    className="h-full w-full object-cover object-left"
                    src="https://img.freepik.com/vector-gratis/callejero-marcadores-sector-restauracion_23-2147618798.jpg?t=st=1648155307~exp=1648155907~hmac=87fb973611d406fa7205bdbdb117f1bace8d9959f1a82557d1dd9479e1a9acb2&w=1380"
                    alt="Visor"
                  />
                </div>
                <div className="mt-6">
                  <h4 className="text-xl font-semibold text-slate-700">
                    Visor: Mapa turistico
                  </h4>
                  <p className="text-gray-60 mt-3 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas euismod, nisi vel consectetur interdum, nisl lectus
                    aliquam nunc, euismod aliquam nunc nisl eget consectetur.
                  </p>
                </div>
              </div>
              <div className="w-full rounded-xl bg-white p-3">
                <div className="h-64 w-full overflow-hidden rounded-xl">
                  <img
                    className="h-full w-full object-cover object-left"
                    src="https://img.freepik.com/vector-gratis/traffic-city-top-flat_1284-22955.jpg?t=st=1648157106~exp=1648157706~hmac=a873ac65cf814ee942d5564dce02675ddfdbd6c76700a15cc2e66e2894ca3807&w=1380"
                    alt="Visor"
                  />
                </div>
                <div className="mt-6">
                  <h4 className="text-xl font-semibold text-slate-700">
                    Visor: Mapas de vias
                  </h4>
                  <p className="text-gray-60 mt-3 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas euismod, nisi vel consectetur interdum, nisl lectus
                    aliquam nunc, euismod aliquam nunc nisl eget consectetur.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="h-32">
        <Footer />
      </section>
    </>
  );
};
