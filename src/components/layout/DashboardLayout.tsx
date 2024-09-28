import { Outlet } from "react-router-dom";
import DashNavbar from "../dashboard/DashNavbar";

const DashboardLayout = () => {
  return (
    <div className="min-h-svh lg:flex justify-center items-center overflow-hidden">
      <div className="border w-full lg:w-[85%] h-svh lg:h-[580px] mx-auto overflow-hidden">
        <DashNavbar />
        <div className="p-5 pb-28 h-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
