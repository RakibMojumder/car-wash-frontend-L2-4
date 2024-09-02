import { NavLink } from "react-router-dom";

type TNavMenuItem = {
  href: string;
  label: string;
};

const NavMenuItem = ({ href, label }: TNavMenuItem) => {
  return (
    <li className="font-medium">
      <NavLink
        to={href}
        className={({ isActive }) =>
          isActive ? "border-b-2 border-black" : ""
        }
      >
        {label}
      </NavLink>
    </li>
  );
};

export default NavMenuItem;
