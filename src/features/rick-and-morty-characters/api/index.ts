import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base-query";
import { stringifyQueryParams } from "../helpers/stringify-query-params";
import { QueryParams } from "../types";

export const rickAndMortyApi = createApi({
  reducerPath: "rick-and-morty",
  baseQuery,
  endpoints: (builder) => ({
    getCharacters: builder.query<any, QueryParams>({
      query: (args) => {
        const queryParams = stringifyQueryParams(args);

        return {
          url: `/character/?${queryParams}`,
        };
      },
    }),
  }),
});

export const { useGetCharactersQuery } = rickAndMortyApi;
