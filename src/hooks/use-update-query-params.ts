import { useCallback, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { stringifyQueryParams } from "../features/rick-and-morty-characters/helpers/stringify-query-params";
import { QueryParams } from "../features/rick-and-morty-characters/types";

type UseUpdateQueryParamsProps = {
  correctQueryParams: QueryParams;
};

export const useUpdateQueryParams = ({ correctQueryParams }: UseUpdateQueryParamsProps) => {
  const [, setSearchParams] = useSearchParams();
  const prevQueryParams = useRef("");

  const updateQueryParams = useCallback(
    (parsedQueryParams: string) => {
      setSearchParams(parsedQueryParams);
    },
    [setSearchParams]
  );

  useEffect(() => {
    const parsedQueryParams = stringifyQueryParams(correctQueryParams);

    if (prevQueryParams.current !== parsedQueryParams) {
      prevQueryParams.current = parsedQueryParams;
      updateQueryParams(parsedQueryParams);
    }
  }, [correctQueryParams, updateQueryParams]);
};
