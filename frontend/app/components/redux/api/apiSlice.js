import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: 'apiReducer',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/',
  }),
  endpoints: (builder) => ({
    getApi: builder.query({
      query: () => '/search?query=global+warming',
    }),
  }),
});

export const useGetApi = api.useGetApi;

export default api;
