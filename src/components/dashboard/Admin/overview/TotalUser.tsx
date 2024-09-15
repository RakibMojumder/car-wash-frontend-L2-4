import { FiUsers } from "react-icons/fi";

const TotalUser = () => {
  return (
    <div className="border px-5 py-7 flex justify-between items-start">
      <div className="space-y-1.5">
        <h3 className="text-sm font-semibold">Total Users</h3>
        <h1 className="text-3xl font-semibold">930</h1>
        <h5 className="text-xs text-muted font-medium">
          +25.4% from last month
        </h5>
      </div>
      <FiUsers size={20} />
    </div>
  );
};

export default TotalUser;
