import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
	reducerPath: "apiSettingSlice",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://localhost:8080/site_setting",
	}),
	tagTypes: ["site_setting"],
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => "/site_setting",
			providesTags: ["site_setting"],
		}),
	}),
});
export const { useGetProductsQuery } = apiSlice;
