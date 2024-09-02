import { NavLink } from "react-router-dom";
import NavMenuItem from "./NavMenuItem";
import { Button } from "./ui/button";

const NavMenu = () => {
  return (
    <div>
      <ul className="flex items-center gap-x-7">
        <NavMenuItem href="/" label="Home" />
        <NavMenuItem href="/services" label="Services" />
        <Button>
          <NavLink to={"/login"}>Login</NavLink>
        </Button>
        {/* <NavMenuItem href="/login" label="Login" /> */}
      </ul>
    </div>
  );
};

export default NavMenu;
