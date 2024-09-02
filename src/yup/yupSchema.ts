import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  email: Yup.string().required("Email is required field"),
  password: Yup.string().min(6).max(15).required("Password is required field"),
});

export const registerValidationSchema = Yup.object({
  name: Yup.string().min(2).required("Name is required field"),
  email: Yup.string().email().required("email is required field"),
  phone: Yup.string().email().required("phone is required field"),
  address: Yup.string().email().required("address is required field"),
  password: Yup.string().min(6).max(15).required("Password is required field"),
});
