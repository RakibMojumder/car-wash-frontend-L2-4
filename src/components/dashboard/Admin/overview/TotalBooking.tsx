import { IoMdReorder } from "react-icons/io";

const TotalBooking = () => {
  return (
    <div className="border px-5 py-7 flex justify-between items-start">
      <div className="space-y-1.5">
        <h3 className="text-sm font-semibold">Total Booking</h3>
        <h1 className="text-3xl font-semibold">448</h1>
        <h5 className="text-xs text-muted font-medium">
          +19.6% from last month
        </h5>
      </div>
      <IoMdReorder size={20} />
    </div>
  );
};

export default TotalBooking;
