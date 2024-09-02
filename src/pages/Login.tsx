import logo from "@/assets/images/logo.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginValidationSchema } from "@/yup/yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
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

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="h-svh w-full flex justify-center items-center">
      <div className="max-w-md w-full p-7 bg-white border">
        <div className="flex justify-center items-center mb-8">
          <div>
            <img src={logo} alt="" className="w-28" />
            <h2 className="font-bold uppercase text-sm">GlossyWheels</h2>
          </div>
        </div>
        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <Label htmlFor="email">Enter your email</Label>
            <Input
              type="email"
              id="email"
              placeholder="abc@gmail.com"
              {...register("email")}
            />
            <p className="text-sm text-red-400">{errors.email?.message}</p>
          </div>
          <div>
            <Label htmlFor="password">Enter your password</Label>
            <Input
              type="password"
              id="password"
              placeholder="123***@32123"
              {...register("password")}
            />
            <p className="text-sm text-red-400">{errors.password?.message}</p>
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        <div className="flex justify-center items-center mt-5 text-sm">
          <p>
            Don't have an account?{" "}
            <Link
              to={"/register"}
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
