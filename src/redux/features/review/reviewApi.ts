import { baseApi } from "@/redux/api/baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addReview: builder.mutation({
      query: (data) => ({
        url: "/reviews/add-review",
        method: "POST",
        body: data,
      }),
    }),

    getAllReviews: builder.query({
      query: () => ({
        url: "/reviews",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddReviewMutation, useGetAllReviewsQuery } = reviewApi;
