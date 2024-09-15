import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  email: Yup.string().required("Email is required field"),
  password: Yup.string().min(6).max(15).required("Password is required field"),
});

export const registerValidationSchema = Yup.object({
  firstName: Yup.string().min(2).required("First name is required field"),
  lastName: Yup.string().min(2).required("Last name is required field"),
  email: Yup.string().email().required("email is required field"),
<<<<<<< HEAD
  phone: Yup.string().required("phone is required field"),
  address: Yup.string().required("address is required field"),
=======
  phone: Yup.string().email().required("phone is required field"),
  address: Yup.string().email().required("address is required field"),
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
  password: Yup.string().min(6).max(15).required("Password is required field"),
});
