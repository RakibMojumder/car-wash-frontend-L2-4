import BarCharts from "@/components/dashboard/Admin/overview/BarCharts";
import CountDown from "@/components/dashboard/User/CountDown";
import ActiveBookings from "@/components/dashboard/User/overview/ActiveBookings";
import CompletedBookings from "@/components/dashboard/User/overview/CompletedBookings";
import TotalBookings from "@/components/dashboard/User/overview/TotalBookings";
import UserRecentBookings from "@/components/dashboard/User/UserRecentBookings";
import DashLoader from "@/components/loader/DashLoader";
import { TSlot } from "@/components/services/AvailableSlots";
import { TService } from "@/components/services/Service";
import { useGetMyBookingsQuery } from "@/redux/features/booking/bookingApi";
import isCountDownNeedToStart from "@/utils/isCountDownNeedToStart";

const chartData = [
  { month: "January", bookings: 6 },
  { month: "February", bookings: 5 },
  { month: "March", bookings: 3 },
  { month: "April", bookings: 7 },
  { month: "May", bookings: 2 },
  { month: "June", bookings: 4 },
  { month: "July", bookings: 8 },
  { month: "August", bookings: 4 },
];

type TBooking = {
  _id: string;
  date: string;
  bookingStatus: string;
  paymentStatus: string;
  vehicleBrand: string;
  service: TService;
  slot: TSlot;
};

const UserOverview = () => {
  const { isLoading, data } = useGetMyBookingsQuery(null);

  if (isLoading) return <DashLoader />;

  const filteredBookings = data?.data?.filter((booking: TBooking) => {
    return isCountDownNeedToStart(booking.date, booking.slot.startTime);
  });

  return (
    <div>
      <div>
        {filteredBookings?.slice(0, 1).map((booking: TBooking) => (
          <div key={booking._id}>
            <CountDown date={booking.date} time={booking.slot.startTime} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        <TotalBookings />
        <CompletedBookings />
        <ActiveBookings />
      </div>
      <div className="pb-20 grid grid-cols-12 gap-6 my-6">
        <div className="col-span-12 md:col-span-6 lg:col-span-7 border pr-3 py-5">
          <h3 className="font-semibold pl-5 pb-7">Booking overview</h3>
          <BarCharts data={chartData} />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-5 border p-5">
          <UserRecentBookings />
        </div>
      </div>
    </div>
  );
};

export default UserOverview;
