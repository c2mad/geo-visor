import imgmap from "../assets/images/mapa_128.png";
import imgdw from "../assets/images/download_128.png";
import imggeoserv from "../assets/images/geoweb_128.png";
import imgnorm from "../assets/images/normativa_128.png";
//import imgmetadatos from "../assets/images/metadatos_128.png";
import imgmanual from "../assets/images/manual.png";

const ide_elements = [
  {
    id: 1,
    name: "Geoportal",
    description:
      "Aqui se proporciona acceso a información geoespacial a través de mapas interactivos, capas de datos geográficos y herramientas de análisis.",
    image: imgmap,
    to: "/catalogodatos",
  },
  {
    id: 2,
    name: "Descargas",
    description:
      "Descargar en los diferentes formatos la información geoespacial",
    image: imgdw,
    to: "/descargas",
  },
  {
    id: 3,
    name: "Geoservicios",
    description:
      "Se reflejan cuales son los servicios web que utiliza esta IDE",
    image: imggeoserv,
    to: "/geoservicios",
  },
  {
    id: 4,
    name: "Normativa legal",
    description:
      "Documento con la normativa legal para el funcionamiento de la IDE",
    image: imgnorm,
    to: "/normativa",
  },
  // {
  //   id: 5,
  //   name: "Metadatos",
  //   description: "Metadatos de cada proyecto",
  //   image: imgmetadatos,
  //   to: "/metadatos",
  // },
  {
    id: 6,
    name: "Manual",
    description: "Manual de usuario para el uso de la IDE",
    image: imgmanual,
    to: "/manual",
  },
];
export default ide_elements;
