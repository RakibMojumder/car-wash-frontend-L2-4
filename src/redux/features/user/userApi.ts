import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["users"],
    }),

    getLoginUser: builder.query({
      query: () => ({
        url: "/users/login-user",
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["user", "users"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetLoginUserQuery,
  useUpdateUserMutation,
} = userApi;
