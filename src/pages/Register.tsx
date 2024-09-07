import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerValidationSchema } from "@/yup/yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

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

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="min-h-svh w-full flex justify-center items-center py-10 bg-car-img bg-center relative before:absolute before:inset-0 before:bg-overlay before:z-10">
      <div className="max-w-2xl w-full p-7 bg-white/65 backdrop-blur-[1px] relative z-20">
        <div className="flex justify-center items-center mb-8">
          <Logo />
        </div>
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="flex items-end gap-x-5">
            <div className="w-full">
              <Label htmlFor="name">Name</Label>
              <Input
                className="placeholder:text-primary/75"
                type="text"
                id="name"
                placeholder="Enter first name"
                {...register("firstName")}
              />
              <p className="text-sm text-red-500 mt-1">
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
              <p className="text-sm text-red-500 mt-1">
                {errors.lastName?.message}
              </p>
            </div>
          </div>

          <div className="flex items-end gap-x-5">
            <div className="w-full">
              <Label htmlFor="email">Email</Label>
              <Input
                className="placeholder:text-primary/75"
                type="email"
                id="email"
                placeholder="Enter email"
                {...register("email")}
              />
              <p className="text-sm text-red-500 mt-1">
                {errors.email?.message}
              </p>
            </div>
            <div className="w-full">
              <Label htmlFor="phone">Phone</Label>
              <Input
                className="placeholder:text-primary/75"
                type="number"
                id="phone"
                placeholder="Enter phone"
                {...register("phone")}
              />
              <p className="text-sm text-red-500 mt-1">
                {errors.password?.message}
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
            <p className="text-sm text-red-500 mt-1">
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
            <p className="text-sm text-red-500 mt-1">
              {errors.password?.message}
            </p>
          </div>
          <Button type="submit" className="w-full">
            Register
          </Button>
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
