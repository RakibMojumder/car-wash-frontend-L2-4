import { Outlet } from "react-router-dom";
import DashNavbar from "../dashboard/DashNavbar";

const DashboardLayout = () => {
  return (
    <div className="p-8 max-h-svh overflow-hidden">
      <div className="border">
        <DashNavbar />
        <div className="p-5 min-h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
