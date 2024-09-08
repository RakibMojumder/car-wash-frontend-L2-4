import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { loginValidationSchema } from "@/yup/yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(loginValidationSchema) });

  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const user = await login(data).unwrap();
    dispatch(setUser(user.data));
  };

  return (
    <div className="min-h-svh w-full flex justify-center items-center bg-car-img bg-center relative before:absolute before:inset-0 before:bg-overlay before:z-10">
      <div className="max-w-md w-full p-7 bg-white/65 backdrop-blur-[1px] relative z-20">
        <div className="flex justify-center items-center mb-8">
          <Logo />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              className="placeholder:text-primary/75"
              type="email"
              id="email"
              placeholder="Enter email"
              {...register("email")}
            />
            <p className="text-sm text-red-500 mt-1">{errors.email?.message}</p>
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
            Login
          </Button>
        </form>
        <div className="flex justify-center items-center mt-5 text-sm">
          <p>
            Don't have an account?{" "}
            <Link
              to={"/auth/register"}
              className="hover:underline underline-offset-1"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
