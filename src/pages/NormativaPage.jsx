import React from "react";
import iconEEUU from "../assets/icons/estados-unidos.png";
import iconEcuador from "../assets/icons/ecuador.png";
import iconEspaña from "../assets/icons/españa.png";
import iconUK from "../assets/icons/reino-unido.png";
import iconAustralia from "../assets/icons/australia.png";
import iconCanada from "../assets/icons/canada.png";
import iconBrasil from "../assets/icons/brasil.png";
import iconChile from "../assets/icons/chile.png";
import iconColombia from "../assets/icons/colombia.png";
import iconArgentina from "../assets/icons/argentina.png";

const Normativa = () => {
  const normativasPorPais = [
    {
      pais: "EEUU",
      normativa: "Normativa de IDE de EEUU",
      urlnormativa: "https://www.fgdc.gov/policyandplanningn",
      image: iconEEUU,
      portal: "GP",
      urlportal: "https://www.fgdc.gov/",
    },
    {
      pais: "Canadá",
      normativa: "Normativa de IDE de Canadá",
      urlnormativa:
        "https://natural-resources.canada.ca/earth-sciences/geomatics/canadas-spatial-data-infrastructure/8902",
      image: iconCanada,
      portal: "CGDI",
      urlportal:
        "https://natural-resources.canada.ca/science-and-data/science-and-research/geomatics/canadas-spatial-data-infrastructure/10783",
    },
    {
      pais: "Reino Unido",
      normativa: "Normativa de IDE de UK",
      urlnormativa:
        "https://geoportal.statistics.gov.uk/documents/gss-geography-policy-1/explore",
      image: iconUK,
      portal: "OGP",
      urlportal: "https://geoportal.statistics.gov.uk/",
    },
    {
      pais: "Australia",
      normativa: "Normativa de IDE de Australia",
      urlnormativa: "https://www.icsm.gov.au/about/legal",
      image: iconAustralia,
      portal: "ASDI",
      urlportal:
        "https://www.icsm.gov.au/australian-spatial-data-infrastructure-asdi",
    },
    {
      pais: "España",
      normativa: "Normativa de IDE de España",
      urlnormativa: "https://www.idee.es/web/idee/documentaci%C3%B3n",
      image: iconEspaña,
      portal: "IDEE",
      urlportal: "https://www.idee.es/",
    },
    {
      pais: "Brasil",
      normativa: "Normativa de IDE de Brasil",
      urlnormativa: "https://inde.gov.br/NormasPadroes",
      image: iconBrasil,
      portal: "INDE",
      urlportal: "https://www.inde.gov.br/",
    },
    {
      pais: "Chile",
      normativa: "Normativa de IDE de Chile",
      urlnormativa:
        "https://www.ide.cl/index.php/s-e-snit/area-de-informacion-y-normas/normas-y-estandares-basicos-para-el-desarrollo-de-una-ide",
      image: iconChile,
      portal: "IDECHILE",
      urlportal: "https://www.ide.cl/",
    },
    {
      pais: "Colombia",
      normativa: "Normativa de IDE de ",
      urlnormativa: "https://www.icde.gov.co/sobre-nosotros/marco-normativo",
      image: iconColombia,
      portal: "IDEE",
      urlportal: "https://www.icde.gov.co/",
    },
    {
      pais: "Argentina",
      normativa: "Normativa de IDE de ",
      urlnormativa: "https://www.idee.es/web/idee/documentaci%C3%B3n",
      image: iconArgentina,
      portal: "IDERA",
      urlportal: "https://www.idera.gob.ar/",
    },
    {
      pais: "Ecuador",
      normativa: "Normativa de IDE de Ecuador",
      urlnormativa: "https://www.idee.es/web/idee/documentaci%C3%B3n",
      image: iconEcuador,
      portal: "IDEE",
      urlportal: "https://www.idee.es/",
    },
    //Agrega más países y normativas según sea necesario
  ];

  return (
    <>
      <div className="container mx-auto max-w-[1100px] p-4">
        <h1 className="mb-4 text-center text-3xl font-semibold">
          Normativas y portales de IDE por País
        </h1>
        <div className="grid gap-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {normativasPorPais.map((paisInfo, index) => (
            <div
              key={index}
              className="rounded-md bg-white p-4 shadow-md hover:bg-slate-100"
            >
              <h2 className="mb-2 flex justify-between text-xl font-semibold">
                {paisInfo.pais}{" "}
                <img
                  className="h-[24px] w-[24px]"
                  src={paisInfo.image}
                  alt="Paises"
                />
              </h2>

              <p className="text-gray-700 hover:underline">
                <a href={paisInfo.urlnormativa}>{paisInfo.normativa}</a>
              </p>
              <p className="text-gray-700 hover:underline">
                <a href={paisInfo.urlportal}>{paisInfo.portal}</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Normativa;
