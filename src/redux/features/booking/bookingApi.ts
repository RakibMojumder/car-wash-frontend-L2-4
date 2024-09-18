import { baseApi } from "@/redux/api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (bookingInfo) => ({
        url: "/bookings",
        method: "POST",
        body: bookingInfo,
      }),
    }),

    getAllBookings: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
    }),

    getMyBookings: builder.query({
      query: () => ({
        url: "/bookings/my-bookings",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetAllBookingsQuery,
  useGetMyBookingsQuery,
} = bookingApi;
