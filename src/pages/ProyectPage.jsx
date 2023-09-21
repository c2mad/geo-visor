import { Navbar } from "components/ui/Navbar";
import Footer from "components/ui/footer";
import Listado from "components/ui/listado";

const ProyectPage = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div id="lista_mapa" className="h-auto  bg-white dark:bg-gray-900">
          <Listado />
        </div>
        <section className="h-20"></section>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ProyectPage;
