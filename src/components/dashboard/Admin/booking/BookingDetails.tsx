import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { TBooking } from "@/pages/admin/Booking";

type TBookingProps = {
  booking: TBooking;
};

const BookingDetails = ({ booking }: TBookingProps) => {
  return (
    <div>
      <Drawer direction="right">
        <DrawerTrigger>
          <Button size="sm" variant="outline" className="rounded-none">
            Details
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle></DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <img
            src={booking.service.image}
            alt="service image"
            className="w-full h-64 object-center"
          />
          <div className="mt-5 space-y-3">
            <h2 className="text-3xl font-medium">{booking.service.name}</h2>
            <p className="text-muted">{booking.service.description}</p>
          </div>
          <div className="mt-10">
            <h3 className="font-bold">Customer Details:</h3>
            <div className="space-y-1.5 mt-2">
              <div className="flex items-center gap-x-5">
                <h3 className="min-w-32 flex justify-between items-center font-medium">
                  Name <span>:</span>
                </h3>
                <h3 className="font-semibold">
                  {booking.customer.firstName} {booking.customer.lastName}
                </h3>
              </div>
              <div className="flex items-center gap-x-5">
                <h3 className="min-w-32 flex justify-between items-center font-medium">
                  Email <span>:</span>
                </h3>
                <h3 className="font-semibold">{booking.customer.email}</h3>
              </div>
              <div className="flex items-center gap-x-5">
                <h3 className="min-w-32 flex justify-between items-center font-medium">
                  Phone <span>:</span>
                </h3>
                <h3 className="font-semibold">{booking.customer.phone}</h3>
              </div>
              <div className="flex items-center gap-x-5">
                <h3 className="min-w-32 flex justify-between items-center font-medium">
                  Address <span>:</span>
                </h3>
                <h3 className="font-semibold">{booking.customer.address}</h3>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-bold">Booking Details:</h3>
            <div className="space-y-1.5 mt-2">
              <div className="flex items-center gap-x-5">
                <h3 className="min-w-32 flex justify-between items-center font-medium">
                  Booking Status<span>:</span>
                </h3>
                <h3 className="font-semibold">{booking.bookingStatus}</h3>
              </div>
              <div className="flex items-center gap-x-5">
                <h3 className="min-w-32 flex justify-between items-center font-medium">
                  Payment Status <span>:</span>
                </h3>
                <h3 className="font-semibold">{booking.paymentStatus}</h3>
              </div>
              <div className="flex items-center gap-x-5">
                <h3 className="min-w-32 flex justify-between items-center font-medium">
                  Date <span>:</span>
                </h3>
                <h3 className="font-semibold">{booking.date}</h3>
              </div>
              <div className="flex items-center gap-x-5">
                <h3 className="min-w-32 flex justify-between items-center font-medium">
                  Booking Date <span>:</span>
                </h3>
                <h3 className="font-semibold">
                  {booking.createdAt.split("T")[0]}
                </h3>
              </div>
              <div className="flex items-center gap-x-5">
                <h3 className="min-w-32 flex justify-between items-center font-medium">
                  Vehicle Type <span>:</span>
                </h3>
                <h3 className="font-semibold">{booking.vehicleType}</h3>
              </div>
              <div className="flex items-center gap-x-5">
                <h3 className="min-w-32 flex justify-between items-center font-medium">
                  Vehicle Brand <span>:</span>
                </h3>
                <h3 className="font-semibold">{booking.vehicleBrand}</h3>
              </div>
              <div className="flex items-center gap-x-5">
                <h3 className="min-w-32 flex justify-between items-center font-medium">
                  Registration <span>:</span>
                </h3>
                <h3 className="font-semibold">{booking.registrationPlate}</h3>
              </div>
              <div className="flex items-center gap-x-5">
                <h3 className="min-w-32 flex justify-between items-center font-medium">
                  Transaction ID <span>:</span>
                </h3>
                <h3 className="font-semibold">{booking.transactionId}</h3>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default BookingDetails;
