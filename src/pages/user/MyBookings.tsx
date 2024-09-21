import DashLoader from "@/components/loader/DashLoader";
import { useGetMyBookingsQuery } from "@/redux/features/booking/bookingApi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TService } from "@/components/services/Service";
import { TSlot } from "@/components/services/AvailableSlots";


type TBooking = {
  _id: string;
  date: string;
  bookingStatus: string;
  paymentStatus: string;
  vehicleBrand: string;
  service: TService;
  slot: TSlot;
};

const MyBookings = () => {
  const { isLoading, data } = useGetMyBookingsQuery(null);

  if (isLoading) return <DashLoader />;

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">S.N.</TableHead>
            <TableHead>Service Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Slot</TableHead>
            <TableHead>Booking Status</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead>Vehicle Brand</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((booking: TBooking, indx: number) => (
            <TableRow key={booking._id}>
              <TableCell className="font-medium">{indx + 1}</TableCell>
              <TableCell>{booking.service.name}</TableCell>

              <TableCell>{booking.date}</TableCell>
              <TableCell>
                {booking.slot.startTime} - {booking.slot.endTime}
              </TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    booking.bookingStatus === "Completed"
                      ? "bg-green-100 text-green-500"
                      : booking.bookingStatus === "Canceled"
                      ? "bg-red-100 text-red-500"
                      : "bg-blue-100 text-blue-500"
                  }`}
                >
                  {booking.bookingStatus}
                </span>
              </TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    booking.paymentStatus === "Paid"
                      ? "bg-green-100 text-green-500"
                      : booking.paymentStatus === "Failed"
                      ? "bg-red-100 text-red-500"
                      : "bg-blue-100 text-blue-500"
                  }`}
                >
                  {booking.paymentStatus}
                </span>
              </TableCell>
              <TableCell>{booking.vehicleBrand}</TableCell>
              <TableCell className="text-right font-semibold">
                $ {booking.service.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MyBookings;
