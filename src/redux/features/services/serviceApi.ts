import { baseApi } from "@/redux/api/baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: () => ({
        url: "/services",
        method: "GET",
      }),
    }),
    getSingleServices: builder.query({
      query: (serviceName) => ({
        url: `/services/${serviceName}`,
        method: "GET",
      }),
    }),

    fileUpload: builder.mutation({
      query: (data) => ({
        url: "/services/file-upload",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllServicesQuery,
  useGetSingleServicesQuery,
  useFileUploadMutation,
} = serviceApi;
