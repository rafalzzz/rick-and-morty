import { useGetCharactersQuery } from "features/rick-and-morty-characters/api";
import { TransformedResponse } from "../types";
import { useUpdateQueryParams } from "./use-check-query-params";
import { useQueryParams } from "./use-query-params";

export const useGetCharacters = (): TransformedResponse | undefined => {
  const { queryParams } = useQueryParams();
  const { data } = useGetCharactersQuery(queryParams);
  useUpdateQueryParams({ correctQueryParams: queryParams });

  console.log({ data });

  return data;
};
