import { useEffect } from "react";
import { useGetCharactersQuery } from "features/rick-and-morty-characters/api";
import { useAppDispatch } from "hooks/redux-hooks";
import { useUpdateQueryParams } from "hooks/use-update-query-params";
import { useQueryParams } from "./use-query-params";
import { setCharacters, setLastPage } from "store/rick-and-morty-characters";

type UseGetCharactersState = {
  isError: boolean;
  error: unknown;
};

export const useCharacters = (): UseGetCharactersState => {
  const dispatch = useAppDispatch();

  const { queryParams } = useQueryParams();
  const { data, isError, error } = useGetCharactersQuery(queryParams);
  useUpdateQueryParams({ correctQueryParams: queryParams });

  useEffect(() => {
    if (data) {
      dispatch(setCharacters(data.results));
      dispatch(setLastPage(data.info.pages));
    }
  }, [data, dispatch]);

  return { isError, error };
};
