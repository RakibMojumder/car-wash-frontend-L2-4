import Logo from "../Logo";
import NavMenu from "../NavMenu";
import { Button } from "../ui/button";
import Container from "../ui/Container";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" h-[90px] sticky top-0 z-50 bg-white shadow">
      <Container>
        <div className="flex justify-between items-center h-full">
          <NavLink to={"/"}>
            <Logo />
          </NavLink>
          <NavMenu />
          <Button className="bg-neutral-200/50 backdrop-blur-3xl">
            <NavLink to={"/login"}>Login</NavLink>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
