import DashLoader from "@/components/loader/DashLoader";
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CiEdit } from "react-icons/ci";
import { MdAdminPanelSettings, MdOutlineDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import UpdateUserModal from "@/components/dashboard/User/UpdateUserModal";
import { TUser } from "@/redux/features/auth/authSlice";

const Users = () => {
  const { data, isLoading } = useGetAllUsersQuery(null);

  if (isLoading) return <DashLoader />;

  return (
    <div className="pb-20">
      <Table>
        <TableCaption>A list of users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">S.N.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>role</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((user: TUser, indx: number) => (
            <TableRow key={user._id}>
              <TableCell>{indx + 1}</TableCell>
              <TableCell className="font-medium">
                {user.firstName} {user.lastName}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell className="flex items-center">
                {user.role}
                {user.role === "admin" && (
                  <MdAdminPanelSettings size={20} />
                )}{" "}
              </TableCell>
              <TableCell className="text-right space-x-3">
                {user.role === "user" && (
                  <Button variant="outline" size="icon">
                    <FaCheck className="text-muted" size={16} />
                  </Button>
                )}
                <UpdateUserModal
                  user={user}
                  triggerButton={
                    <Button variant="outline" size="icon">
                      <CiEdit />
                    </Button>
                  }
                />

                <Button variant="outline" size="icon">
                  <MdOutlineDelete />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Users;
