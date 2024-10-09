import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useDeleteUserMutation } from "@/redux/features/user/userApi";
import { MdOutlineDelete } from "react-icons/md";
import { toast } from "sonner";

type TMakeAdminProps = {
  id: string;
};

const DeleteUserModal = ({ id }: TMakeAdminProps) => {
  const [deleteUser, { isError }] = useDeleteUserMutation();

  const handleClick = async () => {
    const res = await deleteUser(id).unwrap();

    if (res?.success) {
      toast.success(res?.message);
    }
  };

  if (isError) {
    toast.error("Could not delete user");
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant="outline" size="icon">
          <MdOutlineDelete />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="font-normal text-center">
            Are you sure want to delete this user?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-5">
          <AlertDialogCancel className="bg-primary text-white hover:bg-primary hover:text-white">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleClick}
            className="bg-transparent border after:bg-transparent hover:text-primary"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteUserModal;
