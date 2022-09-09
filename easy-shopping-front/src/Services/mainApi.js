/**
 * @Author: root
 * @Date:   2022-09-08T17:59:43+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-08T23:06:43+05:30
 */
import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({ baseUrl:"http://localhost:8080"}),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (user) => ({
        url: "/users/signup",
        method: "POST",
        body: user,
      }),
    }),
    login: builder.mutation({
      query: (user) => ({
        url: "/users/login",
        method: "POST",
        body: user,
      }),
    }),
  }),
});


export const { useSignupMutation, useLoginMutation } = mainApi;

export default mainApi;
