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

type TBookingStatusActionsProps = {
  bookingStatus: string;
};

const BookingStatusActions = ({
  bookingStatus,
}: TBookingStatusActionsProps) => {
  const [position, setPosition] = useState(bookingStatus);
  const [updateBooking, { isLoading }] = useUpdateBookingStatusMutation();

  const onValueChange = async (value: string) => {
    try {
      setPosition(value);
      await updateBooking({ status: value });
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
            disabled={position === "Completed" || position === "Canceled"}
            value="Pending"
          >
            Pending
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="cursor-pointer"
            disabled={position === "Completed" || position === "Canceled"}
            value="Completed"
          >
            Completed
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="cursor-pointer"
            disabled={position === "Completed" || position === "Canceled"}
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
