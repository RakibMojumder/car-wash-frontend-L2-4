import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion as m } from "framer-motion";

type TNavMenuItem = {
  href: string;
  label: string;
};

const NavMenuItem = ({ href, label }: TNavMenuItem) => {
  const [hoveredItem, setHoveredItem] = useState<string | undefined>();

  return (
    <li>
      <NavLink
        to={href}
        data-active={hoveredItem == label}
        onMouseOver={() => setHoveredItem(label)}
        onMouseOut={() => setHoveredItem("")}
        className="font-medium h-full w-full px-3.5 py-[30px] relative z-10"
      >
        {label}

        {hoveredItem === label && (
          <m.div
            className="absolute top-0 left-0 h-full w-full bg-neutral-100 -z-20 overflow-hidden"
            layoutId="tab-2"
            aria-hidden="true"
            transition={{
              stiffness: 130,
              duration: 0.3,
            }}
          >
            <div className="h-full w-full flex items-end">
              <div className="h-1 w-full bg-primary"></div>
            </div>
          </m.div>
        )}
      </NavLink>
    </li>
  );
};

export default NavMenuItem;
