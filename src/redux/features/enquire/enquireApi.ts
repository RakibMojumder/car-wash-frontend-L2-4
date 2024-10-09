import { baseApi } from "@/redux/api/baseApi";

const enquireApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createEnquire: builder.mutation({
      query: (data) => ({
        url: "/enquires",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["enquires"],
    }),
    getAllEnquires: builder.query({
      query: () => ({
        url: "/enquires",
        method: "GET",
      }),
      providesTags: ["enquires"],
    }),
  }),
});

export const { useCreateEnquireMutation, useGetAllEnquiresQuery } = enquireApi;
