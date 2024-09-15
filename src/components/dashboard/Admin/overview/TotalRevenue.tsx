import { BsCurrencyDollar } from "react-icons/bs";

const TotalRevenue = () => {
  return (
    <div className="border px-5 py-7 flex justify-between items-start">
      <div className="space-y-1.5">
        <h3 className="text-sm font-semibold">Total Revenue</h3>
        <h1 className="text-3xl font-semibold">$1234.50</h1>
        <h5 className="text-xs text-muted font-medium">
          +12.1% from last month
        </h5>
      </div>
      <BsCurrencyDollar size={20} />
    </div>
  );
};

export default TotalRevenue;