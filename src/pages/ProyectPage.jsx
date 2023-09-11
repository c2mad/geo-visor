import { Navbar } from "components/ui/Navbar";
import Footer from "components/ui/footer";
import Listado from "components/ui/listado";

const ProyectPage = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div id="tittle" className="text-center font-sans text-2xl">
        <h1>Listado de proyectos en Mapas de riesgos</h1>
      </div>
      <div id="lista_mapa">
        <Listado />
      </div>
      <section className="h-20"></section>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default ProyectPage;
