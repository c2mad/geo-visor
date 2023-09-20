import { NavLink } from "react-router-dom";

export const NavbarLink = ({ linkTitle, to }) => {
  return (
    <li>
      <NavLink
        to={to}
        title={linkTitle}
        className={({ isActive }) =>
          " w-full rounded-md px-4 py-2 font-semibold text-white hover:bg-red" +
          (isActive ? " bg-red !text-white hover:bg-red" : "")
        }
      >
        {linkTitle}
      </NavLink>
    </li>
  );
};
