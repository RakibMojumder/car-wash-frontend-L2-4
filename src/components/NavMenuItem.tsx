import { useState } from "react";
<<<<<<< HEAD
import { NavLink, useLocation } from "react-router-dom";
=======
import { NavLink } from "react-router-dom";
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
import { motion as m } from "framer-motion";

type TNavMenuItem = {
  href: string;
  label: string;
};

const NavMenuItem = ({ href, label }: TNavMenuItem) => {
<<<<<<< HEAD
  const { pathname } = useLocation();
=======
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
  const [hoveredItem, setHoveredItem] = useState<string | undefined>();

  return (
    <li className="h-full">
      <NavLink
        to={href}
        data-active={hoveredItem == label}
        onMouseOver={() => setHoveredItem(label)}
        onMouseOut={() => setHoveredItem("")}
        className="inline-flex h-full w-full px-3.5 justify-center items-center text-[13px] font-semibold leading-0 uppercase relative z-10"
      >
        <span>{label}</span>

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
            <div className="h-full w-full flex items-start">
              <div className="h-[5px] w-full bg-primary"></div>
            </div>
          </m.div>
        )}
<<<<<<< HEAD

        {pathname === href && (
          <div className="absolute inset-0 flex items-start">
            <div className="h-[5px] w-full bg-primary"></div>
          </div>
        )}
=======
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
      </NavLink>
    </li>
  );
};

export default NavMenuItem;