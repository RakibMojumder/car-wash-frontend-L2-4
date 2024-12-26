import { MdAutoGraph } from "react-icons/md";

type TActiveBookingsProps = {
  activeBookings: number;
};

const ActiveBookings = ({ activeBookings }: TActiveBookingsProps) => {
  return (
    <div className="border px-5 py-7 flex justify-between items-start">
      <div className="space-y-1.5">
        <h3 className="text-sm font-semibold">Active now</h3>
        <h1 className="text-3xl font-semibold">{activeBookings}</h1>
        <h5 className="text-xs text-muted font-medium">
          +9.6% since last hour
        </h5>
      </div>
      <MdAutoGraph size={20} />
    </div>
  );
};

export default ActiveBookings;
