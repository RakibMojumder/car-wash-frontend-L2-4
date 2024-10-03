import ActiveNow from "@/components/dashboard/Admin/overview/ActiveNow";
import BarCharts from "@/components/dashboard/Admin/overview/BarCharts";
import RecentBooking from "@/components/dashboard/Admin/overview/RecentBooking";
import TotalBooking from "@/components/dashboard/Admin/overview/TotalBooking";
import TotalRevenue from "@/components/dashboard/Admin/overview/TotalRevenue";
import TotalUser from "@/components/dashboard/Admin/overview/TotalUser";

const chartData = [
  { month: "January", bookings: 186 },
  { month: "February", bookings: 305 },
  { month: "March", bookings: 237 },
  { month: "April", bookings: 173 },
  { month: "May", bookings: 209 },
  { month: "June", bookings: 214 },
  { month: "July", bookings: 180 },
  { month: "August", bookings: 240 },
];

const AdminOverview = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <TotalRevenue />
        <TotalUser />
        <TotalBooking />
        <ActiveNow />
      </div>
      <div className="pb-20 grid grid-cols-12 gap-6 my-6">
        <div className="col-span-12 md:col-span-6 lg:col-span-7 border pr-3 py-5">
          <h3 className="font-semibold pl-5 pb-7">Booking overview</h3>
          <BarCharts data={chartData} />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-5 border p-5">
          <RecentBooking />
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
