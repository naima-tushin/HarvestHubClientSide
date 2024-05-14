import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:5000/';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAvailableFoods: builder.query({
      query: () => '/allFood', 
    }),
  
   
  }),
});

export const { useGetAvailableFoodsQuery, useUpdateFoodStatusMutation } = api;
