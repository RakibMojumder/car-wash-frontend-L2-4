import { baseApi } from "@/redux/api/baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: () => "/services",
    }),
    getSingleServices: builder.query({
      query: (serviceName) => `/services/${serviceName}`,
    }),
  }),
});

export const { useGetAllServicesQuery, useGetSingleServicesQuery } = serviceApi;
