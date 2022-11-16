import { NavbarLink } from "./NavbarLink";
import logoImg from "../../images/logo.png";

export const Navbar = () => {
  return (
    <nav className="z-40 h-14 w-full bg-zinc-200 shadow-lg">
      <div className="flex h-full w-full items-center justify-between px-4">
        <div className="h-12">
          <img
            className="h-full w-full object-cover"
            src={logoImg}
            alt="Logo CIITT"
          />
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
