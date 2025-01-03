import { IoMdReorder } from "react-icons/io";

type TTotalBookingsProps = {
  totalBookings: number;
};

const TotalBookings = ({ totalBookings }: TTotalBookingsProps) => {
  return (
    <div className="border px-5 py-7 flex justify-between items-start">
      <div className="space-y-1.5">
        <h3 className="text-sm font-semibold">Total Booking</h3>
        <h1 className="text-3xl font-semibold">{totalBookings}</h1>
        <h5 className="text-xs text-muted font-medium">
          +11.6% from last month
        </h5>
      </div>
      <IoMdReorder size={20} />
    </div>
  );
};

export default TotalBookings;
