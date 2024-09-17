import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { adminPaths } from "@/routes/admin.route";
import { userPaths } from "@/routes/user.route";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import DashNavItems from "./DashNavItems";
import logo from "@/assets/images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "@/redux/features/auth/authSlice";

const DashNavbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);
  const isAdmin = user?.role === "admin";

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/login");
  };

  return (
    <div className="border-b px-5 py-3 flex justify-between items-center">
      <NavLink to={"/"}>
        <img src={logo} alt="" className="w-[70px]" />
      </NavLink>

      <div>
        <DashNavItems
          paths={isAdmin ? adminPaths : userPaths}
          role={isAdmin ? "admin" : "user"}
        />
      </div>
      <div className="flex items-center gap-x-5">
        <Input
          placeholder="Search Here..."
          className="w-64 border border-primary/25 placeholder:text-muted placeholder:text-sm"
        />
        <Button onClick={handleLogout} size={"lg"} className="h-9 px-5">
          Logout
        </Button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default DashNavbar;
