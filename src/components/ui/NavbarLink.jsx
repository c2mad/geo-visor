import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const NavbarLink = ({ linkTitle, to, subLinks }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <li
      className="group relative"
      onMouseEnter={() => setIsSubMenuOpen(true)}
      onMouseLeave={() => setIsSubMenuOpen(false)}
    >
      <NavLink
        to={to}
        title={linkTitle}
        className={({ isActive }) =>
          "hover:bg-red-600 w-full rounded-md px-4 py-2 font-semibold text-white transition duration-300 ease-in-out" +
          (isActive ? " bg-red !text-white" : "")
        }
      >
        {linkTitle}
      </NavLink>
      {isSubMenuOpen && subLinks && (
        <ul className="left-0 mt-1 hidden w-full rounded-md shadow-lg group-hover:block">
          {subLinks.map((subLink, index) => (
            <li
              key={index}
              className="hover:bg-red-600 rounded-md px-4 py-2 hover:bg-red"
            >
              <NavLink
                to={subLink.to}
                className="hover:bg-red-600 block px-4 py-2 text-sm text-gray-200 transition duration-300 ease-in-out"
              >
                {subLink.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
