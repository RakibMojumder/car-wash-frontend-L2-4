import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import navbarSlice from "./features/navbarSlice";

const store = configureStore({
  reducer: {
    navbar: navbarSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
