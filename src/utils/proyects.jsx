import img_jose from "assets/images/jose/portada.png";
import portada_cedia from "assets/images/cedia/portada.jpg";
import { v4 as uuidv4 } from "uuid";
const proyects = [
  {
    id: uuidv4(),
    title:
      "Implementación de un geovisor para la visualización de las propiedades geodinámicas y geomorfológicas del subsuelo: caso de estudio Cuenca, Azuay, Ecuador",
    imageUrl: img_jose,
    publication: "2023",
    description:
      "El crecimiento urbano y la falta de estudios de suelos adecuados antes de construir edificaciones generan vulnerabilidad estructural. Para abordar este problema, se propone la creación de una base de datos estandarizada que reúna información sísmica y geotécnica en un geovisor de fácil acceso. Esto mejorará la toma de decisiones en la construcción de infraestructuras en la región de Cuenca, Azuay, Ecuador, reduciendo riesgos y omisiones en proyectos civiles.",
    fuente: [
      { id: uuidv4(), name: "SIGDATA" },
      { id: uuidv4(), name: "C2MAD" },
    ],
    layeritem: "Leer más",
    category: 1,
    autores: [{ id: uuidv4(), name: "José Guaman" }],
    to: "/geoportal/riesgos/propiedades-geo",
    services: [
      {
        id: uuidv4(),
        name: "WMS",
        url:
          process.env.REACT_APP_HOST_API +
          "/geoserver/jose/ows?service=WMS&request=GetCapabilities",
      },
      {
        id: uuidv4(),
        name: "WFS",
        url:
          process.env.REACT_APP_HOST_API +
          "/geoserver/jose/ows?service=WFS&request=GetCapabilities",
      },
      {
        id: uuidv4(),
        name: "WCS",
        url:
          process.env.REACT_APP_HOST_API +
          "/geoserver/jose/ows?service=WCS&request=GetCapabilities",
      },
    ],
  },
  {
    id: uuidv4(),
    title:
      "Modelo de toma de decisión en grupo para la gestión del riesgo y planificación del territorio, a partir de la susceptibilidad por movimientos en masa generada mediante técnicas cuantitativas. Caso de estudio: Provincia del Azuay.",
    imageUrl: portada_cedia,
    publication: "2024",
    description:
      "A nivel mundial, los movimientos en masa (MM) son causantes de desastres naturales de gran trascendencia por las pérdidas humanas y económicas que dejan. Esto se debe a una vulnerabilidad socio-económica propia de países en vías de desarrollo y condiciones geológicas, geomorfológicas, hidrológicas, y climatológicas de cada zona.",
    fuente: [
      { id: uuidv4(), name: "SIGDATA" },
      { id: uuidv4(), name: "CEDIA" },
      { id: uuidv4(), name: "UCACUE" },
      { id: uuidv4(), name: "EPN" },
      { id: uuidv4(), name: "UCUENCA" },
    ],
    layeritem: "Leer más",
    category: 1,
    autores: [
      { id: uuidv4(), name: "Sandra Lucía Cobos Mora" },
      { id: uuidv4(), name: "Ximena Bernarda Rojas Lema" },
      { id: uuidv4(), name: "Eliana Fernanda Jiménez Álvaro" },
      { id: uuidv4(), name: "Julio Danilo Mejía Coronel" },
      { id: uuidv4(), name: "Jorge Andrés Robalino López" },
      { id: uuidv4(), name: "Juan Fernando Cisneros Ramos" },
      { id: uuidv4(), name: "Gina Maricela Faicán Cabrera" },
      { id: uuidv4(), name: "Junior Leonardo Wachapa Yankur" },
      { id: uuidv4(), name: "Stalin Paul Mantilla Suin" },
    ],
    services: [
      {
        id: uuidv4(),
        name: "WMS",
        url:
          process.env.REACT_APP_HOST_API +
          "/geoserver/cedia/ows?service=WMS&request=GetCapabilities",
      },
      {
        id: uuidv4(),
        name: "WFS",
        url:
          process.env.REACT_APP_HOST_API +
          "/geoserver/cedia/ows?service=WFS&request=GetCapabilities",
      },
      {
        id: uuidv4(),
        name: "WCS",
        url:
          process.env.REACT_APP_HOST_API +
          "/geoserver/cedia/ows?service=WCS&request=GetCapabilities",
      },
    ],
    to: "/geoportal/riesgos/susceptibilidad-mm",
  },
];
console.log(proyects);
export default proyects;
