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
      query: (currentPage) => ({
        url: `/bookings?page=${currentPage}`,
        method: "GET",
      }),
      providesTags: ["bookings"],
    }),

    getMyBookings: builder.query({
      query: (page) => ({
        url: `/bookings/my-bookings?page=${page}`,
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

    updateBookingStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/bookings/${id}`,
        body: { status },
        method: "PATCH",
      }),
      invalidatesTags: ["bookings"],
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
  useUpdateBookingStatusMutation,
} = bookingApi;
