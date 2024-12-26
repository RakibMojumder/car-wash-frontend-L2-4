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

    makeAdmin: builder.mutation({
      query: ({ id, role }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: { role },
      }),
      invalidatesTags: ["users"],
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),

    getAdminOverviewData: builder.query({
      query: () => ({
        url: "/users/admin-overview",
        method: "GET",
      }),
    }),

    getUserOverviewData: builder.query({
      query: () => ({
        url: "/users/user-overview",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetLoginUserQuery,
  useUpdateUserMutation,
  useMakeAdminMutation,
  useDeleteUserMutation,
  useGetAdminOverviewDataQuery,
  useGetUserOverviewDataQuery,
} = userApi;
