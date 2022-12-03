import { useCallback, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { stringifyQueryParams } from "../helpers/stringify-query-params";
import { QueryParams } from "../types";

type UseCheckQueryParamsProps = {
  correctQueryParams: QueryParams;
};

export const useUpdateQueryParams = ({ correctQueryParams }: UseCheckQueryParamsProps) => {
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
