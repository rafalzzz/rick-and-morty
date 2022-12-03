import { createApi } from "@reduxjs/toolkit/query/react";
import queryString from "query-string";
import { baseQuery } from "./base-query";

export const rickAndMortyApi = createApi({
  reducerPath: "rick-and-morty",
  baseQuery,
  endpoints: (builder) => ({
    getCharacters: builder.query<any, { page: number; name: string; species: string }>({
      query: (args) => {
        const queryParams = queryString.stringify(args, {
          skipEmptyString: true,
        });

        return {
          url: `/character/?${queryParams}`,
        };
      },
    }),
  }),
});

export const { useGetCharactersQuery } = rickAndMortyApi;
