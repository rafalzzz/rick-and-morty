import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base-query";
import { stringifyQueryParams } from "../helpers/stringify-query-params";
import { QueryParams, Response, TransformedResponse } from "../types";
import { Tags } from "../enums";
import { setIsLoading } from "store/rick-and-morty-characters";

export const rickAndMortyApi = createApi({
  reducerPath: "rick-and-morty",
  baseQuery,
  tagTypes: [Tags.CHARACTER],
  endpoints: (builder) => ({
    getCharacters: builder.query<TransformedResponse, QueryParams>({
      query: (args) => {
        const queryParams = stringifyQueryParams(args);

        return {
          url: `/character/?${queryParams}`,
        };
      },
      transformResponse: (response: Response) => ({
        ...response,
        results: response.results.map(({ id, name, species, image, origin, gender, status }) => ({
          id,
          name,
          species,
          image,
          origin,
          gender,
          status,
        })),
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        dispatch(setIsLoading(true));
        try {
          await queryFulfilled;
          dispatch(setIsLoading(true));
        } catch (err) {
          dispatch(setIsLoading(true));
        }
      },
      providesTags: (response) =>
        response
          ? [
              ...response.results.map(({ id }) => ({
                type: Tags.CHARACTER,
                id,
              })),
              { type: Tags.CHARACTER, id: "LIST" },
            ]
          : [{ type: Tags.CHARACTER, id: "LIST" }],
    }),
  }),
});

export const { useGetCharactersQuery } = rickAndMortyApi;
