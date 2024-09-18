import CountDown from "@/components/dashboard/User/CountDown";
import DashLoader from "@/components/loader/DashLoader";
import { TSlot } from "@/components/services/AvailableSlots";
import { TService } from "@/components/services/Service";
import { useGetMyBookingsQuery } from "@/redux/features/booking/bookingApi";
import isCountDownNeedToStart from "@/utils/isCountDownNeedToStart";
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
      {filteredBookings?.slice(0, 1).map((booking: TBooking) => (
        <div key={booking._id}>
          <CountDown date={booking.date} time={booking.slot.startTime} />
        </div>
      ))}
    </div>
  );
};

export default UserOverview;
