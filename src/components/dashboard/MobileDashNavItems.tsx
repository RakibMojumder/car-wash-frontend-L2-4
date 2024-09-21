import { useGetLoginUserQuery } from "@/redux/features/user/userApi";
import DashNavItems from "./DashNavItems";
import { adminPaths } from "@/routes/admin.route";
import { userPaths } from "@/routes/user.route";
import DashLoader from "../loader/DashLoader";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const MobileDashNavItems = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading } = useGetLoginUserQuery(null);
  const isAdmin = data?.data?.role === "admin";

  if (isLoading) return <DashLoader />;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/login");
  };

  return (
    <div className="flex flex-col space-y-3 h-full">
      <DashNavItems
        paths={isAdmin ? adminPaths : userPaths}
        role={isAdmin ? "admin" : "user"}
      />
      <Button onClick={handleLogout} size={"lg"} className="h-9 px-5 sm:hidden">
        Logout
      </Button>
    </div>
  );
};

export default MobileDashNavItems;
