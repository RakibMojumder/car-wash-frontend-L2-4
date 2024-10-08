import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  email: Yup.string().required("Email is required field"),
  password: Yup.string().min(6).max(15).required("Password is required field"),
});

export const registerValidationSchema = Yup.object({
  firstName: Yup.string().min(2).required("First name is required field"),
  lastName: Yup.string().min(2).required("Last name is required field"),
  email: Yup.string().email().required("email is required field"),
  phone: Yup.string().required("phone is required field"),
  address: Yup.string().required("address is required field"),
  password: Yup.string().min(6).max(15).required("Password is required field"),
});

export const updateUserValidationSchema = Yup.object({
  firstName: Yup.string().min(2).required("First name is required field"),
  lastName: Yup.string().min(2).required("Last name is required field"),
  email: Yup.string().email().required("email is required field"),
  phone: Yup.string().required("phone is required field"),
  address: Yup.string().required("address is required field"),
});

export const enquireValidationSchema = Yup.object({
  firstName: Yup.string().min(2).required("First name is required field"),
  lastName: Yup.string().min(2).required("Last name is required field"),
  email: Yup.string().email().required("email is required field"),
  phone: Yup.string().required("phone is required field"),
  question: Yup.string().required("Question is required field"),
});
