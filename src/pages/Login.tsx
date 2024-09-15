import Logo from "@/components/Logo";
<<<<<<< HEAD
=======
import { Button } from "@/components/ui/button";
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { loginValidationSchema } from "@/yup/yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import LoadingButton from "@/components/LoadingButton";
=======
import { Link } from "react-router-dom";
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0

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

<<<<<<< HEAD
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login, { isLoading, isError, error }] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const user = await login(data).unwrap();

    dispatch(setUser(user.data));
    toast.success("login successful");
    navigate("/");
  };

  if (isError) {
    toast.error(error?.data.message);
  }

=======
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const user = await login(data).unwrap();
    dispatch(setUser(user.data));
  };

>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
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
<<<<<<< HEAD
          <LoadingButton isLoading={isLoading} label={"login"} />
=======
          <Button type="submit" className="w-full">
            Login
          </Button>
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
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
