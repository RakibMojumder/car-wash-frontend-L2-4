import { baseApi } from "@/redux/api/baseApi";

const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAvailableSlots: builder.query({
      query: (data) => {
        const params = new URLSearchParams();
        if (data.date) {
          params.append("date", data.date);
        }

        if (data.serviceId) {
          params.append("serviceId", data.serviceId);
        }

        return {
          url: "/slots/availability",
          method: "GET",
          params,
        };
      },
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGetAvailableSlotsQuery } = slotApi;
