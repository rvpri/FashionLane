import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const clothingApi = createApi({
  reducerPath: "clothingApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getAllClothingItems: builder.query({
      query: () => "clothingItems",
    }),
    getClothingItemsByCategory: builder.query({
      query: (category) => `clothingItems?category=${category}`,
    }),
    getClothingItemById: builder.query({
      query: (id) => `clothingItems/${id}`,
    }),
  }),
});

export const {
  useGetAllClothingItemsQuery,
  useGetClothingItemsByCategoryQuery,
  useGetClothingItemByIdQuery,
} = clothingApi;
