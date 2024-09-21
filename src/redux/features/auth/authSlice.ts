import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profile: string;
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
    logout: (state) => {
      state.user = null;
      state.token = "";
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
