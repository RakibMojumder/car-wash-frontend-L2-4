import { useAppSelector } from "@/redux/hooks";
import Logo from "../Logo";
import NavMenu from "../NavMenu";
import { Button } from "../ui/button";
import Container from "../ui/Container";
import { NavLink } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import MobileNavItems from "../MobileNavItems";
import { motion as m } from "framer-motion";

const Navbar = () => {
  // const [scrollTop, setScrollTop] = useState(0);
  // const [isVisible, setIsVisible] = useState(true);
  // const [stickyNav, setStickyNav] = useState(false);
  const user = useAppSelector((state) => state.auth.user);
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollTop =
  //       window.scrollY || document.documentElement.scrollTop;

  //     if (currentScrollTop < 120) {
  //       setIsVisible(true);
  //     } else if (currentScrollTop > scrollTop + 470) {
  //       setStickyNav(true);
  //       setIsVisible(true);
  //     } else if (currentScrollTop < scrollTop) {
  //       setStickyNav(false);
  //       setIsVisible(false);
  //     }

  //     setScrollTop(currentScrollTop);
  //   };

  //   document.addEventListener("scroll", handleScroll);
  // }, [scrollTop]);

  return (
    <div
      // initial={scrollTop < 120 || { y: "-100%" }}
      // whileInView={{ y: 0 }}
      // exit={{ y: "-100%", transition: { duration: 0.5 } }}
      // transition={scrollTop < 120 ? { duration: 0 } : { duration: 0.5 }}
      className="h-[90px] bg-white shadow sticky top-0 z-50"
    >
      <div className="flex justify-between items-center h-full px-5 md:px-10">
        <NavLink to={"/"}>
          <Logo />
        </NavLink>
        <AnimatePresence key="mobile navbar">
          {showMobileNav && (
            <MobileNavbar>
              <MobileNavItems />
            </MobileNavbar>
          )}
        </AnimatePresence>
        <NavMenu />
        <div className="flex items-center space-x-5 lg:space-x-0">
          <Button className="bg-neutral-200/50 backdrop-blur-3xl hidden sm:block">
            {user?.email ? (
              <NavLink to={`/${user.role}/over-view`} className="text-sm">
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
    </div>
  );
};

export default Navbar;
