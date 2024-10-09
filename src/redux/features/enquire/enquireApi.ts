import { baseApi } from "@/redux/api/baseApi";

const enquireApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createEnquire: builder.mutation({
      query: (data) => ({
        url: "/enquires",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateEnquireMutation } = enquireApi;
