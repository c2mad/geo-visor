import { NavbarLink } from "./NavbarLink";
import logoImg from "../../images/logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="z-40 h-14 w-full bg-zinc-200 shadow-lg">
      <div className="flex h-full w-full items-center justify-between px-4">
        <div className="flex divide-x-2 divide-gray-300">
          <Link to="/" className="block h-12 pr-6">
            <img
              className="h-full w-full object-cover"
              src={logoImg}
              alt="Logo CIITT"
            />
          </Link>
          <div className="pl-6 font-medium uppercase text-slate-600">
            <a
              href="https://ciitt.ucacue.edu.ec/laboratorios/laboratorio-de-calculo-computacional-modelado-y-analitica-de-datos-c2mad/"
              className="block transition-colors hover:text-rose-500 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Cálculo computacional, modelado y analítica de datos
            </a>
            <a
              href="https://ciitt.ucacue.edu.ec/laboratorios/laboratorio-datachademics/"
              className="block transition-colors hover:text-rose-500 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              DatAchademics
            </a>
          </div>
        </div>
        <div>
          <ul className="flex space-x-4">
            <NavbarLink to="/" linkTitle="Inicio" />
            <NavbarLink to="/mapas/jose" linkTitle="Geo Visor" />
            {/* <NavbarLink to="/servicios" linkTitle="Servicios" />
            <NavbarLink to="/contacto" linkTitle="Contacto" /> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
