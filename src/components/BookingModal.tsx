import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { TService } from "./services/Service";
import DatePicker from "./ui/DatePicker";
import { FormEvent, useState } from "react";
import AvailableSlots from "./services/AvailableSlots";
import VehicleTypes from "./services/VehicleTypes";
import { toast } from "sonner";
import { useCreateBookingMutation } from "@/redux/features/booking/bookingApi";
import LoadingButton from "./LoadingButton";

const BookingModal = ({ service }: { service: TService }) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [slot, setSlot] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [brand, setBrand] = useState("");
  const [registrationPlate, setRegistrationPlate] = useState("");
  const [createBooking, { isLoading, isSuccess }] = useCreateBookingMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // if (!slot || !vehicleType || !brand || !registrationPlate) {
    //   return toast.error("All fields are required");
    // }

    const data = {
      service: service._id,
      slot,
      vehicleType: vehicleType.toLowerCase(),
      vehicleBrand: brand,
      registrationPlate,
      date: date?.toLocaleDateString(),
    };

    try {
      const res = await createBooking(data).unwrap();
      if (res.data.result) {
        window.location.href = res.data.payment_url;
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  if (isSuccess) {
    toast.success("Booking created successfully");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="py-6 px-14">Book now</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80%] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center">{service.name}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="gap-5 py-4 space-y-6">
          <DatePicker date={date} setDate={setDate} />
          <AvailableSlots
            setSlot={setSlot}
            date={date}
            serviceId={service._id}
          />
          <VehicleTypes setVehicleType={setVehicleType} />
          <div>
            <Input
              className="placeholder:text-primary/75"
              type="text"
              placeholder="Vehicle brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>

          <div>
            <Input
              className="placeholder:text-primary/75"
              type="text"
              placeholder="Registration plate"
              value={registrationPlate}
              onChange={(e) => setRegistrationPlate(e.target.value)}
            />
          </div>
          <LoadingButton isLoading={isLoading} label={"Book service"} />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
