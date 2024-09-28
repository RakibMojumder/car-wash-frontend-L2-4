import FileInput from "@/components/FileInput";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TUser } from "@/redux/features/auth/authSlice";
import { useFileUploadMutation } from "@/redux/features/services/serviceApi";
import { useUpdateUserMutation } from "@/redux/features/user/userApi";
import { updateUserValidationSchema } from "@/yup/yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { CiEdit } from "react-icons/ci";
import { toast } from "sonner";
import { MdOutlineEdit } from "react-icons/md";

type TUserUpdateProps = {
  user: TUser | null;
};

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  profile?: string;
};

const UpdateUserModal = ({ user }: TUserUpdateProps) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormData>({ resolver: yupResolver(updateUserValidationSchema) });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fileUpload, fileUploadResponse] = useFileUploadMutation();
  const [updateUser, updateUserResponse] = useUpdateUserMutation();

  const [image, setImage] = useState<File | undefined>();

  const onSubmit = async (values: FieldValues) => {
    try {
      let userProfile = user?.profile;
      if (image) {
        const formData = new FormData();
        formData.append("file", image);
        const res = await fileUpload(formData).unwrap();

        if (res.success) {
          userProfile = res.data;
        }
      } else {
        const response = await updateUser({
          ...values,
          profile: userProfile,
        }).unwrap();

        toast.success(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (fileUploadResponse.error) {
    toast.error("image upload failed");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="rounded-full bg-gray-800 hover:bg-gray-800"
        >
          <MdOutlineEdit size={24} className="text-neutral-100" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80%] overflow-y-auto max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-center">Update your profile</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="size-32 p-3 pl-0 mb-8">
            <Label className="mb-3">Profile</Label>
            <FileInput src={user!.profile} setValue={setImage} />
          </div>
          <div className="flex flex-col md:flex-row items-end gap-x-5 space-y-7 md:space-y-0">
            <div className="w-full">
              <Label htmlFor="name">Name</Label>
              <Input
                className="placeholder:text-primary/75"
                type="text"
                id="name"
                defaultValue={user?.firstName}
                placeholder="Enter first name"
                {...register("firstName")}
              />
              <p className="text-sm text-red-500 mt-1 h-5">
                {errors.firstName?.message}
              </p>
            </div>
            <div className="w-full">
              <Label htmlFor="name"></Label>
              <Input
                className="placeholder:text-primary/75"
                type="text"
                id="name"
                defaultValue={user?.lastName}
                placeholder="Enter last name"
                {...register("lastName")}
              />
              <p className="text-sm text-red-500 mt-1 h-5">
                {errors.lastName?.message}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-end gap-x-5 space-y-7 md:space-y-0">
            <div className="w-full">
              <Label htmlFor="email">Email</Label>
              <Input
                className="placeholder:text-primary/75"
                type="email"
                id="email"
                defaultValue={user?.email}
                placeholder="Enter email"
                {...register("email")}
              />
              <p className="text-sm text-red-500 mt-1 h-5">
                {errors.email?.message}
              </p>
            </div>
            <div className="w-full">
              <Label htmlFor="phone">Phone</Label>
              <Input
                className="placeholder:text-primary/75"
                type="text"
                id="phone"
                defaultValue={user?.phone}
                placeholder="Enter phone"
                {...register("phone")}
              />
              <p className="text-sm text-red-500 mt-1 h-5">
                {errors.phone?.message}
              </p>
            </div>
          </div>

          <div>
            <Label htmlFor="password">Address</Label>
            <Input
              className="placeholder:text-primary/75"
              type="text"
              id="address"
              defaultValue={user?.address}
              placeholder="Enter Address"
              {...register("address")}
            />
            <p className="text-sm text-red-500 mt-1 h-5">
              {errors.address?.message}
            </p>
          </div>
          <DialogClose asChild>
            <div>
              <LoadingButton
                isLoading={updateUserResponse.isLoading}
                label={"Submit"}
              />
            </div>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateUserModal;
