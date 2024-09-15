import config from "@/config";
<<<<<<< HEAD
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";
=======
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { setUser } from "../features/auth/authSlice";
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0

const baseQuery = fetchBaseQuery({
  baseUrl: config.server_url,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
  },
});

<<<<<<< HEAD
const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    console.log("object");
=======
const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
    const res = await fetch(`${config.server_url}/auth/refresh-token`, {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();

<<<<<<< HEAD
    if (data?.data?.token) {
      const currentUser = (api.getState() as RootState).auth.user;

      api.dispatch(setUser({ user: currentUser, token: data.data.token }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
=======
    const currentUser = (api.getState() as RootState).auth.user;

    api.dispatch(setUser({ user: currentUser, token: data.data.token }));

    result = await baseQuery(args, api, extraOptions);
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
