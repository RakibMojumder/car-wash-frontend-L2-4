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

    getBooking: builder.query({
      query: (transactionId) => ({
        url: `/bookings/${transactionId}`,
        method: "GET",
      }),
    }),

    getRecentBookings: builder.query({
      query: () => ({
        url: "/bookings/recent-booking",
        method: "GET",
      }),
    }),
    getUserRecentBookings: builder.query({
      query: () => ({
        url: "/bookings/user-recent-booking",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetAllBookingsQuery,
  useGetMyBookingsQuery,
  useGetBookingQuery,
  useGetRecentBookingsQuery,
  useGetUserRecentBookingsQuery,
} = bookingApi;
