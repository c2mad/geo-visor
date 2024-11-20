import { NavLink } from "react-router-dom";

export const NavbarLink = ({ linkTitle, to }) => {
  return (
    <li>
      <NavLink
        to={to}
        title={linkTitle}
        className={({ isActive }) =>
          "flex w-full px-4 py-3 font-semibold text-white hover:bg-rose-700" +
          (isActive ? " bg-rose-600 !text-white hover:bg-rose-700" : "")
        }
      >
        {linkTitle}
      </NavLink>
    </li>
  );
};
