import imgmap from "../assets/images/map_128.png";
import imgdw from "../assets/images/download_128.png";
import imggeoserv from "../assets/images/geoweb_128.png";
import imgnorm from "../assets/images/normativa_128.png";
import imgmetadatos from "../assets/images/metadatos_128.png";
import imgotros from "../assets/images/otros.png";
const ide_elements = [
  {
    id: 1,
    name: "Geoportal",
    description: "Consulta los datos espaciales relacionados con los riesgos",
    image: imgmap,
    to: "/geoportal",
  },
  {
    id: 2,
    name: "Descargas",
    description:
      "Descarga en diferentes formatos de las información geoespacial",
    image: imgdw,
    to: "/proyects",
  },
  {
    id: 3,
    name: "Geoservicios",
    description: "Los servicios web que se utiliza en esta IDE",
    image: imggeoserv,
    to: "/proyects",
  },
  {
    id: 4,
    name: "Normativa legal",
    description: "Documentos legales para funcionamiento de la IDE",
    image: imgnorm,
    to: "/normativa",
  },
  {
    id: 5,
    name: "Metadatos",
    description: "Metadatos de cada proyecto",
    image: imgmetadatos,
    to: "/proyects",
  },
  {
    id: 6,
    name: "Otros",
    description: "Proyectos",
    image: imgotros,
    to: "/proyects",
  },
];
export default ide_elements;
