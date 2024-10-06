import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGetUserRecentBookingsQuery } from "@/redux/features/booking/bookingApi";
import { TRecentBookingProps } from "@/types";

const UserRecentBookings = () => {
  const { isLoading, data } = useGetUserRecentBookingsQuery(null);

  if (isLoading) return;

  return (
    <div>
      <h2 className="font-semibold mb-7">Recent Bookings</h2>
      <div className="space-y-5">
        {data?.data?.map((booking: TRecentBookingProps) => (
          <div key={booking._id} className="flex justify-between items-start">
            <div className="flex items-center gap-x-5">
              <Avatar>
                <AvatarImage src={booking.service.image} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-sm font-semibold">
                  {booking.service.name}
                </h3>
                <h4 className="text-sm text-muted">
                  {booking.slot.startTime}-{booking.slot.endTime}
                </h4>
              </div>
            </div>
            <div className="flex space-x-10">
              <div className="text-sm text-muted">{booking.date}</div>
              <div className="font-semibold">${booking.service.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserRecentBookings;
