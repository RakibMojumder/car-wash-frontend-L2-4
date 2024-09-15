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
  }),
});

export const { useGetAllServicesQuery, useGetSingleServicesQuery } = serviceApi;
