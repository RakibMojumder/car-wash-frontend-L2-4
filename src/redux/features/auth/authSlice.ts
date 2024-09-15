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
<<<<<<< HEAD
    logout: (state) => {
      state.user = null;
      state.token = "";
    },
  },
});

export const { setUser, logout } = authSlice.actions;
=======
  },
});

export const { setUser } = authSlice.actions;
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0

export default authSlice.reducer;
