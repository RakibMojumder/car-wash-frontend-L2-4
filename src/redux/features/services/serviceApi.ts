import { baseApi } from "@/redux/api/baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllServices: builder.query({
<<<<<<< HEAD
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
=======
      query: () => "/services",
    }),
    getSingleServices: builder.query({
      query: (serviceName) => `/services/${serviceName}`,
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
    }),
  }),
});

export const { useGetAllServicesQuery, useGetSingleServicesQuery } = serviceApi;
