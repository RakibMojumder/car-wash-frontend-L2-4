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
import { useMakeAdminMutation } from "@/redux/features/user/userApi";
import { MdAdminPanelSettings } from "react-icons/md";
import { toast } from "sonner";

type TMakeAdminProps = {
  id: string;
};

const MakeAdminModal = ({ id }: TMakeAdminProps) => {
  const [makeAdmin, { isError }] = useMakeAdminMutation();

  const handleClick = async () => {
    const res = await makeAdmin({ id, role: "admin" }).unwrap();

    if (res?.success) {
      toast.success(res?.message);
    }
  };

  if (isError) {
    toast.error("Could not make admin a user");
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant="outline" size="icon">
          <MdAdminPanelSettings size={20} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="font-normal text-center">
            Are you sure want to make this user admin?
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

export default MakeAdminModal;
