import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const posts = createApi({
  reducerPath: "api",
  tagTypes: ["Posts", "New Posts"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => "posts",
      providesTags: ["Posts"],
    }),
    newPost: build.mutation({
      query: (post) => ({
        url: "posts",
        method: "POST",
        body: post,
      }),
      providesTags: ["New Posts"],
    }),
  }),
});

export const { useGetPostsQuery, useNewPostMutation } = posts;
