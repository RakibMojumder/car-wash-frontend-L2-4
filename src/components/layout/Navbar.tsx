import { useAppSelector } from "@/redux/hooks";
import Logo from "../Logo";
import NavMenu from "../NavMenu";
import { Button } from "../ui/button";
import Container from "../ui/Container";
import { NavLink } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const token = useAppSelector((state) => state.auth.token);
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  return (
    <div className=" h-[90px] sticky top-0 z-50 bg-white shadow">
      <Container>
        <div className="flex justify-between items-center h-full md:px-5 lg:px-0">
          <NavLink to={"/"}>
            <Logo />
          </NavLink>
          <AnimatePresence>{showMobileNav && <MobileNavbar />}</AnimatePresence>
          <NavMenu />
          <div className="flex items-center gap-x-5">
            <Button className="bg-neutral-200/50 backdrop-blur-3xl hidden sm:block">
              {token ? (
                <NavLink to={"/admin"} className="text-sm">
                  Dashboard
                </NavLink>
              ) : (
                <NavLink to={"/auth/login"}>Login</NavLink>
              )}
            </Button>
            <div onClick={() => setShowMobileNav((prev) => !prev)}>
              {showMobileNav ? (
                <RxCross1 size={32} className="block lg:hidden" />
              ) : (
                <RxHamburgerMenu size={32} className="block lg:hidden" />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
