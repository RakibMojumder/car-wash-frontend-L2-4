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

  return (
    <div className="min-h-svh w-full flex justify-center items-center py-10 bg-car-img bg-center relative before:absolute before:inset-0 before:bg-overlay before:z-10">
      <div className="max-w-2xl w-full p-7 bg-white/65 backdrop-blur-[1px] relative z-20">
        <div className="flex justify-center items-center mb-8">
          <Logo />
        </div>
        <div className="bg-[#474343]"></div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex flex-col md:flex-row items-end gap-x-5 space-y-7 md:space-y-0">
            <div className="w-full">
              <Label htmlFor="name">Name</Label>
              <Input
                className="placeholder:text-primary/75"
                type="text"
                id="name"
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
              placeholder="Enter password"
              {...register("address")}
            />
            <p className="text-sm text-red-500 mt-1 h-5">
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
            <p className="text-sm text-red-500 mt-1 h-5">
              {errors.password?.message}
            </p>
          </div>
          <LoadingButton isLoading={isLoading} label={"Register"} />
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
