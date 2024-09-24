import UpdateUserModal from "@/components/dashboard/User/UpdateUserModal";
import DashLoader from "@/components/loader/DashLoader";
import { useGetLoginUserQuery } from "@/redux/features/user/userApi";

const Profile = () => {
  const { data, isLoading } = useGetLoginUserQuery(null);

  if (isLoading) return <DashLoader />;

  return (
    <div>
      <div className="lg:w-1/2 mx-auto p-5">
        <div className="flex justify-between items-start">
          <img
            src={
              data?.data?.profile
                ? data?.data.profile
                : "https://github.com/shadcn.png"
            }
            alt="User profile"
            className="w-1/3 rounded-full"
          />
          <UpdateUserModal user={data?.data} />
        </div>

        <div className="space-y-3 mt-8">
          <h1 className="text-xl font-medium">
            Name:
            <span className="font-semibold">
              {data?.data?.firstName} {data?.data?.lastName}
            </span>
          </h1>
          <h1 className="text-xl font-medium">
            Email: <span className="font-semibold">{data?.data?.email}</span>
          </h1>
          <h1 className="text-xl font-medium">
            Phone: <span className="font-semibold">{data?.data?.phone}</span>
          </h1>
          <h1 className="text-xl font-medium">
            Address:{" "}
            <span className="font-semibold">{data?.data?.address}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
