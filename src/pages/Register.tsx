import logo from "@/assets/images/logo.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerValidationSchema } from "@/yup/yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type FormData = {
  name: string;
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
    <div className="min-h-svh w-full flex justify-center items-center py-10">
      <div className="max-w-md w-full p-7 bg-white border">
        <div className="flex justify-center items-center mb-8">
          <div>
            <img src={logo} alt="" className="w-28" />
            <h2 className="font-bold uppercase text-sm">GlossyWheels</h2>
          </div>
        </div>
        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <Label htmlFor="name">Enter your name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Jon Doe"
              {...register("name")}
            />
            <p className="text-sm text-red-400">{errors.name?.message}</p>
          </div>
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
            <Label htmlFor="phone">Enter your phone</Label>
            <Input
              type="number"
              id="phone"
              placeholder="018*******"
              {...register("phone")}
            />
            <p className="text-sm text-red-400">{errors.password?.message}</p>
          </div>
          <div>
            <Label htmlFor="password">Enter your address</Label>
            <Input
              type="text"
              id="address"
              placeholder="1/8 new town dhaka"
              {...register("address")}
            />
            <p className="text-sm text-red-400">{errors.address?.message}</p>
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
            Register
          </Button>
        </form>
        <div className="flex justify-center items-center mt-5 text-sm">
          <p>
            Don't have an account?{" "}
            <Link to={"/login"} className="hover:underline underline-offset-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
