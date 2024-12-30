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
import { MdAdminPanelSettings } from "react-icons/md";
import UpdateUserModal from "@/components/dashboard/User/UpdateUserModal";
import { TUser } from "@/redux/features/auth/authSlice";
import MakeAdminModal from "@/components/dashboard/Admin/MakeAdminModal";
import DeleteUserModal from "@/components/dashboard/Admin/DeleteUserModal";
import { useState } from "react";
import Pagination from "@/components/Pagination";

const Users = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data, isLoading } = useGetAllUsersQuery(currentPage);

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
            <TableHead>Role</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.users?.map((user: TUser, indx: number) => (
            <TableRow key={user._id}>
              <TableCell>{indx + 1}</TableCell>
              <TableCell className="font-medium">
                {user.firstName} {user.lastName}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.address}</TableCell>

              <TableCell className="flex items-center">
                {user.role}
                {user.role === "admin" && (
                  <MdAdminPanelSettings size={20} />
                )}{" "}
              </TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell className="text-right space-x-3">
                {user.role === "user" && <MakeAdminModal id={user._id} />}
                <UpdateUserModal
                  user={user}
                  triggerButton={
                    <Button variant="outline" size="icon">
                      <CiEdit />
                    </Button>
                  }
                />

                <DeleteUserModal id={user._id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        totalDocs={data?.data?.totalUsers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Users;
