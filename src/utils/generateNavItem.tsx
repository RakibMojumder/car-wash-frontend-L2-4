import { TPaths } from "@/types";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

const generateNavItems = (paths: TPaths[], role: string): ReactNode => {
  const filteredPath = paths.filter((path) => path.name);

  return filteredPath.map((path) => (
    <NavLink
      key={path.path}
      to={`/${role}/${path.path}`}
      className={({ isActive }) =>
        `font-medium ${isActive ? "border-b-2 border-primary" : ""}`
      }
    >
      {path.name}
    </NavLink>
  ));
};

export default generateNavItems;
