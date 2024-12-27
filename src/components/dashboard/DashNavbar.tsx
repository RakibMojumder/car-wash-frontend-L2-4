import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { adminPaths } from "@/routes/admin.route";
import { userPaths } from "@/routes/user.route";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import DashNavItems from "./DashNavItems";
import logo from "@/assets/images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "@/redux/features/auth/authSlice";
import { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { AnimatePresence } from "framer-motion";
import MobileNavbar from "../layout/MobileNavbar";
import MobileDashNavItems from "./MobileDashNavItems";

const DashNavbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showDashNav, setShowDashNav] = useState(false);
  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/login");
  };

  return (
    <div className="border-b px-5 py-3 flex justify-between items-center relative">
      <NavLink to={"/"}>
        <img src={logo} alt="" className="w-[70px]" />
      </NavLink>

      <div className="hidden lg:block">
        <DashNavItems
          paths={user?.role === "admin" ? adminPaths : userPaths}
          role={user?.role === "admin" ? "admin" : "user"}
        />
      </div>
      <div className="flex items-center gap-x-5">
        <Button
          onClick={handleLogout}
          size={"lg"}
          className="h-9 px-5 hidden sm:block"
        >
          Logout
        </Button>
        <Avatar>
          <AvatarImage src={user?.profile} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div onClick={() => setShowDashNav((prev) => !prev)}>
          {showDashNav ? (
            <RxCross1 size={32} className="block lg:hidden" />
          ) : (
            <RxHamburgerMenu size={32} className="block lg:hidden" />
          )}
        </div>
      </div>

      <AnimatePresence>
        {showDashNav && (
          <MobileNavbar>
            <MobileDashNavItems />
          </MobileNavbar>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DashNavbar;
