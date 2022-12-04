import { useEffect } from "react";
import { useGetCharactersQuery } from "features/rick-and-morty-characters/api";
import { useAppDispatch } from "hooks/redux-hooks";
import { useUpdateQueryParams } from "hooks/use-update-query-params";
import { useQueryParams } from "./use-query-params";
import { setCharacters } from "store/table";

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
  }, [data, dispatch]);

  useEffect(() => {
    if (isError) {
      dispatch(setCharacters([]));
    }
  }, [isError, dispatch]);

  return { isLoading: isLoading || isFetching, isError };
};
