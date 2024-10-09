import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

import { HiOutlineDotsVertical } from "react-icons/hi";
import { useState } from "react";
import { useUpdateBookingStatusMutation } from "@/redux/features/booking/bookingApi";
import { toast } from "sonner";

type TBookingStatusActionsProps = {
  bookingStatus: string;
  bookingId: string;
};

const BookingStatusActions = ({
  bookingStatus,
  bookingId,
}: TBookingStatusActionsProps) => {
  const [position, setPosition] = useState(bookingStatus);
  const [updateBooking] = useUpdateBookingStatusMutation();
  const isDisabled = position === "Completed" || position === "Canceled";

  const onValueChange = async (value: string) => {
    try {
      setPosition(value);
      const res = await updateBooking({
        id: bookingId,
        status: value,
      }).unwrap();

      if (res?.success) {
        toast.success(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-8">
          <HiOutlineDotsVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Booking Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={onValueChange}>
          <DropdownMenuRadioItem
            className="cursor-pointer"
            disabled={isDisabled}
            value="Pending"
          >
            Pending
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="cursor-pointer"
            disabled={isDisabled}
            value="Completed"
          >
            Completed
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="cursor-pointer"
            disabled={isDisabled}
            value="Canceled"
          >
            Canceled
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BookingStatusActions;
