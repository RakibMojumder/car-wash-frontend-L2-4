import { Outlet } from "react-router-dom";
import DashNavbar from "../dashboard/DashNavbar";

const DashboardLayout = () => {
  return (
    <div className="min-h-svh flex justify-center items-center overflow-hidden">
      <div className="border w-[85%] h-[580px] mx-auto overflow-hidden">
        <DashNavbar />
        <div className="p-5 h-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
