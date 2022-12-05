import { useEffect } from "react";
import { useGetCharactersQuery } from "features/rick-and-morty-characters/api";
import { useAppDispatch } from "hooks/redux-hooks";
import { useUpdateQueryParams } from "hooks/use-update-query-params";
import { useQueryParams } from "./use-query-params";
import { setCharacters, setLastPage } from "store/rick-and-morty-characters";

type UseGetCharactersState = {
  isLoading: boolean;
  isError: boolean;
};

export const useGetCharacters = (): UseGetCharactersState => {
  const dispatch = useAppDispatch();

  const { queryParams } = useQueryParams();
  const { data, isLoading, isFetching, isError } = useGetCharactersQuery(queryParams);
  useUpdateQueryParams({ correctQueryParams: queryParams });

  useEffect(() => {
    dispatch(setCharacters(data?.results));
    dispatch(setLastPage(data?.info.pages ?? 0));
  }, [data, dispatch]);

  useEffect(() => {
    if (isError) {
      dispatch(setCharacters([]));
      dispatch(setLastPage(0));
    }
  }, [isError, dispatch]);

  return { isLoading: isLoading || isFetching, isError };
};
