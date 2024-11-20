import img_jose from "assets/images/jose/portada.png";
import portada_cedia from "assets/images/cedia/portada.jpg";
const proyects = [
  {
    id: 1,
    title:
      "Implementación de un geovisor para la visualización de las propiedades geodinámicas y geomorfológicas del subsuelo: caso de estudio Cuenca, Azuay, Ecuador",
    imageUrl: img_jose,
    publication: "2023",
    description:
      "El crecimiento urbano y la falta de estudios de suelos adecuados antes de construir edificaciones generan vulnerabilidad estructural. Para abordar este problema, se propone la creación de una base de datos estandarizada que reúna información sísmica y geotécnica en un geovisor de fácil acceso. Esto mejorará la toma de decisiones en la construcción de infraestructuras en la región de Cuenca, Azuay, Ecuador, reduciendo riesgos y omisiones en proyectos civiles.",
    fuente: [
      { id: 1, name: "SIGDATA" },
      { id: 2, name: "C2MAD" },
    ],
    layeritem: "Leer más",
    category: 1,
    autores: [{ id: 2, name: "José Guaman" }],
    to: "/mapas/jose",
  },
  {
    id: 2,
    title:
      "Modelo de toma de decisión en grupo para la gestión del riesgo y planificación del territorio, a partir de la susceptibilidad por movimientos en masa generada mediante técnicas cuantitativas. Caso de estudio: Provincia del Azuay.",
    imageUrl: portada_cedia,
    publication: "2024",
    description:
      "A nivel mundial, los movimientos en masa (MM) son causantes de desastres naturales de gran trascendencia por las pérdidas humanas y económicas que dejan. Esto se debe a una vulnerabilidad socio-económica propia de países en vías de desarrollo y condiciones geológicas, geomorfológicas, hidrológicas, y climatológicas de cada zona.",
    fuente: [
      { id: 1, name: "SIGDATA" },
      { id: 3, name: "CEDIA" },
      { id: 4, name: "UCACUE" },
      { id: 5, name: "EPN" },
      { id: 6, name: "UCUENCA" },
    ],
    layeritem: "Leer más",
    category: 1,
    autores: [
      { id: 3, name: "Junior Wachapa" },
      { id: 4, name: "Sandra Cobos" },
      { id: 5, name: "Stalin Mantila" },
    ],
    to: "/mapas/cedia",
  },
  // { id: 2, name: "Dr. Setefano Torrachi" },
  //     { id: 3, name: "Erika Trujillo" },
  //     { id: 4, name: "Bryam Sebastian Carmona" },
  //   ],
  //   to: "/mapas/jose",
  // },
  // {
  //   id: 10,
  //   title: "Suelo",
  //   imageUrl: imgjoseproject,
  //   publication: "12 de Agosto de 2023",
  //   description:
  //     "It is difficult to believe that we have become so used to having instant access to information at",
  //   fuente: [{ id: 1, name: "SIGDATA" }],
  //   layeritem: "Leer más",
  //   category: 1,
  //   autores: [
  //     { id: 1, name: "Dra. Sandra Cobos" },
  //     { id: 2, name: "Dr. Setefano Torrachi" },
  //     { id: 3, name: "Erika Trujillo" },
  //     { id: 4, name: "Bryam Sebastian Carmona" },
  //   ],
  //   to: "/mapas/jose",
  // },
  // {
  //   id: 11,
  //   title: "Turístico",
  //   imageUrl: imgjoseproject,
  //   publication: "12 de Agosto de 2023",
  //   description:
  //     "It is difficult to believe that we have become so used to having instant access to information at",
  //   fuente: [{ id: 1, name: "SIGDATA" }],
  //   layeritem: "Leer más",
  //   category: 6,
  //   autores: [{ id: 1, name: "Dr. Setefano Torrachi" }],
  //   to: "/mapas/jose",
  // },
  // {
  //   id: 12,
  //   title: "Infraestructura",
  //   imageUrl: imgjoseproject,
  //   publication: "12 de Agosto de 2023",
  //   description:
  //     "It is difficult to believe that we have become so used to having instant access to information at",
  //   fuente: [{ id: 1, name: "SIGDATA" }],
  //   layeritem: "Leer más",
  //   category: 3,
  //   autores: [{ id: 1, name: "Dra. Sandra Cobos" }],
  //   to: "/mapas/jose",
  // },
];
export default proyects;
