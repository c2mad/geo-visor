import img_jose from "assets/images/jose/banner.png";
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
    imageUrl: img_jose,
    publication: "2024",
    description:
      "A nivel mundial, los movimientos en masa (MM) son causantes de desastres naturales de gran trascendencia por las pérdidas humanas y económicas que dejan. Esto se debe a una vulnerabilidad socio-económica propia de países en vías de desarrollo y condiciones geológicas, geomorfológicas, hidrológicas, y climatológicas de cada zona. Por ello, para hablar de ciudades inclusivas, seguras, resilientes y sostenibles, es imperante contar con sistemas de gestión que reduzcan los riesgos en base a procesos efectivos de planificación territorial. Sin embargo, las acciones inherentes a la gestión del riesgo por MM se ven limitados por la complejidad de los procesos de decisión; debido a la multidimensionalidad de los elementos involucrados, multiplicidad de objetivos, criterios a considerar, dificultad de identificar alternativas, incertidumbre y sus diferentes orígenes, entre otros aspectos. Así como también, de una falta de comprensión integral del fenómeno en todas sus escalas y dimensiones. Por lo expuesto, esta propuesta de investigación propone la construcción de un modelo de toma de decisión multicriterio en grupo (TDMCG) a partir de la susceptibilidad a MM (MSMM). El MSMM permite dar el primer paso para comprender el fenómeno mediante el análisis, modelización, clasificación y representación cartográfica de las áreas propensas a la ocurrencia de MM y de sus factores condicionantes. Así como también, se constituye en un instrumento de toma de decisión per-se. Este modelo se desarrollará a través de técnicas cuantitativas de Machine Learning que permitirá eliminar la subjetividad propia de modelos cualitativos basados en la opinión de expertos y utilizados aún para la planificación territorial en el Ecuador. El modelo de TDMCG, por su lado,se basará en técnicas Fuzzy-TOPSIS, así como en Políticas de Ciencia, Tecnología e Innovación (PCTI) que permita enfocar los esfuerzos en las fases de prevención, monitoreo y mitigación de riesgos por MM. El inventario histórico de movimientos en masa (IMM) se constituye en un instrumento fundamental para esta investigación. Este será caracterizado en términos morfológicos, geológicos, ambientales, sociales, climatológicos, entre otros, a través de técnicas in-situ, teledetección pasiva (interferometría Radar) y activa (análisis de ortofotos). Esta caracterización, más los resultados encontrados por el equipo, en investigaciones previas, permitirán la selección de los factores condicionantes más idóneos para la construcción de MSMM. El IMM y los MSMM suministrarán de los criterios técnicos, ambientales y sociales para el modelo TDMCG. Los resultados del proyecto y la información generada, serán difundidos a través de un geoportal, como herramienta tecnológica que integra servicios basados en Sistemas de Información Geográfica y que representa una fuente de información y conocimiento que facilita los procesos de toma de decisión en la gestión de riesgos por MM y planificación territorial. Esta investigación utilizará como zona de estudio a la provincia del Azuay, ubicada en la Sierra austral del Ecuador, atravesada por la cordillera de los Andes y altamente susceptible a MM.",
    fuente: [
      { id: 1, name: "SIGDATA" },
      { id: 2, name: "CEDIA" },
      { id: 2, name: "UCACUE" },
      { id: 2, name: "EPN" },
      { id: 2, name: "UCUENCA" },
    ],
    layeritem: "Leer más",
    category: 1,
    autores: [
      { id: 2, name: "Junior Wachapa" },
      { id: 3, name: "Sandra Cobos" },
      { id: 3, name: "Stalin Mantila" },
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
