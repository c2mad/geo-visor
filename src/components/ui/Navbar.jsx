import { NavbarLink } from "./NavbarLink";
import logoImg from "../../images/ucacue-logo.png";
import { Link } from "react-router-dom";
import App from "App";

export const Navbar = () => {
  return (
    <nav className=" bg-#545353 z-40 h-14 w-full bg-neutral-800">
      <div className="flex h-full w-full items-center justify-between px-4">
        <div className="flex divide-x-2 divide-gray-300">
          <Link to="/" className="block h-12 pr-6">
            <img
              className="h-full w-full object-cover"
              src={logoImg}
              alt="Logo CIITT"
              onClick={App}
            />
          </Link>
        </div>
        <div>
          <ul className="flex space-x-4">
            <NavbarLink to="/" linkTitle="Inicio">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </NavbarLink>
            <NavbarLink to="/servicios" linkTitle="Servicios">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </NavbarLink>
            <NavbarLink to="/contacto" linkTitle="Contacto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </NavbarLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};
