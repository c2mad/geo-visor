import React, { useState } from "react";
// import imgriesgos from "assets/images/mapa-riesgos.jpg";
// import imgturismo from "assets/images/mapas-turismo.jpg";
import "../assets/css/home.css";
import categorias from "../utils/categories";
import id_elements from "../utils/id_elements";
import proyectos from "../utils/proyects";
import Post from "components/ui/post";
export const HomePage = () => {
  const [proyects, setProyects] = useState(proyectos);
  const [categories, setCategories] = useState(categorias);
  return (
    <>
      <div className="bg-inherit">
        <div id="tittle and description" className="w-full">
          <section className="background-ide py-20">
            <div className="grid content-center items-stretch gap-4 py-20  pt-10 text-white sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2">
              <div className="px-10 sm:px-10 md:px-20 lg:px-40">
                <div className="bt-6 pb-6  text-white">
                  <h3 className="display-5 text-[38px]">
                    <span className="font-bold"> IDE</span>{" "}
                    <span className="font-semibold text-rose-600"> UCACUE</span>
                  </h3>
                </div>
                <div className="mx-auto">
                  <div className="text-white">
                    <p className="lead font-sans ">
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
          <div
            id="categorias"
            className="mx-auto w-full max-w-[1100px] px-3 dark:text-white"
          >
            <div className="mt-1  ">
              <section>
                <h3 className="mb-6 mt-20 text-center text-4xl font-semibold text-black dark:text-white">
                  Accesos
                </h3>
                <p className="lead pb-5 pt-5 font-sans "></p>
                <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
                  {id_elements.map((item) => {
                    return (
                      <div
                        className="relative mx-3 mt-6 flex flex-col bg-inherit"
                        key={item.id}
                      >
                        <a
                          href={item.to}
                          className=" block overflow-hidden rounded-lg"
                        >
                          <div className="flex items-center justify-center p-5">
                            <img
                              className="flex max-h-48 w-48 items-center justify-center rounded-lg"
                              src={item.image}
                              alt={item.name}
                            />
                          </div>
                          <div className="bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center  font-medium text-white">
                            <p>{item.name}</p>
                            {/* <p className="text-[14px]">{item.description}</p> */}
                          </div>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};
