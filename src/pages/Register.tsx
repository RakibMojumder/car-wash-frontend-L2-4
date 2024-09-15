<<<<<<< HEAD
import LoadingButton from "@/components/LoadingButton";
import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { registerValidationSchema } from "@/yup/yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
=======
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerValidationSchema } from "@/yup/yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  password: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(registerValidationSchema) });
<<<<<<< HEAD
  const [registerUser, { isLoading, isError, error }] = useRegisterMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    await registerUser(data);
    toast.success("register successful");
    navigate("/auth/login");
  };

  if (isError) {
    toast.error(error?.data.message);
  }
=======

  const onSubmit = handleSubmit((data) => console.log(data));
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0

  return (
    <div className="min-h-svh w-full flex justify-center items-center py-10 bg-car-img bg-center relative before:absolute before:inset-0 before:bg-overlay before:z-10">
      <div className="max-w-2xl w-full p-7 bg-white/65 backdrop-blur-[1px] relative z-20">
        <div className="flex justify-center items-center mb-8">
          <Logo />
        </div>
<<<<<<< HEAD
        <div className="bg-[#474343]"></div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex flex-col md:flex-row items-end gap-x-5 space-y-7 md:space-y-0">
=======
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="flex items-end gap-x-5">
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
            <div className="w-full">
              <Label htmlFor="name">Name</Label>
              <Input
                className="placeholder:text-primary/75"
                type="text"
                id="name"
                placeholder="Enter first name"
                {...register("firstName")}
              />
<<<<<<< HEAD
              <p className="text-sm text-red-500 mt-1 h-5">
=======
              <p className="text-sm text-red-500 mt-1">
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
                {errors.firstName?.message}
              </p>
            </div>
            <div className="w-full">
              <Label htmlFor="name"></Label>
              <Input
                className="placeholder:text-primary/75"
                type="text"
                id="name"
                placeholder="Enter last name"
                {...register("lastName")}
              />
<<<<<<< HEAD
              <p className="text-sm text-red-500 mt-1 h-5">
=======
              <p className="text-sm text-red-500 mt-1">
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
                {errors.lastName?.message}
              </p>
            </div>
          </div>

<<<<<<< HEAD
          <div className="flex flex-col md:flex-row items-end gap-x-5 space-y-7 md:space-y-0">
=======
          <div className="flex items-end gap-x-5">
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
            <div className="w-full">
              <Label htmlFor="email">Email</Label>
              <Input
                className="placeholder:text-primary/75"
                type="email"
                id="email"
                placeholder="Enter email"
                {...register("email")}
              />
<<<<<<< HEAD
              <p className="text-sm text-red-500 mt-1 h-5">
=======
              <p className="text-sm text-red-500 mt-1">
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
                {errors.email?.message}
              </p>
            </div>
            <div className="w-full">
              <Label htmlFor="phone">Phone</Label>
              <Input
                className="placeholder:text-primary/75"
<<<<<<< HEAD
                type="text"
=======
                type="number"
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
                id="phone"
                placeholder="Enter phone"
                {...register("phone")}
              />
<<<<<<< HEAD
              <p className="text-sm text-red-500 mt-1 h-5">
                {errors.phone?.message}
=======
              <p className="text-sm text-red-500 mt-1">
                {errors.password?.message}
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
              </p>
            </div>
          </div>

          <div>
            <Label htmlFor="password">Address</Label>
            <Input
              className="placeholder:text-primary/75"
              type="text"
              id="address"
              placeholder="Enter password"
              {...register("address")}
            />
<<<<<<< HEAD
            <p className="text-sm text-red-500 mt-1 h-5">
=======
            <p className="text-sm text-red-500 mt-1">
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
              {errors.address?.message}
            </p>
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              className="placeholder:text-primary/75"
              type="password"
              id="password"
              placeholder="Enter password"
              {...register("password")}
            />
<<<<<<< HEAD
            <p className="text-sm text-red-500 mt-1 h-5">
              {errors.password?.message}
            </p>
          </div>
          <LoadingButton isLoading={isLoading} label={"Register"} />
=======
            <p className="text-sm text-red-500 mt-1">
              {errors.password?.message}
            </p>
          </div>
          <Button type="submit" className="w-full">
            Register
          </Button>
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
        </form>
        <div className="flex justify-center items-center mt-5 text-sm">
          <p>
            Don't have an account?{" "}
            <Link
              to={"/auth/login"}
              className="hover:underline underline-offset-1"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
