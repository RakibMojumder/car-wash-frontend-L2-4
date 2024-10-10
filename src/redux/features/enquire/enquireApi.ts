import { baseApi } from "@/redux/api/baseApi";

const enquireApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createEnquire: builder.mutation({
      query: (data) => ({
        url: "/enquires",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["enquires"],
    }),

    getAllEnquires: builder.query({
      query: () => ({
        url: "/enquires",
        method: "GET",
      }),
      providesTags: ["enquires"],
    }),

    sendReply: builder.mutation({
      query: ({ id, text }) => ({
        url: `/enquires/send-reply/${id}`,
        method: "POST",
        body: { text },
      }),
      invalidatesTags: ["enquires"],
    }),
  }),
});

export const {
  useCreateEnquireMutation,
  useGetAllEnquiresQuery,
  useSendReplyMutation,
} = enquireApi;
