import { useGetAllBookingsQuery } from "@/redux/features/booking/bookingApi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import BookingStatusActions from "@/components/dashboard/Admin/booking/BookingStatusAction";
import DashLoader from "@/components/loader/DashLoader";

type TCustomer = {
  firstName: string;
  lastName: string;
  profile?: string;
};

type TService = {
  name: string;
  price: number;
};

type TSlot = {
  startTime: string;
  endTime: string;
};

export type TBooking = {
  _id: string;
  bookingStatus: string;
  paymentStatus: string;
  date: string;
  transactionId: string;
  vehicleType: string;
  vehicleBrand: string;
  registrationPlate: string;
  customer: TCustomer;
  service: TService;
  slot: TSlot;
};

const Booking = () => {
  const { data, isLoading } = useGetAllBookingsQuery(null);

  if (isLoading) {
    return <DashLoader />;
  }

  return (
    <div className="pb-20">
      <Table>
        <TableCaption>A list of all bookings.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Profile</TableHead>
            <TableHead>User Name</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead>Service Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Slot</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((booking: TBooking) => (
            <TableRow key={booking._id}>
              <TableCell className="font-medium">
                <Avatar>
                  <AvatarImage
                    src={
                      booking.customer?.profile
                        ? booking.customer.profile
                        : "https://github.com/shadcn.png"
                    }
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>
                {booking.customer.firstName} {booking.customer.lastName}
              </TableCell>
              <TableCell>
                <span
                  className={`p-2 ${
                    booking.paymentStatus === "Paid" &&
                    "bg-green-100 text-green-500"
                  }`}
                >
                  {booking.paymentStatus}
                </span>
              </TableCell>
              <TableCell>{booking.service.name}</TableCell>
              <TableCell>{booking.date}</TableCell>
              <TableCell>
                {booking.slot.startTime}-{booking.slot.endTime}
              </TableCell>
              <TableCell className="text-right">
                $ {booking.service.price}
              </TableCell>
              <TableCell className="text-right">
                <div className="inline-flex items-center gap-x-3">
                  <Button size="sm" variant="outline" className="rounded-none">
                    Details
                  </Button>
                  <BookingStatusActions />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Booking;
