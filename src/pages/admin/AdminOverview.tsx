import ActiveNow from "@/components/dashboard/Admin/overview/ActiveNow";
import TotalBooking from "@/components/dashboard/Admin/overview/TotalBooking";
import TotalRevenue from "@/components/dashboard/Admin/overview/TotalRevenue";
import TotalUser from "@/components/dashboard/Admin/overview/TotalUser";

const AdminOverview = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-6">
        <TotalRevenue />
        <TotalUser />
        <TotalBooking />
        <ActiveNow />
      </div>
    </div>
  );
};

export default AdminOverview;
