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

    updateService: builder.mutation({
      query: ({ id, data }) => ({
        url: `/services/${id}`,
        body: data,
        method: "PATCH",
      }),
    }),
  }),
});

export const {
  useGetAllServicesQuery,
  useGetSingleServicesQuery,
  useFileUploadMutation,
} = serviceApi;
