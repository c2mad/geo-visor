import { NavbarLink } from "./NavbarLink";
import logoIDE from "../../assets/images/logo-ucacue-ide.png";
import logogeoportal from "../../assets/images/logo-ucacue-geoportal.png";
import { Link } from "react-router-dom";
import App from "App";
import React, { useState } from "react";

export const Navbar = ({ isGeoportal = false }) => {
  const [open, setOpen] = useState(false);
  const [serviciosMenuOpen, setServiciosMenuOpen] = useState(false);

  return (
    <>
      <nav className="relative z-40 h-14 w-full bg-black">
        <div className="flex h-full w-full items-center justify-between px-4">
          <div>
            <ul className="flex space-x-4"></ul>
          </div>
        </div>
        <div className="fixed left-0 right-0 top-0 bg-black py-3 shadow-md">
          <div className="flex justify-between">
            <div>
              <div className="divide-x-3 divide-gray-300 px-10">
                <Link to={isGeoportal ? "/geoportal" : "/"}>
                  <img
                    className="h-10 object-cover"
                    src={isGeoportal ? logogeoportal : logoIDE}
                    alt={
                      isGeoportal
                        ? "Logo IDE - UCACUE"
                        : "Logo Geoportal - UCACUE"
                    }
                    onClick={App}
                  />
                </Link>
              </div>
            </div>
            <button
              className="ml-2 bg-current px-10"
              onClick={() => setOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" // Cambia "currentColor" al color que desees, por ejemplo, "red"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="h-8 w-6"
              >
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          <div
            className={`${
              !open && "hidden"
            } fixed left-0 right-0 top-0 min-h-screen w-auto bg-gray-600/50 backdrop-blur-sm`}
            onClick={() => setOpen(false)}
          ></div>

          <div
            className={`${
              open ? "w-80" : "w-0"
            } fixed left-0 top-0 min-h-screen w-auto bg-black transition-all duration-300`}
          >
            <div className={`${!open && "hidden"} pt-3`}>
              <button
                className="mb-14 ml-4 text-white"
                onClick={() => setOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <ul title="Menú" className="w-60">
                <div
                  className="mb-2 cursor-pointer py-3 text-center text-xl text-white hover:bg-red"
                  onClick={() => setOpen(false)}
                >
                  <NavbarLink
                    to="/"
                    linkTitle={isGeoportal ? "IDE" : "Inicio"}
                  ></NavbarLink>
                </div>
                {!isGeoportal ? (
                  <div
                    className="mb-2 cursor-pointer py-3 text-center text-xl text-white hover:bg-red"
                    onClick={() => setOpen(false)}
                  >
                    <NavbarLink
                      to="/geoportal"
                      linkTitle="Geoportal"
                    ></NavbarLink>
                  </div>
                ) : (
                  <></>
                )}

                <div className="relative">
                  <div
                    className="mb-2 cursor-pointer py-3 text-center text-xl text-white hover:bg-red"
                    onClick={() => setOpen(false)}
                  >
                    <ul>
                      <li>
                        <NavbarLink
                          to="/geoportal"
                          linkTitle="Geoportal"
                        ></NavbarLink>
                      </li>
                      <li>1</li>
                    </ul>
                  </div>
                  {/* Agregar el menú que se despliega hacia la derecha aquí */}
                  <div className="absolute right-0 top-0 mt-12 hidden w-48 bg-white shadow-lg">
                    <ul className="py-2">
                      <li>
                        <NavbarLink to="/opcion1" linkTitle="Opción 1" />
                      </li>
                      <li>
                        <NavbarLink to="/opcion2" linkTitle="Opción 2" />
                      </li>
                      {/* Agregar más opciones de menú según sea necesario */}
                    </ul>
                  </div>
                </div>

                <div
                  className="mb-2 cursor-pointer py-3 text-center text-xl text-white hover:bg-red"
                  onClick={() => setOpen(false)}
                >
                  <NavbarLink to="/contacto" linkTitle="Contacto"></NavbarLink>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
