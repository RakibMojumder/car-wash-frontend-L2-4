import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: "admin" | "user";
};

type TAuthState = {
  user: TUser | null;
  token: string;
};

const initialState: TAuthState = {
  user: null,
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
