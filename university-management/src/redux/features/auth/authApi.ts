import { baseApi } from "../../api/baseApi";
import { RootState } from "../../store";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
export const currentToken = (state: RootState) => state.auth.token
export const currentUser = (state: RootState) => state.auth.user