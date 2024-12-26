import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getVehicleTypes } from "@/data/vehicleType";
import { Dispatch } from "react";

const VehicleTypes = ({
  setVehicleType,
}: {
  setVehicleType: Dispatch<React.SetStateAction<string>>;
}) => {
  const vehicleTypes = getVehicleTypes();

  return (
    <Select onValueChange={(value) => setVehicleType(value)}>
      <SelectTrigger className="w-full border border-b-2">
        <SelectValue placeholder="Select vehicle type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel></SelectLabel>
          {vehicleTypes?.map((vehicle) => (
            <SelectItem key={vehicle} value={vehicle}>
              {vehicle}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default VehicleTypes;
