import { useGetAvailableSlotsQuery } from "@/redux/features/slot/slotApi";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch } from "react";

export type TSlot = {
  _id: string;
  startTime: string;
  endTime: string;
};

type TAvailableSlotsType = {
  date: Date | undefined;
  serviceId: string;
  setSlot: Dispatch<React.SetStateAction<string>>;
};

const AvailableSlots = ({ date, serviceId, setSlot }: TAvailableSlotsType) => {
  const { isLoading, data } = useGetAvailableSlotsQuery(
    {
      date: date?.toLocaleDateString(),
      serviceId,
    },
    { refetchOnMountOrArgChange: true }
  );

  if (isLoading) return;
  return (
    <Select onValueChange={(value) => setSlot(value)}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a slot" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>
            {data.data.length > 0 ? "Available slot" : "No slot is available"}
          </SelectLabel>
          {data?.data?.map((slot: TSlot) => (
            <SelectItem key={slot._id} value={slot._id}>
              {slot.startTime} - {slot.endTime}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default AvailableSlots;
