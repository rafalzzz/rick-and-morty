import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { QueryParamKeys, Species } from "../enums";
import { QueryParams } from "../types";

const OPTIONS = Object.values(Species);

type UseQueryParamsState = {
  updateQueryParam: (key: QueryParamKeys, value: string) => void;
  queryParams: QueryParams;
};

export const useQueryParams = (): UseQueryParamsState => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateQueryParam = useCallback(
    (key: QueryParamKeys, value: string) => {
      if (!value && searchParams.has(key)) {
        searchParams.delete(key);
      }

      if (value) {
        searchParams.set(key, value);
      }

      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  const getSingleQueryParam = (key: QueryParamKeys) => searchParams.get(key);

  const speciesValue = getSingleQueryParam(QueryParamKeys.SPECIES);
  const pageValue = getSingleQueryParam(QueryParamKeys.PAGE);

  const name = getSingleQueryParam(QueryParamKeys.NAME);
  const species = OPTIONS.includes(speciesValue as Species) ? speciesValue : "";
  const page = isNaN(Number(pageValue)) ? "1" : pageValue;

  const queryParams = useMemo(() => ({ name, species, page }), [name, page, species]);

  return {
    updateQueryParam,
    queryParams,
  };
};
