import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://harvest-hub-server-nine.vercel.app/';

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
