import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { loginValidationSchema } from "@/yup/yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import LoadingButton from "@/components/LoadingButton";

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

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const dispatch = useAppDispatch();
  const [login, loginUser] = useLoginMutation();
  const [userLogin, guestUser] = useLoginMutation();
  const [adminLogin, guestAdmin] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    try {
      const user = await login(data).unwrap();
      dispatch(setUser(user.data));
      toast.success("login successful");
      navigate(from, { replace: true });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };

  const handleGuestUserLogin = async () => {
    try {
      const user = await userLogin({
        email: "rakib@gmail.com",
        password: "password",
      }).unwrap();
      dispatch(setUser(user.data));
      toast.success("login successful");
      navigate(from, { replace: true });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };

  const handleGuestAdminLogin = async () => {
    try {
      const user = await adminLogin({
        email: "rakib.ahmed@gmail.com",
        password: "password",
      }).unwrap();
      dispatch(setUser(user.data));
      toast.success("login successful");
      navigate(from, { replace: true });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.data.message);
    }
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
          <LoadingButton isLoading={loginUser.isLoading} label={"login"} />
        </form>
        <div className="flex flex-col justify-center items-center space-y-5 mt-5 text-sm">
          <p>
            Don't have an account?{" "}
            <Link
              to={"/auth/register"}
              className="hover:underline underline-offset-1"
            >
              Register
            </Link>
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-y-5 md:gap-y-0">
            <LoadingButton
              isLoading={guestUser.isLoading}
              label={"Guest user login"}
              handler={handleGuestUserLogin}
              className="text-xs md:w-auto font-semibold bg-blue-500 after:bg-blue-500 text-white"
            />
            <LoadingButton
              isLoading={guestAdmin.isLoading}
              label={"Guest admin login"}
              handler={handleGuestAdminLogin}
              className="text-xs md:w-auto font-semibold bg-red after:bg-red text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
