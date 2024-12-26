import { IoCheckmarkDoneSharp } from "react-icons/io5";

type TCompletedBookingsProps = {
  completedBookings: number;
};

const CompletedBookings = ({ completedBookings }: TCompletedBookingsProps) => {
  return (
    <div className="border px-5 py-7 flex justify-between items-start">
      <div className="space-y-1.5">
        <h3 className="text-sm font-semibold">Completed Bookings</h3>
        <h1 className="text-3xl font-semibold">{completedBookings}</h1>
        <h5 className="text-xs text-muted font-medium">
          +11.6% from last month
        </h5>
      </div>
      <IoCheckmarkDoneSharp size={20} />
    </div>
  );
};

export default CompletedBookings;
