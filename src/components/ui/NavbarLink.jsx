import { NavLink } from "react-router-dom";

export const NavbarLink = ({ linkTitle, to }) => {
  return (
    <li>
      <NavLink
        to={to}
        title={linkTitle}
        className={({ isActive }) =>
          "rounded-md py-2 px-4 font-semibold text-slate-700 hover:bg-gray-300" +
          (isActive ? " bg-rose-600 !text-white hover:bg-rose-600" : "")
        }
      >
        {linkTitle}
      </NavLink>
    </li>
  );
};