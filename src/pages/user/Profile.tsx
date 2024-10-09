import UpdateUserModal from "@/components/dashboard/User/UpdateUserModal";
import DashLoader from "@/components/loader/DashLoader";
import { useGetLoginUserQuery } from "@/redux/features/user/userApi";
import profileBanner from "@/assets/images/profile-banner-1.jpg";
import { Input } from "@/components/ui/input";
import { FiPlus } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { IoSettingsOutline } from "react-icons/io5";

const Profile = () => {
  const { data, isLoading } = useGetLoginUserQuery(null);

  if (isLoading) return <DashLoader />;

  return (
    <div className="pb-20">
      <div className="border rounded-t-2xl">
        <div>
          <img
            src={profileBanner}
            alt="profile banner image"
            className="w-full h-40 sm:h-44 object-cover object-center rounded-t-2xl"
          />
        </div>

        <div className="p-5">
          <div className="-translate-y-20">
            <img
              src={data?.data?.profile}
              alt="user profile"
              className="size-32 rounded-full object-center"
            />
            <div className="flex justify-between items-start mt-5">
              <div>
                <h1 className="text-2xl font-semibold text-primary">
                  {data?.data?.firstName} {data?.data?.lastName}
                </h1>
                <p className="text-muted text-sm">{data?.data?.email}</p>
              </div>
              <div className="space-x-3">
                {/* <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full hidden sm:inline-flex"
                >
                  <FiPlus size={24} className="text-muted" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full hidden sm:inline-flex"
                >
                  <IoSettingsOutline size={24} className="text-muted" />
                </Button> */}
                <UpdateUserModal user={data?.data} />
              </div>
            </div>
          </div>
          <div className="-mt-10 md:w-1/2">
            <h5 className="text-muted mb-3 text-sm">Account Details</h5>
            <div className="space-y-3">
              <div className="flex items-center gap-x-5">
                <h3 className="min-w-20 flex justify-between items-center font-medium">
                  Name <span>:</span>
                </h3>
                <h3 className="font-semibold">
                  {data?.data?.firstName} {data?.data?.lastName}
                </h3>
              </div>
              <div className="flex items-center gap-x-5">
                <h3 className="min-w-20 flex justify-between items-center font-medium">
                  Email <span>:</span>
                </h3>
                <h3 className="font-semibold">{data?.data?.email}</h3>
              </div>
              <div className="flex items-center gap-x-5">
                <h3 className="min-w-20 flex justify-between items-center font-medium">
                  Phone <span>:</span>
                </h3>
                <h3 className="font-semibold">{data?.data?.phone}</h3>
              </div>
              <div className="flex items-center gap-x-5">
                <h3 className="min-w-20 flex justify-between items-center font-medium">
                  Address <span>:</span>
                </h3>
                <h3 className="font-semibold">{data?.data?.address}</h3>
              </div>
            </div>
          </div>

          <div className="mt-10 md:w-1/2">
            <h5 className="text-muted text-sm">Security</h5>
            <div className="flex items-center gap-x-5 mb-5">
              <h3 className="min-w-20 flex justify-between items-center font-medium">
                Password <span>:</span>
              </h3>
              <Input
                defaultValue={"password"}
                type="password"
                disabled
                className="border rounded-md border-muted md:w-1/2"
              />
            </div>
            <button className="bg-zinc-100 border px-5 py-1 rounded-md text-sm font-medium duration-200 hover:bg-zinc-200">
              Change password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
