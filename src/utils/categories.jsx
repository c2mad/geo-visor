import imgturismo from "../assets/images/mapas-turismo.jpg";
import img_riesgos from "../assets/images//categories/riesgos.jpg";
import img_turisticos from "../assets/images//categories/turisticos.jpg";
import img_ambiente from "../assets/images//categories/ambiente.jpg";
import img_viabilidad from "../assets/images//categories/viabilidad.jpg";
import img_suelo from "../assets/images//categories/suelo.jpg";
const categories = [
  {
    id: 1,
    name: "Riesgos",
    description: "Consulta los datos espaciales relacionados con los riesgos",
    image: img_riesgos,
    to: "/proyects",
  },
  {
    id: 2,
    name: "Turísticos",
    description: "Turísticos",
    image: img_turisticos,
    to: "/proyects",
  },
  {
    id: 3,
    name: "Viabilidad",
    description: "Viabilidad",
    image: img_viabilidad,
    to: "/proyects",
  },
  {
    id: 4,
    name: "Medio Ambiente",
    description: "Medio Ambiente",
    image: img_ambiente,
    to: "/proyects",
  },
  {
    id: 5,
    name: "Suelo",
    description: "Suelo",
    image: img_suelo,
    to: "/proyects",
  },
  {
    id: 6,
    name: "Urbanismo",
    description: "Urbanismo",
    image: imgturismo,
    to: "/proyects",
  },
];
export default categories;
