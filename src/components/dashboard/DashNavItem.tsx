import { TPath } from "@/types";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion as m } from "framer-motion";

type TDashNavItemsProps = {
  path: TPath;
  to: string;
};

const DashNavItem = ({ path, to }: TDashNavItemsProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | undefined>("");
  return (
    <NavLink
      key={path.path}
      onMouseOver={() => setHoveredItem(path.name)}
      onMouseLeave={() => setHoveredItem("")}
      to={to}
      className={({ isActive }) =>
        `font-medium py-2 px-3 text-[15px] relative z-10 ${
          isActive ? "border-b-2 border-primary text-primary" : "text-muted"
        }`
      }
    >
      {path.name}
      {hoveredItem === path.name && (
        <m.div
          layoutId="tab-2"
          aria-hidden="true"
          transition={{
            stiffness: 130,
            duration: 0.3,
          }}
          className="bg-neutral-200/60 absolute inset-0 -z-20"
        ></m.div>
      )}
    </NavLink>
  );
};

export default DashNavItem;
