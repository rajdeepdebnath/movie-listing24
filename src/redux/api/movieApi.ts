import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse, DataResponse } from "./types/DataResponse";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://test.create.diagnal.com/" }),
  tagTypes: [],
  endpoints: (builder) => ({
    getDataByPageNo: builder.query({
      query: (pageNo: number) => `data/page${pageNo}.json`,
      transformResponse: (response: ApiResponse, meta, arg): DataResponse => {
        console.log(response);

        return {
          content: response.page["content-items"].content,
          pageNo: +response.page["page-num-requested"],
          title: response.page.title,
          itemsReturned: +response.page["page-size-returned"],
          totalItems: +response.page["total-content-items"],
        };
      },
    }),
  }),
});

export const { useGetDataByPageNoQuery } = movieApi;
